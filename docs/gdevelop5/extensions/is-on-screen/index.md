# Object "Is On Screen" Detection

<img src="https://resources.gdevelop-app.com/assets/Icons/monitor-screenshot.svg" class="extension-icon"></img>
This adds a condition to detect if an object is on screen based off its current layer.

**Authors and contributors** to this experimental extension: [Bouh](https://gd.games/Bouh), [Silver-Streak](https://gd.games/Silver-Streak), [VictrisGames](https://gd.games/VictrisGames).

---

This extension adds conditions to check if an object is located within the visible portion of its layer's camera. The condition also allows for specifying padding to the virtual screen border.

Note that this does not take into account any object visibility, such as being hidden or 0 opacity, but can be combined with those existing conditions.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Is on screen 

This behavior provides a condition to check if the object is located within the visible portion of its layer's camera. The condition also allows for specifying padding to the virtual screen border.
Note that object visibility, such as being hidden or 0 opacity, is not considered (but you can use those existing conditions in addition to this behavior). 

### Behavior conditions

**Is on screen**  
Checks if an object position is within the viewport of its layer.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Padding (in pixels)
      Number of pixels to pad the screen border. Zero by default. A negative value goes inside the screen, a positive value go outside.

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `IsOnScreen::InOnScreen::IsOnScreen`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Object "Is On Screen" Detection** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).