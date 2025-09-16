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

### Behavior actions

**Focused state animation name**  
Change the focused state animation name of the object. The state is Focused when the button is hovered or held outside.

**Idle state animation name**  
Change the idle state animation name of the object.

**Pressed state animation name**  
Change the pressed state animation name of the object.

### Behavior conditions

**Focused state animation name**  
Compare the focused state animation name of the object. The state is Focused when the button is hovered or held outside.

**Idle state animation name**  
Compare the idle state animation name of the object.

**Pressed state animation name**  
Compare the pressed state animation name of the object.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ButtonAnimationName::FocusedAnimationName()` | Return the focused state animation name of the object. The state is Focused when the button is hovered or held outside. ||
| `Object.ButtonAnimationName::IdleAnimationName()` | Return the idle state animation name of the object. ||
| `Object.ButtonAnimationName::PressedAnimationName()` | Return the pressed state animation name of the object. ||

## Button color tint tween 

Smoothly change the color tint of buttons according to their state. 

### Behavior actions

**Fade-in duration**  
Change the fade-in duration of the object.

**Fade-in easing**  
Change the fade-in easing of the object.

**Fade-out duration**  
Change the fade-out duration of the object.

**Fade-out easing**  
Change the fade-out easing of the object.

**Focused state color tint**  
Change the focused state color tint of the object. The state is Focused when the button is hovered or held outside.

**Idle state color tint**  
Change the idle state color tint of the object.

**Pressed state color tint**  
Change the pressed state color tint of the object.

### Behavior conditions

**Fade-in duration**  
Compare the fade-in duration of the object.

**Fade-in easing**  
Compare the fade-in easing of the object.

**Fade-out duration**  
Compare the fade-out duration of the object.

**Fade-out easing**  
Compare the fade-out easing of the object.

**Focused state color tint**  
Compare the focused state color tint of the object. The state is Focused when the button is hovered or held outside.

**Idle state color tint**  
Compare the idle state color tint of the object.

**Pressed state color tint**  
Compare the pressed state color tint of the object.

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

**Is focused**  
Check if the button is either hovered or pressed but not hovered.

**Is hovered**  
Check if the cursor is hovered over the button.

**Is idle**  
Check if the button is not used.

**Is pressed**  
Check if the button is currently being pressed with mouse or touch.

**Is held outside**  
Check if the button is currently being pressed outside with mouse or touch.

**Touch id**  
Compare the touch id that is using the button or 0 if none.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ButtonFSM::TouchId()` | Return the touch id that is using the button or 0 if none. ||

## Button object effect tween 

Smoothly change an effect on buttons according to their state. 

### Behavior actions

**Effect parameter**  
Change the effect parameter of the object. The effect parameter names can be found in the effects tab with the "Show parameter names" action of the drop down menu.

**Fade-in duration**  
Change the fade-in duration of the object.

**Fade-in easing**  
Change the fade-in easing of the object.

**Fade-out duration**  
Change the fade-out duration of the object.

**Fade-out easing**  
Change the fade-out easing of the object.

**Focused effect parameter value**  
Change the focused effect parameter value of the object. The state is Focused when the button is hovered or held outside.

**Idle effect parameter value**  
Change the idle effect parameter value of the object.

**Pressed effect parameter value**  
Change the pressed effect parameter value of the object.

### Behavior conditions

**Effect name**  
Compare the effect name of the object.

**Effect parameter**  
Compare the effect parameter of the object. The effect parameter names can be found in the effects tab with the "Show parameter names" action of the drop down menu.

**Fade-in duration**  
Compare the fade-in duration of the object.

**Fade-in easing**  
Compare the fade-in easing of the object.

**Fade-out duration**  
Compare the fade-out duration of the object.

**Fade-out easing**  
Compare the fade-out easing of the object.

**Focused effect parameter value**  
Compare the focused effect parameter value of the object. The state is Focused when the button is hovered or held outside.

**Idle effect parameter value**  
Compare the idle effect parameter value of the object.

**Pressed effect parameter value**  
Compare the pressed effect parameter value of the object.

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

### Behavior actions

**Focused state effect**  
Change the focused state effect of the object. The state is Focused when the button is hovered or held outside.

**Idle state effect**  
Change the idle state effect of the object.

**Pressed state effect**  
Change the pressed state effect of the object.

### Behavior conditions

**Focused state effect**  
Compare the focused state effect of the object. The state is Focused when the button is hovered or held outside.

**Idle state effect**  
Compare the idle state effect of the object.

**Pressed state effect**  
Compare the pressed state effect of the object.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ButtonObjectEffects::FocusedEffect()` | Return the focused state effect of the object. The state is Focused when the button is hovered or held outside. ||
| `Object.ButtonObjectEffects::IdleEffect()` | Return the idle state effect of the object. ||
| `Object.ButtonObjectEffects::PressedEffect()` | Return the pressed state effect of the object. ||

## Button scale tween 

Smoothly resize buttons according to their state. 

### Behavior actions

**Fade-in duration**  
Change the fade-in duration of the object.

**Fade-in easing**  
Change the fade-in easing of the object.

**Fade-out duration**  
Change the fade-out duration of the object.

**Fade-out easing**  
Change the fade-out easing of the object.

**Focused state size scale**  
Change the focused state size scale of the object. The state is Focused when the button is hovered or held outside.

**Idle state size scale**  
Change the idle state size scale of the object.

**Pressed state size scale**  
Change the pressed state size scale of the object.

### Behavior conditions

**Fade-in duration**  
Compare the fade-in duration of the object.

**Fade-in easing**  
Compare the fade-in easing of the object.

**Fade-out duration**  
Compare the fade-out duration of the object.

**Fade-out easing**  
Compare the fade-out easing of the object.

**Focused state size scale**  
Compare the focused state size scale of the object. The state is Focused when the button is hovered or held outside.

**Idle state size scale**  
Compare the idle state size scale of the object.

**Pressed state size scale**  
Compare the pressed state size scale of the object.

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

*This page is an auto-generated reference page about the **Button states and effects** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).