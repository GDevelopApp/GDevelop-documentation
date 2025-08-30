# Depth effect

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Virtual Reality/Virtual Reality_vr_computer_3d_cube_screen_tv.svg" class="extension-icon"></img>
Change scale based on Y position to simulate depth of field.

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames).

---

The scale of the object decreases the closer it is to the horizon, giving the illusion that the object is travelling away from the viewer.

Properties:

- Horizon Y position (Default: 0)
- Max scale of the object when it is at the bottom of the screen (Default: 1)
- Y exponent can be used to control the rate of change  (Default: 2)

Tips:

- If you want speed to look constant, be sure to reduce the object's speed based on scale or Y value.  If you don't do this, the object will appear to be moving faster when it is near the top of the screen.  This matches how objects appear in the real world.
- This extension works well with the Y-sort extension, which changes Z order based on Y position.


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Depth effect 

The scale of the object decreases the closer it is to the horizon, giving the illusion that the object is travelling away from the viewer. 

### Behavior actions

**Set exponential rate of change**  
Set Y exponential rate of change (Default: 2).

**Set Y position of horizon**  
Set Y position of the horizon, where objects are infinitely small (Default: 0).

**Set max scale**  
Set max scale when the object is at the bottom of the screen (Default: 2).

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.DepthEffect_Sprite::ExponentY()` | Exponential rate of change, based on Y position. ||
| `Object.DepthEffect_Sprite::HorizonY()` | Y value of horizon. ||
| `Object.DepthEffect_Sprite::MaxScale()` | Max scale when the object is at the bottom of the screen. ||
| `Object.DepthEffect_Sprite::PercentAwayFromHorizon()` | Percent away from the horizon.  This is "0" at the horizon, and "1" at the bottom of the screen. ||


---

*This page is an auto-generated reference page about the **Depth effect** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).