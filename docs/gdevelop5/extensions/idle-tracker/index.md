# Idle object tracker

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Movies and Entertainment/Movies and Entertainment_cinema_oscar_movies_award.svg" class="extension-icon"></img>
Check if an object has not moved (with some, customizable, tolerance) for a certain duration (1 second by default).

**Authors and contributors** to this community extension: [4ian](https://gd.games/4ian).

---

This behavior tracks the object position and provides a condition to check if the object has been around the same position for a certain amount of time. It's useful to track objects that are not moving (or very little, at least staying around a position).

To use:

* Add the behavior to your object.
* Configure the distance tolerance and the amount of time before considering objects idle.
* Use the conditions in your events to know when the object is idle (or when it has just moved).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Idle tracker 

Check if an object has not moved (with some tolerance, 20 pixels by default) for a certain duration (1 second by default). 

### Behavior actions

**Time, in seconds, before considering the object as idle property**  
Change the property value for the time, in seconds, before considering the object as idle.

**Distance, in pixels, allowed for the object to travel and still be considered idle property**  
Change the property value for the distance, in pixels, allowed for the object to travel and still be considered idle.

**IdleTime property**  
Change the property value for the idleTime.

**IsFarFromLastPosition property**  
Update the property value for "isFarFromLastPosition".

**LastX property**  
Change the property value for the lastX.

**LastY property**  
Change the property value for the lastY.

**Toggle IsFarFromLastPosition property**  
Toggle the property value for isFarFromLastPosition.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Has just moved from last position**  
Check if the object has just moved from its last position (using the tolerance configured in the behavior).

**Is idle (since enough time)**  
Check if the object is idle: it has not moved from its last position (or within the tolerance) for the time configured in the behavior.

**Time, in seconds, before considering the object as idle property**  
Compare the property value for the time, in seconds, before considering the object as idle.

**Distance, in pixels, allowed for the object to travel and still be considered idle property**  
Compare the property value for the distance, in pixels, allowed for the object to travel and still be considered idle.

**IdleTime property**  
Compare the property value for the idleTime.

**IsFarFromLastPosition property**  
Check the property value for isFarFromLastPosition.

**LastX property**  
Compare the property value for the lastX.

**LastY property**  
Compare the property value for the lastY.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.IdleTracker::PropertyDurationBeforeIdle()` | Return the property value for the time, in seconds, before considering the object as idle. ||
| `Object.IdleTracker::PropertyIdleDistanceTolerance()` | Return the property value for the distance, in pixels, allowed for the object to travel and still be considered idle. ||
| `Object.IdleTracker::PropertyIdleTime()` | Return the property value for the idleTime. ||
| `Object.IdleTracker::PropertyLastX()` | Return the property value for the lastX. ||
| `Object.IdleTracker::PropertyLastY()` | Return the property value for the lastY. ||

---

*This page is an auto-generated reference page about the **Idle object tracker** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).