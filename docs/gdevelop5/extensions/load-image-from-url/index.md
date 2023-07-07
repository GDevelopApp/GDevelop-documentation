# Load images from a URL

<img src="https://resources.gdevelop-app.com/assets/Icons/file-download.svg" class="extension-icon"></img>
Adds multiple actions to load images from a URL into the game.

**Authors and contributors** to this community extension: [arthuro555](https://gd.games/arthuro555).

---

With this extension, you can load images from any URL (including a DataURL) into a sprite or image resource.
Loading it into a sprite will load the URL into a sprite, replacing the image it displays until the sprite's displayed image is changed, e.g. by going to the next frame of an animation or switching animations.
Loading it into a resource will discard the old image that a resource was using and replace it with the image loaded from a URL. Any sprite that is displaying this resource as a part of their animation will start showing the new image instead of the  old one. The old image of the resource will not be accessible anymore unless you restart the game or reload the original image from a URL into it.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Load URL into an image resource**  
Replaces the image contained by a resource by a new one, from a URL. This will update all sprites displaying the resource.

**Load URL into a sprite**  
Replaces the image contained by a sprite by a new one, from a URL. This will only affect the sprite in question and only until the image in it is changed through its animation or another action, unless you also modify the resource.



---

*This page is an auto-generated reference page about the **Load images from a URL** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).