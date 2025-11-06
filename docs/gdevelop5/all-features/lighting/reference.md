# Lights Reference

This provides a 2D light object, and a behavior to mark other 2D objects as being obstacles for the lights. This is a great way to create a special atmosphere to your game, along with effects, make it more realistic or to create gameplays based on lights. 



## Light 

Displays a 2D light on the scene, with a customizable radius and color. Add then the Light Obstacle behavior to the objects that must act as obstacle to the lights. 

### Object properties

- **Color** (🎨 Color). Default value is `255;255;255`.
- **Debug mode** (🔘 Boolean). When activated, display the lines used to render the light - useful to understand how the light is rendered on screen. Default value is `false`.
- **Radius** (🔢 Number). Default value is `50`.
- **Light texture (optional)** (🗂️ Resource). A texture to be used to display the light. If you don't specify a texture, the light is rendered as fading from bright, in its center, to dark.

??? quote "See internal technical details"


    - **Color** is stored as `color` (color). Default value is `255;255;255`.
    - **Debug mode** is stored as `debugMode` (boolean). Default value is `false`.
    - **Radius** is stored as `radius` (number). Default value is `50`.
    - **Light texture (optional)** is stored as `texture` (resource). Default value is ``.

### Object actions

**Light color**  
Set the color of light object in format "R;G;B" string.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🎨 Color

    > Technical note: this action internal type (in GDevelop JSON) is `Lighting::SetColor`.

**Light radius**  
Set the radius of light object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔢 Number): Radius

    > Technical note: this action internal type (in GDevelop JSON) is `Lighting::SetRadius`.


_No expressions for this object._


## Light Obstacle Behavior 

Flag objects as being obstacles to 2D lights. The light emitted by light objects will be stopped by the object. This does not work on 3D objects and 3D games. 

_No expressions for this behavior._




---

The Lights extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Lights** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).