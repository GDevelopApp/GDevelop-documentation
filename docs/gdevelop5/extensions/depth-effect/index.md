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

[Read more...](https://victrisgames.itch.io/extension-sinemovement-and-deptheffect)

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

**Y position that represents a horizon where objects appear infinitely small  (Default: 0) property**  
Change the property value for the y position that represents a horizon where objects appear infinitely small  (Default: 0).

**Max scale when the object is at the bottom of the screen (Default: 1) property**  
Change the property value for the max scale when the object is at the bottom of the screen (Default: 1).

**Percent away from the horizon property**  
Change the property value for the percent away from the horizon.

**Exponential rate of change (Default: 2) property**  
Change the property value for the exponential rate of change (Default: 2).

### Behavior conditions

**Y position that represents a horizon where objects appear infinitely small  (Default: 0) property**  
Compare the property value for the y position that represents a horizon where objects appear infinitely small  (Default: 0).

**Max scale when the object is at the bottom of the screen (Default: 1) property**  
Compare the property value for the max scale when the object is at the bottom of the screen (Default: 1).

**Percent away from the horizon property**  
Compare the property value for the percent away from the horizon.

**Exponential rate of change (Default: 2) property**  
Compare the property value for the exponential rate of change (Default: 2).

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.DepthEffect_Sprite::ExponentY()` | Exponential rate of change, based on Y position. ||
| `Object.DepthEffect_Sprite::HorizonY()` | Y value of horizon. ||
| `Object.DepthEffect_Sprite::MaxScale()` | Max scale when the object is at the bottom of the screen. ||
| `Object.DepthEffect_Sprite::PercentAwayFromHorizon()` | Percent away from the horizon.  This is "0" at the horizon, and "1" at the bottom of the screen. ||
| `Object.DepthEffect_Sprite::PropertyHorizonY()` | Return the property value for the y position that represents a horizon where objects appear infinitely small  (Default: 0). ||
| `Object.DepthEffect_Sprite::PropertyMaxScale()` | Return the property value for the max scale when the object is at the bottom of the screen (Default: 1). ||
| `Object.DepthEffect_Sprite::PropertyPercentAwayFromHorizon()` | Return the property value for the percent away from the horizon. ||
| `Object.DepthEffect_Sprite::PropertyPowerY()` | Return the property value for the exponential rate of change (Default: 2). ||

## Depth effect 

The scale of the object decreases the closer it is to the horizon, giving the illusion that the object is travelling away from the viewer. 

### Behavior actions

**Set exponential rate of change**  
Set Y exponential rate of change (Default: 2).

**Set Y position of horizon**  
Set Y position of horizon, where objects are infinitely small (Default: 0).

**Set max scale**  
Set max scale when the object is at the bottom of the screen (Default: 2).

**Y position that represents a horizon where objects appear infinitely small  (Default: 0) property**  
Change the property value for the y position that represents a horizon where objects appear infinitely small  (Default: 0).

**Max scale when the object is on the bottom of the screen (Default: 1) property**  
Change the property value for the max scale when the object is on the bottom of the screen (Default: 1).

**Percent away from horizon property**  
Change the property value for the percent away from horizon.

**Exponential rate of change (Default: 2) property**  
Change the property value for the exponential rate of change (Default: 2).

### Behavior conditions

**Y position that represents a horizon where objects appear infinitely small  (Default: 0) property**  
Compare the property value for the y position that represents a horizon where objects appear infinitely small  (Default: 0).

**Max scale when the object is on the bottom of the screen (Default: 1) property**  
Compare the property value for the max scale when the object is on the bottom of the screen (Default: 1).

**Percent away from horizon property**  
Compare the property value for the percent away from horizon.

**Exponential rate of change (Default: 2) property**  
Compare the property value for the exponential rate of change (Default: 2).

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.DepthEffect_Text::ExponentY()` | Exponential rate of change in scale based on the Y position. ||
| `Object.DepthEffect_Text::HorizonY()` | Y value of horizon. ||
| `Object.DepthEffect_Text::MaxScale()` | Max scale when the object is at the bottom of the screen. ||
| `Object.DepthEffect_Text::PercentAwayFromHorizon()` | Percent away from horizon.  This is 0 at the horizon, and 1 at the bottom of the screen. ||
| `Object.DepthEffect_Text::PropertyHorizonY()` | Return the property value for the y position that represents a horizon where objects appear infinitely small  (Default: 0). ||
| `Object.DepthEffect_Text::PropertyMaxScale()` | Return the property value for the max scale when the object is on the bottom of the screen (Default: 1). ||
| `Object.DepthEffect_Text::PropertyPercentAwayFromHorizon()` | Return the property value for the percent away from horizon. ||
| `Object.DepthEffect_Text::PropertyPowerY()` | Return the property value for the exponential rate of change (Default: 2). ||

---

*This page is an auto-generated reference page about the **Depth effect** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).