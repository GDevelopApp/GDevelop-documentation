---
title: Profile your game
---
# Profile your game

The Profiler is a tool that measures the time spent on different aspects of your game while it is running. It helps to find bottlenecks between your events and the rendering of the game that could be taking up a lot of resources.

The profiler is part of the [Debugger](/gdevelop5/interface/debugger). [Read here how to open the Debugger for your game](/gdevelop5/interface/debugger).

When the **Debugger** is opened, the profiler is shown on the bottom part of the screen.

![](/gdevelop5/interface/debugger/profile-your-game/pasted/20230314-195529.png)

While the game is running, click on the **Start Profiling** button to launch the profiler.
After a few seconds, click **Stop Profiling** to end the process. The game will only store up to 600 frames worth of information, which is approximately 10 seconds of running the profiler. If you record more than 600 frames with the profiler, only the last 600 frames of information will be displayed.

When you stop running the profiler, the new results will be displayed.

![](/gdevelop5/interface/debugger/profile-your-game/pasted/20230304-172426.png)

The time spent on different aspects of your game is displayed in sections:

  * Objects (pre-events) - The time spent running behaviors before the events
  * Events - The time spent running the events. If you have added *groups* to your events, you will see them displayed as sub-sections. Which is a good way to see how each part of your events are performing.
  * Objects (post-events) - The time spent running behaviors after the events (behaviors can be run after events, if set up that way).
  * Objects (visibility) - The time spent checking which objects will be rendered on the screen
  * Render - The time spent for the CPU issuing rendering calls to the GPU.

Note that actual rendering on the GPU is not measured here.

For each section, you can see: the total time spent on this section while the profiler was running, the percent of time spent on this section compared to the parent, and the percent of time spent in this section compared to the total time.

  * It's a good idea to run the profiler to see which parts of your game are consuming the most resources. In particular, take a look at the events to see if some groups of events are consuming more resources than others.
  * If some behaviors take a lot of time, it can be a good idea to see if you can reduce the number of objects with this behavior, or deactivate the behavior if it's not needed.

!!! tip

    If your game is suffering from poor performance or slow-downs, read [this article giving useful advice about game performance](/gdevelop5/tutorials/how-to-debug-poor-performance).