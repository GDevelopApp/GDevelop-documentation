# Bounce (using forces)

<img src="https://resources.gdevelop-app.com/assets/Icons/volleyball.svg" class="extension-icon"></img>
Bounce the object off another object it just touched.

**Authors and contributors** to this community extension: [4ian](https://gd.games/4ian).

---

Provides an action to make the object bounce from another object it just touched.

> ⚠️ This *won't work* with Physics engine or Platformer characters. This is working with objects that are moved using actions or behaviors using **the forces**.

The Breakout-like example uses this extension to make balls bounce ([open the project online](https://editor.gdevelop.io/?project=example://breakout)).

[Read more...](/gdevelop5/extensions/bounce/explanations)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Bounce 

Provides an action to make the object bounce from another object it just touched. Add a permanent force to the object and, when in collision with another one, use the action to make it bounce realistically. 

### Behavior actions

**Bounce off another object**  
Bounce the object off another object it is currently colliding with, according to the angle and the speed of forces applied on the object.  
Make sure to test for a collision between the two objects before launching this action. All the forces will be removed from the object, and a new permanent force will be added to make the object bounce.

**Bounce horizontally**  
Bounce the object off another object it is currently colliding with, according to the angle and the speed of forces applied on the object.  
The bounce will always be horizontal, like if the object is *colliding a perfectly vertical obstacle* (like paddles in a pong game). For example, if the object is arriving with an angle of exactly 0 degrees, it will bounce in the opposite direction: 180 degrees.

Make sure to test for a collision between the two objects before launching this action. All the forces will be removed from the object, and a new permanent force will be added to make the object bounce.

**Bounce off another object toward a specified angle**  
Bounce the object off another object it is currently colliding with, according to the angle and the speed of forces applied on the object.  
The bounce will always be calculated *to go toward the specified angle (the "normal angle")*. For example, if the object is arriving at this exact angle, it will bounce in the opposite direction.

Make sure to test for a collision between the two objects before launching this action. All the forces will be removed from the object, and a new permanent force will be added to make the object bounce.

**Bounce vertically**  
Bounce the object off another object it is currently colliding with, according to the angle and the speed of forces applied on the object.  
The bounce will always be vertical, like if the object is *colliding a perfectly horizontal obstacle* (like the top/bottom of the screen in a pong game). For example, if the object is arriving with an angle of exactly 90 degrees, it will bounce in the opposite direction: -90 degrees.

Make sure to test for a collision between the two objects before launching this action. All the forces will be removed from the object, and a new permanent force will be added to make the object bounce.

### Behavior conditions

**Bounce count**  
Compare the number of times this object has bounced off another object.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Bounce::BounceCount()` | Return the number of times this object has bounced off another object. ||

---

*This page is an auto-generated reference page about the **Bounce (using forces)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).