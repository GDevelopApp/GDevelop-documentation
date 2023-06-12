---
title: External Events
---
# External Events

External Events, like normal [events](/gdevelop5/events), define the logic of the game. They are edited in the exact same way as they are in the [event editor](/gdevelop5/interface/events-editor). Unlike a normal event sheet though, external events can be reused throughout your game through [links](/gdevelop5/events/link).

External Events help keep event sheets clean, and prevent the need to repeat the same events in multiple places.

!!! warning

    [Behaviors](/gdevelop5/behaviors) and [Functions](/gdevelop5/events/functions) are generally better for smaller units of code that need to change based on some parameters (arguments), whereas external events are better for larger blocks of events.

![type:video](https://www.youtube.com/embed/_VUwAfD_7zQ)

## Creation

You can create an external events sheet in the [project manager](/gdevelop5/interface/project-manager), under **External Events**, by clicking the plus button.

![](/gdevelop5/interface/events-editor/external-events/pasted/20230313-190941.png)

## Scene Selection

In order to finish the creation of an external events sheet, you must select a scene for it. This is the scene from which all object selections are based; in other words, you'll be able to select objects for an event in this external event sheet from the scene you've chosen.

![](/gdevelop5/interface/events-editor/external-events/pasted/20230313-191254.png)

## Usage

The external event editor is identical to the [events editor](/gdevelop5/interface/events-editor).

You can use an external events sheet by linking to it with the [Link event type](/gdevelop5/events/link).

## Use Cases

External Events are good to use when you'd like to isolate one large block of events in your events sheet, either to keep things clean or to use in multiple places throughout your event sheet and game. Some examples include:

* Isolating the events associated with a particular object to reduce clutter
* Moving your entire game logic to an events sheet to be used over multiple scenes of global objects