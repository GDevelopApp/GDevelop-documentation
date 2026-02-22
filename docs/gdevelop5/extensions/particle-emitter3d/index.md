# 3D particle emitter

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/f2e5a34bf465f781866677762d385d6c8e9e8d203383f2df9a3b7e0fad6a2cb5_fire.svg" class="extension-icon"></img>
3D particle emitter: configurable lifetime, color, size, gravity, and emission shapes.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

3D particle emitters let you create and display many small particles to simulate visual effects in your game — like fire, explosions, smoke, or dust.

The parameters of the object can be configured in multiple different ways to create a specific desired effect. GDevelop will give a set of a pre-configured 3D particle emitters that you should try first.

Use these 3D particle emitters in 3D games. For 2D games or particles that appear on a game's 2D user interface, use the 2D particle emitter object instead.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## 3D particle emitter 

Display a large number of particles to create visual effects. 

### Object properties

- **Start color** (🎨 Color). Default value is `255;0;0`.
- **End color** (🎨 Color). Default value is `255;255;0`.
- **Start opacity** (🔢 Number, Dimensionless). Default value is `255`.
- **End opacity** (🔢 Number, Dimensionless). Default value is `0`.
- **Flow of particles (particles per second)** (🔢 Number). Default value is `50`.
- **Start min size** (🔢 Number, Distance). Default value is `10`.
- **Start max size** (🔢 Number, Distance). Default value is `20`.
- **End scale** (🔢 Number, Dimensionless). Default value is `0`.
- **Start min speed** (🔢 Number, Speed). Default value is `100`.
- **Start max speed** (🔢 Number, Speed). Default value is `100`.
- **Min lifespan** (🔢 Number, Duration). Default value is `1`.
- **Max lifespan** (🔢 Number, Duration). Default value is `2`.
- **Emission duration** (🔢 Number, Duration). Default value is `5`.
- **Particles move with the emitter** (🔘 Boolean).
- **Spay cone angle** (🔢 Number, Angle). Default value is `30`.
- **Blending** (Choice, one of: "Normal", "Additive", "Subtractive", "Multiply", "None"). Default value is `Additive`.
- **Gravity top** (Choice, one of: "Y-", "Z+"). Default value is `Y-`.
- **Gravity** (🔢 Number, Acceleration). Default value is `0`.
- **Delete when emission ends** (🔘 Boolean). Default value is `true`.
- **Start min length** (🔢 Number, Distance). Default value is `120`.
- **Start max length** (🔢 Number, Distance). Default value is `120`.
- **Render mode** (Choice, one of: "Billboard", "Trail"). Default value is `Billboard`.
- **Follow the object** (🔘 Boolean).
- **Tail end width ratio** (🔢 Number, Dimensionless). Default value is `0`.

??? quote "See internal technical details"


    - **Start color** is stored as `StartColor` (Color). Default value is `255;0;0`.
    - **End color** is stored as `EndColor` (Color). Default value is `255;255;0`.
    - **Start opacity** is stored as `StartOpacity` (Number). Unit is Dimensionless. Default value is `255`.
    - **End opacity** is stored as `EndOpacity` (Number). Unit is Dimensionless. Default value is `0`.
    - **Flow of particles (particles per second)** is stored as `Flow` (Number). Default value is `50`.
    - **Start min size** is stored as `StartSizeMin` (Number). Unit is Pixel. Default value is `10`.
    - **Start max size** is stored as `StartSizeMax` (Number). Unit is Pixel. Default value is `20`.
    - **End scale** is stored as `EndScale` (Number). Unit is Dimensionless. Default value is `0`.
    - **Start min speed** is stored as `StartSpeedMin` (Number). Unit is PixelSpeed. Default value is `100`.
    - **Start max speed** is stored as `StartSpeedMax` (Number). Unit is PixelSpeed. Default value is `100`.
    - **Min lifespan** is stored as `LifespanMin` (Number). Unit is Second. Default value is `1`.
    - **Max lifespan** is stored as `LifespanMax` (Number). Unit is Second. Default value is `2`.
    - **Emission duration** is stored as `Duration` (Number). Unit is Second. Default value is `5`.
    - **Particles move with the emitter** is stored as `AreParticlesRelative` (Boolean). Default value is ``.
    - **Spay cone angle** is stored as `SpayConeAngle` (Number). Unit is DegreeAngle. Default value is `30`.
    - **Blending** is stored as `Blending` (Choice). Default value is `Additive`.
    - **Gravity top** is stored as `GravityTop` (Choice). Default value is `Y-`.
    - **Gravity** is stored as `Gravity` (Number). Unit is PixelAcceleration. Default value is `0`.
    - **Delete when emission ends** is stored as `ShouldAutodestruct` (Boolean). Default value is `true`.
    - **Start min length** is stored as `TrailStartLengthMin` (Number). Unit is Pixel. Default value is `120`.
    - **Start max length** is stored as `TrailStartLengthMax` (Number). Unit is Pixel. Default value is `120`.
    - **Render mode** is stored as `RenderMode` (Choice). Default value is `Billboard`.
    - **Follow the object** is stored as `IsTrailFollowingLocalOrigin` (Boolean). Default value is ``.
    - **Tail end width ratio** is stored as `TrailEndWidthRatio` (Number). Unit is Dimensionless. Default value is `0`.

### Object actions

**Restart**  
Restart particule emission from the beginning.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::Restart`.

**Particles move with the emitter**  
Change if particles move with the emitter.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): AreParticlesRelative

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetAreParticlesRelative`.

**Emission duration**  
Change the emission duration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetDuration`.

**End color**  
Change the end color of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🎨 Color): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetEndColor`.

**End opacity**  
Change the end opacity of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetEndOpacity`.

**End scale**  
Change the end scale of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetEndScale`.

**Flow of particles**  
Change the flow of particles of the object  (particles per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetFlow`.

**Gravity**  
Change the gravity of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetGravity`.

**Gravity top**  
Change the gravity top of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔤 String): Value (one of: "Y-", "Z+")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetGravityTop`.

**Make the trail follow**  
Change if the trail should follow the object or not.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): IsTrailFollowingLocalOrigin

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetIsTrailFollowingLocalOrigin`.

**Max lifespan**  
Change the max lifespan of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetLifespanMax`.

**Min lifespan**  
Change the min lifespan of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetLifespanMin`.

**Delete when emission ends**  
Change if delete when emission ends.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): ShouldAutodestruct

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetShouldAutodestruct`.

**Spay cone angle**  
Change the spay cone angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetSpayConeAngle`.

**Start color**  
Change the start color of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🎨 Color): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetStartColor`.

**Start opacity**  
Change the start opacity of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetStartOpacity`.

**Start max size**  
Change the start max size of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetStartSizeMax`.

**Start min size**  
Change the start min size of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetStartSizeMin`.

**Max start speed**  
Change the max start speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetStartSpeedMax`.

**Min start speed**  
Change the min start speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetStartSpeedMin`.

**Tail end width ratio**  
Change the tail end width ratio of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetTrailEndWidthRatio`.

**Start max trail length**  
Change the start max trail length of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetTrailStartLengthMax`.

**Start min trail length**  
Change the start min trail length of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SetTrailStartLengthMin`.


### Object conditions

**Particles move with the emitter**  
Check if particles move with the emitter.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::AreParticlesRelative`.

**Blending**  
Compare the blending of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Value to compare (one of: "Normal", "Additive", "Substractive", "Multiply", "None")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::Blending`.

**Emission duration**  
Compare the emission duration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::Duration`.

**End color**  
Compare the end color of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🎨 Color): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::EndColor`.

**End opacity**  
Compare the end opacity of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::EndOpacity`.

**End scale**  
Compare the end scale of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::EndScale`.

**Flow of particles**  
Compare the flow of particles of the object  (particles per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::Flow`.

**Gravity**  
Compare the gravity of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::Gravity`.

**Gravity top**  
Compare the gravity top of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Value to compare (one of: "Y-", "Z+")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::GravityTop`.

**Emission has ended**  
Check that emission has ended and no particle is alive anymore.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::HasEnded`.

**Trail following the object**  
Check if the trail should follow the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::IsTrailFollowingLocalOrigin`.

**Max lifespan**  
Compare the max lifespan of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::LifespanMax`.

**Min lifespan**  
Compare the min lifespan of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::LifespanMin`.

**Delete when emission ends**  
Check if delete when emission ends.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::ShouldAutodestruct`.

**Spay cone angle**  
Compare the spay cone angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::SpayConeAngle`.

**Start color**  
Compare the start color of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🎨 Color): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::StartColor`.

**Start opacity**  
Compare the start opacity of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::StartOpacity`.

**Start max size**  
Compare the start max size of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::StartSizeMax`.

**Start min size**  
Compare the start min size of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::StartSizeMin`.

**Max start speed**  
Compare the max start speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::StartSpeedMax`.

**Min start speed**  
Compare the min start speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::StartSpeedMin`.

**Tail end width ratio**  
Compare the tail end width ratio of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::TrailEndWidthRatio`.

**Start max trail length**  
Compare the start max trail length of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::TrailStartLengthMax`.

**Start min trail length**  
Compare the start min trail length of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleEmitter3D::ParticleEmitter3D::TrailStartLengthMin`.


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
| `Object.TrailEndWidthRatio()` | Return the tail end width ratio of the object. ||
| `Object.TrailStartLengthMax()` | Return the start max trail length of the object. ||
| `Object.TrailStartLengthMin()` | Return the start min trail length of the object. ||


---

*This page is an auto-generated reference page about the **3D particle emitter** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).