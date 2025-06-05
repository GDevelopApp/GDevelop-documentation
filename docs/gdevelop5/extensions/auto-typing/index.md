# Auto typing animation for text ("typewriter" effect)

<img src="https://resources.gdevelop-app.com/assets/Icons/typewriter.svg" class="extension-icon"></img>
Reveal a text one letter after the other.

**Authors and contributors** to this community extension: [Bouh](https://gd.games/Bouh), [VictrisGames](https://gd.games/VictrisGames), [D8H](https://gd.games/D8H).

---

Reveal a text one letter after the other (a "typewriter" effect).

It can be used for dialogue scenes or visual novels on Text, Bitmap Text and BBText objects.

The top-down RPG example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://top-down-rpg)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Auto typing text 

Reveal a text one letter after the other. 

### Behavior actions

**Show Nth first characters**  
Jump to a specific position in the text. Positions start at "0" and increase by one for every character.

**Restart typing from the beginning**  
Restart typing from the beginning of text. The autotyping also start automatically when a new text is set for the object.

**Time between characters**  
Change the time between characters beign typed.

**Show the full text**  
Show the full text.

### Behavior conditions

**Has just typed**  
Check if a character has just been typed. Useful for triggering sound effects.

**Time between characters**  
Compare the time between characters beign typed.

**Finished typing**  
Check if the full text has been typed.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.AutoTyping::Interval()` | Return the time between characters beign typed. ||

---

*This page is an auto-generated reference page about the **Auto typing animation for text ("typewriter" effect)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).