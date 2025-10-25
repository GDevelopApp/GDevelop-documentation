# Auto typing animation for text ("typewriter" effect)

<img src="https://resources.gdevelop-app.com/assets/Icons/typewriter.svg" class="extension-icon"></img>
Reveal a text one letter after the other.

**Authors and contributors** to this experimental extension: [Bouh](https://gd.games/Bouh), [VictrisGames](https://gd.games/VictrisGames), [D8H](https://gd.games/D8H).

---

Reveal a text one letter after the other (a "typewriter" effect).

It can be used for dialogue scenes or visual novels on Text and Bitmap Text objects.

The top-down RPG example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://top-down-rpg)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Auto typing text 

Reveal a text one letter after the other. 

### Behavior actions

**Show Nth first characters**  
Jump to a specific position in the text. Positions start at "0" and increase by one for every character.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Character position

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AutoTyping::AutoTyping::JumpToPosition`.

**Restart typing from the beginning**  
Restart typing from the beginning of text. The autotyping also start automatically when a new text is set for the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AutoTyping::AutoTyping::RestartFromBeginning`.

**Time between characters**  
Change the time between characters beign typed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AutoTyping::AutoTyping::SetInterval`.

**Show the full text**  
Show the full text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AutoTyping::AutoTyping::ShowFullText`.

### Behavior conditions

**Has just typed**  
Check if a character has just been typed. Useful for triggering sound effects.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AutoTyping::AutoTyping::HasJustTyped`.

**Time between characters**  
Compare the time between characters beign typed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AutoTyping::AutoTyping::Interval`.

**Finished typing**  
Check if the full text has been typed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AutoTyping::AutoTyping::IsFinished`.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.AutoTyping::Interval()` | Return the time between characters beign typed. ||


---

*This page is an auto-generated reference page about the **Auto typing animation for text ("typewriter" effect)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).