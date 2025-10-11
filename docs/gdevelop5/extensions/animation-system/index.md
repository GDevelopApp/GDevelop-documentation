# Animation system

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Videogames/Videogames_videogame_pacman_ghost_character_play.svg" class="extension-icon"></img>
Adds easy to use pre-made animations.

**Authors and contributors** to this experimental extension: [VegeTato](https://gd.games/VegeTato).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Helpful for making animations for sprites without having to spend time animating the character in editors

- You can use multi animations on one object to get more effects
- For the animations that do Not have Trigger once, you can use Timers to make it Have one !
- Added condition to check if the door is Open or Close from animation (3D open/close door)
- Added condition to check if the animation has finished (if trigger once set to YES)
- User can change the origin point of the object to control the animations
- Animation behavior must be installed in the object to make the extension works

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Conditions

**Check if the animation has finished**  
Check if the selected animation has finished.

??? quote "See parameters"

    - Parameter 1 (🔤 String): Animation
      Animation must be set to Trigger once in order to check if it finished (one of: "Pulse", "Breath", "Smooth rotation", "Instant rotation", "3D rotation", "3D rotation X", "3D rotation Y", "Float", "Triangle transition", "Square transition", "Rhombus transition", "Maze transition", "Fade out", "Fade in", "Squash & Stretch", "Rainbow effect", "Shake rotation", "Shake horizontal", "Shake vertical", "Line rotation", "Land", "Low health")
    - Parameter 2 (👾 Object): Animated object

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Check if the door is open**  
From *3D open door* animation.

??? quote "See parameters"

    - Parameter 1: 👾 Object

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.



## Animation Behavior 

Animate any sprite with this extension. 

### Behavior actions

**Animation system**  
edit the object ("Origin" point) to control how the animation goes.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Animations list (one of: "Pulse", "Breath", "Smooth rotation", "Instant rotation", "Wobble", "Wobble2", "Wobble3", "3D rotation", "3D rotation X", "3D rotation Y", "3D door loop", "3D open door", "3D close door", "Float", "Triangle transition", "Square transition", "Rhombus transition", "Maze transition", "Fade loop", "Fade out", "Fade in", "Squash & Stretch", "Rainbow effect", "Shake rotation", "Shake horizontal", "Shake vertical", "Line rotation", "Land", "Low health")
    - Parameter 3 (🔢 Number): Animation speed
    - Parameter 4 (🔢 Number): Object width
    - Parameter 5 (🔢 Number): Object height
      Animations information:  
      Pulse/Breath: recommended speed, 0.03  
      Smooth rotation: recommended speed, 5  
      Wobble/wobble2/wobble3: Do not have trigger once/ recommended speed, 0.1  
      3D rotation: recommended speed, 1  
      3D rotationX: recommended speed, 1.2  
      3D rotationY: Origin point must be at center/ recommended speed, 1.2  
      3D door loop: do not have trigger once/ recommended speed, 1.2  
      3D open/close door: Trigger once must be YES/ recommended speed, 1.2  
      Float: recommended speed, 0.02  
      Triangle/Square/Rhombus/Maze transition: recommended speed, 3  
      Fade loop: do not have trigger once/ recommended speed, 5  
      Fade Out/In: Trigger once must be YES/ recommended speed, 5  
      Squash&Stretch: recommended speed, 0.06  
      Rainbow effect: The higher the speed the slower effect/ recommended speed, 1  
      Shake rotation/Horizontal/Vertical: recommended speed, 4  
      Line rotation: recommended speed, 3  
      Land: Trigger once must be YES/ Best results, set the condition of the player to "is on floor" > start animation land / recommended speed, 5  
      Low health: recommended speed, 30
    - Parameter 6 (❓ Yes or No): Trigger animation once ?

    > Technical note: parameter 7 are internal parameters handled by GDevelop.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Animation system** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).