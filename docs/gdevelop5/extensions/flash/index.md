# Flash object

<img src="https://resources.gdevelop-app.com/assets/Icons/flash-outline.svg" class="extension-icon"></img>
Make an object flash visibility (blink), color tint, object effect, or opacity (fade).

**Authors and contributors** to this community extension: [4ian](https://gd.games/4ian), [Entropy](https://gd.games/Entropy), [VictrisGames](https://gd.games/VictrisGames).

---

Make an object flash for a period of time so that it alternates between two different states.
Includes the ability to flash visibility (blink), color tint, object effect, or opacity (fade).

After adding a behavior to an object, you **trigger the effect** by using the **Flash action**.

This can be used to:

- Let players know they are invincible after being hit
- Catch player attention on the interface (for instance a "press start" text)


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Flash visibility (blink) 

Make the object flash (blink) for a period of time so it alternates between visible and invisible. 

### Behavior actions

**Flash visibility (blink)**  
Make an object flash (blink) visibility for a period of time.

**Half period**  
Change the half period of the object (time the object is invisible).

**Stop flashing visibility (blink)**  
Stop flashing visibility (blink) of an object.

### Behavior conditions

**Half period**  
Compare the half period of the object (time the object is invisible).

**Is object flashing visibility**  
Check if an object is flashing visibility.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Flash::HalfPeriodTime()` | Return the half period of the object (time the object is invisible). ||

## Flash color tint 

Make an object flash a color tint for a period of time. 

### Behavior actions

**Flash a color tint**  
Make an object flash a color tint for a period of time.

**Half period**  
Change the half period (time between flashes) of the object.

**Stop flashing color tint**  
Stop flashing a color tint on an object.

### Behavior conditions

**Half period**  
Compare the half period (time between flashes) of the object.

**Is object flashing a color tint**  
Check if an object is flashing a color tint.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FlashColor::HalfPeriodTime()` | Return the half period (time between flashes) of the object. ||

## Flash effect 

Make the object flash an effect for a period of time. 

### Behavior actions

**Flash an effect**  
Make an object flash an effect for a period of time.

**Half period**  
Change the half period (time between flashes) of the object.

**Stop flashing an effect**  
Stop flashing an effect of an object.

### Behavior conditions

**Half period**  
Compare the half period (time between flashes) of the object.

**Is object flashing an effect**  
Check if an object is flashing an effect.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FlashEffect::HalfPeriodTime()` | Return the half period (time between flashes) of the object. ||

## Flash opacity smothly (fade) 

Flash opacity smoothly (fade) in a repeating loop. 

### Behavior actions

**Flash the opacity (fade)**  
Make an object flash opacity smoothly (fade) in a repeating loop.

**Half period**  
Change the half period (time between flashes) of the object.

**Stop flashing opacity**  
Stop flashing opacity of an object.

### Behavior conditions

**Half period**  
Compare the half period (time between flashes) of the object.

**Is object flashing opacity**  
Check if an object is flashing opacity.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FlashOpacity::HalfPeriodTime()` | Return the half period (time between flashes) of the object. ||

---

*This page is an auto-generated reference page about the **Flash object** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).