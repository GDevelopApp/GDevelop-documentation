# Draggable slider (for Shape Painter)

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/UI Essentials/UI Essentials_sliders_options.svg" class="extension-icon"></img>
Shape Painter slider for selecting numerical values. Draggable thumb, configurable range/ticks.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H), [VictrisGames](https://gd.games/VictrisGames).

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


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Draggable slider 

Let users select a numerical value by dragging a slider. 

### Behavior properties

- **Active track color (thumb color by default)** (🔤 String). Default value is ` `.
- **Active track opacity** (🔢 Number). Default value is `255`.
- **Enable interactions** (🔘 Boolean). Default value is `true`.
- **Halo opacity (pressed)** (🔢 Number). Default value is `64`.
- **Halo opacity (hover)** (🔢 Number). Default value is `32`.
- **Halo size (hover)** (🔢 Number). Default value is `24`.
- **Inactive track color (thumb color by default)** (🔤 String).
- **Inactive track opacity** (🔢 Number). Default value is `96`.
- **Rounded track ends** (🔘 Boolean). Default value is `true`.
- **Thumb Color** (🎨 Color). Default value is ` 24;119;211`.
- **Thumb height** (🔢 Number). Default value is `20`.
- **Thumb opacity** (🔢 Number). Default value is `255`.
- **Thumb shape** (Choice, one of: "circle", "rectangle"). Default value is `circle`.
- **Thumb width** (🔢 Number). Default value is `20`.
- **Tick spacing** (🔢 Number). Default value is `0`.
- **Track length** (🔢 Number). Default value is `200`.
- **Track thickness** (🔢 Number). Default value is `4`.
- **Maximum value** (🔢 Number). Default value is `1`.
- **Minimum value** (🔢 Number). Default value is `0`.

??? quote "See internal technical details"


    - **Active track color (thumb color by default)** is stored as `ActiveTrackColor` (String). Default value is ` `.
    - **Active track opacity** is stored as `ActiveTrackOpacity` (Number). Default value is `255`.
    - **Enable interactions** is stored as `Enabled` (Boolean). Default value is `true`.
    - **Halo opacity (pressed)** is stored as `HaloOpacityClick` (Number). Default value is `64`.
    - **Halo opacity (hover)** is stored as `HaloOpacityHover` (Number). Default value is `32`.
    - **Halo size (hover)** is stored as `HaloRadius` (Number). Default value is `24`.
    - **Inactive track color (thumb color by default)** is stored as `InactiveTrackColor` (String). Default value is ``.
    - **Inactive track opacity** is stored as `InactiveTrackOpacity` (Number). Default value is `96`.
    - **Rounded track ends** is stored as `RoundedTrack` (Boolean). Default value is `true`.
    - **Thumb Color** is stored as `ThumbColor` (Color). Default value is ` 24;119;211`.
    - **Thumb height** is stored as `ThumbHeight` (Number). Default value is `20`.
    - **Thumb opacity** is stored as `ThumbOpacity` (Number). Default value is `255`.
    - **Thumb shape** is stored as `ThumbShape` (Choice). Default value is `circle`.
    - **Thumb width** is stored as `ThumbWidth` (Number). Default value is `20`.
    - **Tick spacing** is stored as `TickSpacing` (Number). Default value is `0`.
    - **Track length** is stored as `TrackLength` (Number). Default value is `200`.
    - **Track thickness** is stored as `TrackThickness` (Number). Default value is `4`.
    - **Maximum value** is stored as `ValueMax` (Number). Default value is `1`.
    - **Minimum value** is stored as `ValueMin` (Number). Default value is `0`.

### Behavior actions

**Active track color **  
Change the color of the track that is LEFT of the thumb.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🎨 Color): Active track color

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetActiveTrackColor`.

**Active track opacity**  
Change opacity of active track.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Active track opacity

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetActiveTrackOpacity`.

**Enable interactions**  
Enable or disable the slider. Users cannot interact while it is disabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Enable

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetEnabled`.

**Halo opacity (hover)**  
Change the halo opacity when the thumb is hovered.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Halo opacity (hover)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetHaloOpacityHover`.

**Halo opacity (pressed)**  
Change opacity of halo when pressed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Halo opacity (pressed)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetHaloOpacityPressed`.

**Halo radius**  
Change radius of the halo around the thumb.  This size is also used to detect interaction with the slider.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Halo radius

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetHaloRadius`.

**Inactive track color**  
Change the color of the track that is RIGHT of the thumb.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🎨 Color): Inactive track color

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetInactiveTrackColor`.

**Inactive track opacity**  
Change opacity of inactive track.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Inactive track opacity

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetInactiveTrackOpacity`.

**Rounded track ends**  
Make track use rounded ends.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Rounded track

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetRoundedTrack`.

**Thumb color**  
Change the thumb color to a specific value.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🎨 Color): Thumb color

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetThumbColor`.

**Thumb height**  
Change height of thumb.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Thumb height

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetThumbHeight`.

**Thumb opacity**  
Change opacity of thumb.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Thumb opacity

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetThumbOpacity`.

**Thumb shape**  
Change shape of thumb (circle or rectangle).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): New thumb shape (one of: "circle", "rectangle")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetThumbShape`.

**Thumb width**  
Change width of thumb.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Thumb width

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetThumbWidth`.

**Tick spacing**  
Change the tick spacing of a slider.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Tick spacing

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetTickSpacing`.

**Track length**  
Change length of track.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Track width

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetTrackLength`.

**Track thickness**  
Change thickness of track.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Track thickness

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetTrackThickness`.

**Slider value**  
Change the value of a slider (this will move the thumb to the correct position).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Slider value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetValue`.

**Slider maximum value**  
Change the maximum value of a slider.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Maximum value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetValueMax`.

**Slider minimum value**  
Change the minimum value of a slider.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Minimum value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::SetValueMin`.


### Behavior conditions

**Being dragged**  
Check if the slider is being dragged.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::IsBeingDragged`.

**Interactions enabled**  
Check if the slider interations are enabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `DraggableSliderControl::DraggableSliderControl::IsEnabled`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.DraggableSliderControl::ThumbHeight()` | Height of thumb. ||
| `Object.DraggableSliderControl::TickSpacing(number)` | The tick spacing of a slider. ||
| | _🔢 Number_ | Tick spacing |
| `Object.DraggableSliderControl::TrackLength()` | Length of track. ||
| `Object.DraggableSliderControl::TrackThickness()` | Thickness of track. ||
| `Object.DraggableSliderControl::Value()` | The value of the slider (based on position of the thumb). ||
| `Object.DraggableSliderControl::ValueMax()` | The maximum value of a slider. ||
| `Object.DraggableSliderControl::ValueMin()` | The minimum value of a slider. ||


---

*This page is an auto-generated reference page about the **Draggable slider (for Shape Painter)** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).