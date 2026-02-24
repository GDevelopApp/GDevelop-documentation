# Make objects orbit around a center object

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Space/Space_earth_moon_orbit.svg" class="extension-icon"></img>
Make objects orbit around a center object in a circular or elliptical path.

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames), [VegeTato](https://gd.games/VegeTato).

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

## Actions

**Move objects in elliptical orbit around a center object**  
Move objects in elliptical orbit around a center object. Z-order is changed to make 3D effect.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Center object
    - Parameter 2 (👾 Object): Orbiting object
      Cannot be the same object used for the Center object
    - Parameter 3 (🔢 Number): Quantity of orbiting objects
    - Parameter 4 (🔢 Number): Orbit speed (in degrees per second)
      Use negative numbers to orbit counter-clockwise
    - Parameter 5 (🔢 Number): Vertical distance from the center object (pixels)
    - Parameter 6 (🔢 Number): Angular speed (in degrees per second)
      Use negative numbers to rotate counter-clockwise
    - Parameter 7 (🔢 Number): Starting angle offset (in degrees)
    - Parameter 8 (❓ Yes or No): Reset locations of orbiting objects after quantity is reduced
    - Parameter 9 (🔢 Number): Horizontal distance from the center object (pixels)
    - Parameter 10 (🔤 String): Foreground Side (one of: "Top", "Bottom", "Left", "Right")

    > Technical note: parameters 0, 11 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `OrbitingObjects::AnimateEllipticalOrbitingObjects`.

**Move objects in orbit around a center object**  
Move objects in orbit around a center object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Center object
    - Parameter 2 (👾 Object): Orbiting object
      Cannot be the same object used for the Center object
    - Parameter 3 (🔢 Number): Quantity of orbiting objects
    - Parameter 4 (🔢 Number): Orbit speed (in degrees per second)
      Use negative numbers to orbit counter-clockwise
    - Parameter 5 (🔢 Number): Distance from the center object (in pixels)
    - Parameter 6 (🔢 Number): Angular speed (in degrees per second)
      Use negative numbers to rotate counter-clockwise
    - Parameter 7 (🔤 Layer name (String)): Layer that orbiting objects will be created on (base layer if empty)
    - Parameter 8 (🔢 Number): Z order of orbiting objects
    - Parameter 9 (🔢 Number): Starting angle offset (in degrees)
    - Parameter 10 (❓ Yes or No): Reset locations of orbiting objects after quantity is reduced

    > Technical note: parameters 0, 11 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `OrbitingObjects::AnimateOrbitingObjects`.

**Delete orbiting objects that are linked to a center object**  
Delete orbiting objects that are linked to a center object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Center object
    - Parameter 2 (👾 Object): Orbiting object
      Cannot be the same object that was used for the Center object

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `OrbitingObjects::DeleteOrbitingObjects`.





---

*This page is an auto-generated reference page about the **Make objects orbit around a center object** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).