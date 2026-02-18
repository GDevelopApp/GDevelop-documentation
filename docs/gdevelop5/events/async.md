---
title: Asynchronous events
---
# Asynchronous events

## What are those?

Events are usually executed from top to bottom, and in a synchronous manner. This means that each condition and action are executed one after another, one by one. This is good and important since this allows the events to be more predictable and thereby easy to think about, and to stay in control of the order of execution.

Sometimes though, you might want to make an exception. Some actions and conditions take a long time to execute, and while we wait for them to finish, the game will remain frozen. When such actions can take seconds to finish executing, and the events sheet is supposed to not run for more than 16ms to achieve a smooth 60FPS, this can become very problematic.

Asynchronous events are special actions that will not execute when called. Instead, they'll do a bit of work between each frame, and once it is done, will allow the actions and subevents following it to run. Just after being called, the actions and subevents following it will be skipped, as they'll only run when the asynchronous action has finished its work, and the event sheet will continue executing the rest normally.

## Which actions are asynchronous?

The following built-in actions are asynchronous:

- **Wait** (from the Time/timers feature) — pauses execution for a given duration without freezing the game.
- **Send a request to a web page** (from the Network feature) — waits for the server response before continuing.
- **File system** actions (desktop only) — file read, write, delete operations all have async variants.
- **Steamworks** actions — lobby creation, workshop operations, etc.

Custom functions written with events can also be made asynchronous. See [asynchronous functions](/gdevelop5/events/functions/asynchronous-functions/).

## Gotchas

What you do **not** need to watch out for:

 - **Object picking** — object picking works like normal events. Previously picked objects will still be picked after the async action finishes. Objects deleted in the meantime will be unpicked automatically.
 - **Actions and sub-events that follow the async action** — any action placed directly after an asynchronous action in the same event, and any sub-events of the event containing the async action, are queued and will only run once the asynchronous action has finished. You can safely use the results of the async action in these actions and sub-events.

What you **do** need to watch out for:

 - **Sibling events** — events that are siblings (at the same indentation level) of the event containing the async action are *not* queued. They run synchronously at their normal turn in the event sheet, without waiting for the async action to complete. Do not rely on the results of an async action in a sibling event.

## Example

The **Wait** action is the simplest async action. The following events create a 2-second delay before deleting an enemy:

1. Event: `[no condition]` → action: **Wait 2 seconds** *(async)*
2. Sub-event of the above → action: **Delete Enemy**

Because "Delete Enemy" is in a sub-event of the event that contains the Wait action, it will only run after the 2 seconds have elapsed. The rest of the event sheet continues to run normally (the game does not freeze) while waiting.