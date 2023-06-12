---
title: How to troubleshoot poor game performance
---
# How to troubleshoot poor game performance

Game optimization is an important concept of game development. Good optimization will allow the game to work faster, making it more fluid.

If your game is running slowly, it's a good idea to look at these common consumers:

* Do you have a lot of **particle emitters**? Particles can be costly to render, consider reducing the number used.
* Do you have a **lot of logic going on** in the events? Launch [the profiler](/gdevelop5/interface/debugger/profile-your-game) and run it on your game. Then, take a look at the results. Are there any groups of events that take a lot of time? If yes, consider checking the events inside this group for costly sections that could be rearranged or changed.
    * Chances are that these events are being applied to **a lot of objects**. Consider refining the number of objects by grouping the events as sub-events of one event, with a condition that excludes objects that don't need to be acted upon.(i.e NPCs that are off-screen or objects not in range of the player.)

* After running the profiler, check if a lot of time is spent in the **Rendering** step. If yes, maybe you have too many objects on the screen, or that need complex rendering. Consider reducing the number of objects. If you have a lot of layers with large backgrounds, maybe you can reduce overlap. Doing multiple passes of rendering, especially for objects that are hidden behind others, can be costly. Consider hiding or destroying objects that are hidden behind others.

* Do you have a lot of objects with the **physics engine** or **platform behaviors** applied? If yes, consider disabling the behaviors for objects that are not on the screen, or destroying objects that are far from the player.

* Do you use effects on your layers? If yes, having too many effects can slow down your game rendering, especially on mobile phones.

## FPS counter

Try adding an FPS (frames per second) counter to your game. This will allow you to measure if your optimizations are increasing the performance of your game. You can do this by modifying a text object, and setting it to **FPS: " + ToString(ceil(1/TimeDelta()))** or:

![](/gdevelop5/tutorials/fps-counter.jpg)

!!! tip

    GDevelop uses Electron when previewing or building games, which is based on Chromium. Chromium forces VSync to be enabled. This means that regardless of the maximum framerate setting the game will still be limited either to the monitor's maximum framerate, or half of its refresh rate (or half of that, etc). As an example, if your monitor is 144 hz, and the game is only capable of running 143 FPS, it will drop down to 72 FPS.

## Counting particles

To count the number of particles used in a game, create an object group that contains all particle emitters. Then use a ForEach event to count the particles made by every particle emitter instance and save that number in a variable. Then use a text object to display that number on the screen.

![](/gdevelop5/tutorials/particle-counter-events.jpg)

!!! note

    As a general note, mobile phones are *less powerful* than your computer, and the performance gap can be quite important. Be sure to test regularly on phones and avoid using too many objects, effects, or poorly optimized events.

## Optimizing events

GDevelop 5 gives you total freedom in events. While this can be awesome, it can also be very costly if you don't have the reflex of writing optimized events, as the processor could get overloaded when running the game. This would cause lag in the game.

It is important to [understand what events are](/gdevelop5/tutorials/basic-game-making-concepts) and that all events are _called once every frame_ and _in the order they were written_.

!!! note

    For example: With a game at 60 frames per second (FPS), if you have a single event, without condition, and just one action, then this action should be executed 60 times in a second.

### Improving performance with Trigger Once

The **Trigger once** condition causes conditions preceding it in the same event to trigger only once every time they are met.

For example, if you want to create an object every time a click is done, this is what you should _not_ do:

![](/gdevelop5/events/bad_event_optimisation.png)

* What is expected to happen: When the left mouse button is pressed, an object is created called **MyObject**.
* What actually happens: As long as the mouse left button is pressed, **MyObject** instances are created.

This is problematic because when the mouse button is pressed, it is likely held down for longer than a single frame like 0.3 seconds. During this period of time the event is called multiple times, and the object is created more than once.

To fix that we can use the **Trigger once** condition:
![](/gdevelop5/events/good_event_optimisation.png)

Now, the condition will trigger only once while it is true. That means that the event will fire only once every time it's condition goes from unfulfilled to fulfilled. It resolves the problem above as the condition will fire only the first frame of the click, and will wait for the click to end before letting the click event fire again.

### Deactivate unused behaviors

Behaviors take performance, especially the _Pathfinding_ and _Physic Engine 2.0_ behaviors. Remember to disable them when they are not needed.

Let's take as an example the following situation: I want 100 enemies to move to a position close to them every 2 seconds, and to take into account the wall obstacles.

This would be an intuitive but wrong way to do it:
![](/gdevelop5/events/bad_behavior.png)
If you do this, all objects will move, including the off-screen ones.

!!! tip

    Why calculate movement that the player won't see?

Instead, you can limit the movement to visible objects. This can be done the following way: disable the Pathfinding behavior of the objects not visible in the viewport, and also enable it when they are visible in the viewport.

!!! tip

    Don't forget trigger onces to make sure the behavior gets disabled or enabled only when it's state changes from not visible to visible or the other way around

### Delete unused objects

Let's take as example the following situation:
I have a gun and I create one bullet object instance when I press the key to fire.
This bullet has a force toward a direction.
If the player shoots many bullets, their amount will increase on the scene and each one requires calculations of the force applied to them in the event loop.
If you don't delete old bullet objects they will add up and take more and more performance causing lag to appear after playing for some time.
The best solution is to delete the bullets that are off-screen.

The behavior **"Destroy when outside of the screen"** does just that. Attach it to an object, and all bullets that go off-screen will be deleted.

## A note on optimizations already in the engine

GDevelop has built in optimizations, like _culling_, the process of automatically hiding off-screen objects. That way less object instances are rendered and the rendering is faster.

This doesn't affect the person creating the game because it's handled in the background. It's totally transparent for everyone.
For example, when a sprite is off screen all the animations are paused.

!!! note

    It is still important to hide or disable what you don't need. This is the key to optimization.
