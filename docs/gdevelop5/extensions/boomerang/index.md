# Boomerang

<img src="https://resources.gdevelop-app.com/assets/Icons/boomerang.svg" class="extension-icon"></img>
Throw an object that returns to the thrower like a boomerang.

**Authors and contributors** to this community extension: [Entropy](https://gd.games/Entropy), [VictrisGames](https://gd.games/VictrisGames).

---

Throw an object that returns to the thrower after a length of time, or when an action is used to return it.

How to throw a boomerang: 

- Create a bomerang object that has this behavior
- Use one of the "Throw boomerang..." actions
- Run the "Track location of thrower" action every frame so the boomerang returns correctly

Tips:

- If you want the boomerang to bounce off objects, check for collisions and then use the action "Send boomerang back to thrower"

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Boomerang 

Throw an object that returns to the thrower like a boomerang. 

### Behavior actions

**Send boomerang back to thrower**  
Send boomerang back to thrower.

**Boomerang is returning property**  
Update the property value for "boomerang is returning".

**Time before changing directions (seconds) property**  
Change the property value for the time before changing directions (seconds).

**Rotation (degrees per second) property**  
Change the property value for the rotation (degrees per second).

**Throw speed (pixels per second) property**  
Change the property value for the throw speed (pixels per second).

**Thrower X position property**  
Change the property value for the thrower X position.

**Thrower Y position property**  
Change the property value for the thrower Y position.

**Set amount of time before boomerang changes directions**  
Set amount of time before boomerang changes directions (seconds).

**Throw boomerang toward an angle**  
Throw boomerang toward an angle.

**Throw boomerang toward a position**  
Throw boomerang toward a position.

**Toggle Boomerang is returning property**  
Toggle the property value for boomerang is returning.  
If it was true, it will become false, and if it was false it will become true.

**Track position of boomerang thrower**  
Track position of boomerang thrower.

### Behavior conditions

**Boomerang is returning to thrower**  
Boomerang is returning to thrower.

**Boomerang is returning property**  
Check the property value for boomerang is returning.

**Time before changing directions (seconds) property**  
Compare the property value for the time before changing directions (seconds).

**Rotation (degrees per second) property**  
Compare the property value for the rotation (degrees per second).

**Throw speed (pixels per second) property**  
Compare the property value for the throw speed (pixels per second).

**Thrower X position property**  
Compare the property value for the thrower X position.

**Thrower Y position property**  
Compare the property value for the thrower Y position.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Boomerang::PropertyReturnTime()` | Return the property value for the time before changing directions (seconds). ||
| `Object.Boomerang::PropertyRotation()` | Return the property value for the rotation (degrees per second). ||
| `Object.Boomerang::PropertyThrowSpeed()` | Return the property value for the throw speed (pixels per second). ||
| `Object.Boomerang::PropertyThrowerX()` | Return the property value for the thrower X position. ||
| `Object.Boomerang::PropertyThrowerY()` | Return the property value for the thrower Y position. ||

---

*This page is an auto-generated reference page about the **Boomerang** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).