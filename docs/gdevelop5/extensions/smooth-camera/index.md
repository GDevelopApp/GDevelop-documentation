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

### Behavior properties

- **Camera delay** (🔢 Number, Duration). Default value is `0`.
- **Camera offset X** (🔢 Number, Distance). Default value is `0`.
- **Camera offset Y** (🔢 Number, Distance). Default value is `0`.
- **Downward catch-up speed (in ratio per second)** (🔢 Number). Default value is `0.90000000000000002`.
- **Downward maximum speed** (🔢 Number, Speed). Default value is `9000`.
- **Follow free area bottom border** (🔢 Number, Distance). Default value is `0`.
- **Follow free area left border** (🔢 Number, Distance). Default value is `0`.
- **Follow free area right border** (🔢 Number, Distance). Default value is `0`.
- **Follow free area top border** (🔢 Number, Distance). Default value is `0`.
- **Follow on X axis** (🔘 Boolean). Default value is `true`.
- **Follow on Y axis** (🔘 Boolean). Default value is `true`.
- **Forecast history duration** (🔢 Number, Duration). Default value is `0`.
- **Forecast time** (🔢 Number, Duration). Default value is `0`.
- **Leftward catch-up speed (in ratio per second)** (🔢 Number). Default value is `0.90000000000000002`.
- **Leftward maximum speed** (🔢 Number, Speed). Default value is `9000`.
- **Rightward catch-up speed (in ratio per second)** (🔢 Number). Default value is `0.90000000000000002`.
- **Rightward maximum speed** (🔢 Number, Speed). Default value is `9000`.
- **Upward catch-up speed (in ratio per second)** (🔢 Number). Default value is `0.90000000000000002`.
- **Upward maximum speed** (🔢 Number, Speed). Default value is `9000`.

??? quote "See internal technical details"


    - **Camera delay** is stored as `CameraDelay` (Number). Unit is Second. Default value is `0`.
    - **Camera offset X** is stored as `CameraOffsetX` (Number). Unit is Pixel. Default value is `0`.
    - **Camera offset Y** is stored as `CameraOffsetY` (Number). Unit is Pixel. Default value is `0`.
    - **Downward catch-up speed (in ratio per second)** is stored as `DownwardSpeed` (Number). Default value is `0.90000000000000002`.
    - **Downward maximum speed** is stored as `DownwardSpeedMax` (Number). Unit is PixelSpeed. Default value is `9000`.
    - **Follow free area bottom border** is stored as `FollowFreeAreaBottom` (Number). Unit is Pixel. Default value is `0`.
    - **Follow free area left border** is stored as `FollowFreeAreaLeft` (Number). Unit is Pixel. Default value is `0`.
    - **Follow free area right border** is stored as `FollowFreeAreaRight` (Number). Unit is Pixel. Default value is `0`.
    - **Follow free area top border** is stored as `FollowFreeAreaTop` (Number). Unit is Pixel. Default value is `0`.
    - **Follow on X axis** is stored as `FollowOnX` (Boolean). Default value is `true`.
    - **Follow on Y axis** is stored as `FollowOnY` (Boolean). Default value is `true`.
    - **Forecast history duration** is stored as `ForecastHistoryDuration` (Number). Unit is Second. Default value is `0`.
    - **Forecast time** is stored as `ForecastTime` (Number). Unit is Second. Default value is `0`.
    - **Leftward catch-up speed (in ratio per second)** is stored as `LeftwardSpeed` (Number). Default value is `0.90000000000000002`.
    - **Leftward maximum speed** is stored as `LeftwardSpeedMax` (Number). Unit is PixelSpeed. Default value is `9000`.
    - **Rightward catch-up speed (in ratio per second)** is stored as `RightwardSpeed` (Number). Default value is `0.90000000000000002`.
    - **Rightward maximum speed** is stored as `RightwardSpeedMax` (Number). Unit is PixelSpeed. Default value is `9000`.
    - **Upward catch-up speed (in ratio per second)** is stored as `UpwardSpeed` (Number). Default value is `0.90000000000000002`.
    - **Upward maximum speed** is stored as `UpwardSpeedMax` (Number). Unit is PixelSpeed. Default value is `9000`.

### Behavior actions

**Draw debug**  
Draw the targeted and actual camera position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Shape painter

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::DrawDebug`.

**Move the camera closer**  
Move the camera closer to the object. This action must be called after the object has moved for the frame.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::MoveCameraCloser`.

**Camera delay**  
Change the camera delay (in seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Camera delay

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::SetCameraDelay`.

**Downward catch-up speed**  
Change the camera downward catch-up speed (in ratio per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Downward catch-up speed (in ratio per second)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::SetDownwardSpeed`.

**Downward maximum speed**  
Change the camera downward maximum speed (in pixels per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Downward maximum speed (in pixels per second)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::SetDownwardSpeedMax`.

**Follow free area bottom border**  
Change the camera follow free area bottom border.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Follow free area bottom border

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::SetFollowFreeAreaBottom`.

**Follow free area left border**  
Change the camera follow free area left border.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Follow free area left border

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::SetFollowFreeAreaLeft`.

**Follow free area right border**  
Change the camera follow free area right border.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Follow free area right border

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::SetFollowFreeAreaRight`.

**Follow free area top border**  
Change the camera follow free area top border.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Follow free area top border

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::SetFollowFreeAreaTop`.

**Follow on X**  
Enable or disable the following on X axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Follow on X axis

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::SetFollowOnX`.

**Follow on Y**  
Enable or disable the following on Y axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Follow on Y axis

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::SetFollowOnY`.

**Forecast time**  
Change the camera forecast time (in seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Forecast time

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::SetForecastTime`.

**Leftward catch-up speed**  
Change the camera leftward catch-up speed (in ratio per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Leftward catch-up speed (in ratio per second)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::SetLeftwardSpeed`.

**Leftward maximum speed**  
Change the camera leftward maximum speed (in pixels per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Leftward maximum speed (in pixels per second)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::SetLeftwardSpeedMax`.

**Camera offset X**  
Change the camera offset on X axis of the object. This is not the current difference between the object and the camera position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::SetOffsetXOp`.

**Camera offset Y**  
Change the camera offset on Y axis of the object. This is not the current difference between the object and the camera position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::SetOffsetYOp`.

**Rightward catch-up speed**  
Change the camera rightward catch-up speed (in ratio per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Rightward catch-up speed (in ratio per second)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::SetRightwardSpeed`.

**Rightward maximum speed**  
Change the camera rightward maximum speed (in pixels per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Rightward maximum speed (in pixels per second)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::SetRightwardSpeedMax`.

**Upward catch-up speed**  
Change the camera upward catch-up speed (in ratio per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Upward catch-up speed (in ratio per second)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::SetUpwardSpeed`.

**Upward maximum speed**  
Change the camera upward maximum speed (in pixels per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Upward maximum speed (in pixels per second)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::SetUpwardSpeedMax`.

**Wait and catch up**  
Delay the camera according to a maximum speed and catch up the delay.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Waiting duration (in seconds)
    - Parameter 3 (🔢 Number): Waiting maximum camera target speed X
    - Parameter 4 (🔢 Number): Waiting maximum camera target speed Y
    - Parameter 5 (🔢 Number): Catch up duration (in seconds)

    > Technical note: parameter 6 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::WaitAndCatchUp`.


### Behavior conditions

**Camera offset X**  
Compare the camera offset on X axis of the object. This is not the current difference between the object and the camera position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::OffsetX`.

**Camera offset Y**  
Compare the camera offset on Y axis of the object. This is not the current difference between the object and the camera position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SmoothCamera::SmoothCamera::OffsetY`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.SmoothCamera::OffsetX()` | Return the camera offset on X axis of the object. This is not the current difference between the object and the camera position. ||
| `Object.SmoothCamera::OffsetY()` | Return the camera offset on Y axis of the object. This is not the current difference between the object and the camera position. ||

## Smooth platformer camera 

Smoothly scroll to follow a character and stabilize the camera when jumping. 

### Behavior properties

- **Downward speed in the air (in ratio per second)** (🔢 Number). Default value is `0.94999999999999996`.
- **Downward maximum speed in the air** (🔢 Number, Speed). Default value is `9000`.
- **Follow free area bottom in the air** (🔢 Number, Distance). Default value is `0`.
- **Follow free area top in the air** (🔢 Number, Distance). Default value is `0`.
- **Upward speed in the air (in ratio per second)** (🔢 Number). Default value is `0.94999999999999996`.
- **Upward maximum speed in the air** (🔢 Number, Speed). Default value is `9000`.
- **Downward speed on the floor (in ratio per second)** (🔢 Number). Default value is `0.90000000000000002`.
- **Downward maximum speed on the floor** (🔢 Number, Speed). Default value is `9000`.
- **Follow free area bottom on the floor** (🔢 Number, Distance). Default value is `0`.
- **Follow free area top on the floor** (🔢 Number, Distance). Default value is `0`.
- **Upward speed on the floor (in ratio per second)** (🔢 Number). Default value is `0.90000000000000002`.
- **Upward maximum speed on the floor** (🔢 Number, Speed). Default value is `9000`.

??? quote "See internal technical details"


    - **Downward speed in the air (in ratio per second)** is stored as `AirDownwardSpeed` (Number). Default value is `0.94999999999999996`.
    - **Downward maximum speed in the air** is stored as `AirDownwardSpeedMax` (Number). Unit is PixelSpeed. Default value is `9000`.
    - **Follow free area bottom in the air** is stored as `AirFollowFreeAreaBottom` (Number). Unit is Pixel. Default value is `0`.
    - **Follow free area top in the air** is stored as `AirFollowFreeAreaTop` (Number). Unit is Pixel. Default value is `0`.
    - **Upward speed in the air (in ratio per second)** is stored as `AirUpwardSpeed` (Number). Default value is `0.94999999999999996`.
    - **Upward maximum speed in the air** is stored as `AirUpwardSpeedMax` (Number). Unit is PixelSpeed. Default value is `9000`.
    - **Downward speed on the floor (in ratio per second)** is stored as `FloorDownwardSpeed` (Number). Default value is `0.90000000000000002`.
    - **Downward maximum speed on the floor** is stored as `FloorDownwardSpeedMax` (Number). Unit is PixelSpeed. Default value is `9000`.
    - **Follow free area bottom on the floor** is stored as `FloorFollowFreeAreaBottom` (Number). Unit is Pixel. Default value is `0`.
    - **Follow free area top on the floor** is stored as `FloorFollowFreeAreaTop` (Number). Unit is Pixel. Default value is `0`.
    - **Upward speed on the floor (in ratio per second)** is stored as `FloorUpwardSpeed` (Number). Default value is `0.90000000000000002`.
    - **Upward maximum speed on the floor** is stored as `FloorUpwardSpeedMax` (Number). Unit is PixelSpeed. Default value is `9000`.
    > This behavior must be used on an object also having a behavior with type "PlatformBehavior::PlatformerObjectBehavior". This is stored on property `PlatformerCharacter`.

    > This behavior must be used on an object also having a behavior with type "SmoothCamera::SmoothCamera". This is stored on property `SmoothCamera`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Smooth Camera** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).