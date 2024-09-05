# Draggable slider (for Shape Painter)

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/UI Essentials/UI Essentials_sliders_options.svg" class="extension-icon"></img>
A draggable slider that users can move to select a numerical value.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H), [VictrisGames](https://gd.games/VictrisGames).

---

Draws a draggable slider that users can move to select a numerical value.
The value range, tick spacing, and the appearance of the slider can be defined with properties.

How to use:

- Add this behavior a **Shape Painter** object
- Place an instance of that shape painter on the screen where you want the slider to appear
- Use the "Value" expression to find the Value based on the position of the slider

Tips:

- You can disable the slider to prevent a user from interacting with it
- You can set the Value of the slider and the slider will move to the correct position

Further details can be found in [this tutorial video](https://youtu.be/iiTUwdAT_hs).

Breaking changes (1.0.0)

- Track thickness and length properties replaced track width and height. These 2 properties must be set again if they were different from the default size.
- Hidden sliders can be dragged. The "enable" action must be used to disable them.


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Draggable slider 

Let users select a numerical value by dragging a slider. 

### Behavior actions

**Active track color **  
Change the color of the track that is LEFT of the thumb.

**Active track opacity**  
Change opacity of active track.

**Enable interactions**  
Enable or disable the slider. Users cannot interact while it is disabled.

**Halo opacity (hover)**  
Change the halo opacity when the thumb is hovered.

**Halo opacity (pressed)**  
Change opacity of halo when pressed.

**Halo radius**  
Change radius of the halo around the thumb.  This size is also used to detect interaction with the slider.

**Inactive track color**  
Change the color of the track that is RIGHT of the thumb.

**Inactive track opacity**  
Change opacity of inactive track.

**Rounded track ends**  
Make track use rounded ends.

**Thumb color**  
Change the thumb color to a specific value.

**Thumb height**  
Change height of thumb.

**Thumb opacity**  
Change opacity of thumb.

**Thumb shape**  
Change shape of thumb (circle or rectangle).

**Thumb width**  
Change width of thumb.

**Tick spacing**  
Change the tick spacing of a slider.

**Track length**  
Change length of track.

**Track thickness**  
Change thickness of track.

**Slider value**  
Change the value of a slider (this will move the thumb to the correct position).

**Slider maximum value**  
Change the maximum value of a slider.

**Slider minimum value**  
Change the minimum value of a slider.

### Behavior conditions

**Being dragged**  
Check if the slider is being dragged.

**Interactions enabled**  
Check if the slider interations are enabled.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.DraggableSliderControl::ThumbHeight()` | Height of thumb. ||
| `Object.DraggableSliderControl::TickSpacing()` | The tick spacing of a slider. ||
| `Object.DraggableSliderControl::TrackLength()` | Length of track. ||
| `Object.DraggableSliderControl::TrackThickness()` | Thickness of track. ||
| `Object.DraggableSliderControl::Value()` | The value of the slider (based on position of the thumb). ||
| `Object.DraggableSliderControl::ValueMax()` | The maximum value of a slider. ||
| `Object.DraggableSliderControl::ValueMin()` | The minimum value of a slider. ||

---

*This page is an auto-generated reference page about the **Draggable slider (for Shape Painter)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).