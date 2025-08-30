# Object Stack

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Videogames/Videogames_cards_game_solitaire_poker_blackjack_casino.svg" class="extension-icon"></img>
An ordered list of objects and a shuffle action.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

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

**Contain at**  
Check if the stack contains the object at a height.

**Contain between a range**  
Check if the stack contains the object between a range. The lower and upper bounds are included.

**Stack top**  
Check if an object is on the stack top.



## Object Stack 

Hold an ordered list of objects. 

### Behavior actions

**Add on top**  
Add the object on the top of the stack.

**Clear**  
Remove any object from the stack.

**Insert into the stack**  
Insert the object into the stack.

**Move all into the stack**  
Move all the object from a stack into another.

**Move all on top of the stack**  
Move all the object from a stack into another one at the top.

**Move into the stack**  
Move the objects from a stack into another.

**Remove from the stack**  
Remove the object from the stack.

**Shuffle**  
Shuffle the stack.

### Behavior conditions

**Stack height**  
Compare the number of objects in the stack.

**Is empty**  
Check if the stack is empty.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ObjectStack::Height()` | Return the number of objects in the stack. ||
| `Object.ObjectStack::HeightOf(object)` | The height of an element in the stack. ||
| | _👾 Object_ | Object |


---

*This page is an auto-generated reference page about the **Object Stack** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).