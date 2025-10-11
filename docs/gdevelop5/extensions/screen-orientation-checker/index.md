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

### Object actions

**Force show the screen**
Change if the screen should be forced to be shown. Use this to test the screen in your game.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Force show the screen?

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Message**
Change the message of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Object conditions

**Force show the screen**
Check if the screen should be forced to be shown. Use this to test the screen in your game.

??? quote "See parameters"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Message**
Compare the message of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Message()` | Return the message of the object. ||


---

*This page is an auto-generated reference page about the **Screen Orientation Checker** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).