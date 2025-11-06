# Double key press

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/a85f9403cea5bc52457e445d4a200ed226e30c3493c927aa015d0bbdf847df01_keyboard-outline.svg" class="extension-icon"></img>
Adds conditions to check for double key presses, similar to double clicks.

**Authors and contributors** to this experimental extension: [NiQsterVX](https://gd.games/NiQsterVX).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

This simple extension enables you to add a system, where a player needs to double press a certain key for an action to happen. 
For example you can add a sprinting system similar to Minecraft's, where you need to press W twice to start running.

The extension adds 3 conditions:
Specific key double pressed
Specific key double pressed (text expression)
Any key double pressed

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Conditions

**Key double pressed**  
Check if a specific key was double pressed.

??? quote "See parameters & details"

    - Parameter 1 (key): Which key should it work on?
    - Parameter 2 (🔢 Number): Time window for the double tap (in seconds)

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `DoubleKeyPress::DoubleKeyPress`.

**Key double pressed (any key)**  
Check if any key was double pressed.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Time window for the double tap (in seconds)

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `DoubleKeyPress::DoubleKeyPressAny`.

**Key double pressed (text expression)**  
Check if a specific key was double pressed using a text expression.

??? quote "See parameters & details"

    - Parameter 1 (string): Which key should it work on?
    - Parameter 2 (🔢 Number): Time window for the double tap (in seconds)

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `DoubleKeyPress::DoubleKeyPressExpression`.





---

*This page is an auto-generated reference page about the **Double key press** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).