# Objects with animations Reference

Actions and conditions for objects having animations (sprite, 3D models...). [Read more explanations about it.](/gdevelop5/objects)



## Objects with animations 

Actions and conditions for objects having animations (sprite, 3D models...).. 

### Behavior actions

**Pause the animation**  
Pause the animation of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `AnimatableCapability::AnimatableBehavior::PauseAnimation`.

**Resume the animation**  
Resume the animation of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `AnimatableCapability::AnimatableBehavior::PlayAnimation`.

**Animation elapsed time**  
Change the elapsed time from the beginning of the animation (in seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Elapsed time (in seconds)

    > Technical note: this action internal type (in GDevelop JSON) is `AnimatableCapability::AnimatableBehavior::SetElapsedTime`.

**Animation (by number)**  
Change the animation played by the object using the animation number (from the animations list).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Animation index

    > Technical note: this action internal type (in GDevelop JSON) is `AnimatableCapability::AnimatableBehavior::SetIndex`.

**Animation (by name)**  
Change the animation played by the object using the name of the animation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3: 🔤 Object Animation Name (String)

    > Technical note: this action internal type (in GDevelop JSON) is `AnimatableCapability::AnimatableBehavior::SetName`.

**Animation speed scale**  
Change the animation speed scale (1 = the default speed, >1 = faster and <1 = slower).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed scale

    > Technical note: this action internal type (in GDevelop JSON) is `AnimatableCapability::AnimatableBehavior::SetSpeedScale`.


### Behavior conditions

**Animation elapsed time**  
Compare the elapsed time from the beginning of the animation (in seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Elapsed time (in seconds)

    > Technical note: this condition internal type (in GDevelop JSON) is `AnimatableCapability::AnimatableBehavior::ElapsedTime`.

**Animation finished**  
Check if the animation being played by the Sprite object is finished.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `AnimatableCapability::AnimatableBehavior::HasAnimationEnded`.

**Animation (by number)**  
Compare the animation played by the object using the animation number (from the animations list).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Animation index

    > Technical note: this condition internal type (in GDevelop JSON) is `AnimatableCapability::AnimatableBehavior::Index`.

**Animation paused**  
Check if the animation of an object is paused.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `AnimatableCapability::AnimatableBehavior::IsAnimationPaused`.

**Animation (by name)**  
Compare the animation played by the object using the name of the animation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3: 🔤 Object Animation Name (String)

    > Technical note: this condition internal type (in GDevelop JSON) is `AnimatableCapability::AnimatableBehavior::Name`.

**Animation speed scale**  
Compare the animation speed scale (1 = the default speed, >1 = faster and <1 = slower).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed scale

    > Technical note: this condition internal type (in GDevelop JSON) is `AnimatableCapability::AnimatableBehavior::SpeedScale`.


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

*This page is an auto-generated reference page about the **Objects with animations** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).