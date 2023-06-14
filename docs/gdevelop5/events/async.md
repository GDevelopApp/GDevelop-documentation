---
title: Asynchronous events
---
# Asynchronous events

## What are those?

Events are usually executed from top to bottom, and in a synchronous manner. This means that each condition and action are executed one after another, one by one. This is good and important since this allows the events to be more predictable and thereby easy to think about, and to stay in control of the order of execution.

Sometimes though, you might want to make an exception. Some actions and conditions take a long time to execute, and while we wait for them to finish, the game will remain frozen. When such actions can take seconds to finish executing, and the events sheet is supposed to not run for more than 16ms to achieve a smooth 60FPS, this can become very problematic.

Asynchronous events are special actions that will not execute when called. Instead, they'll do a bit of work between each frame, and once it is done, will allow the actions and subevents following it to run. Just after being called, the actions and subevents following it will be skipped, as they'll only run when the asynchronous action has finished its work, and the event sheet will continue executing the rest normally.

## Gotchas

What you do **not** need to watch out for:

  - Object picking - object picking works like normal events, previously picked objects will still be picked afterward. Objects deleted in the meantime will be unpicked.
  - Using results of the event in actions or subevents after the asynchronous actions - If an action is just after an asynchronous action, or in a subevent of the event it was used in, it will only get executed once the asynchronous action is done with its work, so you can use

What you **do** need to watch out for:

  - Using the results of the asynchronous action or side effects of actions/subevents following it in a sibling event - uniquely actions following the asynchronous one in the same event, and events that are subevents of the event using the asynchronous action will be queued for execution after the asynchronous action has finished its job. The others will be executed synchronously.