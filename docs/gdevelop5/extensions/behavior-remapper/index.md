# Platformer and top-down remapper

<img src="https://resources.gdevelop-app.com/assets/Icons/alpha-w-box-outline.svg" class="extension-icon"></img>
Quickly remap keyboard controls.

**Authors and contributors** to this experimental extension: [Add00](https://gd.games/Add00).

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



## Platformer keyboard mapper 

Remap keyboard controls of the platformer character movement. 

### Behavior actions

**Remap Platformer controls to a custom scheme**  
Remaps Platformer behavior controls to a custom control scheme.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (keyboardKey): Up key
    - Parameter 3 (keyboardKey): Left key
    - Parameter 4 (keyboardKey): Down key
    - Parameter 5 (keyboardKey): Right key
    - Parameter 6 (keyboardKey): Jump key

    > Technical note: parameter 7 are internal parameters handled by GDevelop.

**Remap Platformer controls to a preset**  
Remaps Platformer behavior controls to a preset control scheme.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Preset name (one of: "WASD", "ZQSD", "Numpad", "IJKL")

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

_No expressions for this behavior._


## Top-down keyboard remapper 

Remap keyboard controls of the top-down movement. 

### Behavior actions

**Remap Top-Down controls to a custom scheme**  
Remaps Top-Down behavior controls to a custom control scheme.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (keyboardKey): Up key
    - Parameter 3 (keyboardKey): Left key
    - Parameter 4 (keyboardKey): Down key
    - Parameter 5 (keyboardKey): Right key

    > Technical note: parameter 6 are internal parameters handled by GDevelop.

**Remap Top-Down controls to a preset**  
Remaps Top-Down behavior controls to a preset control scheme.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Preset name (one of: "WASD", "ZQSD", "Numpad", "IJKL")

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Platformer and top-down remapper** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).