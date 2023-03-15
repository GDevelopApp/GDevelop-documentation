---
title: Profile your game
---
# Profile your game

The **Profiler** is a tool that measure the time spent in different parts of the engine while your game is running. It helps to find bottleneck or events that could take a lot of resources in your game.

The profiler is part of the [Debugger](/gdevelop5/interface/debugger). [Read here how to open the Debugger for your game](/gdevelop5/interface/debugger).

When the **Debugger** is opened, the profiler is shown on the bottom part of the screen:

![](/gdevelop5/interface/debugger/profile-your-game/pasted/20230304-172332.png)

While the game is running, click on **Start Profiling** button to launch the profiler.
After a few seconds, click on **Stop Profiling** to end the measures. The game will only store up to 600 frames of measures, which is approximately 10 seconds. If you have measured more than 600 frames, the first measures will be erased by the last ones.

When the profiling is ended, the results are displayed:

![](/gdevelop5/interface/debugger/profile-your-game/pasted/20230304-172426.png)

Each section of the game is displayed. Sections can contain other sections.

Sections are:

* Objects (pre-events) - The time spent running behaviors before the events
* Events - The time spent running the events. If you have added *groups* to your events, you will see them displayed as sub sections. It's a good way to see how each part of your events are performing.
* Objects (post-events) - The time spent running behaviors after the events (according to behaviors, they can be run before or after events).
* Objects (visibility) - The time spent checking which objects will be rendered on the screen
* Render - The time spent for the CPU issuing rendering calls to the GPU. 

Note that actual rendering on the GPU is not measured here.

For each section, you can see: the total time spent in this section during the time of the profiling, the percent of time spent in this section compared to the parent and the percent of time spent in this section compared to the total time.

* It's a good idea to run the profiler to see what are the part of the game which are consuming the most resources. In particular, take a look at the events to see if some groups of events are consuming more resources than other.
* If some behaviors are taking a lot of time, it can be a good idea to see if you can reduce the number of objects having the behavior, or deactivate the behavior if it's not needed.

!!! tip

    If your game is suffering from poor performance or slow-downs, read [this article giving useful advice about game performance](/gdevelop5/tutorials/how-to-debug-poor-performance).