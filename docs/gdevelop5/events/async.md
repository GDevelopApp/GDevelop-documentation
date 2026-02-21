---
title: Asynchronous events
---
# Asynchronous events

## What are those?

Events are usually executed from top to bottom, and in a synchronous manner. This means that each condition and action are executed one after another, one by one. This is good and important since this allows the events to be more predictable and thereby easy to think about, and to stay in control of the order of execution.

Sometimes though, you might want to make an exception. Some actions and conditions take a long time to execute, and while we wait for them to finish, the game will remain frozen. When such actions can take seconds to finish executing, and the events sheet is supposed to not run for more than 16ms to achieve a smooth 60FPS, this can become very problematic.

Asynchronous events are special actions that will not execute instantly when called. Instead, they'll do a bit of work between each frame, and once it is done, will allow the actions and subevents following it to run. Just after being called, the actions and subevents following it will be skipped, as they'll only run when the asynchronous action has finished its work, and the event sheet will continue executing the rest normally.

Common examples of asynchronous actions include:

- Sending an HTTP request and waiting for a response
- Playing a sound or music track and waiting for it to finish
- Loading a scene or resources asynchronously
- Waiting for a player authentication result

## Execution flow

Consider an event with an asynchronous action (marked **[Async]**) followed by more actions:

```
Event A (no conditions)
  → Action 1 (regular)
  → Action 2 [Async]   ← game continues running; Action 3 and sub-events are queued
  → Action 3 (runs only after Action 2 finishes)
  Sub-event B           ← also runs only after Action 2 finishes

Event C (sibling of Event A) ← runs immediately, without waiting for Action 2
```

Events and actions at the same level as the async action (siblings) continue to run normally each frame. Only the actions that come after the async action within the same event, and that event's sub-events, are queued and delayed until the async action completes.

## Gotchas

What you do **not** need to watch out for:

 - **Object picking** — object picking works like normal events; previously picked objects will still be picked when the deferred actions run. Objects deleted in the meantime will be unpicked automatically.
 - **Using results in actions or sub-events that follow the async action** — actions placed after an asynchronous action in the same event, or inside a sub-event of that event, only execute once the asynchronous action has finished its work, so you can safely use the result of the async action there.

What you **do** need to watch out for:

 - **Using results in sibling events** — only the actions following the asynchronous one in the same event, and sub-events of the event that used the async action, are queued for execution after the async action finishes. All sibling events (other events at the same level) are executed synchronously each frame and will not wait for the async action to complete. Do not rely on the async action's result inside a sibling event.