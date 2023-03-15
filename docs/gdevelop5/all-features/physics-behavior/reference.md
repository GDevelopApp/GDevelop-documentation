# Physics Engine (deprecated)

This is the old, deprecated physics engine. Prefer to use the Physics Engine 2.0. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/behaviors/physics)



## Physics Engine 

Make objects move as if they are subject to the laws of physics. If you're creating a new game, prefer Physics Engine 2.0 

### Behavior actions

**Add a gear between two objects**  
Add a virtual gear between two objects.

**Add a hinge**  
Add a hinge that the object will rotate around.  
The distance between the hinge and the object will remain identical.

**Add a hinge between two objects**  
Add a hinge that the object will rotate around.

**Add a force**  
Add a force to the object

**Apply a force toward a position**  
Apply a force, directed toward a position, to the object.

**Apply a force ( angle )**  
Apply a force to an object, using an angle and a length as coordinates.

**Apply an impulse**  
Apply an impulse to the object.

**Apply an impulse toward a position**  
Apply an impulse, directed toward a position, to the object.

**Apply an impulse (angle)**  
Apply an impulse to an object, using an angle and a length as coordinates.

**Add a torque (a rotation)**  
Add a torque (a rotation) to the object.

**Do not treat object like a bullet**  
Do not treat the object like a bullet, so it will use standard collision handling.

**Angular damping**  
Modify the angular damping of the object.

**Angular speed**  
Modify the angular velocity of the object.

**Treat object like a bullet.**  
Treat the object like a bullet, so it will have better collision handling.

**Make the object dynamic**  
Make the object dynamic ( affected by forces and other objects ).

**Fix rotation**  
Prevent the object from rotating

**Make object's rotation free**  
Allows the object to rotate.

**Gravity**  
Modify the gravity

**Linear damping**  
Modify the linear damping of the object.

**Linear velocity**  
Modify the velocity of an object.

**Change the X scale of a collision polygon**  
Change the X scale of the polygon. Use a value greater than 1 to enlarge the polygon, less than 1 to reduce it.

**Change the Y scale of a collision polygon**  
Change the Y scale of the polygon. Use a value greater than 1 to enlarge the polygon, less than 1 to reduce it.

**Make the object static**  
Make the object immovable.

### Behavior conditions

**Angular damping**  
Test the object's angular damping

**Angular speed**  
Compare the angular speed of the object.

**Collision**  
Test if two objects are colliding.  
Attention! Only objects specified in the first parameter will be taken into account by the next actions and conditions, if they are colliding with the other objects.

**Collision polygon X scale**  
Test the value of the X scale of the collision polygon.

**Collision polygon Y scale**  
Test the value of the Y scale of the collision polygon.

**Object is treated like a bullet**  
Test if the object is treated like a bullet

**The object is dynamic**  
Test if an object is dynamic ( affected by forces and other objects ).

**Fixed rotation**  
Test if the object's rotation is fixed.

**Linear damping**  
Compare the linear damping of the object.

**Linear speed**  
Compare the linear velocity of the object.

**X component**  
Compare the linear velocity on the X axis of the object.

**Y component**  
Compare the linear velocity on the Y axis of the object.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|

| `Object.Physics::AngularDamping()` | Angular damping ||
| `Object.Physics::AngularVelocity()` | Angular speed ||
| `Object.Physics::LinearDamping()` | Linear damping ||
| `Object.Physics::LinearVelocity()` | Linear speed ||
| `Object.Physics::LinearVelocityX()` | X component ||
| `Object.Physics::LinearVelocityY()` | Y component ||
| `Object.Physics::PolygonScaleX()` | Collision polygon X scale ||
| `Object.Physics::PolygonScaleY()` | Collision polygon Y scale ||

---
*This page is an auto-generated reference page about the **Physics Engine (deprecated)** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).