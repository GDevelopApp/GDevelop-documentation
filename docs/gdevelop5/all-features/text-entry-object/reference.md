# Text entry object Reference

Deprecated object that can be used to capture the text entered with a keyboard by a player. [Read more explanations about it.](/gdevelop5/objects/text_entry)



## Text entry 

Invisible object used to get the text entered with the keyboard. 

### Object actions

**De/activate capturing text input**  
Activate or deactivate the capture of text entered with keyboard.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Activate

**Text in memory**  
Modify text in memory of the object

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Text

### Object conditions

**Text input**  
Test if the object captured text entered with keyboard.

??? quote "See parameters"

    - Parameter 0: 👾 Object

**Text in memory**  
Test the text of a Text Entry object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Text to compare to

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.String()` | Text entered with keyboard ||



---

The Text entry object extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Text entry object** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).