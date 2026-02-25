# Object Stack

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Videogames/Videogames_cards_game_solitaire_poker_blackjack_casino.svg" class="extension-icon"></img>
An ordered list of objects and a shuffle action.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

This keep in memory a stack of object instances, with:

* Actions to modify the stack,
* Conditions to access the objects of a stack,
* A shuffle action.

It can be helpful for:

* Card games
* Fair randomness (for instance, to create a stack of predetermined bonus and randomize the order they appear)

3 examples use it:

* a card system demonstration ([open the project online](https://editor.gdevelop.io/?project=example://card-system))
* a Klondike solitaire ([open the project online](https://editor.gdevelop.io/?project=example://klondike-solitaire))
* a Zuma-like ([open the project online](https://editor.gdevelop.io/?project=example://smoothy))

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Conditions

**Contain**  
Check if the stack contains the object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Stack
    - Parameter 2 (🧩 Behavior): Stack behavior
    - Parameter 3 (👾 Object): Element

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ObjectStack::Contains`.

**Contain at**  
Check if the stack contains the object at a height.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Stack
    - Parameter 2 (🧩 Behavior): Stack behavior
    - Parameter 3 (👾 Object): Element
    - Parameter 4 (🔢 Number): Height

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ObjectStack::ContainsAt`.

**Contain between a range**  
Check if the stack contains the object between a range. The lower and upper bounds are included.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Stack
    - Parameter 2 (🧩 Behavior): Stack behavior
    - Parameter 3 (👾 Object): Element
    - Parameter 4 (🔢 Number): Lower bound
    - Parameter 5 (🔢 Number): Upper bound

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ObjectStack::ContainsBetween`.

**Stack top**  
Check if an object is on the stack top.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Stack
    - Parameter 2 (🧩 Behavior): Stack behavior
    - Parameter 3 (👾 Object): Element

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ObjectStack::HasOnTop`.




## Object Stack 

Hold an ordered list of objects. 

### Behavior actions

**Add on top**  
Add the object on the top of the stack.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 👾 Object

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectStack::ObjectStack::AddOnTop`.

**Clear**  
Remove any object from the stack.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectStack::ObjectStack::Clear`.

**Insert into the stack**  
Insert the object into the stack.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 👾 Object
    - Parameter 3 (🔢 Number): Height

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectStack::ObjectStack::Insert`.

**Move all into the stack**  
Move all the object from a stack into another.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Height
    - Parameter 3 (👾 Object): Stack
    - Parameter 4 (🧩 Behavior): Stack behavior

    > Technical note: parameter 5 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectStack::ObjectStack::MoveAllInto`.

**Move all on top of the stack**  
Move all the object from a stack into another one at the top.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Stack
    - Parameter 3 (🧩 Behavior): Stack behavior

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectStack::ObjectStack::MoveAllOnTop`.

**Move into the stack**  
Move the objects from a stack into another.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Height
    - Parameter 3 (👾 Object): Stack
    - Parameter 4 (🧩 Behavior): Stack behavior
    - Parameter 5 (🔢 Number): Lower bound
    - Parameter 6 (🔢 Number): Upper bound

    > Technical note: parameter 7 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectStack::ObjectStack::MoveInto`.

**Remove from the stack**  
Remove the object from the stack.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 👾 Object

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectStack::ObjectStack::Remove`.

**Shuffle**  
Shuffle the stack.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectStack::ObjectStack::Shuffle`.


### Behavior conditions

**Stack height**  
Compare the number of objects in the stack.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ObjectStack::ObjectStack::Height`.

**Is empty**  
Check if the stack is empty.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ObjectStack::ObjectStack::IsEmpty`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ObjectStack::Height()` | Return the number of objects in the stack. ||
| `Object.ObjectStack::HeightOf(object)` | The height of an element in the stack. ||
| | _👾 Object_ | Object |


---

*This page is an auto-generated reference page about the **Object Stack** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).