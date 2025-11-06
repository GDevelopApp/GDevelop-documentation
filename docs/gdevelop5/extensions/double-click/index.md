# Double-click and tap

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Computers and Hardware/Computers and Hardware_mouse_wireless_pc.svg" class="extension-icon"></img>
Check for a double-click or a tap.

**Authors and contributors** to this experimental extension: [Silver-Streak](https://gd.games/Silver-Streak), [D8H](https://gd.games/D8H).

---

Check for a double-click with a mouse, or a tap and double-click on a touchscreen.

Please note: Touch devices do not have alternatives for middle/right clicks. Taps on a touch device will get counted for _any_ use of these conditions, so you should either design your controls accordingly, or build out separate events if the device has a touch screen.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Conditions

**Double-clicked (or double-tapped)**  
Check if the specified mouse button is clicked twice in a short amount of time.

??? quote "See parameters & details"

    - Parameter 1 (mouseButton): Mouse button to track
      As touch devices do not have middle/right tap equivalents, you will need to account for this within your events if you're not using the left mouse button and building for touch devices.

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `DoubleClick::HasDoubleClicked`.

**Clicked (or tapped)**  
Check if the specified mouse button is clicked.

??? quote "See parameters & details"

    - Parameter 1 (mouseButton): Mouse button to track
      As touch devices do not have middle/right tap equivalents, you will need to account for this within your events if you're not using the left mouse button and building for touch devices.

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `DoubleClick::HasSimpleClicked`.





---

*This page is an auto-generated reference page about the **Double-click and tap** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).