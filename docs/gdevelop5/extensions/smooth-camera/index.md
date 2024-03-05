# Smooth Camera

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Computers and Hardware/Computers and Hardware_camcoder_gopro_go_pro_camera.svg" class="extension-icon"></img>
Smoothly scroll to follow an object.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

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

**Move the camera closer**  
Move the camera closer to the object. This action must be called after the object has moved for the frame.

**Camera delay**  
Change the camera delay (in seconds).

**Downward catch-up speed**  
Change the camera downward catch-up speed (in ratio per second).

**Downward maximum speed**  
Change the camera downward maximum speed (in pixels per second).

**Follow free area bottom border**  
Change the camera follow free area bottom border.

**Follow free area left border**  
Change the camera follow free area left border.

**Follow free area right border**  
Change the camera follow free area right border.

**Follow free area top border**  
Change the camera follow free area top border.

**Follow on X**  
Enable or disable the following on X axis.

**Follow on Y**  
Enable or disable the following on Y axis.

**Forecast time**  
Change the camera forecast time (in seconds).

**Leftward catch-up speed**  
Change the camera leftward catch-up speed (in ratio per second).

**Leftward maximum speed**  
Change the camera leftward maximum speed (in pixels per second).

**Camera offset X**  
Change the camera offset on X axis of the object. This is not the current difference between the object and the camera position.

**Camera offset Y**  
Change the camera offset on Y axis of the object. This is not the current difference between the object and the camera position.

**Rightward catch-up speed**  
Change the camera rightward catch-up speed (in ratio per second).

**Rightward maximum speed**  
Change the camera rightward maximum speed (in pixels per second).

**Upward catch-up speed**  
Change the camera upward catch-up speed (in ratio per second).

**Upward maximum speed**  
Change the camera upward maximum speed (in pixels per second).

**Wait and catch up**  
Delay the camera according to a maximum speed and catch up the delay.

### Behavior conditions

**Camera offset X**  
Compare the camera offset on X axis of the object. This is not the current difference between the object and the camera position.

**Camera offset Y**  
Compare the camera offset on Y axis of the object. This is not the current difference between the object and the camera position.

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