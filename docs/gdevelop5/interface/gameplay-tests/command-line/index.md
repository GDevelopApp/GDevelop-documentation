---
title: Run gameplay tests from the command line
---
# Run gameplay tests from the command line

!!! danger

    This feature will be available in the next release of GDevelop.

The [gameplay tests](../index.md) of a game can be run without opening the editor manually: GDevelop can be started from the command line, told to open a game and run its tests, and it will exit with a result code. This is useful to:

- Re-run all the tests of a game in one command while working on it.
- Run tests automatically in **continuous integration** (CI), so a broken mechanic is caught as soon as a change is pushed.

## Basic usage

```bash
gdevelop /path/to/game.json --run-command RUN_ALL_TESTS
```

!!! tip

    On Windows, the GDevelop installer offers to add `gdevelop` to your PATH. If the command is not available, use the full path of the GDevelop executable instead (for example `/Applications/GDevelop 5.app/Contents/MacOS/GDevelop 5` on macOS).

GDevelop opens the game, runs **all its gameplay tests** (the tests of the project and of its extensions), prints one line per test and a summary:

```
[CLI] PASSED (passed): Player flaps upward when pressing Space (34 frames, 1370ms)
[CLI] FAILED (failed): Collecting a coin increases the score (240 frames, 2100ms) - Assertion failed: The score increased after touching the coin
[CLI] Full test results written to: /path/to/gameplay-test-results.json
[CLI] 1/2 gameplay tests passed.
```

The process then exits with code **0 if every test passed**, and a non-zero code otherwise — so the command can be used directly in scripts and CI pipelines.

If the game is already open in a running GDevelop editor, the command is routed to that editor instead of starting a new one.

## Options

- `--cmd-args "Test name"`: run only the test with this name. Repeat the flag to run several specific tests.
- `--results-path /path/to/results.json`: where to write the full results file. By default, it is written as `gameplay-test-results.json` next to the game file.
- `--keep-open`: keep the editor open after the tests finished (by default it exits).

## The results file

Beyond the console summary, the full results of the run are written as a JSON file. It contains, for each test:

- `status`: `passed`, `failed` (an assertion was not true), `error` (the script crashed) or `timeout` (the frame or time budget was exceeded).
- `assertions`: every check made by the test, with its message and whether it held.
- `errors`: the error messages, when something went wrong.
- `consoleLogs`: the `console.log` output of the test script.
- `eventLog`: notable events with the frame they happened at (scene changes and what caused them, inputs...).
- `finalState`: the final snapshots of the objects the test watched.
- `screenshots`: on a failure (or when the test takes one), screenshots are saved as JPEG files in a `gameplay-test-screenshots` folder next to the results file, and listed here with their file paths.
- `profiles` and `performance`: profiling data, when the test used the profiler, and the average/worst logic time per frame.

This is the same information the [GDevelop AI](../../ai/index.md) reads when it runs a test — everything needed to understand a failure without re-running the game.

## Running on a machine without a display (CI)

On a Linux server without a display (as in most CI environments), run GDevelop through `xvfb-run`, which provides a virtual display:

```bash
xvfb-run -a gdevelop /path/to/game.json --run-command RUN_ALL_TESTS
```

A minimal CI step then looks like:

```bash
xvfb-run -a gdevelop game.json --run-command RUN_ALL_TESTS || {
  echo "Some gameplay tests failed - see gameplay-test-results.json";
  exit 1;
}
```
