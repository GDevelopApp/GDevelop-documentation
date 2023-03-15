---
title: How to debug poor game performance
---
# How to debug poor game performance

If your games is too slow, it's a good idea to look at these:

* Do you have a lot of **particle emitters**? Lots of particles can be costly to render, consider reducing the number a bit.

* Do you have a **lot of logic going on** in the events? Launch [the profiler](/gdevelop5/interface/debugger/profile-your-game) and run it on your game. Then, take a look at the results. Is there any group of events that take a lot of time? If yes, consider checking what this or these groups are doing.
  * Chances are that these events being applied on **a lot of objects**. Consider refining the number of objects by grouping the events as sub events of one event, with a condition that exclude a lot of objects that are far from the player.

* After running the profiler, check if a lot of time is passed in the **Rendering** step. If yes, maybe you have to much objects on the screen, or that need complex rendering. Consider reducing the number of objects. If you have a lot of layers with large background, maybe you can reduce overlap. Doing multiple pass of rendering, especially for objects that are hidden behind others, can be costly. Hide or destroy objects that are hidden behind others.

* Do you have a lot of objects, especially with the **physics engine** or **platform behaviors** applied? If yes, consider disabling the behaviors for objects that are not on the screen, or destroying objects that are far from the player.

* Do you use effects on your layers? If yes, having too much can slow down your game rendering, especially on mobile phones.

## FPS counter

Try adding an FPS (frames per second) counter to your game.  This will allow you to measure if your optimizations are increasing the performance of your game.

![](/gdevelop5/tutorials/fps-counter.jpg)

!!! tip

    GDevelop uses Electron when previewing or building games, which is based on Chromium. Chromium forces VSync to be enabled. This means that regardless of the maximum framerate setting the game will still be limited either to the monitor's maximum framerate, or half of its refresh rate (or half of that, etc). As an example, if your monitor is 144 hz, and the game is only capable of running 143 FPS, it will drop down to 72 FPS.

## Counting particles

To count the number of particles used in a game, create an object group that contains all particles emitters.  Then use a ForEach event to count the particles made by every particle emitter instance.

![](/gdevelop5/tutorials/particle-counter-events.jpg)

!!! note

    As a general note, mobile phones are *less powerful* than your computer, and the performance gap can be quite important. Be sure to test regularly on phones and avoid using too much objects and complex events.

