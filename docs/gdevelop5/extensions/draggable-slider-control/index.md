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

**Active track color (thumb color by default) property**  
Change the property value for the active track color (thumb color by default).

**Active track opacity property**  
Change the property value for the active track opacity.

**CurrentHaloRadius property**  
Change the property value for the currentHaloRadius.

**Enable interactions property**  
Update the property value for "enable interactions".

**HaloGrowSpeed property**  
Change the property value for the haloGrowSpeed.

**Halo opacity (pressed) property**  
Change the property value for the halo opacity (pressed).

**Halo opacity (hover) property**  
Change the property value for the halo opacity (hover).

**Halo size (hover) property**  
Change the property value for the halo size (hover).

**Inactive track color (thumb color by default) property**  
Change the property value for the inactive track color (thumb color by default).

**Inactive track opacity property**  
Change the property value for the inactive track opacity.

**IsBeingDragged property**  
Update the property value for "isBeingDragged".

**IsHovered property**  
Update the property value for "isHovered".

**MouseX property**  
Change the property value for the mouseX.

**MouseY property**  
Change the property value for the mouseY.

**NeedRedraw property**  
Update the property value for "needRedraw".

**Rounded track ends property**  
Update the property value for "rounded track ends".

**TargetHaloRadius property**  
Change the property value for the targetHaloRadius.

**Thumb Color property**  
Change the property value for the thumb Color.

**Thumb height property**  
Change the property value for the thumb height.

**ThumbOffset property**  
Change the property value for the thumbOffset.

**Thumb opacity property**  
Change the property value for the thumb opacity.

**Thumb shape property**  
Change the property value for the thumb shape.

**Thumb width property**  
Change the property value for the thumb width.

**Tick spacing property**  
Change the property value for the tick spacing.

**Track length property**  
Change the property value for the track length.

**Track thickness property**  
Change the property value for the track thickness.

**Value property**  
Change the property value for the value.

**Maximum value property**  
Change the property value for the maximum value.

**Minimum value property**  
Change the property value for the minimum value.

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

**Toggle Enable interactions property**  
Toggle the property value for enable interactions.  
If it was true, it will become false, and if it was false it will become true.

**Toggle IsBeingDragged property**  
Toggle the property value for isBeingDragged.  
If it was true, it will become false, and if it was false it will become true.

**Toggle IsHovered property**  
Toggle the property value for isHovered.  
If it was true, it will become false, and if it was false it will become true.

**Toggle NeedRedraw property**  
Toggle the property value for needRedraw.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Rounded track ends property**  
Toggle the property value for rounded track ends.  
If it was true, it will become false, and if it was false it will become true.

**Update hitbox**  
Update the hitbox.

### Behavior conditions

**Being dragged**  
Check if the slider is being dragged.

**Interactions enabled**  
Check if the slider interations are enabled.

**Active track color (thumb color by default) property**  
Compare the property value for the active track color (thumb color by default).

**Active track opacity property**  
Compare the property value for the active track opacity.

**CurrentHaloRadius property**  
Compare the property value for the currentHaloRadius.

**Enable interactions property**  
Check the property value for enable interactions.

**HaloGrowSpeed property**  
Compare the property value for the haloGrowSpeed.

**Halo opacity (pressed) property**  
Compare the property value for the halo opacity (pressed).

**Halo opacity (hover) property**  
Compare the property value for the halo opacity (hover).

**Halo size (hover) property**  
Compare the property value for the halo size (hover).

**Inactive track color (thumb color by default) property**  
Compare the property value for the inactive track color (thumb color by default).

**Inactive track opacity property**  
Compare the property value for the inactive track opacity.

**IsBeingDragged property**  
Check the property value for isBeingDragged.

**IsHovered property**  
Check the property value for isHovered.

**MouseX property**  
Compare the property value for the mouseX.

**MouseY property**  
Compare the property value for the mouseY.

**NeedRedraw property**  
Check the property value for needRedraw.

**Rounded track ends property**  
Check the property value for rounded track ends.

**TargetHaloRadius property**  
Compare the property value for the targetHaloRadius.

**Thumb Color property**  
Compare the property value for the thumb Color.

**Thumb height property**  
Compare the property value for the thumb height.

**ThumbOffset property**  
Compare the property value for the thumbOffset.

**Thumb opacity property**  
Compare the property value for the thumb opacity.

**Thumb shape property**  
Compare the property value for the thumb shape.

**Thumb width property**  
Compare the property value for the thumb width.

**Tick spacing property**  
Compare the property value for the tick spacing.

**Track length property**  
Compare the property value for the track length.

**Track thickness property**  
Compare the property value for the track thickness.

**Value property**  
Compare the property value for the value.

**Maximum value property**  
Compare the property value for the maximum value.

**Minimum value property**  
Compare the property value for the minimum value.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.DraggableSliderControl::PropertyActiveTrackColor()` | Return the property value for the active track color (thumb color by default). ||
| `Object.DraggableSliderControl::PropertyActiveTrackOpacity()` | Return the property value for the active track opacity. ||
| `Object.DraggableSliderControl::PropertyCurrentHaloRadius()` | Return the property value for the currentHaloRadius. ||
| `Object.DraggableSliderControl::PropertyHaloGrowSpeed()` | Return the property value for the haloGrowSpeed. ||
| `Object.DraggableSliderControl::PropertyHaloOpacityClick()` | Return the property value for the halo opacity (pressed). ||
| `Object.DraggableSliderControl::PropertyHaloOpacityHover()` | Return the property value for the halo opacity (hover). ||
| `Object.DraggableSliderControl::PropertyHaloRadius()` | Return the property value for the halo size (hover). ||
| `Object.DraggableSliderControl::PropertyInactiveTrackColor()` | Return the property value for the inactive track color (thumb color by default). ||
| `Object.DraggableSliderControl::PropertyInactiveTrackOpacity()` | Return the property value for the inactive track opacity. ||
| `Object.DraggableSliderControl::PropertyMouseX()` | Return the property value for the mouseX. ||
| `Object.DraggableSliderControl::PropertyMouseY()` | Return the property value for the mouseY. ||
| `Object.DraggableSliderControl::PropertyTargetHaloRadius()` | Return the property value for the targetHaloRadius. ||
| `Object.DraggableSliderControl::PropertyThumbColor()` | Return the property value for the thumb Color. ||
| `Object.DraggableSliderControl::PropertyThumbHeight()` | Return the property value for the thumb height. ||
| `Object.DraggableSliderControl::PropertyThumbOffset()` | Return the property value for the thumbOffset. ||
| `Object.DraggableSliderControl::PropertyThumbOpacity()` | Return the property value for the thumb opacity. ||
| `Object.DraggableSliderControl::PropertyThumbShape()` | Return the property value for the thumb shape. ||
| `Object.DraggableSliderControl::PropertyThumbWidth()` | Return the property value for the thumb width. ||
| `Object.DraggableSliderControl::PropertyTickSpacing()` | Return the property value for the tick spacing. ||
| `Object.DraggableSliderControl::PropertyTrackLength()` | Return the property value for the track length. ||
| `Object.DraggableSliderControl::PropertyTrackThickness()` | Return the property value for the track thickness. ||
| `Object.DraggableSliderControl::PropertyValue()` | Return the property value for the value. ||
| `Object.DraggableSliderControl::PropertyValueMax()` | Return the property value for the maximum value. ||
| `Object.DraggableSliderControl::PropertyValueMin()` | Return the property value for the minimum value. ||
| `Object.DraggableSliderControl::ThumbHeight()` | Height of thumb. ||
| `Object.DraggableSliderControl::TickSpacing(number)` | The tick spacing of a slider. ||
| | _number_ | Tick spacing |
| `Object.DraggableSliderControl::TrackLength()` | Length of track. ||
| `Object.DraggableSliderControl::TrackThickness()` | Thickness of track. ||
| `Object.DraggableSliderControl::Value()` | The value of the slider (based on position of the thumb). ||
| `Object.DraggableSliderControl::ValueMax()` | The maximum value of a slider. ||
| `Object.DraggableSliderControl::ValueMin()` | The minimum value of a slider. ||

---

*This page is an auto-generated reference page about the **Draggable slider (for Shape Painter)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).