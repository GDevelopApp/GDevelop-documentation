# Button states and effects

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/753a9a794bd885058159b7509f06f5a8f67f72decfccb9a1b0efee26f41c3c4c_gesture-tap-button.svg" class="extension-icon"></img>
Use any object as a button and change appearance according to user interactions.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H), [VictrisGames](https://gd.games/VictrisGames).

---

Use the "Button states" behavior to track user interactions with an object, including:


- Hovered
- Pressed
- Clicked
- Idle

Add additional behaviors to make juicy buttons with animated responses to user input:


- Size
- Color
- Animation
- Object effects

[Read more...](/gdevelop5/objects/button)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Button animation 

Change the animation of buttons according to their state. 

### Behavior properties

- **Focused state animation name** (🔤 String). The state is Focused when the button is hovered or held outside. Default value is `Focused`.
- **Idle state animation name** (🔤 String). Default value is `Idle`.
- **Pressed state animation name** (🔤 String). Default value is `Pressed`.

??? quote "See internal technical details"


    > This behavior must be used on an object also having a behavior with type "AnimatableCapability::AnimatableBehavior". This is stored on property `Animation`.

    > This behavior must be used on an object also having a behavior with type "ButtonStates::ButtonFSM". This is stored on property `ButtonFSM`.

    - **Focused state animation name** is stored as `FocusedAnimationName` (String). Default value is `Focused`.
    - **Idle state animation name** is stored as `IdleAnimationName` (String). Default value is `Idle`.
    - **Pressed state animation name** is stored as `PressedAnimationName` (String). Default value is `Pressed`.

### Behavior actions

**Focused state animation name**  
Change the focused state animation name of the object. The state is Focused when the button is hovered or held outside.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔤 String): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonAnimationName::SetFocusedAnimationName`.

**Idle state animation name**  
Change the idle state animation name of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔤 String): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonAnimationName::SetIdleAnimationName`.

**Pressed state animation name**  
Change the pressed state animation name of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔤 String): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonAnimationName::SetPressedAnimationName`.


### Behavior conditions

**Focused state animation name**  
Compare the focused state animation name of the object. The state is Focused when the button is hovered or held outside.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔤 String): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonAnimationName::FocusedAnimationName`.

**Idle state animation name**  
Compare the idle state animation name of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔤 String): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonAnimationName::IdleAnimationName`.

**Pressed state animation name**  
Compare the pressed state animation name of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔤 String): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonAnimationName::PressedAnimationName`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ButtonAnimationName::FocusedAnimationName()` | Return the focused state animation name of the object. The state is Focused when the button is hovered or held outside. ||
| `Object.ButtonAnimationName::IdleAnimationName()` | Return the idle state animation name of the object. ||
| `Object.ButtonAnimationName::PressedAnimationName()` | Return the pressed state animation name of the object. ||

## Button color tint tween 

Smoothly change the color tint of buttons according to their state. 

### Behavior properties

- **Fade-in duration** (🔢 Number, Duration). Default value is `0.10000000000000001`.
- **Fade-in easing** (Choice, one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo"). Default value is `easeInOutQuad`.
- **Fade-out duration** (🔢 Number, Duration). Default value is `0.20000000000000001`.
- **Fade-out easing** (Choice, one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo"). Default value is `easeInOutQuad`.
- **Focused state color tint** (🎨 Color). The state is Focused when the button is hovered or held outside. Default value is `192;192;192`.
- **Idle state color tint** (🎨 Color). Default value is `255;255;255`.
- **Pressed state color tint** (🎨 Color). Default value is `64;64;64`.

??? quote "See internal technical details"


    > This behavior must be used on an object also having a behavior with type "ButtonStates::ButtonFSM". This is stored on property `ButtonFSM`.

    - **Fade-in duration** is stored as `FadeInDuration` (Number). Unit is Second. Default value is `0.10000000000000001`.
    - **Fade-in easing** is stored as `FadeInEasing` (Choice). Default value is `easeInOutQuad`.
    - **Fade-out duration** is stored as `FadeOutDuration` (Number). Unit is Second. Default value is `0.20000000000000001`.
    - **Fade-out easing** is stored as `FadeOutEasing` (Choice). Default value is `easeInOutQuad`.
    - **Focused state color tint** is stored as `FocusedColorTint` (Color). Default value is `192;192;192`.
    - **Idle state color tint** is stored as `IdleColorTint` (Color). Default value is `255;255;255`.
    - **Pressed state color tint** is stored as `PressedColorTint` (Color). Default value is `64;64;64`.
    > This behavior must be used on an object also having a behavior with type "Tween::TweenBehavior". This is stored on property `Tween`.


### Behavior actions

**Fade-in duration**  
Change the fade-in duration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonColorTintTween::SetFadeInDuration`.

**Fade-in easing**  
Change the fade-in easing of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔤 String): Value (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonColorTintTween::SetFadeInEasing`.

**Fade-out duration**  
Change the fade-out duration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonColorTintTween::SetFadeOutDuration`.

**Fade-out easing**  
Change the fade-out easing of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔤 String): Value (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonColorTintTween::SetFadeOutEasing`.

**Focused state color tint**  
Change the focused state color tint of the object. The state is Focused when the button is hovered or held outside.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🎨 Color): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonColorTintTween::SetFocusedColorTint`.

**Idle state color tint**  
Change the idle state color tint of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🎨 Color): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonColorTintTween::SetIdleColorTint`.

**Pressed state color tint**  
Change the pressed state color tint of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🎨 Color): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonColorTintTween::SetPressedColorTint`.


### Behavior conditions

**Fade-in duration**  
Compare the fade-in duration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonColorTintTween::FadeInDuration`.

**Fade-in easing**  
Compare the fade-in easing of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔤 String): Value to compare (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonColorTintTween::FadeInEasing`.

**Fade-out duration**  
Compare the fade-out duration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonColorTintTween::FadeOutDuration`.

**Fade-out easing**  
Compare the fade-out easing of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔤 String): Value to compare (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonColorTintTween::FadeOutEasing`.

**Focused state color tint**  
Compare the focused state color tint of the object. The state is Focused when the button is hovered or held outside.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🎨 Color): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonColorTintTween::FocusedColorTint`.

**Idle state color tint**  
Compare the idle state color tint of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🎨 Color): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonColorTintTween::IdleColorTint`.

**Pressed state color tint**  
Compare the pressed state color tint of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🎨 Color): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonColorTintTween::PressedColorTint`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ButtonColorTintTween::FadeInDuration()` | Return the fade-in duration of the object. ||
| `Object.ButtonColorTintTween::FadeInEasing()` | Return the fade-in easing of the object. ||
| `Object.ButtonColorTintTween::FadeOutDuration()` | Return the fade-out duration of the object. ||
| `Object.ButtonColorTintTween::FadeOutEasing()` | Return the fade-out easing of the object. ||
| `Object.ButtonColorTintTween::FocusedColorTint()` | Return the focused state color tint of the object. The state is Focused when the button is hovered or held outside. ||
| `Object.ButtonColorTintTween::IdleColorTint()` | Return the idle state color tint of the object. ||
| `Object.ButtonColorTintTween::PressedColorTint()` | Return the pressed state color tint of the object. ||

## Button states 

Use objects as buttons. 

### Behavior conditions

**Is clicked**  
Check if the button was just clicked.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonFSM::IsClicked`.

**Is focused**  
Check if the button is either hovered or pressed but not hovered.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonFSM::IsFocused`.

**Is hovered**  
Check if the cursor is hovered over the button.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonFSM::IsHovered`.

**Is idle**  
Check if the button is not used.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonFSM::IsIdle`.

**Is pressed**  
Check if the button is currently being pressed with mouse or touch.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonFSM::IsPressed`.

**Is held outside**  
Check if the button is currently being pressed outside with mouse or touch.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonFSM::IsPressedOutside`.

**Touch id**  
Compare the touch id that is using the button or 0 if none.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonFSM::TouchId`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ButtonFSM::TouchId()` | Return the touch id that is using the button or 0 if none. ||

## Button object effect tween 

Smoothly change an effect on buttons according to their state. 

### Behavior properties

- **Effect name** (🔤 String). Default value is `Effect`.
- **Effect parameter** (🔤 String). The effect parameter names can be found in the effects tab with the "Show parameter names" action of the drop down menu.
- **Fade-in duration** (🔢 Number, Duration). Default value is `0.125`.
- **Fade-in easing** (Choice, one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo"). Default value is `easeInOutQuad`.
- **Fade-out duration** (🔢 Number, Duration). Default value is `0.5`.
- **Fade-out easing** (Choice, one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo"). Default value is `easeInOutQuad`.
- **Focused effect parameter value** (🔢 Number). The state is Focused when the button is hovered or held outside. Default value is `0`.
- **Idle effect parameter value** (🔢 Number). Default value is `0`.
- **Pressed effect parameter value** (🔢 Number). Default value is `0`.
- **Disable the effect in idle state** (🔘 Boolean). Default value is `false`.

??? quote "See internal technical details"


    > This behavior must be used on an object also having a behavior with type "ButtonStates::ButtonFSM". This is stored on property `ButtonFSM`.

    > This behavior must be used on an object also having a behavior with type "EffectCapability::EffectBehavior". This is stored on property `Effect`.

    - **Effect name** is stored as `EffectName` (String). Default value is `Effect`.
    - **Effect parameter** is stored as `EffectProperty` (String). Default value is ``.
    - **Fade-in duration** is stored as `FadeInDuration` (Number). Unit is Second. Default value is `0.125`.
    - **Fade-in easing** is stored as `FadeInEasing` (Choice). Default value is `easeInOutQuad`.
    - **Fade-out duration** is stored as `FadeOutDuration` (Number). Unit is Second. Default value is `0.5`.
    - **Fade-out easing** is stored as `FadeOutEasing` (Choice). Default value is `easeInOutQuad`.
    - **Focused effect parameter value** is stored as `FocusedValue` (Number). Default value is `0`.
    - **Idle effect parameter value** is stored as `IdleValue` (Number). Default value is `0`.
    - **Pressed effect parameter value** is stored as `PressedValue` (Number). Default value is `0`.
    - **Disable the effect in idle state** is stored as `ShouldDisableEffectInIdle` (Boolean). Default value is `false`.

### Behavior actions

**Effect parameter**  
Change the effect parameter of the object. The effect parameter names can be found in the effects tab with the "Show parameter names" action of the drop down menu.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Effect name
    - Parameter 3 (🔤 String): Parameter name

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffectTween::SetEffectProperty`.

**Fade-in duration**  
Change the fade-in duration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffectTween::SetFadeInDuration`.

**Fade-in easing**  
Change the fade-in easing of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔤 String): Value (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffectTween::SetFadeInEasing`.

**Fade-out duration**  
Change the fade-out duration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffectTween::SetFadeOutDuration`.

**Fade-out easing**  
Change the fade-out easing of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔤 String): Value (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffectTween::SetFadeOutEasing`.

**Focused effect parameter value**  
Change the focused effect parameter value of the object. The state is Focused when the button is hovered or held outside.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffectTween::SetFocusedValue`.

**Idle effect parameter value**  
Change the idle effect parameter value of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffectTween::SetIdleValue`.

**Pressed effect parameter value**  
Change the pressed effect parameter value of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffectTween::SetPressedValue`.


### Behavior conditions

**Effect name**  
Compare the effect name of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔤 String): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffectTween::EffectName`.

**Effect parameter**  
Compare the effect parameter of the object. The effect parameter names can be found in the effects tab with the "Show parameter names" action of the drop down menu.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔤 String): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffectTween::EffectProperty`.

**Fade-in duration**  
Compare the fade-in duration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffectTween::FadeInDuration`.

**Fade-in easing**  
Compare the fade-in easing of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔤 String): Value to compare (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffectTween::FadeInEasing`.

**Fade-out duration**  
Compare the fade-out duration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffectTween::FadeOutDuration`.

**Fade-out easing**  
Compare the fade-out easing of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔤 String): Value to compare (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffectTween::FadeOutEasing`.

**Focused effect parameter value**  
Compare the focused effect parameter value of the object. The state is Focused when the button is hovered or held outside.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffectTween::FocusedValue`.

**Idle effect parameter value**  
Compare the idle effect parameter value of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffectTween::IdleValue`.

**Pressed effect parameter value**  
Compare the pressed effect parameter value of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffectTween::PressedValue`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ButtonObjectEffectTween::EffectName()` | Return the effect name of the object. ||
| `Object.ButtonObjectEffectTween::EffectProperty()` | Return the effect parameter of the object. The effect parameter names can be found in the effects tab with the "Show parameter names" action of the drop down menu. ||
| `Object.ButtonObjectEffectTween::FadeInDuration()` | Return the fade-in duration of the object. ||
| `Object.ButtonObjectEffectTween::FadeInEasing()` | Return the fade-in easing of the object. ||
| `Object.ButtonObjectEffectTween::FadeOutDuration()` | Return the fade-out duration of the object. ||
| `Object.ButtonObjectEffectTween::FadeOutEasing()` | Return the fade-out easing of the object. ||
| `Object.ButtonObjectEffectTween::FocusedValue()` | Return the focused effect parameter value of the object. The state is Focused when the button is hovered or held outside. ||
| `Object.ButtonObjectEffectTween::IdleValue()` | Return the idle effect parameter value of the object. ||
| `Object.ButtonObjectEffectTween::PressedValue()` | Return the pressed effect parameter value of the object. ||

## Button object effects 

Enable effects on buttons based on their state. 

### Behavior properties

- **Focused state effect** (🔤 String). The state is Focused when the button is hovered or held outside.
- **Idle state effect** (🔤 String).
- **Pressed state effect** (🔤 String).

??? quote "See internal technical details"


    > This behavior must be used on an object also having a behavior with type "ButtonStates::ButtonFSM". This is stored on property `ButtonFSM`.

    > This behavior must be used on an object also having a behavior with type "EffectCapability::EffectBehavior". This is stored on property `Effect`.

    - **Focused state effect** is stored as `FocusedEffect` (String). Default value is ``.
    - **Idle state effect** is stored as `IdleEffect` (String). Default value is ``.
    - **Pressed state effect** is stored as `PressedEffect` (String). Default value is ``.

### Behavior actions

**Focused state effect**  
Change the focused state effect of the object. The state is Focused when the button is hovered or held outside.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔤 String): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffects::SetFocusedEffect`.

**Idle state effect**  
Change the idle state effect of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔤 String): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffects::SetIdleEffect`.

**Pressed state effect**  
Change the pressed state effect of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔤 String): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffects::SetPressedEffect`.


### Behavior conditions

**Focused state effect**  
Compare the focused state effect of the object. The state is Focused when the button is hovered or held outside.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔤 String): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffects::FocusedEffect`.

**Idle state effect**  
Compare the idle state effect of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔤 String): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffects::IdleEffect`.

**Pressed state effect**  
Compare the pressed state effect of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔤 String): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonObjectEffects::PressedEffect`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ButtonObjectEffects::FocusedEffect()` | Return the focused state effect of the object. The state is Focused when the button is hovered or held outside. ||
| `Object.ButtonObjectEffects::IdleEffect()` | Return the idle state effect of the object. ||
| `Object.ButtonObjectEffects::PressedEffect()` | Return the pressed state effect of the object. ||

## Button scale tween 

Smoothly resize buttons according to their state. 

### Behavior properties

- **Fade-in duration** (🔢 Number, Duration). Default value is `0.10000000000000001`.
- **Fade-in easing** (Choice, one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo"). Default value is `easeInOutQuad`.
- **Fade-out duration** (🔢 Number, Duration). Default value is `0.20000000000000001`.
- **Fade-out easing** (Choice, one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo"). Default value is `easeInOutQuad`.
- **Focused state size scale** (🔢 Number, Dimensionless). The state is Focused when the button is hovered or held outside. Default value is `1`.
- **Idle state size scale** (🔢 Number, Dimensionless). Default value is `1`.
- **Pressed state size scale** (🔢 Number, Dimensionless). Default value is `0.94999999999999996`.

??? quote "See internal technical details"


    > This behavior must be used on an object also having a behavior with type "ButtonStates::ButtonFSM". This is stored on property `ButtonFSM`.

    - **Fade-in duration** is stored as `FadeInDuration` (Number). Unit is Second. Default value is `0.10000000000000001`.
    - **Fade-in easing** is stored as `FadeInEasing` (Choice). Default value is `easeInOutQuad`.
    - **Fade-out duration** is stored as `FadeOutDuration` (Number). Unit is Second. Default value is `0.20000000000000001`.
    - **Fade-out easing** is stored as `FadeOutEasing` (Choice). Default value is `easeInOutQuad`.
    - **Focused state size scale** is stored as `FocusedScale` (Number). Unit is Dimensionless. Default value is `1`.
    - **Idle state size scale** is stored as `IdleScale` (Number). Unit is Dimensionless. Default value is `1`.
    - **Pressed state size scale** is stored as `PressedScale` (Number). Unit is Dimensionless. Default value is `0.94999999999999996`.
    > This behavior must be used on an object also having a behavior with type "ScalableCapability::ScalableBehavior". This is stored on property `Scale`.

    > This behavior must be used on an object also having a behavior with type "Tween::TweenBehavior". This is stored on property `Tween`.


### Behavior actions

**Fade-in duration**  
Change the fade-in duration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonScaleTween::SetFadeInDuration`.

**Fade-in easing**  
Change the fade-in easing of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔤 String): Value (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonScaleTween::SetFadeInEasing`.

**Fade-out duration**  
Change the fade-out duration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonScaleTween::SetFadeOutDuration`.

**Fade-out easing**  
Change the fade-out easing of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔤 String): Value (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonScaleTween::SetFadeOutEasing`.

**Focused state size scale**  
Change the focused state size scale of the object. The state is Focused when the button is hovered or held outside.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonScaleTween::SetFocusedScale`.

**Idle state size scale**  
Change the idle state size scale of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonScaleTween::SetIdleScale`.

**Pressed state size scale**  
Change the pressed state size scale of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ButtonStates::ButtonScaleTween::SetPressedScale`.


### Behavior conditions

**Fade-in duration**  
Compare the fade-in duration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonScaleTween::FadeInDuration`.

**Fade-in easing**  
Compare the fade-in easing of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔤 String): Value to compare (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonScaleTween::FadeInEasing`.

**Fade-out duration**  
Compare the fade-out duration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonScaleTween::FadeOutDuration`.

**Fade-out easing**  
Compare the fade-out easing of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔤 String): Value to compare (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonScaleTween::FadeOutEasing`.

**Focused state size scale**  
Compare the focused state size scale of the object. The state is Focused when the button is hovered or held outside.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonScaleTween::FocusedScale`.

**Idle state size scale**  
Compare the idle state size scale of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonScaleTween::IdleScale`.

**Pressed state size scale**  
Compare the pressed state size scale of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ButtonStates::ButtonScaleTween::PressedScale`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ButtonScaleTween::FadeInDuration()` | Return the fade-in duration of the object. ||
| `Object.ButtonScaleTween::FadeInEasing()` | Return the fade-in easing of the object. ||
| `Object.ButtonScaleTween::FadeOutDuration()` | Return the fade-out duration of the object. ||
| `Object.ButtonScaleTween::FadeOutEasing()` | Return the fade-out easing of the object. ||
| `Object.ButtonScaleTween::FocusedScale()` | Return the focused state size scale of the object. The state is Focused when the button is hovered or held outside. ||
| `Object.ButtonScaleTween::IdleScale()` | Return the idle state size scale of the object. ||
| `Object.ButtonScaleTween::PressedScale()` | Return the pressed state size scale of the object. ||


---

*This page is an auto-generated reference page about the **Button states and effects** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).