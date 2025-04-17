# Input Manager

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/a85f9403cea5bc52457e445d4a200ed226e30c3493c927aa015d0bbdf847df01_keyboard-outline.svg" class="extension-icon"></img>
Adds support for input mapping with customizable axes and keys.

**Authors and contributors** to this community extension: [Cokiesyum](https://gd.games/Cokiesyum).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

---

## Features


- **Input Axes:**  
  - Define input axes with customizable positive and negative keys.  
  - Each axis returns a value of `-1`, `0`, or `1` based on the current input state.


- **Input Keys:**  
  - Create key mappings that return Boolean values (`true` when pressed, `false` when released).  
  - Utilize these conditions to trigger specific game events.


- **Predefined Configurations:**  
  - Includes actions to add default input configurations for both 2D and 3D games.  
  - **2D Inputs:**  
    - Horizontal axis mapped to `Right` (positive) and `Left` (negative).  
    - Vertical axis mapped to `Down` (positive) and `Up` (negative).  

  - **3D Inputs:**  
    - Horizontal axis mapped to `d` (positive) and `a` (negative).  
    - Vertical axis mapped to `w` (positive) and `s` (negative).  
    - Additional key mapping for actions such as "Jump" (Space).

## How It Works

The extension leverages GDevelop’s variable system and events to monitor and update the state of each input axis and key:


- **Axis Handling:**  
  The current value of each axis is stored in a variable and updated based on the state of the specified positive and negative keys. The value is normalized to `-1`, `0`, or `1` using a sign function, ensuring consistent input handling.


- **Key Monitoring:**  
  The extension continuously checks the state of individual keys, updating Boolean conditions that can be directly used within game events. This allows for precise control over game actions triggered by key presses or releases.

## Usage

1. **Adding Input Axes:**  
   - Use the action to add a new input axis by specifying a unique name along with the positive and negative key mappings.
   
2. **Adding Input Keys:**  
   - Define individual key inputs by associating a key with a specific name, which then returns a Boolean value based on its state.
   
3. **Implementing in Game Events:**  
   - Integrate the generated input values and conditions into your event system to control character movement, actions, and other game logic.
   
4. **Using Predefined Inputs:**  
   - For rapid setup, apply the predefined 2D or 3D input configurations to establish standard controls without additional configuration.


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Add default 2D Inputs**  
Adds a "Horizontal" axis (Right for positive, Left for negative) and a "Vertical" axis (Down for positive, Up for negative). Also adds a "Jump" key mapped to the spacebar.

**Add default 3D Inputs**  
Adds a "Horizontal" axis (d for positive, a for negative) and a "Vertical" axis (w for positive, s for negative). Also adds a "Jump" key mapped to the spacebar.

**Add input key**  
Adds a key to an input; if the input doesn't exist, it will be created automatically.

**Add input Axis**  
Adds a positive and negative key to an input axis; if the axis doesn't exist, it will be created automatically.

## Conditions

**Input pressed**  
Checks if any key from an input is being pressed.

**Input pressed**  
Checks if any key from an input has just been released.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `InputManager::InputAxis(string)` | Returns the value from an input axis. ||
| | _string_ | Name |

---

*This page is an auto-generated reference page about the **Input Manager** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).