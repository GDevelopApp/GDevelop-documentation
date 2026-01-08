# Character game feel

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Videogames/a9c73353ecb47ef44b3cf3c744d303a7df2b28787b82eeb1d9cceb2a3980ad9c_Videogames_videogame_pacman_game_video.svg" class="extension-icon"></img>
Add game feel to your platformer character object.

**Authors and contributors** to this experimental extension: [VegeTato](https://gd.games/VegeTato).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Add game feel behavior to your platformer character object to get the animations:


- **Idle:** gives your character breath animation while not moving.
- **Jump:** gives your character squash and stretch animation when jumping.
- **Fall:** gives your character stretch animation when falling.
- **Land:** gives your character squash and stretch animation when landing.

# Behavior

- Game feel behavior.
   - Includes the options (Scale strength/Scaling speed) for every animation.

# Condition

- Animation is playing.

# Action

- Disable animation.
- Enable animation.

# Important

- In the events add the action [Separate player object from floor object] to avoid any kind of bugs.
![](https://i.imgur.com/TtdrAFp.png)

- Your sprite "origin" point, must be at the center bottom.
![](https://i.imgur.com/OdNv0cu.png)

- Your sprite bottom collision, must be filled entirely.
![](https://i.imgur.com/sHGOeqW.png)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Character game feel 

For platformer character. 

### Behavior properties

- **Idle animation** (🔘 Boolean). Apply breath animation on the object. Default value is `true`.
- **Scale strength** (🔢 Number). Default value is `0.10000000000000001`.
- **Scaling speed** (🔢 Number, Duration). Default value is `500`.
- **Jump animation** (🔘 Boolean). Apply squash and stretch animation on the object. Default value is `true`.
- **Scale strength** (🔢 Number). Default value is `0.20000000000000001`.
- **Scaling speed** (🔢 Number). Default value is `200`.
- **Fall animation** (🔘 Boolean). Apply stretch animation on the object. Default value is `true`.
- **Scale strength** (🔢 Number). Default value is `0.29999999999999999`.
- **Scaling speed** (🔢 Number). Default value is `200`.
- **Land animation** (🔘 Boolean). Apply squash animation on the object. Default value is `true`.
- **Scale strength** (🔢 Number). Default value is `0.59999999999999998`.
- **Scaling speed** (🔢 Number). Default value is `100`.

??? quote "See internal technical details"


    - **Idle animation** is stored as `AIdleCheck` (Boolean). Default value is `true`.
    - **Scale strength** is stored as `BIdleScale` (Number). Default value is `0.10000000000000001`.
    - **Scaling speed** is stored as `CIdleScalingSpeed` (Number). Unit is Second. Default value is `500`.
    > This behavior must be used on an object also having a behavior with type "PlatformBehavior::PlatformerObjectBehavior". This is stored on property `DPlatformerCharacterBehavior`.

    > This behavior must be used on an object also having a behavior with type "Tween::TweenBehavior". This is stored on property `ETweenBehavior`.

    - **Jump animation** is stored as `FJumpCheck` (Boolean). Default value is `true`.
    - **Scale strength** is stored as `GJumpScale` (Number). Default value is `0.20000000000000001`.
    - **Scaling speed** is stored as `HJumpScalingSpeed` (Number). Default value is `200`.
    - **Fall animation** is stored as `IallCheck` (Boolean). Default value is `true`.
    - **Scale strength** is stored as `JFallScale` (Number). Default value is `0.29999999999999999`.
    - **Scaling speed** is stored as `KFallScalingSpeed` (Number). Default value is `200`.
    - **Land animation** is stored as `LandCheck` (Boolean). Default value is `true`.
    - **Scale strength** is stored as `MLandScale` (Number). Default value is `0.59999999999999998`.
    - **Scaling speed** is stored as `NLandScalingSpeed` (Number). Default value is `100`.

### Behavior actions

**Disable animation**  
Disable game feel animation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Animation (one of: "Idle", "Jump", "Fall", "Land")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CharacterGameFeel::CharacterGameFeel::DisableAnimation`.

**Enable animation**  
Enable game feel animation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Animation (one of: "Idle", "Jump", "Fall", "Land")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CharacterGameFeel::CharacterGameFeel::EnableAnimation`.


### Behavior conditions

**Animation is playing**  
Check if the object game feel animation is playing.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🧩 Behavior): Tween behavior
    - Parameter 3 (🔤 String): Animation (one of: "Idle", "Jump", "Fall", "Land")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CharacterGameFeel::CharacterGameFeel::AnimationIsPlaying`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Character game feel** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).