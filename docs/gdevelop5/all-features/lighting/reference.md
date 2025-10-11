# Lights Reference

This provides a 2D light object, and a behavior to mark other 2D objects as being obstacles for the lights. This is a great way to create a special atmosphere to your game, along with effects, make it more realistic or to create gameplays based on lights. 



## Light 

Displays a 2D light on the scene, with a customizable radius and color. Add then the Light Obstacle behavior to the objects that must act as obstacle to the lights. 

### Object actions

**Light color**  
Set the color of light object in format "R;G;B" string.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: color

**Light radius**  
Set the radius of light object

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔢 Number): Radius

_No expressions for this object._


## Light Obstacle Behavior 

Flag objects as being obstacles to 2D lights. The light emitted by light objects will be stopped by the object. This does not work on 3D objects and 3D games. 

_No expressions for this behavior._




---

The Lights extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Lights** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).