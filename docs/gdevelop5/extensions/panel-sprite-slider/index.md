# Slider

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/UI Essentials/1678c39a3b2bd3df4f82a8a293770db4986a6bcfd3f78e738ddfc86e39176423_UI Essentials_sliders_options.svg" class="extension-icon"></img>
A draggable slider that users can move to select a numerical value.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H), [VictrisGames](https://gd.games/VictrisGames).

---

A draggable slider that users can move to select a numerical value. The slider can be customized with sprites.

There are ready-to-use sliders in the asset-store [settings UI pack](https://editor.gdevelop.io/?initial-dialog=asset-store&asset-pack=settings-ui-settings-ui).

[Read more...](/gdevelop5/objects/slider)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Slider 

Let users select a numerical value by dragging a slider. 

### Object actions

**De/activate interactions**  
De/activate interactions with the button.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Activate

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PanelSpriteSlider::PanelSpriteSlider::Activate`.

**Show label**  
Show (or hide) the label on the bar.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Show the label

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PanelSpriteSlider::PanelSpriteSlider::SetLabelShown`.

**Maximum value**  
Change the maximum value of the slider.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PanelSpriteSlider::PanelSpriteSlider::SetMaxValue`.

**Minimum value**  
Change the minimum value of the slider.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PanelSpriteSlider::PanelSpriteSlider::SetMinValue`.

**Step size**  
Change the step size of the slider.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PanelSpriteSlider::PanelSpriteSlider::SetStepSize`.

**Value**  
Change the value of the slider.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PanelSpriteSlider::PanelSpriteSlider::SetValue`.

### Object conditions

**Interactions activated**  
Check if the slider allows interactions.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteSlider::PanelSpriteSlider::IsActivated`.

**Being dragged**  
Check if the slider is being dragged.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteSlider::PanelSpriteSlider::IsBeingDragged`.

**Label is shown**  
Check if the label is shown.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteSlider::PanelSpriteSlider::IsLabelShown`.

**Maximum value**  
Compare the maximum value of the slider.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteSlider::PanelSpriteSlider::MaxValue`.

**Minimum value**  
Compare the minimum value of the slider.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteSlider::PanelSpriteSlider::MinValue`.

**Step size**  
Compare the step size of the slider.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteSlider::PanelSpriteSlider::StepSize`.

**Value**  
Compare the value of the slider.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteSlider::PanelSpriteSlider::Value`.

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.MaxValue()` | Return the maximum value of the slider. ||
| `Object.MinValue()` | Return the minimum value of the slider. ||
| `Object.StepSize()` | Return the step size of the slider. ||
| `Object.Value()` | Return the value of the slider. ||


---

*This page is an auto-generated reference page about the **Slider** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).