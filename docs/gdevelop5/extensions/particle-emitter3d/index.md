# 3D particle emitter

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/f2e5a34bf465f781866677762d385d6c8e9e8d203383f2df9a3b7e0fad6a2cb5_fire.svg" class="extension-icon"></img>
Display a large number of particles in 3D to create visual effects in a 3D game.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

3D particle emitters let you create and display many small particles to simulate visual effects in your game — like fire, explosions, smoke, or dust.

The parameters of the object can be configured in multiple different ways to create a specific desired effect. GDevelop will give a set of a pre-configured 3D particle emitters that you should try first.

Use these 3D particle emitters in 3D games. For 2D games or particles that appear on a game's 2D user interface, use the 2D particle emitter object instead.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## 3D particle emitter 

Display a large number of particles to create visual effects. 

### Object actions

**Restart**  
Restart particule emission from the beginning.

??? quote "See parameters"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Particles move with the emitter**  
Change if particles move with the emitter.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): AreParticlesRelative

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Emission duration**  
Change the emission duration of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**End color**  
Change the end color of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (color): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**End opacity**  
Change the end opacity of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**End scale**  
Change the end scale of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Flow of particles**  
Change the flow of particles of the object  (particles per second).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Gravity**  
Change the gravity of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Gravity top**  
Change the gravity top of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔤 String): Value (one of: "Y-", "Z+")

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Max lifespan**  
Change the max lifespan of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Min lifespan**  
Change the min lifespan of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Delete when emission ends**  
Change if delete when emission ends.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): ShouldAutodestruct

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Spay cone angle**  
Change the spay cone angle of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Start color**  
Change the start color of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (color): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Start opacity**  
Change the start opacity of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Start max size**  
Change the start max size of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Start min size**  
Change the start min size of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Max start speed**  
Change the max start speed of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Min start speed**  
Change the min start speed of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Object conditions

**Particles move with the emitter**  
Check if particles move with the emitter.

??? quote "See parameters"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Blending**  
Compare the blending of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Value to compare (one of: "Normal", "Additive", "Substractive", "Multiply", "None")

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Emission duration**  
Compare the emission duration of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**End color**  
Compare the end color of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (color): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**End opacity**  
Compare the end opacity of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**End scale**  
Compare the end scale of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Flow of particles**  
Compare the flow of particles of the object  (particles per second).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Gravity**  
Compare the gravity of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Gravity top**  
Compare the gravity top of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Value to compare (one of: "Y-", "Z+")

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Emission has ended**  
Check that emission has ended and no particle is alive anymore.

??? quote "See parameters"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Max lifespan**  
Compare the max lifespan of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Min lifespan**  
Compare the min lifespan of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Delete when emission ends**  
Check if delete when emission ends.

??? quote "See parameters"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Spay cone angle**  
Compare the spay cone angle of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Start color**  
Compare the start color of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (color): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Start opacity**  
Compare the start opacity of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Start max size**  
Compare the start max size of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Start min size**  
Compare the start min size of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Max start speed**  
Compare the max start speed of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Min start speed**  
Compare the min start speed of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Blending()` | Return the blending of the object. ||
| `Object.Duration()` | Return the emission duration of the object. ||
| `Object.EndColor()` | Return the end color of the object. ||
| `Object.EndOpacity()` | Return the end opacity of the object. ||
| `Object.EndScale()` | Return the end scale of the object. ||
| `Object.Flow()` | Return the flow of particles of the object  (particles per second). ||
| `Object.Gravity()` | Return the gravity of the object. ||
| `Object.GravityTop()` | Return the gravity top of the object. ||
| `Object.LifespanMax()` | Return the max lifespan of the object. ||
| `Object.LifespanMin()` | Return the min lifespan of the object. ||
| `Object.SpayConeAngle()` | Return the spay cone angle of the object. ||
| `Object.StartColor()` | Return the start color of the object. ||
| `Object.StartOpacity()` | Return the start opacity of the object. ||
| `Object.StartSizeMax()` | Return the start max size of the object. ||
| `Object.StartSizeMin()` | Return the start min size of the object. ||
| `Object.StartSpeedMax()` | Return the max start speed of the object. ||
| `Object.StartSpeedMin()` | Return the min start speed of the object. ||


---

*This page is an auto-generated reference page about the **3D particle emitter** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).