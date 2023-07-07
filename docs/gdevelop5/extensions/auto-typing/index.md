# Auto typing animation for text ("typewriter" effect)

<img src="https://resources.gdevelop-app.com/assets/Icons/typewriter.svg" class="extension-icon"></img>
Animate text to simulate it being written one character at at time (a "typewriter" effect).

**Authors and contributors** to this community extension: [Bouh](https://gd.games/Bouh), [VictrisGames](https://gd.games/VictrisGames).

---

Animate text to simulate it being written one character at at time (a "typewriter" effect), with a customizable time between each character. Useful for dialogue scenes or visual novels.

How to use:

- Add the behavior to a Text object (BBText, Bitmap Text object) and choose the interval between characters.

Tips:

- Change the typing speed with the "Change interval" action.
- Pause the typing and resume it at any time.
- Use the "Skip to end of text" action to give users a way to skip text they don't want to read 
- If the text changes, the automatic typing starts again from the beginning with the new text.
- Use a condition to check if the typing finished.
- Use a condition to check if a new text character was added. This is useful to trigger audio effects.
- Use the "CurrentCharacter" expression to know when a specific character was displayed.

The top-down RPG example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://top-down-rpg)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Auto typing text 

Animate text to simulate it being written one character at at time (a "typewriter" effect). 

### Behavior actions

**Time between characters**  
Change the time between characters being typed. 

**Jump to a specific position in the text**  
Jump to a specific position in the text. Positions start at "0" and increase by one for every character.

**Pause auto typing**  
Pause animation auto typing.

**Resume after pause**  
Resume auto typing after pause.

**Detect if a new text character was just displayed property**  
Update the property value for "detect if a new text character was just displayed".

**Text character that was most recently displayed property**  
Change the property value for the text character that was most recently displayed.

**Interval between characters in seconds. property**  
Change the property value for the interval between characters in seconds..

**Skip to the end of the text**  
Skip to the end of the text.

**Start at the beginning of the text**  
Start at the beginning of text.

**Toggle Detect if a new text character was just displayed property**  
Toggle the property value for detect if a new text character was just displayed.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**New text character was just displayed**  
Detect when a new text character is displayed. Useful for triggering sound effects.

**Detect if a new text character was just displayed property**  
Check the property value for detect if a new text character was just displayed.

**Text character that was most recently displayed property**  
Compare the property value for the text character that was most recently displayed.

**Interval between characters in seconds. property**  
Compare the property value for the interval between characters in seconds..

**Auto typing finished**  
Execute actions when the auto typing text ends.

**Typing on pause**  
Detect if the auto typing is on pause.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.BBText_AutoTyping::CurrentCharacter()` | Return the text character that was last displayed. ||
| `Object.BBText_AutoTyping::CurrentCharacterIndex()` | Return the index of the text character that was last displayed. ||
| `Object.BBText_AutoTyping::PropertyCurrentCharacter()` | Return the property value for the text character that was most recently displayed. ||
| `Object.BBText_AutoTyping::PropertyInterval()` | Return the property value for the interval between characters in seconds.. ||

## Auto typing text 

Animate text to simulate it being written one character at at time (a "typewriter" effect). 

### Behavior actions

**Time between characters**  
Change the time between characters being typed. 

**Jump to a specific position in the text**  
Jump to a specific position in the text. Positions start at "0" and increase by one for every character.

**Pause auto typing**  
Pause animation auto typing.

**Resume after pause**  
Resume auto typing after pause.

**Detect if a new text character was just displayed property**  
Update the property value for "detect if a new text character was just displayed".

**Text character that was most recently displayed property**  
Change the property value for the text character that was most recently displayed.

**Interval between characters in seconds. property**  
Change the property value for the interval between characters in seconds..

**Skip to the end of the text**  
Skip to the end of the text.

**Start at the beginning of the text**  
Start at the beginning of text.

**Toggle Detect if a new text character was just displayed property**  
Toggle the property value for detect if a new text character was just displayed.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**New text character was just displayed**  
Detect when a new text character is displayed. Useful for triggering sound effects.

**Detect if a new text character was just displayed property**  
Check the property value for detect if a new text character was just displayed.

**Text character that was most recently displayed property**  
Compare the property value for the text character that was most recently displayed.

**Interval between characters in seconds. property**  
Compare the property value for the interval between characters in seconds..

**Auto typing finished**  
Execute actions when the auto typing text ends.

**Typing on pause**  
Detect if the auto typing is on pause.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.BitmapText_AutoTyping::CurrentCharacter()` | Return the text character that was last displayed. ||
| `Object.BitmapText_AutoTyping::CurrentCharacterIndex()` | Return the index of the text character that was last displayed. ||
| `Object.BitmapText_AutoTyping::PropertyCurrentCharacter()` | Return the property value for the text character that was most recently displayed. ||
| `Object.BitmapText_AutoTyping::PropertyInterval()` | Return the property value for the interval between characters in seconds.. ||

## Auto typing text 

Animate text to simulate it being written one character at at time (a "typewriter" effect). 

### Behavior actions

**Time between characters**  
Change the time between characters being typed. 

**Jump to a specific position in the text**  
Jump to a specific position in the text. Positions start at "0" and increase by one for every character.

**Pause auto typing**  
Pause animation auto typing.

**Resume after pause**  
Resume auto typing after pause.

**Detect if a new text character was just displayed property**  
Update the property value for "detect if a new text character was just displayed".

**Text character that was most recently displayed property**  
Change the property value for the text character that was most recently displayed.

**Interval between characters in seconds. property**  
Change the property value for the interval between characters in seconds..

**Skip to the end of the text**  
Skip to the end of the text.

**Start at the beginning of the text**  
Start at the beginning of text.

**Toggle Detect if a new text character was just displayed property**  
Toggle the property value for detect if a new text character was just displayed.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**New text character was just displayed**  
Detect when a new text character is displayed. Useful for triggering sound effects.

**Detect if a new text character was just displayed property**  
Check the property value for detect if a new text character was just displayed.

**Text character that was most recently displayed property**  
Compare the property value for the text character that was most recently displayed.

**Interval between characters in seconds. property**  
Compare the property value for the interval between characters in seconds..

**Auto typing finished**  
Execute actions when the auto typing text ends.

**Typing on pause**  
Detect if the auto typing is on pause.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Text_AutoTyping::CurrentCharacter()` | Return the text character that was last displayed. ||
| `Object.Text_AutoTyping::CurrentCharacterIndex()` | Return the index of the text character that was last displayed. ||
| `Object.Text_AutoTyping::PropertyCurrentCharacter()` | Return the property value for the text character that was most recently displayed. ||
| `Object.Text_AutoTyping::PropertyInterval()` | Return the property value for the interval between characters in seconds.. ||

---

*This page is an auto-generated reference page about the **Auto typing animation for text ("typewriter" effect)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).