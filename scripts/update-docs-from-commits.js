#!/usr/bin/env node

/**
 * update-docs-from-commits.js
 *
 * Clones https://github.com/4ian/GDevelop, inspects recent commits
 * (since the last tracked commit, or the last 5 by default), and
 * invokes an AI coding agent (Claude Code or Codex) to update the
 * GDevelop documentation in docs/gdevelop5/ accordingly.
 *
 * State is persisted in automated_updates_data.json at the repo root.
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------
const GDEVELOP_REPO = "https://github.com/4ian/GDevelop.git";
const GDEVELOP_DIR = process.env.GDEVELOP_DIR || "/tmp/GDevelop";
const REPO_ROOT = path.resolve(__dirname, "..");
const DATA_FILE = path.join(REPO_ROOT, "automated_updates_data.json");
const DEFAULT_COMMIT_COUNT = 5;
const MAX_DIFF_BYTES = 80000; // Truncate diffs to keep prompt manageable

// AI provider — switch by changing this value (or set AI_PROVIDER env var).
// Supported values: "claude" | "codex"
const AI_PROVIDER = process.env.AI_PROVIDER || "claude";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function run(cmd, opts = {}) {
  return execSync(cmd, { encoding: "utf8", ...opts }).trim();
}

function runSafe(cmd, opts = {}) {
  try {
    return run(cmd, opts);
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
function main() {
  // 1. Read tracking data
  let data = { last_automated_updates_commit: null, last_improved_things: [] };
  if (fs.existsSync(DATA_FILE)) {
    data = { ...data, ...JSON.parse(fs.readFileSync(DATA_FILE, "utf8")) };
  }

  // 2. Clone / update GDevelop
  if (!fs.existsSync(path.join(GDEVELOP_DIR, ".git"))) {
    console.log("Cloning GDevelop…");
    execSync(
      `git clone --filter=blob:none --no-checkout ${GDEVELOP_REPO} ${GDEVELOP_DIR}`,
      { stdio: "inherit" }
    );
    // Only checkout the history (we need commits, not a full working tree initially)
    execSync("git checkout", { cwd: GDEVELOP_DIR, stdio: "inherit" });
  } else {
    console.log("Updating existing GDevelop clone…");
    execSync("git fetch origin && git reset --hard origin/master", {
      cwd: GDEVELOP_DIR,
      stdio: "inherit",
    });
  }

  // 3. Determine commit range
  const lastCommit = data.last_automated_updates_commit;
  let commitRange = null;

  if (lastCommit) {
    // Verify the commit exists in our (possibly shallow) clone
    const commitExists = (() => {
      try {
        execSync(`git cat-file -e ${lastCommit}`, {
          cwd: GDEVELOP_DIR,
          stdio: "pipe",
        });
        return true;
      } catch {
        return false;
      }
    })();
    if (commitExists) {
      commitRange = `${lastCommit}..HEAD`;
    }
  }

  // Fallback: last N commits
  if (!commitRange) {
    commitRange = `HEAD~${DEFAULT_COMMIT_COUNT}..HEAD`;
  }

  // 4. Gather commit info
  const commitLog = runSafe(
    `git log ${commitRange} --oneline --no-merges`,
    { cwd: GDEVELOP_DIR }
  );

  if (!commitLog) {
    console.log("No new commits found. Nothing to do.");
    // Still update the pointer so we don't re-scan next time
    data.last_automated_updates_commit = run("git rev-parse HEAD", {
      cwd: GDEVELOP_DIR,
    });
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2) + "\n");
    return;
  }

  const diffStat = runSafe(`git diff ${commitRange} --stat`, {
    cwd: GDEVELOP_DIR,
  });

  // Get meaningful code diffs (skip binary, tests, and overly large files)
  const diffContent = runSafe(
    `git diff ${commitRange} -- '*.js' '*.jsx' '*.ts' '*.tsx' '*.json' '*.md' `
    + `':!*/__tests__/*' ':!*/node_modules/*' ':!*/fixtures/*' `
    + `| head -c ${MAX_DIFF_BYTES}`,
    { cwd: GDEVELOP_DIR }
  );

  const latestCommit = run("git rev-parse HEAD", { cwd: GDEVELOP_DIR });

  console.log(`Commit range : ${commitRange}`);
  console.log(`Commits found:\n${commitLog}\n`);

  // 5. Build the prompt
  const prompt = buildPrompt(commitLog, diffStat || "", diffContent || "");

  // 6. Write prompt to a temp file (avoids shell-escaping issues)
  const promptFile = "/tmp/doc_update_prompt.txt";
  fs.writeFileSync(promptFile, prompt);
  console.log(`Prompt written to ${promptFile} (${prompt.length} chars)`);

  // 7. Invoke AI agent
  console.log(`\nInvoking AI agent (${AI_PROVIDER})…\n`);
  invokeAI(promptFile, REPO_ROOT);

  // 8. Update tracking data
  data.last_automated_updates_commit = latestCommit;
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2) + "\n");
  console.log(`\nTracking data updated — latest commit: ${latestCommit}`);
}

// ---------------------------------------------------------------------------
// Prompt builder
// ---------------------------------------------------------------------------
function buildPrompt(commitLog, diffStat, diffContent) {
  return `You are an expert technical writer updating GDevelop's documentation.

CONTEXT
-------
The documentation lives in: ${REPO_ROOT}/docs/gdevelop5/
The GDevelop engine source code is at: ${GDEVELOP_DIR}/
(You can read files there for reference.)

RECENT GDEVELOP COMMITS
------------------------
${commitLog}

FILES CHANGED (summary)
-----------------------
${diffStat}

DETAILED CHANGES (may be truncated)
------------------------------------
${diffContent}

YOUR TASK
---------
1. Analyse the commits above and identify **user-facing** changes
   (new features, changed behaviors, renamed concepts, new parameters, etc.).
2. Find the relevant documentation pages under docs/gdevelop5/ and make
   **concise** updates so the docs accurately reflect the changes.
3. If a commit only touches internals, tests, or CI, you can skip it.
4. Keep edits minimal — do NOT rewrite entire pages.
5. Preserve the existing writing style and Markdown formatting.

IMPORTANT CONSTRAINTS
---------------------
• NEVER edit auto-generated files. These include:
  – Every file under docs/gdevelop5/extensions/
  – Every "reference.md" file under docs/gdevelop5/all-features/*/reference.md
  – docs/gdevelop5/all-features/expressions-reference.md
• NEVER create new files unless a major new feature truly requires it.
• NEVER edit files outside docs/gdevelop5/.
• Do NOT touch images or binary files.
• If no documentation updates are needed, do nothing.

Make your changes now.`;
}

// ---------------------------------------------------------------------------
// AI invocation
// ---------------------------------------------------------------------------
function invokeAI(promptFile, cwd) {
  if (AI_PROVIDER === "claude") {
    // ── Claude Code ──────────────────────────────────────────────────────
    execSync(
      `cat "${promptFile}" | claude -p --dangerously-skip-permissions`,
      { cwd, stdio: "inherit", timeout: 10 * 60 * 1000 }
    );
    // ── To use Codex instead, comment the block above and uncomment below.
  } else if (AI_PROVIDER === "codex") {
    // ── OpenAI Codex ─────────────────────────────────────────────────────
    // Codex reads the prompt from a wrapper script to avoid shell arg limits.
    execSync(
      `codex --full-auto -q "$(cat '${promptFile}')"`,
      { cwd, stdio: "inherit", timeout: 10 * 60 * 1000, shell: "/bin/bash" }
    );
  } else {
    throw new Error(`Unknown AI_PROVIDER: "${AI_PROVIDER}". Use "claude" or "codex".`);
  }
}

// ---------------------------------------------------------------------------
main();
