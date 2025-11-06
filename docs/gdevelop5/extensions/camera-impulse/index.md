# Camera impulse

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Arrows/Arrows_thin_arrow_up_down_directions.svg" class="extension-icon"></img>
Move the camera following an impulse trajectory.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

Move the camera following an impulse trajectory.

It can be used to simulate earthquakes or impacts.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Add a camera impulse**  
Add an impulse to the camera position.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Identifier
    - Parameter 2 (🔤 String): Layer
    - Parameter 3 (🔢 Number): Displacement X
    - Parameter 4 (🔢 Number): Displacement Y
    - Parameter 5 (🔢 Number): Get away duration (in seconds)
    - Parameter 6 (🔤 String): Get away easing (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")
    - Parameter 7 (🔢 Number): Stay duration (in seconds)
    - Parameter 8 (🔢 Number): Get back duration (in seconds)
    - Parameter 9 (🔤 String): Get back easing (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameters 0, 10 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CameraImpulse::AddImpulse`.

**Add a camera impulse (angle)**  
Add an impulse to the camera position.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Identifier
    - Parameter 2 (🔤 String): Layer
    - Parameter 3 (🔢 Number): Amplitude
    - Parameter 4 (🔢 Number): Angle (in degree)
    - Parameter 5 (🔢 Number): Get away duration (in seconds)
    - Parameter 6 (🔤 String): Get away easing (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")
    - Parameter 7 (🔢 Number): Stay duration (in seconds)
    - Parameter 8 (🔢 Number): Get back duration (in seconds)
    - Parameter 9 (🔤 String): Get back easing (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameters 0, 10 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CameraImpulse::AddImpulseAngle`.


## Conditions

**Camera impulse is playing**  
Check if a camera impulse is playing.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Identifier

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CameraImpulse::IsPlaying`.





---

*This page is an auto-generated reference page about the **Camera impulse** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).