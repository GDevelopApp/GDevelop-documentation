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
 * The AI agent directly adds a new entry to the "last_improved_things" array
 * inside automated_updates_data.json, so the change is tracked in the same
 * commit as the documentation edits.
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
const SUMMARY_OUT = "/tmp/ai_summary.txt";

// AI provider — switch by changing this value (or set AI_PROVIDER env var).
// Supported values: "claude" | "codex"
const AI_PROVIDER = process.env.AI_PROVIDER || "claude";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function run(cmd, opts = {}) {
  return execSync(cmd, { encoding: "utf8", ...opts }).trim();
}

function writeDataFile(data) {
  let json = JSON.stringify(data, null, 2);
  // Keep empty arrays on separate lines so future additions produce clean diffs
  json = json.replace(/"last_improved_things": \[\s*\]/g,
    '"last_improved_things": [\n\n  ]');
  fs.writeFileSync(DATA_FILE, json + "\n");
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
  const previousCount = alreadyImproved.length;

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

  // 4. Build prompt
  const prompt = buildPrompt(alreadyImproved, docTree);

  const promptFile = "/tmp/doc_improve_prompt.txt";
  fs.writeFileSync(promptFile, prompt);
  console.log(`Prompt written to ${promptFile} (${prompt.length} chars)`);

  // 5. Invoke AI agent
  console.log(`\nInvoking AI agent (${AI_PROVIDER})…\n`);
  const aiOutput = invokeAI(promptFile, REPO_ROOT);

  // 6. Read back the data file to find what the AI added
  let updatedData = data;
  try {
    updatedData = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch (err) {
    console.error("Warning: could not re-read automated_updates_data.json:", err.message);
  }

  const updatedList = updatedData.last_improved_things || [];
  let summary;

  if (updatedList.length > previousCount) {
    // The AI added one or more entries — take the last one
    const newEntry = updatedList[updatedList.length - 1];
    summary = newEntry.summary || "(no summary in new entry)";
    console.log(`\nAI added improvement entry: [${newEntry.date}] ${summary}`);
  } else {
    // AI didn't update the file — add a fallback entry ourselves
    summary = aiOutput
      ? aiOutput.split("\n").filter(Boolean).slice(0, 3).join(" ").substring(0, 200)
      : "(no summary provided)";
    updatedData.last_improved_things = updatedList;
    updatedData.last_improved_things.push({
      date: new Date().toISOString().split("T")[0],
      summary,
    });
    writeDataFile(updatedData);
    console.log(`\nFallback: script added improvement entry: ${summary}`);
  }

  // 7. Write summary for the workflow to pick up
  fs.writeFileSync(SUMMARY_OUT, summary);
  console.log(`Summary written to ${SUMMARY_OUT}`);
}

// ---------------------------------------------------------------------------
// Prompt builder
// ---------------------------------------------------------------------------
function buildPrompt(alreadyImproved, docTree) {
  const previousList =
    alreadyImproved.length > 0
      ? alreadyImproved.map((e) => `  • [${e.date}] ${e.summary}`).join("\n")
      : "  (none yet — this is the first run)";

  const today = new Date().toISOString().split("T")[0];

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
• NEVER edit files outside docs/gdevelop5/ (except automated_updates_data.json as described below).
• Do NOT touch images or binary files.

IMPORTANT WRITING STYLE AND ARCHITECTURE CONSTRAINTS
----------------------------------------------------

• Do NOT document non-user-facing implementation details. Focus only on information
  that is relevant to users creating games with GDevelop, not internal engine behavior.
• Do NOT list all actions/conditions in a list or table: the reference documentations are already
  automatically generated for this.
• Do not specify the default values. Don't feel forced to list all the properties of a 
  behavior/object/condition/action: prefer to explain use cases, examples and how it's useful
  for the end user which will create a game with it.

WHEN YOU ARE DONE
-----------------
1. Edit the file "automated_updates_data.json" in ${REPO_ROOT}/ and add a new
   entry at the END of the "last_improved_things" array with this format:

     { "date": "${today}", "summary": "<one-line description of what you improved>" }

   For example, the file might look like:
     {
       "last_automated_updates_commit": null,
       "last_improved_things": [
         { "date": "${today}", "summary": "Improved objects/sprite/index.md — clarified animation looping behaviour" }
       ]
     }

2. Create a file at /tmp/ai_pr_title.txt containing ONLY a single line of
   10–15 words that summarises the changes you made. This will be used as the
   pull-request title. Prefix it with "[Auto] [Improve]".
   Example: [Auto] [Improve] Clarified sprite animation looping and added missing tween parameters

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
    cmd = `cat "${promptFile}" | claude -p --verbose --dangerously-skip-permissions 2>&1`;
    // ── To use Codex instead, comment the block above and uncomment below.
  } else if (AI_PROVIDER === "codex") {
    // ── OpenAI Codex ─────────────────────────────────────────────────────
    cmd = `codex --full-auto -q "$(cat '${promptFile}')" 2>&1`;
    opts.shell = "/bin/bash";
  } else {
    throw new Error(`Unknown AI_PROVIDER: "${AI_PROVIDER}". Use "claude" or "codex".`);
  }

  let output;
  try {
    output = execSync(cmd, { ...opts, encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] });
  } catch (err) {
    console.error(`AI command exited with code ${err.status}`);
    output = (err.stdout || "") + (err.stderr || "");
  }

  console.log("── AI agent output ─────────────────────────────────────────");
  console.log(output);
  console.log("── End of AI agent output ──────────────────────────────────");
  return output;
}

// ---------------------------------------------------------------------------
main();
