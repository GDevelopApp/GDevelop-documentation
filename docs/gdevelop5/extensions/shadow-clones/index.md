# Animate Shadow Clones

<img src="https://resources.gdevelop-app.com/assets/Icons/vector-arrange-above.svg" class="extension-icon"></img>
Create a fading shadow clone trail.

**Authors and contributors** to this extension: [Entropy](https://gd.games/Entropy), [VictrisGames](https://gd.games/VictrisGames), [fuzzy](https://gd.games/fuzzy), [D8H](https://gd.games/D8H).

---

Create a fading shadow clone trail.

This extension can be used to:


- Make an object look faster, such as during a speed powerup.  
- Give a 3D-like feel to a character
- Implement unique time-based elements, like teleporting a character back to a previous location
- Simulate the movement of a caterpillar or slinky
- Recreate games like snake or tron

These object variables are provided to manage the shadow clones:


- ShadowCloneOrder: Shadow clone identifier, where 1 is the shadow clone closest to the primary object

Notes: 

- For shadow clones to work, this action must be run every frame.
- The ShadowCloneObject cannot be the PrimaryObject, but it can be a duplicate object. 
- For animations to work, the PrimaryObject and ShadowCloneObject must use the same animation numbers.

Watch this [tutorial video](https://youtu.be/2t4ANYgrrak) to see examples of how to use this extension.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Shadow clone emitter 

Create a fading shadow clone trail. 

### Behavior properties

- **Number of clones** (🔢 Number). Default value is `5`.
- **Frames gap** (🔢 Number). Default value is `8`.
- **Match object angle** (🔘 Boolean). Default value is `true`.
- **Match object animation** (🔘 Boolean). Default value is `true`.
- **Match object animation** (🔘 Boolean). Default value is `true`.
- **Match object horizontal flip** (🔘 Boolean). Default value is `true`.
- **Match object X scale** (🔘 Boolean). Default value is `true`.
- **Match object Y scale** (🔘 Boolean). Default value is `true`.
- **Match object vertical flip** (🔘 Boolean). Default value is `true`.
- **Last clone opacity** (🔢 Number). Values from 0 to 1. Default value is `0`.
- **First clone opacity** (🔢 Number). Values from 0 to 1. Default value is `0.5`.
- **Last clone scale** (🔢 Number). Values from 0 to 1. Default value is `1`.

??? quote "See internal technical details"


    > This behavior must be used on an object also having a behavior with type "AnimatableCapability::AnimatableBehavior". This is stored on property `Animation`.

    - **Number of clones** is stored as `ClonesCount` (Number). Default value is `5`.
    > This behavior must be used on an object also having a behavior with type "FlippableCapability::FlippableBehavior". This is stored on property `Flippable`.

    - **Frames gap** is stored as `FramesGap` (Number). Default value is `8`.
    - **Match object angle** is stored as `MatchAngle` (Boolean). Default value is `true`.
    - **Match object animation** is stored as `MatchAnimation` (Boolean). Default value is `true`.
    - **Match object animation** is stored as `MatchAnimationFrame` (Boolean). Default value is `true`.
    - **Match object horizontal flip** is stored as `MatchHorizontalFlip` (Boolean). Default value is `true`.
    - **Match object X scale** is stored as `MatchScaleX` (Boolean). Default value is `true`.
    - **Match object Y scale** is stored as `MatchScaleY` (Boolean). Default value is `true`.
    - **Match object vertical flip** is stored as `MatchVerticalFlip` (Boolean). Default value is `true`.
    > This behavior must be used on an object also having a behavior with type "OpacityCapability::OpacityBehavior". This is stored on property `Opacity`.

    - **Last clone opacity** is stored as `OpacityEnd` (Number). Default value is `0`.
    - **First clone opacity** is stored as `OpacityStart` (Number). Default value is `0.5`.
    > This behavior must be used on an object also having a behavior with type "ScalableCapability::ScalableBehavior". This is stored on property `Scale`.

    - **Last clone scale** is stored as `ScaleEnd` (Number). Default value is `1`.

### Behavior actions

**Animate shadow clones**  
Create and animate a fading shadow clone trail. This action must be called every frame.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Shadow clone
      Must be a different object that the one with emitter behavior.
    - Parameter 3 (🧩 Behavior): Scalable objects
    - Parameter 4 (🧩 Behavior): Flippable objects
    - Parameter 5 (🧩 Behavior): Objects with opacity
    - Parameter 6 (🧩 Behavior): Objects with animations

    > Technical note: parameter 7 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShadowClones::ShadowCloneEmitter::AnimateClones`.

**Delete shadow clones**  
Delete shadow clone objects that are linked to a primary object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Shadow clone

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShadowClones::ShadowCloneEmitter::DeleteClones`.

**Number of clones**  
Change the number of clones following the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShadowClones::ShadowCloneEmitter::SetClonesCount`.

**Frames gap**  
Change the number of frames between 2 clones.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShadowClones::ShadowCloneEmitter::SetFramesGap`.

**Last clone opacity**  
Change the last clone opacity (from 0 to 1).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShadowClones::ShadowCloneEmitter::SetOpacityEnd`.

**First clone opacity**  
Change the first clone opacity (from 0 to 1).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShadowClones::ShadowCloneEmitter::SetOpacityStart`.

**Last clone scale**  
Change the last clone scale (from 0 to 1).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShadowClones::ShadowCloneEmitter::SetScaleEnd`.


### Behavior conditions

**Number of clones**  
Compare the number of clones following the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShadowClones::ShadowCloneEmitter::ClonesCount`.

**Frames gap**  
Compare the number of frames between 2 clones.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShadowClones::ShadowCloneEmitter::FramesGap`.

**Last clone opacity**  
Compare the last clone opacity (from 0 to 1).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShadowClones::ShadowCloneEmitter::OpacityEnd`.

**First clone opacity**  
Compare the first clone opacity (from 0 to 1).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShadowClones::ShadowCloneEmitter::OpacityStart`.

**Last clone scale**  
Compare the last clone scale (from 0 to 1).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShadowClones::ShadowCloneEmitter::ScaleEnd`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ShadowCloneEmitter::ClonesCount()` | Return the number of clones following the object. ||
| `Object.ShadowCloneEmitter::FramesGap()` | Return the number of frames between 2 clones. ||
| `Object.ShadowCloneEmitter::OpacityEnd()` | Return the last clone opacity (from 0 to 1). ||
| `Object.ShadowCloneEmitter::OpacityStart()` | Return the first clone opacity (from 0 to 1). ||
| `Object.ShadowCloneEmitter::ScaleEnd()` | Return the last clone scale (from 0 to 1). ||


---

*This page is an auto-generated reference page about the **Animate Shadow Clones** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).