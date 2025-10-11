# Point and Orbit

<img src="https://resources.gdevelop-app.com/assets/Icons/arrow-bottom-right-bold-outline.svg" class="extension-icon"></img>
Point and orbit an object toward a position or angle.

**Authors and contributors** to this experimental extension: [VegeTato](https://gd.games/VegeTato), [VictrisGames](https://gd.games/VictrisGames).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Move an object in a circle around a specific point while pointing the moving object away from the center of the circle.
This feature is useful in games for weapons or targeting indicators that move around a player character.
Orbit distance and rotation speed can be changed easily.

The target position action can be used to follow the direction of the cursor.
The target angle action can be used to follow hte direction of a gamepad stick

# Example
![](https://i.imgur.com/N2KtaMT.png)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Point and Orbit toward a position**  
Point and Orbit an object toward a position.

??? quote "See parameters"

    - Parameter 1 (👾 Object): Gun object
      The object that is going to orbit and rotate.
    - Parameter 2 (🔢 Number): Orbit around this X position
      Gun object will orbit around this X position.
    - Parameter 3 (🔢 Number): Orbit around this Y position
      Gun object will orbit around this Y position.
    - Parameter 4 (🔢 Number): Orbit distance (in pixels)
      Distance between the Gun object and the Orbit positions X and Y.  
      Example: 50 .
    - Parameter 5 (🔢 Number): Point to this X position
      Point the gun object to this Xposition.
    - Parameter 6 (🔢 Number): Point to this Y position
      Point the gun object to this Yposition.
    - Parameter 7 (🔢 Number): Pointing speed (in deg/second)
      Set to 0 for an immediate pointing.

    > Technical note: parameters 0, 8 are internal parameters handled by GDevelop.

**Point and Orbit toward an angle**  
Point and Orbit an object toward an angle.

??? quote "See parameters"

    - Parameter 1 (👾 Object): Gun object
      The object that is going to orbit and rotate.
    - Parameter 2 (🔢 Number): Orbit around this X position
      Gun object will orbit around this X position.
    - Parameter 3 (🔢 Number): Orbit around this Y position
      Gun object will orbit around this Y position.
    - Parameter 4 (🔢 Number): Orbit distance (in pixels)
      Distance between the Gun object and the Orbit positions X and Y.  
      Example: 50 .
    - Parameter 5 (🔢 Number): Angle
      Point the gun object to this angle
    - Parameter 6 (🔢 Number): Pointing speed (in deg/second)
      Set to 0 for an immediate pointing.

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.




---

*This page is an auto-generated reference page about the **Point and Orbit** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).