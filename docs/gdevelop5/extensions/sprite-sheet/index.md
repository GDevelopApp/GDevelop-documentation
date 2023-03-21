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

---

!!! tip

    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

*This page is an auto-generated reference page about the **Sprite Sheet Animations** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).