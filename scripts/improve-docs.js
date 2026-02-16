#!/usr/bin/env node

/**
 * improve-docs.js
 *
 * Clones https://github.com/4ian/GDevelop, inspects the codebase, reads
 * automated_updates_data.json to see what was already improved in the past,
 * and then invokes an AI coding agent (Claude Code or Codex) to improve a
 * DIFFERENT aspect of the documentation (its own choice of scope — a folder,
 * feature, topic, etc.).
 *
 * After the AI finishes, the script updates automated_updates_data.json so
 * future runs don't repeat the same improvements.
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
const SUMMARY_FILE = path.join(REPO_ROOT, "improvement_summary.txt");

// AI provider — switch by changing this value (or set AI_PROVIDER env var).
// Supported values: "claude" | "codex"
const AI_PROVIDER = process.env.AI_PROVIDER || "claude";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function run(cmd, opts = {}) {
  return execSync(cmd, { encoding: "utf8", ...opts }).trim();
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

  const alreadyImproved = data.last_improved_things || [];

  // 2. Clone / update GDevelop
  if (!fs.existsSync(path.join(GDEVELOP_DIR, ".git"))) {
    console.log("Cloning GDevelop…");
    execSync(
      `git clone --filter=blob:none --no-checkout ${GDEVELOP_REPO} ${GDEVELOP_DIR}`,
      { stdio: "inherit" }
    );
    execSync("git checkout", { cwd: GDEVELOP_DIR, stdio: "inherit" });
  } else {
    console.log("Updating existing GDevelop clone…");
    execSync("git fetch origin && git reset --hard origin/master", {
      cwd: GDEVELOP_DIR,
      stdio: "inherit",
    });
  }

  // 3. Build the list of docs pages (gives the AI a map of what exists)
  const docTree = run(
    `find docs/gdevelop5 -name '*.md' -not -path '*/extensions/*' -not -name 'reference.md' -not -name 'expressions-reference.md' | sort`,
    { cwd: REPO_ROOT }
  );

  // 4. Clean up any leftover summary file
  if (fs.existsSync(SUMMARY_FILE)) fs.unlinkSync(SUMMARY_FILE);

  // 5. Build prompt
  const prompt = buildPrompt(alreadyImproved, docTree);

  const promptFile = "/tmp/doc_improve_prompt.txt";
  fs.writeFileSync(promptFile, prompt);
  console.log(`Prompt written to ${promptFile} (${prompt.length} chars)`);

  // 6. Invoke AI agent
  console.log(`\nInvoking AI agent (${AI_PROVIDER})…\n`);
  invokeAI(promptFile, REPO_ROOT);

  // 7. Read back the improvement summary the AI wrote
  let summary = "(no summary provided)";
  if (fs.existsSync(SUMMARY_FILE)) {
    summary = fs.readFileSync(SUMMARY_FILE, "utf8").trim();
    // Clean up temp file — we don't want it committed
    fs.unlinkSync(SUMMARY_FILE);
  }

  // 8. Update tracking data
  data.last_improved_things.push({
    date: new Date().toISOString().split("T")[0],
    summary,
  });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2) + "\n");
  console.log(`\nImprovement recorded: ${summary}`);
}

// ---------------------------------------------------------------------------
// Prompt builder
// ---------------------------------------------------------------------------
function buildPrompt(alreadyImproved, docTree) {
  const previousList =
    alreadyImproved.length > 0
      ? alreadyImproved.map((e) => `  • [${e.date}] ${e.summary}`).join("\n")
      : "  (none yet — this is the first run)";

  return `You are an expert technical writer improving GDevelop's documentation.

DOCUMENTATION LOCATION
----------------------
The documentation you must improve is in: ${REPO_ROOT}/docs/gdevelop5/
The GDevelop engine source code is at: ${GDEVELOP_DIR}/ (use it for reference).

EXISTING DOCUMENTATION PAGES (excluding auto-generated files)
-------------------------------------------------------------
${docTree}

PREVIOUSLY IMPROVED ASPECTS (do NOT repeat these)
--------------------------------------------------
${previousList}

YOUR TASK
---------
1. Choose ONE specific aspect of the documentation to improve. Pick a scope
   that has NOT been improved before (see the list above). Your scope can be:
   – A specific folder (e.g., docs/gdevelop5/objects/)
   – A specific feature (e.g., physics, publishing, variables)
   – A specific topic (e.g., getting started tutorials, event system)
2. Read the relevant documentation pages AND the GDevelop source code to
   understand the current state.
3. Make **concise** improvements: fix inaccuracies, add missing information
   found in the source code, improve clarity, or fill gaps.
4. Do NOT rewrite entire pages — make targeted, valuable edits.
5. Preserve the existing writing style and Markdown formatting.

IMPORTANT CONSTRAINTS
---------------------
• NEVER edit auto-generated files. These include:
  – Every file under docs/gdevelop5/extensions/
  – Every "reference.md" file under docs/gdevelop5/all-features/*/reference.md
  – docs/gdevelop5/all-features/expressions-reference.md
• NEVER create new files unless absolutely necessary.
• NEVER edit files outside docs/gdevelop5/.
• Do NOT touch images or binary files.

WHEN YOU ARE DONE
-----------------
Create a file called "improvement_summary.txt" in ${REPO_ROOT}/ containing
a single line that describes what you improved.
Example: "Improved getting_started/index.md — added clearer first-project walkthrough steps"

Make your changes now.`;
}

// ---------------------------------------------------------------------------
// AI invocation
// ---------------------------------------------------------------------------
function invokeAI(promptFile, cwd) {
  let cmd;
  const opts = { cwd, timeout: 10 * 60 * 1000 };

  if (AI_PROVIDER === "claude") {
    // ── Claude Code ──────────────────────────────────────────────────────
    cmd = `cat "${promptFile}" | claude -p --dangerously-skip-permissions`;
    // ── To use Codex instead, comment the block above and uncomment below.
  } else if (AI_PROVIDER === "codex") {
    // ── OpenAI Codex ─────────────────────────────────────────────────────
    cmd = `codex --full-auto -q "$(cat '${promptFile}')"`;
    opts.shell = "/bin/bash";
  } else {
    throw new Error(`Unknown AI_PROVIDER: "${AI_PROVIDER}". Use "claude" or "codex".`);
  }

  // Run with stdout/stderr piped so we can capture and log the full output.
  const output = execSync(cmd, { ...opts, encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] });
  console.log("── AI agent output ─────────────────────────────────────────");
  console.log(output);
  console.log("── End of AI agent output ──────────────────────────────────");
}

// ---------------------------------------------------------------------------
main();
