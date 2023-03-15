---
title: Shake Object (position, angle, scale)
---
# Shake Object (position, angle, scale)

![](https://resources.gdevelop-app.com/assets/Icons/arrow-all.svg)
Shake an object, using one or more ways to shake (position, angle, scale).

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames).

---

Select one or more methods of shaking:

- Position: Shake the X and/or Y position of the object 
- Angle: Shake the angle (rotation) of the object 
- Scale: Shake the scale of the object (must be a sprite)

Control how the object shakes:

- Amplitude: How far the object moves during each shake
- Duration: Amount of time to shake the object
- Time between shakes: Amount of time between each movement of the object
- Keep shaking until stopped (boolean)

Tips:

- For a single-shake effect, set the "Time between shakes" to be equal to "Duration"  (great for a hit or impact)
- To make the single-shake move in the opposite direction, use negative numbers 
- To repeat a single-shake effect in a loop, add a condition "Object is not shaking" 
- Use a long "Time between shakes" to simulate a slow moving object (like a ship rocking back and forth)
- Make sure to "Stop shaking" before starting a new shake if it uses different parameters. 
- Use "Shake until stopped" to simulate engine vibration, earthquake, or pulsing

The top-down RPG example uses this extension for damage animations ([open the project online](https://editor.gdevelop.io/?project=example://top-down-rpg)).

[Read more...](https://victrisgames.itch.io/gdevelop-camera-shake-example)

---

!!! tip

    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

*This page is an auto-generated reference page about the **Shake Object (position, angle, scale)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).