# Objects with animations Reference

Actions and conditions for objects having animations (sprite, 3D models...). [Read more explanations about it.](/gdevelop5/objects)



## Objects with animations 

Actions and conditions for objects having animations (sprite, 3D models...).. 

### Behavior actions

**Pause the animation**  
Pause the animation of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Resume the animation**  
Resume the animation of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Animation elapsed time**  
Change the elapsed time from the beginning of the animation (in seconds).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Elapsed time (in seconds)

**Animation (by number)**  
Change the animation played by the object using the animation number (from the animations list).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Animation index

**Animation (by name)**  
Change the animation played by the object using the name of the animation.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3: 🔤 Object Animation Name (String)

**Animation speed scale**  
Change the animation speed scale (1 = the default speed, >1 = faster and <1 = slower).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed scale

### Behavior conditions

**Animation elapsed time**  
Compare the elapsed time from the beginning of the animation (in seconds).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Elapsed time (in seconds)

**Animation finished**  
Check if the animation being played by the Sprite object is finished.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Animation (by number)**  
Compare the animation played by the object using the animation number (from the animations list).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Animation index

**Animation paused**  
Check if the animation of an object is paused.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Animation (by name)**  
Compare the animation played by the object using the name of the animation.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3: 🔤 Object Animation Name (String)

**Animation speed scale**  
Compare the animation speed scale (1 = the default speed, >1 = faster and <1 = slower).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed scale

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Animation::Duration()` | Return the current animation duration (in seconds). ||
| `Object.Animation::ElapsedTime()` | Return the elapsed time from the beginning of the animation (in seconds). ||
| `Object.Animation::Index()` | Return the animation played by the object using the animation number (from the animations list). ||
| `Object.Animation::Name()` | Return the animation played by the object using the name of the animation. ||
| `Object.Animation::SpeedScale()` | Return the animation speed scale (1 = the default speed, >1 = faster and <1 = slower). ||



---

The Objects with animations extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Objects with animations** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).