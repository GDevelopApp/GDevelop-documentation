# Make objects orbit around a center object

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Space/Space_earth_moon_orbit.svg" class="extension-icon"></img>
Make objects orbit around a center object in a circular or elliptical path.

**Authors and contributors** to this extension: [VictrisGames](https://gd.games/VictrisGames), [VegeTato](https://gd.games/VegeTato), [D8H](https://gd.games/D8H).

---

Run the actions on every frame to make the orbiting objects move.
The extension will automatically create/delete orbiting objects to match the quantity specified. 
Use the delete function or set the quantity to 0 to remove all orbiting objects.

The *elliptical orbit* action can be used to create a 3D effect by changing the z-order of orbiting objects.

The customizable parameters include:

- Center object
- Orbiting object (must be different than the Center object)
- Quantity of orbiting objects
- Distance from the center object
- Speed of the orbiting objects (in degrees per second).  Use negative numbers to orbit counter-clockwise.
- Speed to rotate each orbiting object (in degrees per second).  Use negative numbers to rotate counter-clockwise.

Example uses:

- Make shield objects around the player to protect from enemies
- Weapons that can damage enemies when they collide
- A visual indicator of ammo quantity or health points
- Interesting animations of stacked objects that can function as a single entity 
- Visual cue for an active character power-up, such as invincibility

An example shows how to use this extension ([open the project online](https://editor.gdevelop.io/?project=example://orbiting-objects)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Orbiting object emitter 

Make objects orbit around itself in a circular path. 

### Behavior properties

- **Orbit speed** (🔢 Number, Angular speed). Use a negative value to orbit counter-clockwise. Default value is `90`.
- **Quantity of orbiting objects** (🔢 Number). Default value is `3`.
- **Orbit radius on X axis** (🔢 Number, Distance). Default value is `200`.
- **Orbit radius on Y axis** (🔢 Number, Distance). Use a negative value to change which part is in front. Default value is `200`.
- **Fill the gap when an object is deleted** (🔘 Boolean). Default value is `true`.
- **Spining speed** (🔢 Number, Angular speed). Default value is `0`.
- **Starting angle offset** (🔢 Number, Angle). Default value is `0`.
- **Z-order offset** (🔢 Number). Leave it to zero for an automatic Z-sorting. Default value is `0`.

??? quote "See internal technical details"


    - **Orbit speed** is stored as `OrbitAngularSpeed` (Number). Unit is AngularSpeed. Default value is `90`.
    - **Quantity of orbiting objects** is stored as `Quantity` (Number). Default value is `3`.
    - **Orbit radius on X axis** is stored as `RadiusX` (Number). Unit is Pixel. Default value is `200`.
    - **Orbit radius on Y axis** is stored as `RadiusY` (Number). Unit is Pixel. Default value is `200`.
    - **Fill the gap when an object is deleted** is stored as `ShouldFillGap` (Boolean). Default value is `true`.
    - **Spining speed** is stored as `SpiningSpeed` (Number). Unit is AngularSpeed. Default value is `0`.
    - **Starting angle offset** is stored as `StartingOffset` (Number). Unit is DegreeAngle. Default value is `0`.
    - **Z-order offset** is stored as `ZOrderOffset` (Number). Default value is `0`.

### Behavior actions

**Animate orbiting objects**  
Move objects in elliptical orbit around a center object. Z-order is changed to make 3D effect.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Orbiting object
      Cannot be the same object used for the Center object

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `OrbitingObjects::OrbitingObjectEmitter::AnimateOrbitingObjects`.

**Delete orbiting objects that are linked to a center object**  
Delete orbiting objects that are linked to a center object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🧩 Behavior): Behavior
      Cannot be the same object that was used for the Center object
    - Parameter 2 (👾 Object): Orbiting object
      Cannot be the same object that was used for the Center object

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `OrbitingObjects::OrbitingObjectEmitter::DeleteOrbitingObjects`.

**Orbit speed**  
Change the orbit speed of the object. Use a negative value to orbit counter-clockwise.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `OrbitingObjects::OrbitingObjectEmitter::SetOrbitAngularSpeed`.

**Quantity of orbiting objects**  
Change the quantity of orbiting objects of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `OrbitingObjects::OrbitingObjectEmitter::SetQuantity`.

**Orbit radius on X axis**  
Change the orbit radius on X axis of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `OrbitingObjects::OrbitingObjectEmitter::SetRadiusX`.

**Orbit radius on Y axis**  
Change the orbit radius on Y axis of the object. Use a negative value to change which part is in front.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `OrbitingObjects::OrbitingObjectEmitter::SetRadiusY`.

**Spining speed**  
Change the spining speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `OrbitingObjects::OrbitingObjectEmitter::SetSpiningSpeed`.


### Behavior conditions

**Orbit speed**  
Compare the orbit speed of the object. Use a negative value to orbit counter-clockwise.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `OrbitingObjects::OrbitingObjectEmitter::OrbitAngularSpeed`.

**Quantity of orbiting objects**  
Compare the quantity of orbiting objects of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `OrbitingObjects::OrbitingObjectEmitter::Quantity`.

**Orbit radius on X axis**  
Compare the orbit radius on X axis of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `OrbitingObjects::OrbitingObjectEmitter::RadiusX`.

**Orbit radius on Y axis**  
Compare the orbit radius on Y axis of the object. Use a negative value to change which part is in front.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `OrbitingObjects::OrbitingObjectEmitter::RadiusY`.

**Spining speed**  
Compare the spining speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `OrbitingObjects::OrbitingObjectEmitter::SpiningSpeed`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.OrbitingObjectEmitter::OrbitAngularSpeed()` | Return the orbit speed of the object. Use a negative value to orbit counter-clockwise. ||
| `Object.OrbitingObjectEmitter::Quantity()` | Return the quantity of orbiting objects of the object. ||
| `Object.OrbitingObjectEmitter::RadiusX()` | Return the orbit radius on X axis of the object. ||
| `Object.OrbitingObjectEmitter::RadiusY()` | Return the orbit radius on Y axis of the object. Use a negative value to change which part is in front. ||
| `Object.OrbitingObjectEmitter::SpiningSpeed()` | Return the spining speed of the object. ||


---

*This page is an auto-generated reference page about the **Make objects orbit around a center object** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).