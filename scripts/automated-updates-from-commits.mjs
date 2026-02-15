import {
  applyDocumentationChanges,
  buildKeywordSetFromCommits,
  callAiProvider,
  cloneGDevelopRepository,
  enforceAllowedChangedFiles,
  ensureAutomationDataFile,
  extractJsonPayload,
  formatCommitSummaryForPrompt,
  formatDocsForPrompt,
  getCommitMetadata,
  getCommitPatchSnippet,
  getCommitsToInspect,
  getNonGeneratedDocsCorpus,
  saveAutomationData,
  selectRelevantDocumentationFiles,
  truncateText,
} from "./automated-updates-common.mjs";

const DEFAULT_COMMIT_COUNT = Number.parseInt(
  process.env.DEFAULT_COMMIT_COUNT || "5",
  10,
);
const AI_PROVIDER = process.env.AI_PROVIDER || "codex";
const COMMIT_PATCH_SNIPPET_COUNT = 12;
const COMMIT_PATCH_SNIPPET_MAX_CHARS = 2800;

function buildPrompt({
  commitMetadata,
  commitPatchSnippets,
  selectedDocs,
  previousAutomatedCommit,
  latestCommit,
}) {
  const commitSummary = truncateText(
    formatCommitSummaryForPrompt(commitMetadata),
    80000,
  );
  const patchContext = truncateText(
    commitPatchSnippets
      .map((entry) => `--- COMMIT ${entry.hash}\n${entry.patch}`)
      .join("\n\n"),
    35000,
  );
  const docsContext = formatDocsForPrompt(selectedDocs);

  return `
You maintain GDevelop documentation. Your task is to update documentation files in this repository so they cover recent changes from the GDevelop engine repository.

STRICT RULES:
- Keep every change concise, factual, and directly useful.
- Modify only markdown files under docs/gdevelop5/.
- Never edit any auto-generated file.
- Never edit translated documentation folders.
- Do not touch images, JSON, or any non-markdown file.
- Prefer updating existing docs over creating new files.
- The result must include at least one documentation change.

You inspected commits from: https://github.com/4ian/GDevelop
Previous automated commit: ${previousAutomatedCommit || "(none, defaulted to recent commits)"}
Current latest commit: ${latestCommit}
Total commits inspected: ${commitMetadata.length}

COMMIT SUMMARIES:
${commitSummary}

PATCH SNIPPETS (newest commits):
${patchContext || "(none)"}

DOCUMENTATION FILE CANDIDATES (non auto-generated):
${docsContext}

Return ONLY valid JSON (no prose, no markdown fences) with this exact shape:
{
  "summary": "short summary of documentation updates",
  "changes": [
    {
      "path": "docs/gdevelop5/.../file.md",
      "content": "full updated markdown content"
    }
  ]
}
`.trim();
}

async function main() {
  const repositoryRoot = process.cwd();
  const { dataFilePath, data } = await ensureAutomationDataFile(repositoryRoot);

  const sourceRepository = await cloneGDevelopRepository();
  try {
    const commitsToInspect = getCommitsToInspect(
      sourceRepository.repositoryPath,
      data.last_automated_updates_commit,
      Number.isInteger(DEFAULT_COMMIT_COUNT) ? DEFAULT_COMMIT_COUNT : 5,
    );

    if (commitsToInspect.length === 0) {
      console.log("No new commits to inspect. Nothing to do.");
      return;
    }

    const commitMetadata = commitsToInspect.map((commitHash) =>
      getCommitMetadata(sourceRepository.repositoryPath, commitHash),
    );

    const patchSnippetCommitHashes = commitsToInspect.slice(
      Math.max(0, commitsToInspect.length - COMMIT_PATCH_SNIPPET_COUNT),
    );
    const commitPatchSnippets = patchSnippetCommitHashes.map((commitHash) => ({
      hash: commitHash,
      patch: getCommitPatchSnippet(
        sourceRepository.repositoryPath,
        commitHash,
        COMMIT_PATCH_SNIPPET_MAX_CHARS,
      ),
    }));

    const keywords = buildKeywordSetFromCommits(commitMetadata);
    const docsCorpus = await getNonGeneratedDocsCorpus(repositoryRoot);
    const selectedDocs = selectRelevantDocumentationFiles(docsCorpus, keywords, {
      maxFiles: 16,
      maxCharsPerFile: 5000,
      totalMaxCharacters: 70000,
    });

    const prompt = buildPrompt({
      commitMetadata,
      commitPatchSnippets,
      selectedDocs,
      previousAutomatedCommit: data.last_automated_updates_commit,
      latestCommit: sourceRepository.latestCommit,
    });

    console.log(
      `Calling AI provider "${AI_PROVIDER}" with ${commitMetadata.length} commits and ${selectedDocs.length} docs.`,
    );
    const aiResponseText = await callAiProvider(AI_PROVIDER, prompt);
    const parsedPayload = extractJsonPayload(aiResponseText);

    if (!parsedPayload || !Array.isArray(parsedPayload.changes)) {
      throw new Error('AI JSON output is missing a "changes" array.');
    }

    await applyDocumentationChanges(repositoryRoot, parsedPayload.changes);

    data.last_automated_updates_commit = sourceRepository.latestCommit;
    await saveAutomationData(dataFilePath, data);

    const changedFiles = await enforceAllowedChangedFiles(repositoryRoot);
    if (!changedFiles.some((filePath) => filePath.startsWith("docs/gdevelop5/"))) {
      throw new Error(
        "The automation did not produce any documentation changes under docs/gdevelop5.",
      );
    }

    console.log(
      `Updated ${changedFiles.length} file(s). Summary: ${parsedPayload.summary || "(none provided)"}`,
    );
  } finally {
    await sourceRepository.cleanup();
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
