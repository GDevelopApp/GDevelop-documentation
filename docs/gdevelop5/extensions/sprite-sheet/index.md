# Sprite Sheet Animations

<img src="https://resources.gdevelop-app.com/assets/Icons/google-spreadsheet.svg" class="extension-icon"></img>
Animate Tiled Sprite from sprite sheet image (horizontal, vertical, or JSON layout).

**Authors and contributors** to this experimental extension: [arthuro555](https://gd.games/arthuro555).

---

Animate images from a sprite sheet by using a tiled sprite.

## How to use

1. Create a tiled sprite object.
2. Set the tiled sprite image to the sprite sheet image.
3. Add the behavior (horizontal, vertical, or JSON animator) to the tiled sprite.
4. Set up the behaviors:
    - For directional animators: Edit the object "Default width" and "Default height" to match the size of a frame.
    - For the JSON animator: Set the sprite sheet JSON data in the behavior properties.
5. Use the behaviors action to start the animation (only needs to be run once, like sprite animations).

## Vertical and horizontal spritesheet animators

These behaviors will animate a spritesheet with the images distributed from left to right or from top to bottom. Offsets, row/column, animation speed and frame ranges can be specified to target the desired images.

## JSON spritesheet displayer

This behavior allows displaying frames or animations from a more intelligent spritesheet. You can generate a compatible JSON and sprite sheet via TexturePacker using the pixi.js preset. The JSON is formatted like this:
```json
{
  "frames": {
    "frame1": {
      "frame": {
        "x": 0,
        "y": 0,
        "h": 10,
        "w": 10,
      }
    },
    "frame1": {
      "frame": {
        "x": 10,
        "y": 0,
        "h": 10,
        "w": 10,
      }
    },
    "frame2": {
      "frame": {
        "x": 0,
        "y": 10,
        "h": 20,
        "w": 20,
      }
    }
  },
  "animations": {
    "animationName1": ["frame1", "frame2"],
    "animationName2": ["frame2", "frame3"]
  }
}
```
`frames` define each image inside the spritesheet and `animations` are the set of frames that form an animation. For compatibility with the TexturePacker pixi.js preset, the JSON doesn't contain the animation speed, so it has to be specified in the behavior properties.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Horizontal sprite sheet animator 

Animates a horizontal (left to right) sprite sheet. 

### Behavior properties

- **Empty space between each sprite (in pixels)** (🔢 Number). Default value is `0`.
- **Horizontal width of sprite (in pixels)** (🔢 Number). Default value is `16`.
- **Vertical height of sprite (in pixels)** (🔢 Number). Default value is `16`.

??? quote "See internal technical details"


    - **Empty space between each sprite (in pixels)** is stored as `SpriteSpacing` (Number). Default value is `0`.
    - **Horizontal width of sprite (in pixels)** is stored as `SpriteX` (Number). Default value is `16`.
    - **Vertical height of sprite (in pixels)** is stored as `SpriteY` (Number). Default value is `16`.

### Behavior actions

**Pause animation**  
Pause the animation of a sprite sheet.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SpriteSheet::HorizontalSpriteSheetAnimator::PauseAnimation`.

**Play animation**  
Play an animation from the sprite sheet.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): First Frame of the animation
    - Parameter 3 (🔢 Number): Last Frame of animation
    - Parameter 4 (🔢 Number): Duration for each frame (seconds)
    - Parameter 5 (🔢 Number): What row is the animation in

    > Technical note: parameter 6 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SpriteSheet::HorizontalSpriteSheetAnimator::PlayAnimation`.

**Resume animation**  
Resume a paused animation of a sprite sheet.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SpriteSheet::HorizontalSpriteSheetAnimator::ResumeAnimation`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.HorizontalSpriteSheetAnimator::CurrentFrame()` | The current frame of the current animation. ||

## JSON sprite sheet animator 

Animates a sprite sheet using JSON (see extension description). 

### Behavior properties

- **Speed of the animation (in seconds)** (🔢 Number). Default value is `0.20000000000000001`.
- **JSON formatted text describing the sprite sheet** (🔤 String).

??? quote "See internal technical details"


    - **Speed of the animation (in seconds)** is stored as `AnimationSpeed` (Number). Default value is `0.20000000000000001`.
    - **JSON formatted text describing the sprite sheet** is stored as `JSON` (String). Default value is ``.

### Behavior actions

**Display a frame**  
Display one frame without animating the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): The frame to display

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SpriteSheet::JSONSpriteSheetAnimator::DisplayFrame`.

**Load data from a JSON resource**  
Loads a new JSON spritesheet data into the behavior.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): The JSON to load

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SpriteSheet::JSONSpriteSheetAnimator::LoadFromJSON`.

**Pause animation**  
Pause the animation of a sprite sheet.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SpriteSheet::JSONSpriteSheetAnimator::PauseAnimation`.

**Play Animation**  
Play an animation from the sprite sheet.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): The name of the animation

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SpriteSheet::JSONSpriteSheetAnimator::PlayAnimation`.

**Resume animation**  
Resume a paused animation of a sprite sheet.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SpriteSheet::JSONSpriteSheetAnimator::ResumeAnimation`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.JSONSpriteSheetAnimator::CurrentAnimation()` | The name of the current animation. __null if no animation is playing. ||
| `Object.JSONSpriteSheetAnimator::CurrentFrame()` | The name of the currently displayed frame. ||

## Vertical sprite sheet animator 

Animates a vertical (top to bottom) sprite sheet. 

### Behavior properties

- **Empty space between each sprite (in pixels)** (🔢 Number). Default value is `0`.
- **Horizontal width of sprite (in pixels)** (🔢 Number). Default value is `16`.
- **Vertical height of sprite (in pixels)** (🔢 Number). Default value is `16`.

??? quote "See internal technical details"


    - **Empty space between each sprite (in pixels)** is stored as `SpriteSpacing` (Number). Default value is `0`.
    - **Horizontal width of sprite (in pixels)** is stored as `SpriteX` (Number). Default value is `16`.
    - **Vertical height of sprite (in pixels)** is stored as `SpriteY` (Number). Default value is `16`.

### Behavior actions

**Pause animation**  
Pause the animation of a sprite sheet.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SpriteSheet::VerticalSpriteSheetAnimator::PauseAnimation`.

**Play animation**  
Play an animation from the sprite sheet.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): First frame of the animation
    - Parameter 3 (🔢 Number): Last frame of the animation
    - Parameter 4 (🔢 Number): Duration for each frame (seconds)
    - Parameter 5 (🔢 Number): The column containing the animation

    > Technical note: parameter 6 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SpriteSheet::VerticalSpriteSheetAnimator::PlayAnimation`.

**Resume animation**  
Resume a paused animation of a sprite sheet.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SpriteSheet::VerticalSpriteSheetAnimator::ResumeAnimation`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.VerticalSpriteSheetAnimator::CurrentFrame()` | The current frame of the current animation. ||


---

*This page is an auto-generated reference page about the **Sprite Sheet Animations** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).