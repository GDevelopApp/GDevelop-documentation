# Auto typing animation for text ("typewriter" effect)

<img src="https://resources.gdevelop-app.com/assets/Icons/typewriter.svg" class="extension-icon"></img>
Reveal a text one letter after the other.

**Authors and contributors** to this community extension: [Bouh](https://gd.games/Bouh), [VictrisGames](https://gd.games/VictrisGames).

---

Reveal a text one letter after the other (a "typewriter" effect).

It can be used for dialogue scenes or visual novels.

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

**Skip to the end of the text**  
Skip to the end of the text.

**Start at the beginning of the text**  
Start at the beginning of text. When the text changes, the automatic typing starts again from the beginning with the new text.

### Behavior conditions

**New text character was just displayed**  
Detect when a new text character is displayed. Useful for triggering sound effects.

**Auto typing finished**  
Execute actions when the auto typing text ends.

**Typing on pause**  
Detect if the auto typing is on pause.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.BBText_AutoTyping::CurrentCharacter()` | Return the text character that was last displayed. ||
| `Object.BBText_AutoTyping::CurrentCharacterIndex()` | Return the index of the text character that was last displayed. ||

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

**Skip to the end of the text**  
Skip to the end of the text.

**Start at the beginning of the text**  
Start at the beginning of text. When the text changes, the automatic typing starts again from the beginning with the new text.

### Behavior conditions

**New text character was just displayed**  
Detect when a new text character is displayed. Useful for triggering sound effects.

**Auto typing finished**  
Execute actions when the auto typing text ends.

**Typing on pause**  
Detect if the auto typing is on pause.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.BitmapText_AutoTyping::CurrentCharacter()` | Return the text character that was last displayed. ||
| `Object.BitmapText_AutoTyping::CurrentCharacterIndex()` | Return the index of the text character that was last displayed. ||

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

**Skip to the end of the text**  
Skip to the end of the text.

**Start at the beginning of the text**  
Start at the beginning of text. When the text changes, the automatic typing starts again from the beginning with the new text.

### Behavior conditions

**New text character was just displayed**  
Detect when a new text character is displayed. Useful for triggering sound effects.

**Auto typing finished**  
Execute actions when the auto typing text ends.

**Typing on pause**  
Detect if the auto typing is on pause.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Text_AutoTyping::CurrentCharacter()` | Return the text character that was last displayed. ||
| `Object.Text_AutoTyping::CurrentCharacterIndex()` | Return the index of the text character that was last displayed. ||

---

*This page is an auto-generated reference page about the **Auto typing animation for text ("typewriter" effect)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).