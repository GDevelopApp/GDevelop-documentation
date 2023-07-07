# Behavior Remapper

<img src="https://resources.gdevelop-app.com/assets/Icons/alpha-w-box-outline.svg" class="extension-icon"></img>
Quickly remap Behavior controls to different keys. 

**Authors and contributors** to this community extension: [Add00](https://gd.games/Add00).

---

Make sure to disable default controls unless you want two keys to do the same action.

Actions have two versions. `custom` allow the movement keys to be changed to what ever you would like. `presets` provide a common key-bindings that can be selected from a list.

### Available Presets:

##### `WASD`

-	W: Up
-	A: Left
-	S: Down
-	D: Right
-	Space: Jump

##### `ZQSD`

-	Z: Up
-	Q: Left
-	S: Down
-	D: Right
-	Space: Jump

##### `Numpad` (Num lock must be disabled)

-	Numpad Up: Up
-	Numpad Left: Left
-	Numpad Down: Down
-	Numpad Right: Right
-	Numpad Return/Enter: Jump

##### `IJKL`

-	I: Up
-	J: Left
-	K: Down
-	L: Right
-	Return/Enter: Jump


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Remap Platformer controls 

Allows for the controls of a platformer behavior to be re-mapped via a single action. 

### Behavior actions

**Remap Platformer controls to a custom scheme**  
Remaps Platformer behavior controls to a custom control scheme.

**Remap Platformer controls to a preset**  
Remaps Platformer behavior controls to a preset control scheme.

**Down key property**  
Change the property value for the down key.

**Jump key property**  
Change the property value for the jump key.

**Left key property**  
Change the property value for the left key.

**Right key property**  
Change the property value for the right key.

**Up key property**  
Change the property value for the up key.

### Behavior conditions

**Down key property**  
Compare the property value for the down key.

**Jump key property**  
Compare the property value for the jump key.

**Left key property**  
Compare the property value for the left key.

**Right key property**  
Compare the property value for the right key.

**Up key property**  
Compare the property value for the up key.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.RemapForPlatformer::PropertyDown()` | Return the property value for the down key. ||
| `Object.RemapForPlatformer::PropertyJump()` | Return the property value for the jump key. ||
| `Object.RemapForPlatformer::PropertyLeft()` | Return the property value for the left key. ||
| `Object.RemapForPlatformer::PropertyRight()` | Return the property value for the right key. ||
| `Object.RemapForPlatformer::PropertyUp()` | Return the property value for the up key. ||

## Remap Top-down 

Allows for the controls of a Top-Down behavior to be re-mapped via a single action. 

### Behavior actions

**Remap Top-Down controls to a custom scheme**  
Remaps Top-Down behavior controls to a custom control scheme.

**Remap Top-Down controls to a preset**  
Remaps Top-Down behavior controls to a preset control scheme.

**Down key property**  
Change the property value for the down key.

**Left key property**  
Change the property value for the left key.

**Right key property**  
Change the property value for the right key.

**Up key property**  
Change the property value for the up key.

### Behavior conditions

**Down key property**  
Compare the property value for the down key.

**Left key property**  
Compare the property value for the left key.

**Right key property**  
Compare the property value for the right key.

**Up key property**  
Compare the property value for the up key.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.RemapForTopdown::PropertyDown()` | Return the property value for the down key. ||
| `Object.RemapForTopdown::PropertyLeft()` | Return the property value for the left key. ||
| `Object.RemapForTopdown::PropertyRight()` | Return the property value for the right key. ||
| `Object.RemapForTopdown::PropertyUp()` | Return the property value for the up key. ||

---

*This page is an auto-generated reference page about the **Behavior Remapper** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).