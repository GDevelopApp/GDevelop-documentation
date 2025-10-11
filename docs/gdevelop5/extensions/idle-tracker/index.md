# Idle object tracker

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Movies and Entertainment/Movies and Entertainment_cinema_oscar_movies_award.svg" class="extension-icon"></img>
Check if an object has not moved (with some, customizable, tolerance) for a certain duration (1 second by default).

**Authors and contributors** to this experimental extension: [4ian](https://gd.games/4ian).

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

### Behavior conditions

**Has just moved from last position**
Check if the object has just moved from its last position (using the tolerance configured in the behavior).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Is idle (since enough time)**
Check if the object is idle: it has not moved from its last position (or within the tolerance) for the time configured in the behavior.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Idle object tracker** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).