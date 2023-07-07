# Sprite Sheet Animations

<img src="https://resources.gdevelop-app.com/assets/Icons/google-spreadsheet.svg" class="extension-icon"></img>
Animate a tiled sprite from a sprite sheet.

**Authors and contributors** to this community extension: [arthuro555](https://gd.games/arthuro555).

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

### Behavior actions

**Pause animation**  
Pause the animation of a sprite sheet.

**Play animation**  
Play an animation from the sprite sheet.

**Resume animation**  
Resume a paused animation of a sprite sheet.

**Row of the animation property**  
Change the property value for the row of the animation.

**Speed of the animation (in seconds) property**  
Change the property value for the speed of the animation (in seconds).

**Current Frame of the animation property**  
Change the property value for the current Frame of the animation.

**First Frame of the animation property**  
Change the property value for the first Frame of the animation.

**Last Frame of the animation property**  
Change the property value for the last Frame of the animation.

**Empty space between each sprite (in pixels) property**  
Change the property value for the empty space between each sprite (in pixels).

**Horizontal width of sprite (in pixels) property**  
Change the property value for the horizontal width of sprite (in pixels).

**Vertical height of sprite (in pixels) property**  
Change the property value for the vertical height of sprite (in pixels).

**Set the animation frame**  
Set the animation frame.

### Behavior conditions

**Row of the animation property**  
Compare the property value for the row of the animation.

**Speed of the animation (in seconds) property**  
Compare the property value for the speed of the animation (in seconds).

**Current Frame of the animation property**  
Compare the property value for the current Frame of the animation.

**First Frame of the animation property**  
Compare the property value for the first Frame of the animation.

**Last Frame of the animation property**  
Compare the property value for the last Frame of the animation.

**Empty space between each sprite (in pixels) property**  
Compare the property value for the empty space between each sprite (in pixels).

**Horizontal width of sprite (in pixels) property**  
Compare the property value for the horizontal width of sprite (in pixels).

**Vertical height of sprite (in pixels) property**  
Compare the property value for the vertical height of sprite (in pixels).

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.HorizontalSpriteSheetAnimator::CurrentFrame()` | The current frame of the current animation. ||
| `Object.HorizontalSpriteSheetAnimator::PropertyAnimationRow()` | Return the property value for the row of the animation. ||
| `Object.HorizontalSpriteSheetAnimator::PropertyAnimationSpeed()` | Return the property value for the speed of the animation (in seconds). ||
| `Object.HorizontalSpriteSheetAnimator::PropertyCurrentFrame()` | Return the property value for the current Frame of the animation. ||
| `Object.HorizontalSpriteSheetAnimator::PropertyFirstFrame()` | Return the property value for the first Frame of the animation. ||
| `Object.HorizontalSpriteSheetAnimator::PropertyLastFrame()` | Return the property value for the last Frame of the animation. ||
| `Object.HorizontalSpriteSheetAnimator::PropertySpriteSpacing()` | Return the property value for the empty space between each sprite (in pixels). ||
| `Object.HorizontalSpriteSheetAnimator::PropertySpriteX()` | Return the property value for the horizontal width of sprite (in pixels). ||
| `Object.HorizontalSpriteSheetAnimator::PropertySpriteY()` | Return the property value for the vertical height of sprite (in pixels). ||

## JSON sprite sheet animator 

Animates a sprite sheet using JSON (see extension description). 

### Behavior actions

**Display a frame**  
Display one frame without animating the object.

**Load data from a JSON resource**  
Loads a new JSON spritesheet data into the behavior.

**Pause animation**  
Pause the animation of a sprite sheet.

**Play Animation**  
Play an animation from the sprite sheet.

**Resume animation**  
Resume a paused animation of a sprite sheet.

**Speed of the animation (in seconds) property**  
Change the property value for the speed of the animation (in seconds).

**Current animation property**  
Change the property value for the current animation.

**Current frame of the animation property**  
Change the property value for the current frame of the animation.

**Currently displayed frame name property**  
Change the property value for the currently displayed frame name.

**JSON formatted text describing the sprite sheet property**  
Change the property value for the jSON formatted text describing the sprite sheet.

**Load the JSON**  
Loads the JSON data into the behavior

**Update the animation frame**  
Updates the animation frame.

**Update the object**  
Update the object attached to the behavior using the latest properties values.

### Behavior conditions

**Speed of the animation (in seconds) property**  
Compare the property value for the speed of the animation (in seconds).

**Current animation property**  
Compare the property value for the current animation.

**Current frame of the animation property**  
Compare the property value for the current frame of the animation.

**Currently displayed frame name property**  
Compare the property value for the currently displayed frame name.

**JSON formatted text describing the sprite sheet property**  
Compare the property value for the jSON formatted text describing the sprite sheet.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.JSONSpriteSheetAnimator::CurrentAnimation()` | The name of the current animation. __null if no animation is playing. ||
| `Object.JSONSpriteSheetAnimator::CurrentFrame()` | The name of the currently displayed frame. ||
| `Object.JSONSpriteSheetAnimator::PropertyAnimationSpeed()` | Return the property value for the speed of the animation (in seconds). ||
| `Object.JSONSpriteSheetAnimator::PropertyCurrentAnimation()` | Return the property value for the current animation. ||
| `Object.JSONSpriteSheetAnimator::PropertyCurrentAnimationFrame()` | Return the property value for the current frame of the animation. ||
| `Object.JSONSpriteSheetAnimator::PropertyCurrentFrame()` | Return the property value for the currently displayed frame name. ||
| `Object.JSONSpriteSheetAnimator::PropertyJSON()` | Return the property value for the jSON formatted text describing the sprite sheet. ||

## Vertical sprite sheet animator 

Animates a vertical (top to bottom) sprite sheet. 

### Behavior actions

**Pause animation**  
Pause the animation of a sprite sheet.

**Play animation**  
Play an animation from the sprite sheet.

**Resume animation**  
Resume a paused animation of a sprite sheet.

**Column of the animation property**  
Change the property value for the column of the animation.

**Speed of the animation (in seconds) property**  
Change the property value for the speed of the animation (in seconds).

**Current Frame of the animation property**  
Change the property value for the current Frame of the animation.

**First Frame of the animation property**  
Change the property value for the first Frame of the animation.

**Last Frame of the animation property**  
Change the property value for the last Frame of the animation.

**Empty space between each sprite (in pixels) property**  
Change the property value for the empty space between each sprite (in pixels).

**Horizontal width of sprite (in pixels) property**  
Change the property value for the horizontal width of sprite (in pixels).

**Vertical height of sprite (in pixels) property**  
Change the property value for the vertical height of sprite (in pixels).

**Set the animation frame**  
Set the animation frame.

### Behavior conditions

**Column of the animation property**  
Compare the property value for the column of the animation.

**Speed of the animation (in seconds) property**  
Compare the property value for the speed of the animation (in seconds).

**Current Frame of the animation property**  
Compare the property value for the current Frame of the animation.

**First Frame of the animation property**  
Compare the property value for the first Frame of the animation.

**Last Frame of the animation property**  
Compare the property value for the last Frame of the animation.

**Empty space between each sprite (in pixels) property**  
Compare the property value for the empty space between each sprite (in pixels).

**Horizontal width of sprite (in pixels) property**  
Compare the property value for the horizontal width of sprite (in pixels).

**Vertical height of sprite (in pixels) property**  
Compare the property value for the vertical height of sprite (in pixels).

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.VerticalSpriteSheetAnimator::CurrentFrame()` | The current frame of the current animation. ||
| `Object.VerticalSpriteSheetAnimator::PropertyAnimationColumn()` | Return the property value for the column of the animation. ||
| `Object.VerticalSpriteSheetAnimator::PropertyAnimationSpeed()` | Return the property value for the speed of the animation (in seconds). ||
| `Object.VerticalSpriteSheetAnimator::PropertyCurrentFrame()` | Return the property value for the current Frame of the animation. ||
| `Object.VerticalSpriteSheetAnimator::PropertyFirstFrame()` | Return the property value for the first Frame of the animation. ||
| `Object.VerticalSpriteSheetAnimator::PropertyLastFrame()` | Return the property value for the last Frame of the animation. ||
| `Object.VerticalSpriteSheetAnimator::PropertySpriteSpacing()` | Return the property value for the empty space between each sprite (in pixels). ||
| `Object.VerticalSpriteSheetAnimator::PropertySpriteX()` | Return the property value for the horizontal width of sprite (in pixels). ||
| `Object.VerticalSpriteSheetAnimator::PropertySpriteY()` | Return the property value for the vertical height of sprite (in pixels). ||

---

*This page is an auto-generated reference page about the **Sprite Sheet Animations** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).