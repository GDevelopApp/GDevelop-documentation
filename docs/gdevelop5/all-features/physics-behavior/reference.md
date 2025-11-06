# Physics Engine (deprecated) Reference

This is the old, deprecated physics engine. Prefer to use the Physics Engine 2.0. [Read more explanations about it.](/gdevelop5/behaviors/physics)



## Physics Engine 

Make objects move as if they are subject to the laws of physics. If you're creating a new game, prefer Physics Engine 2.0 

### Behavior properties

- **Angular Damping** (). Default value is `0.1`.
- **Consider as bullet (better collision handling)** (🔘 Boolean). Default value is `false`.
- **Dynamic object** (🔘 Boolean). Default value is `true`.
- **Fixed rotation** (🔘 Boolean). Default value is `false`.
- **Friction** (). Default value is `0.8`.
- **Linear Damping** (). Default value is `0.1`.
- **Mass density** (). Default value is `1`.
- **PLEASE_ALSO_SHOW_EDIT_BUTTON_THANKS** ().
- **Restitution (elasticity)** (). Default value is `0`.
- **Shape** (Choice, one of: "Box (rectangle)", "Circle"). Default value is `Box (rectangle)`.

??? quote "See internal technical details"


    - **Angular Damping** is stored as `Angular Damping` (). Default value is `0.1`.
    - **Consider as bullet (better collision handling)** is stored as `Consider as bullet (better collision handling)` (Boolean). Default value is `false`.
    - **Dynamic object** is stored as `Dynamic object` (Boolean). Default value is `true`.
    - **Fixed rotation** is stored as `Fixed rotation` (Boolean). Default value is `false`.
    - **Friction** is stored as `Friction` (). Default value is `0.8`.
    - **Linear Damping** is stored as `Linear Damping` (). Default value is `0.1`.
    - **Mass density** is stored as `Mass density` (). Default value is `1`.
    - **PLEASE_ALSO_SHOW_EDIT_BUTTON_THANKS** is stored as `PLEASE_ALSO_SHOW_EDIT_BUTTON_THANKS` (). Default value is ``.
    - **Restitution (elasticity)** is stored as `Restitution (elasticity)` (). Default value is `0`.
    - **Shape** is stored as `Shape` (Choice). Default value is `Box (rectangle)`.

### Behavior shared properties

- **Gravity on X axis (in m/s²)** (). Default value is `0`.
- **Gravity on Y axis (in m/s²)** (). Default value is `9`.
- **X Scale: number of pixels for 1 meter** (). Default value is `100`.
- **Y Scale: number of pixels for 1 meter** (). Default value is `100`.

??? quote "See internal technical details"


    - **Gravity on X axis (in m/s²)** is stored as `Gravity on X axis (in m/s²)` (). Default value is `0`.
    - **Gravity on Y axis (in m/s²)** is stored as `Gravity on Y axis (in m/s²)` (). Default value is `9`.
    - **X Scale: number of pixels for 1 meter** is stored as `X Scale: number of pixels for 1 meter` (). Default value is `100`.
    - **Y Scale: number of pixels for 1 meter** is stored as `Y Scale: number of pixels for 1 meter` (). Default value is `100`.

### Behavior actions

**Add a gear between two objects**  
Add a virtual gear between two objects.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 👾 Object
    - Parameter 3 (🔢 Number): Ratio

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::ActAddGearJointBetweenObjects`.

**Add a hinge**  
Add a hinge that the object will rotate around.  
The distance between the hinge and the object will remain identical.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Hinge X position
    - Parameter 3 (🔢 Number): Hinge Y position

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::AddRevoluteJoint`.

**Add a hinge between two objects**  
Add a hinge that the object will rotate around.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 👾 Object
    - Parameter 4 (🔢 Number): X position of the hinge, from the first object mass center
    - Parameter 5 (🔢 Number): Y position of the hinge, from the first object mass center

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::AddRevoluteJointBetweenObjects`.

**Add a force**  
Add a force to the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X component ( Newtons )
    - Parameter 3 (🔢 Number): Y component ( Newtons )

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::ApplyForce`.

**Apply a force toward a position**  
Apply a force, directed toward a position, to the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X position
    - Parameter 3 (🔢 Number): Y position
    - Parameter 4 (🔢 Number): Length of the force ( Newtons )

    > Technical note: parameter 5 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::ApplyForceTowardPosition`.

**Apply a force ( angle )**  
Apply a force to an object, using an angle and a length as coordinates.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle
    - Parameter 3 (🔢 Number): Length of the force ( Newtons )

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::ApplyForceUsingPolarCoordinates`.

**Apply an impulse**  
Apply an impulse to the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X component ( Newtons/Seconds )
    - Parameter 3 (🔢 Number): Y component ( Newtons/Seconds )

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::ApplyImpulse`.

**Apply an impulse toward a position**  
Apply an impulse, directed toward a position, to the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X position
    - Parameter 3 (🔢 Number): Y position
    - Parameter 4 (🔢 Number): Impulse value ( Newton/seconds )

    > Technical note: parameter 5 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::ApplyImpulseTowardPosition`.

**Apply an impulse (angle)**  
Apply an impulse to an object, using an angle and a length as coordinates.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle
    - Parameter 3 (🔢 Number): Impulse value ( Newton/seconds )

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::ApplyImpulseUsingPolarCoordinates`.

**Add a torque (a rotation)**  
Add a torque (a rotation) to the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Torque value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::ApplyTorque`.

**Do not treat object like a bullet**  
Do not treat the object like a bullet, so it will use standard collision handling.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::DontSetAsBullet`.

**Angular damping**  
Modify the angular damping of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::SetAngularDamping`.

**Angular speed**  
Modify the angular velocity of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): New value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::SetAngularVelocity`.

**Treat object like a bullet.**  
Treat the object like a bullet, so it will have better collision handling.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::SetAsBullet`.

**Make the object dynamic**  
Make the object dynamic ( affected by forces and other objects ).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::SetDynamic`.

**Fix rotation**  
Prevent the object from rotating

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::SetFixedRotation`.

**Make object's rotation free**  
Allows the object to rotate.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::SetFreeRotation`.

**Gravity**  
Modify the gravity

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X Coordinate
    - Parameter 3 (🔢 Number): Y Coordinate

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::SetGravity`.

**Linear damping**  
Modify the linear damping of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::SetLinearDamping`.

**Linear velocity**  
Modify the velocity of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X Coordinate
    - Parameter 3 (🔢 Number): Y Coordinate

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::SetLinearVelocity`.

**Change the X scale of a collision polygon**  
Change the X scale of the polygon. Use a value greater than 1 to enlarge the polygon, less than 1 to reduce it.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Scale

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::SetPolygonScaleX`.

**Change the Y scale of a collision polygon**  
Change the Y scale of the polygon. Use a value greater than 1 to enlarge the polygon, less than 1 to reduce it.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Scale

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::SetPolygonScaleY`.

**Make the object static**  
Make the object immovable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsBehavior::SetStatic`.


### Behavior conditions

**Angular damping**  
Test the object's angular damping

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsBehavior::AngularDamping`.

**Angular speed**  
Compare the angular speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsBehavior::AngularVelocity`.

**Collision**  
Test if two objects are colliding.  
Attention! Only objects specified in the first parameter will be taken into account by the next actions and conditions, if they are colliding with the other objects.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 👾 Object

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsBehavior::CollisionWith`.

**Collision polygon X scale**  
Test the value of the X scale of the collision polygon.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsBehavior::GetPolygonScaleX`.

**Collision polygon Y scale**  
Test the value of the Y scale of the collision polygon.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsBehavior::GetPolygonScaleY`.

**Object is treated like a bullet**  
Test if the object is treated like a bullet

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsBehavior::IsBullet`.

**The object is dynamic**  
Test if an object is dynamic ( affected by forces and other objects ).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsBehavior::IsDynamic`.

**Fixed rotation**  
Test if the object's rotation is fixed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsBehavior::IsFixedRotation`.

**Linear damping**  
Compare the linear damping of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsBehavior::LinearDamping`.

**Linear speed**  
Compare the linear velocity of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsBehavior::LinearVelocity`.

**X component**  
Compare the linear velocity on the X axis of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsBehavior::LinearVelocityX`.

**Y component**  
Compare the linear velocity on the Y axis of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsBehavior::LinearVelocityY`.


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

The Physics Engine (deprecated) extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Physics Engine (deprecated)** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).