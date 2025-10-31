---
title: Spine
---

# Spine (Experimental)

The **Spine** object allows you to display and smoothly animate 2D skeletal animations created with [**Spine editor**](https://esotericsoftware.com/spine).

![Calcopus Spine Demo](image.png)

!!! warning
    This object is currently experimental — please share your feedback on the forum so we can improve it in future versions of GDevelop.

The Spine object is ideal for animating complex 2D characters with bones and meshes.
It supports smooth transitions between animations, as well as access to points and attachments defined in Spine.

You can:

- Load and display Spine animations exported from the Spine editor.
- Control animation playback and blending.
- Retrieve the position of specific **point attachments** defined in your Spine skeleton.
- Use multiple animations with smooth transitions between them.

It uses files exported from Spine (`.json`, `.atlas`, and image files) to render and animate characters or elements with smooth, interpolated bone-based movement.

!!! tip
    To ensure proper compatibility with GDevelop, use **Spine version 4.1** when exporting your animations. You can select the Spine version in the **Spine launcher** before exporting your files.


!!! note
    If you use Spine, you need to have a license, [read more on here](https://esotericsoftware.com/spine-purchase).

    
## Properties

In the object editor, you can configure:

| Property            | Description                                                                                               |
| ------------------- | --------------------------------------------------------------------------------------------------------- |
| **Spine JSON file** | The main file describing bones, animations, and attachments.                                              |
| **Scale**           | The overall display scale of the skeleton. Default value is **1**.                                        |
| **Animations list** | List of available animations. Click **Scan** to automatically generate the list from the Spine JSON file. |

## Examples

You can explore example(s) to see how a Spine object is integrated in a GDevelop project:

[Open the Calcopus Spine Demo](https://gdevelop.io/game-example/free/calcopus-spine-demo){ .md-button .md-button--primary }

## References

You can browse all the actions, conditions and expressions related to [the Spine object on this reference page](/gdevelop5/all-features/spine-object/reference/)
