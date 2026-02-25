# Animate Shadow Clones

<img src="https://resources.gdevelop-app.com/assets/Icons/vector-arrange-above.svg" class="extension-icon"></img>
Create fading shadow clone trail.

**Authors and contributors** to this experimental extension: [Entropy](https://gd.games/Entropy), [VictrisGames](https://gd.games/VictrisGames), [fuzzy](https://gd.games/fuzzy).

---

Select the primary object, the shadow clone object, the number of shadow clones, the number of frames between shadow clones, the rate that shadow clones will reduce opacity and size (if desired), the Z-value and the layer the shadow clones will be created on.

This extension can be used to:


- Make an object look faster, such as during a speed powerup.  
- Give a 3D-like feel to a character
- Implement unique time-based elements, like teleporting a character back to a previous location
- Simulate the movement of a caterpillar or slinky
- Recreate games like snake or tron

These object variables are provided to manage the shadow clones:


- ShadowCloneOrder: Shadow clone identifier, where 1 is the shadow clone closest to the primary object
- FramesBehindPrimary: The number of frames that the shadow clone is behind the primary object

Notes: 

- For shadow clones to work, this action must be run every frame.
- The ShadowCloneObject cannot be the PrimaryObject, but it can be a duplicate object. 
- For animations to work, the PrimaryObject and ShadowCloneObject must use the same animation numbers.

Watch this [tutorial video](https://youtu.be/2t4ANYgrrak) to see examples of how to use this extension.

[Read more...](https://www.youtube.com/watch?v=2t4ANYgrrak)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Animate shadow clones that follow the path of a primary object**  
Select the primary object, the shadow clone object, the number of shadow clones, the number of frames between shadow clones, the rate that shadow clones will fade away (if desired), the Z-value of the shadow clones, and the layer the shadow clones will be created on.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object that shadow clones will follow
    - Parameter 2 (👾 Object): Shadows clones will be made of this object (Cannot be the same object used for primary object)
    - Parameter 3 (🔢 Number): Number of shadow clones (Default: 1)
    - Parameter 4 (🔢 Number): Number of empty frames between shadow clones (Default: 1)
    - Parameter 5 (🔢 Number): Fade speed (Range: 0 to 255) (Default: 0)
      Decrease in opacity for each consecutive shadow clone 
    - Parameter 6 (🔢 Number): Shrink speed (Range: 0 to 100) (Default: 0)
      Decrease in scale for each consecutive shadow clone 
    - Parameter 7 (🔤 Layer name (String)): Shadow clones will be created on this layer. (Default: "") (Base Layer)
    - Parameter 8 (🔢 Number): Z value for created shadow clones
    - Parameter 9 (❓ Yes or No): Match X scale of primary object:
    - Parameter 10 (❓ Yes or No): Match Y scale of primary object:
    - Parameter 11 (❓ Yes or No): Match angle of primary object:
    - Parameter 12 (❓ Yes or No): Match animation of primary object:
    - Parameter 13 (❓ Yes or No): Match animation frame of primary object:
    - Parameter 14 (❓ Yes or No): Match the vertical flip of primary object:
    - Parameter 15 (❓ Yes or No): Match the horizontal flip of primary object:

    > Technical note: parameters 0, 16 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShadowClones::AnimateShadowClones`.

**Delete shadow clone objects that are linked to a primary object**  
Delete shadow clone objects that are linked to a primary object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Primary object
    - Parameter 2 (👾 Object): Shadow clones

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShadowClones::DeleteShadowClones`.





---

*This page is an auto-generated reference page about the **Animate Shadow Clones** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).