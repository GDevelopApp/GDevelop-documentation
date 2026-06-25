# Copy camera settings

<img src="https://resources.gdevelop-app.com/assets/Icons/layers-triple-outline.svg" class="extension-icon"></img>
Copy camera position, zoom, and rotation from one layer to another.

**Authors and contributors** to this extension: [VictrisGames](https://gd.games/VictrisGames).

---

Useful when multiple layers need to use the same camera values.

How to use:

- Run the "Copy camera settings" action after all other camera actions have been performed

Tips:

- Do not use on layers that implement a parallax effect

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Copy camera settings**  
Copy camera settings of a layer and apply them to another layer.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Layer name (String)): Source layer
    - Parameter 2 (🔢 Number): Source camera
    - Parameter 3 (🔤 Layer name (String)): Destination layer
    - Parameter 4 (🔢 Number): Destination camera
    - Parameter 5 (❓ Yes or No): Clone X position
    - Parameter 6 (❓ Yes or No): Clone Y position
    - Parameter 7 (❓ Yes or No): Clone zoom
    - Parameter 8 (❓ Yes or No): Clone angle

    > Technical note: parameters 0, 9 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CopyCameraSettings::CopyCameraSettings`.





---

*This page is an auto-generated reference page about the **Copy camera settings** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).