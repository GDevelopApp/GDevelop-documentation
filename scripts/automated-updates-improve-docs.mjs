import {
  applyDocumentationChanges,
  buildCodeSnippetsForKeywords,
  callAiProvider,
  cloneGDevelopRepository,
  enforceAllowedChangedFiles,
  ensureAutomationDataFile,
  extractJsonPayload,
  formatCodeSnippetsForPrompt,
  formatDocsForPrompt,
  getNonGeneratedDocsCorpus,
  pickKeywordsFromScope,
  pickScopeCandidatesFromCorpus,
  saveAutomationData,
  selectRelevantDocumentationFiles,
  tokenize,
  truncateText,
} from "./automated-updates-common.mjs";

const AI_PROVIDER = process.env.AI_PROVIDER || "codex";

function pickNextScope(candidates, alreadyImprovedScopes) {
  const normalizedAlreadyImproved = new Set(
    alreadyImprovedScopes.map((scope) => scope.toLowerCase()),
  );
  const available = candidates.filter(
    (candidate) => !normalizedAlreadyImproved.has(candidate.toLowerCase()),
  );
  if (available.length > 0) {
    return available[0];
  }
  if (candidates.length === 0) {
    throw new Error("No documentation scopes were discovered in docs/gdevelop5.");
  }
  return candidates[0];
}

function buildPrompt({
  scope,
  selectedDocs,
  codeSnippets,
  alreadyImprovedScopes,
}) {
  const docsContext = formatDocsForPrompt(selectedDocs);
  const codeContext = truncateText(formatCodeSnippetsForPrompt(codeSnippets), 42000);
  const alreadyImprovedList = alreadyImprovedScopes.length
    ? alreadyImprovedScopes.join(", ")
    : "(none yet)";

  return `
You are improving GDevelop documentation quality by choosing one focused scope and making concise improvements.

Selected scope to improve now: ${scope}
Previously improved scopes (do not repeat): ${alreadyImprovedList}

STRICT RULES:
- Keep edits concise and practical.
- Modify only markdown files under docs/gdevelop5/.
- Never edit any auto-generated documentation file.
- Never touch non-markdown files.
- Do not modify translated docs.
- Prefer improving existing pages over creating new pages.
- Produce at least one real docs improvement.

Context from docs (non auto-generated):
${docsContext}

Related context from https://github.com/4ian/GDevelop codebase:
${codeContext || "(no code snippets found for this scope)"}

Return ONLY valid JSON (no prose, no markdown fences):
{
  "summary": "short summary of this improvement",
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
  const docsCorpus = await getNonGeneratedDocsCorpus(repositoryRoot);

  const scopeCandidates = pickScopeCandidatesFromCorpus(docsCorpus);
  const selectedScope = pickNextScope(
    scopeCandidates,
    data.last_improved_things || [],
  );
  console.log(`Selected documentation scope: ${selectedScope}`);

  const scopeKeywords = new Set([
    ...pickKeywordsFromScope(selectedScope),
    ...tokenize(selectedScope.replace(/\//g, " ")),
  ]);

  const scopeRoot = selectedScope.split("/")[0];
  const selectedScopePrefix = `docs/gdevelop5/${selectedScope}`;
  const docsInScope = docsCorpus.filter(
    (entry) =>
      entry.path === selectedScopePrefix ||
      entry.path.startsWith(`${selectedScopePrefix}/`) ||
      entry.path.startsWith(`docs/gdevelop5/${scopeRoot}/`),
  );
  const relevantDocs = selectRelevantDocumentationFiles(docsCorpus, scopeKeywords, {
    maxFiles: 18,
    maxCharsPerFile: 5000,
    totalMaxCharacters: 70000,
  });
  const selectedDocs = [...docsInScope, ...relevantDocs]
    .filter(
      (entry, index, allEntries) =>
        allEntries.findIndex((candidate) => candidate.path === entry.path) === index,
    )
    .slice(0, 18);

  const sourceRepository = await cloneGDevelopRepository();
  try {
    const codeSnippets = await buildCodeSnippetsForKeywords(
      sourceRepository.repositoryPath,
      scopeKeywords,
      { maxFiles: 14, maxCharsPerFile: 3500 },
    );

    const prompt = buildPrompt({
      scope: selectedScope,
      selectedDocs,
      codeSnippets,
      alreadyImprovedScopes: data.last_improved_things || [],
    });

    console.log(
      `Calling AI provider "${AI_PROVIDER}" for scope "${selectedScope}" with ${selectedDocs.length} docs and ${codeSnippets.length} snippets.`,
    );
    const aiResponseText = await callAiProvider(AI_PROVIDER, prompt);
    const parsedPayload = extractJsonPayload(aiResponseText);

    if (!parsedPayload || !Array.isArray(parsedPayload.changes)) {
      throw new Error('AI JSON output is missing a "changes" array.');
    }

    await applyDocumentationChanges(repositoryRoot, parsedPayload.changes);

    const improvedScopes = Array.isArray(data.last_improved_things)
      ? [...data.last_improved_things]
      : [];
    if (!improvedScopes.includes(selectedScope)) {
      improvedScopes.push(selectedScope);
    }
    data.last_improved_things = improvedScopes.slice(-200);
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
