---
title: Else events
---
# Else events

Else events are [events](/gdevelop5/events) that run only when the preceding event's conditions were **not** satisfied. This provides traditional "if/else" branching logic in the events sheet.

If the preceding event's conditions are true and its actions run, the Else event is skipped. If the preceding event's conditions are not met, the Else event executes its actions instead.

## Else events with conditions (Else-If)

An Else event can optionally have its own conditions. In this case, it works like an "else if": it only runs when the preceding event was not satisfied **and** its own conditions are true.

You can chain multiple Else events one after another to create an if / else-if / else-if / else chain. Only the first event in the chain whose conditions are met will run.

## How to add this event

Right click (or long press) on an existing [event](/gdevelop5/events) and choose *"Add Other"* in the menu. Then, select *"Else event"*.
Alternatively, click on the *"Plus" icon* in the toolbar or on *"Add..."* at the bottom of the events sheet.

!!! note

    The Else event must be placed directly after the event it relates to. If there is no preceding event, the Else event behaves like a standard event.

## Sub-events and local variables

Else events support sub-events and local variables, just like [standard events](/gdevelop5/events/standard). Sub-events inside an Else event only run when the Else event itself is executed.
