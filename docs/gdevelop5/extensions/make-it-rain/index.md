# Make it rain

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Weather/Weather_forecast_umbrella_weather_rain_water_drop.svg" class="extension-icon"></img>
Make an object rain from a selected direction or a selected object.

**Authors and contributors** to this experimental extension: [VegeTato](https://gd.games/VegeTato).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

- User can select the rain object.

- User can select to rain object from a selected direction.
- User can set condition to check if the rain object collides with another object.
- User can set action to Stop/Start the rain object.
- User can select object2 to rain object from it on a selected direction.
- User can set an action to stop rain object from moving.
- User can set the rain intensity.
- User can set the rain angle.
- User can set the rain animation after the collision.
- User have the option (On/Off) to delete the rain objects when it's out of screen.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Make object rain**  
Make object rain from a selected direction.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Make this object rain
    - Parameter 2 (🔢 Number): Rain object width
    - Parameter 3 (🔢 Number): Rain object height
    - Parameter 4 (🔢 Number): Raining speed (in pixel)
      Example: 10
    - Parameter 5 (🔤 String): Rain direction (one of: "Top to bottom", "Bottom to top", "Left to right", "Right to left")
    - Parameter 6 (🔢 Number): Respawning object timer speed (in seconds)
      Example: 0.01
    - Parameter 7 (string): Timer name for each object
    - Parameter 8 (🔤 Layer name (String)): Rain object at this layer
    - Parameter 9 (🔢 Number): Create rain object at zorder
    - Parameter 10 (🔢 Number): Rain intensity
    - Parameter 11 (🔢 Number): Rain angle (in degree)
      90, for "Top to bottom".  
      -90, for "Bottom to top".  
      0, for "Left to right".  
      180, for "Right to left".  
      You can adjust the angle as you like but keep in mind the rain angle must be related to rain direction.
    - Parameter 12 (❓ Yes or No): Delete the rain object when its out of the screen
      (Recommended: Yes)
      Setting this option to No might reduce your game performance.

    > Technical note: parameters 0, 13 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MakeItRain::MakeItRain`.

**Make it rain from object**  
Make object rain from another object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Make this object rain
    - Parameter 2 (🔢 Number): Rain object width
    - Parameter 3 (🔢 Number): Rain object height
    - Parameter 4 (👾 Object): Rain from this object
    - Parameter 5 (🔢 Number): Raining speed (in pixel)
      Example: 10
    - Parameter 6 (🔤 String): Rain from object at direction (one of: "Top to bottom", "Bottom to top", "Left to right", "Right to left")
    - Parameter 7 (🔢 Number): Respawning object timer speed (in seconds)
      Example: 0.01
    - Parameter 8 (string): Timer name for each object
    - Parameter 9 (🔤 Layer name (String)): Rain object at this layer
    - Parameter 10 (🔢 Number): Create rain object at zorder
    - Parameter 11 (🔢 Number): Rain intensity
    - Parameter 12 (🔢 Number): Rain angle (in degree)
      90, for "Top to bottom".  
      -90, for "Bottom to top".  
      0, for "Left to right".  
      180, for "Right to left".  
      You can adjust the angle as you like but keep in mind the rain angle must be related to rain direction.
    - Parameter 13 (❓ Yes or No): Create rain object from object2 center
    - Parameter 14 (❓ Yes or No): Delete the rain objects when its out of the screen
      (Recommended: Yes)
      Setting this option to No might reduce your game performance.

    > Technical note: parameters 0, 15 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MakeItRain::MakeItRainFromObject`.

**Pause raining object (rain)**  
Pause raning object (rain).

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Stop raining this object

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MakeItRain::PauseRain`.

**Pause raining from object (cloud)**  
Pause raning from object (cloud).

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Stop raining from this object (cloud)

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MakeItRain::PauseRainFromObject`.

**Rain collision animation**  
Change rain animation when it collides with other object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Rain object
    - Parameter 2 (👾 Object): Collided object
    - Parameter 3 (🔢 Number): Rain animation after the collide
      You can set the animation to 0 if you don't want or have rain animation (splash).
    - Parameter 4 (❓ Yes or No): Change the rain position to surface when collision happen
    - Parameter 5 (❓ Yes or No): Remove the rain object after its animation finished
    - Parameter 6 (❓ Yes or No): Remove the rain object if it collides with the edge of the other object
    - Parameter 7 (❓ Yes or No): Stop rain movement after the collide with the other object

    > Technical note: parameters 0, 8 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MakeItRain::RainAnimation`.

**Resume raining object (rain)**  
Resume raining object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Start raining this object

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MakeItRain::ResumeRain`.

**Resume raining from object (cloud)**  
Resume raining object from object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Start raining this object (rain)
    - Parameter 2 (👾 Object): Start raining from this object (cloud)

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MakeItRain::ResumeRainFromObject`.

**Stop moving rain**  
Could be used with collision condition.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Rain object

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MakeItRain::StopSingleRain`.




---

*This page is an auto-generated reference page about the **Make it rain** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).