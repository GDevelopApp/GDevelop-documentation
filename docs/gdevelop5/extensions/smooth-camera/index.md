# Smooth Camera

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Computers and Hardware/Computers and Hardware_camcoder_gopro_go_pro_camera.svg" class="extension-icon"></img>
Smoothly scroll to follow an object.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

The camera follows an object according to:

- a frame rate independent catch-up speed to make the scrolling from smooth to strong
- a maximum speed to do linear following ([open the project online](https://editor.gdevelop.io/?project=example://platformer-with-tilemap)) or slow down the camera when teleporting the object
- a follow-free zone to avoid scrolling on small movements
- an offset to see further in one direction
- an extra delay and catch-up speed to give an impression of speed (useful for dash)
- position forecasting and delay to simulate a cameraman response time

A platformer dedicated behavior allows to switch of settings when the character is in air or on the floor. This can be used to stabilize the camera when jumping.

[Read more...](/gdevelop5/tutorials/follow-player-with-camera/)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Smooth Camera 

Smoothly scroll to follow an object. 

### Behavior actions

**Draw debug**
Draw the targeted and actual camera position.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Shape painter

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Move the camera closer**
Move the camera closer to the object. This action must be called after the object has moved for the frame.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Camera delay**
Change the camera delay (in seconds).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Camera delay

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Downward catch-up speed**
Change the camera downward catch-up speed (in ratio per second).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Downward catch-up speed (in ratio per second)

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Downward maximum speed**
Change the camera downward maximum speed (in pixels per second).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Downward maximum speed (in pixels per second)

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Follow free area bottom border**
Change the camera follow free area bottom border.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Follow free area bottom border

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Follow free area left border**
Change the camera follow free area left border.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Follow free area left border

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Follow free area right border**
Change the camera follow free area right border.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Follow free area right border

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Follow free area top border**
Change the camera follow free area top border.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Follow free area top border

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Follow on X**
Enable or disable the following on X axis.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Follow on X axis

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Follow on Y**
Enable or disable the following on Y axis.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Follow on Y axis

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Forecast time**
Change the camera forecast time (in seconds).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Forecast time

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Leftward catch-up speed**
Change the camera leftward catch-up speed (in ratio per second).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Leftward catch-up speed (in ratio per second)

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Leftward maximum speed**
Change the camera leftward maximum speed (in pixels per second).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Leftward maximum speed (in pixels per second)

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Camera offset X**
Change the camera offset on X axis of the object. This is not the current difference between the object and the camera position.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Camera offset Y**
Change the camera offset on Y axis of the object. This is not the current difference between the object and the camera position.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Rightward catch-up speed**
Change the camera rightward catch-up speed (in ratio per second).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Rightward catch-up speed (in ratio per second)

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Rightward maximum speed**
Change the camera rightward maximum speed (in pixels per second).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Rightward maximum speed (in pixels per second)

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Upward catch-up speed**
Change the camera upward catch-up speed (in ratio per second).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Upward catch-up speed (in ratio per second)

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Upward maximum speed**
Change the camera upward maximum speed (in pixels per second).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Upward maximum speed (in pixels per second)

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Wait and catch up**
Delay the camera according to a maximum speed and catch up the delay.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Waiting duration (in seconds)
    - Parameter 3 (🔢 Number): Waiting maximum camera target speed X
    - Parameter 4 (🔢 Number): Waiting maximum camera target speed Y
    - Parameter 5 (🔢 Number): Catch up duration (in seconds)

    > Technical note: parameter 6 are internal parameters handled by GDevelop.

### Behavior conditions

**Camera offset X**
Compare the camera offset on X axis of the object. This is not the current difference between the object and the camera position.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Camera offset Y**
Compare the camera offset on Y axis of the object. This is not the current difference between the object and the camera position.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.SmoothCamera::OffsetX()` | Return the camera offset on X axis of the object. This is not the current difference between the object and the camera position. ||
| `Object.SmoothCamera::OffsetY()` | Return the camera offset on Y axis of the object. This is not the current difference between the object and the camera position. ||

## Smooth platformer camera 

Smoothly scroll to follow a character and stabilize the camera when jumping. 

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Smooth Camera** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).