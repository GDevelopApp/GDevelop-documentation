# Screen Orientation Checker

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/0126888931a4a4f82bb2824df9f096347ace1c47f510c44df42aa8dc9e49e24a_screen-rotation.svg" class="extension-icon"></img>
Display a customizable screen asking the user to rotate their phone/tablet if not in the right orientation.

**Authors and contributors** to this experimental extension: [4ian](https://gd.games/4ian).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Display a customizable screen asking the user to rotate their phone/tablet if not in the right orientation.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Screen Orientation Checker 

Automatically display a screen asking the player to rotate their screen if needed - on mobile phones and tablets only. Set up Anchor behavior on this object so that top/bottom/left/right edges are anchored to the screen top/bottom/left/right. 

### Object properties

- **Force show the screen** (🔘 Boolean). Use this to test the screen in your game.
- **Padding** (🔢 Number, Distance). Default value is `5`.
- **Corner radius** (🔢 Number, Distance). Corner radius for the background. Default value is `10`.

??? quote "See internal technical details"


    - **Force show the screen** is stored as `IsForceShown` (Boolean). Default value is ``.
    - **Padding** is stored as `Padding` (Number). Unit is Pixel. Default value is `5`.
    - **Corner radius** is stored as `CornerRadius` (Number). Unit is Pixel. Default value is `10`.

### Object actions

**Force show the screen**  
Change if the screen should be forced to be shown. Use this to test the screen in your game.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Force show the screen?

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScreenOrientationChecker::ScreenOrientationChecker::SetIsForceShown`.

**Message**  
Change the message of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScreenOrientationChecker::ScreenOrientationChecker::SetMessage`.


### Object conditions

**Force show the screen**  
Check if the screen should be forced to be shown. Use this to test the screen in your game.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ScreenOrientationChecker::ScreenOrientationChecker::IsForceShown`.

**Message**  
Compare the message of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: relationaloperator
    - Parameter 2 (string): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ScreenOrientationChecker::ScreenOrientationChecker::Message`.


### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Message()` | Return the message of the object. ||


---

*This page is an auto-generated reference page about the **Screen Orientation Checker** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).