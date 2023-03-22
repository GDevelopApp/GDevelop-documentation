# Animate Shadow Clones

<img src="https://resources.gdevelop-app.com/assets/Icons/vector-arrange-above.svg" class="extension-icon"></img>
Create and animate shadow clones that follow the path of a primary object.

**Authors and contributors** to this community extension: [Entropy](https://gd.games/Entropy), [VictrisGames](https://gd.games/VictrisGames), [fuzzy](https://gd.games/fuzzy).

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

---

!!! tip

    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

*This page is an auto-generated reference page about the **Animate Shadow Clones** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).