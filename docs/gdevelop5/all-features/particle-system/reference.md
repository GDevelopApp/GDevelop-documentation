# Particle system Reference

A 2D particle emitter allows to create various effects by showing a lot of tiny images called particles. It's ideal for fires, smoke, explosions, magical effects, etc... in 2D games. For 3D games, use the 3D particle emitter instead. [Read more explanations about it.](/gdevelop5/objects/particles_emitter)



## 2D particles emitter 

2D effects like smoke, fire or sparks. 

### Object properties

- **Additive rendering** (🔘 Boolean). Default value is `false`.
- **Cone spray angle** (🔢 Number, Angle). Default value is `90`.
- **Delete when out of particles** (🔘 Boolean). Default value is `true`.
- **Emitter force max** (🔢 Number). Default value is `85`.
- **Emitter force min** (🔢 Number). Default value is `45`.
- **Flow** (🔢 Number). Default value is `45`.
- **Jump forward in time on creation** (🔢 Number, Duration). Default value is `0`.
- **Max particles count** (🔢 Number). Default value is `300`.
- **Gravity X** (🔢 Number, Distance). Default value is `0`.
- **Gravity Y** (🔢 Number, Distance). Default value is `0`.
- **Maximum lifetime** (🔢 Number, Duration). Default value is `2.5`.
- **Minimum lifetime** (🔢 Number, Duration). Default value is `0.5`.
- **Maximum rotation speed** (🔢 Number, Angle). Default value is `0`.
- **Minimum rotation speed** (🔢 Number, Angle). Default value is `0`.
- **End color** (🎨 Color). Default value is `255;255;0`.
- **End opacity (0-255)** (🔢 Number). Default value is `0`.
- **End size (in percents)** (🔢 Number). Default value is `100`.
- **Size** (🔢 Number, Distance). Default value is `3`.
- **Start color** (🎨 Color). Default value is `255;51;51`.
- **Start opacity (0-255)** (🔢 Number). Default value is `204`.
- **Start size (in percents)** (🔢 Number). Default value is `100`.
- **Particle type** (choice, one of: "Circle", "Line", "Image"). Default value is `Circle`.
- **Tank** (🔢 Number). Default value is `-1`.
- **Emitter radius** (🔢 Number, Distance). Default value is `3`.

??? quote "See internal technical details"


    - **Additive rendering** is stored as `additiveRendering` (boolean). Default value is `false`.
    - **Cone spray angle** is stored as `coneSprayAngle` (number). Unit is DegreeAngle. Default value is `90`.
    - **Delete when out of particles** is stored as `deleteWhenOutOfParticles` (boolean). Default value is `true`.
    - **Emitter force max** is stored as `emitterForceMax` (number). Default value is `85`.
    - **Emitter force min** is stored as `emitterForceMin` (number). Default value is `45`.
    - **Flow** is stored as `flow` (number). Default value is `45`.
    - **Jump forward in time on creation** is stored as `jumpForwardInTimeOnCreation` (number). Unit is Second. Default value is `0`.
    - **Max particles count** is stored as `maxParticlesCount` (number). Default value is `300`.
    - **Gravity X** is stored as `particleGravityX` (number). Unit is Pixel. Default value is `0`.
    - **Gravity Y** is stored as `particleGravityY` (number). Unit is Pixel. Default value is `0`.
    - **Maximum lifetime** is stored as `particleLifeTimeMax` (number). Unit is Second. Default value is `2.5`.
    - **Minimum lifetime** is stored as `particleLifeTimeMin` (number). Unit is Second. Default value is `0.5`.
    - **Maximum rotation speed** is stored as `particleRotationSpeedMax` (number). Unit is DegreeAngle. Default value is `0`.
    - **Minimum rotation speed** is stored as `particleRotationSpeedMin` (number). Unit is DegreeAngle. Default value is `0`.
    - **End color** is stored as `particlesEndColor` (color). Default value is `255;255;0`.
    - **End opacity (0-255)** is stored as `particlesEndOpacity` (number). Default value is `0`.
    - **End size (in percents)** is stored as `particlesEndSize` (number). Default value is `100`.
    - **Size** is stored as `particlesSize` (number). Unit is Pixel. Default value is `3`.
    - **Start color** is stored as `particlesStartColor` (color). Default value is `255;51;51`.
    - **Start opacity (0-255)** is stored as `particlesStartOpacity` (number). Default value is `204`.
    - **Start size (in percents)** is stored as `particlesStartSize` (number). Default value is `100`.
    - **Particle type** is stored as `rendererType` (choice). Default value is `Circle`.
    - **Tank** is stored as `tank` (number). Default value is `-1`.
    - **Emitter radius** is stored as `zoneRadius` (number). Unit is Pixel. Default value is `3`.

### Object actions

**Angle of the spray cone**  
Modify the angle of the spray cone.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Angle (in degrees)

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ConeSprayAngle`.

**Emission angle**  
Modify emission angle.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Angle (in degrees)

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::EmitterAngle`.

**Emission maximal force**  
Modify maximal emission force of particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::EmitterForceMax`.

**Emission minimal force**  
Modify minimal emission force of particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::EmitterForceMin`.

**Jump emitter forward in time**  
Simulate the passage of time for an emitter, including creating and moving particles

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔢 Number): Seconds of time

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::JumpEmitterForwardInTime`.

**Start opacity**  
Modify the start opacity of particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value (0-255)

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleAlpha1`.

**End opacity**  
Modify the end opacity of particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value (0-255)

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleAlpha2`.

**Start color blue component**  
Modify the start color blue component.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value (0-255)

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleBlue1`.

**End color blue component**  
Modify the end color blue component.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value (0-255)

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleBlue2`.

**Start color**  
Modify start color of particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🎨 Color): Start color

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleColor1`.

**End color**  
Modify end color of particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🎨 Color): End color

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleColor2`.

**Activate particles additive rendering**  
Set (or unset) if the particles additive rendering is activated.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): New value

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleEmitter::SetAdditiveRendering`.

**Number of displayed particles**  
Change the maximum number of displayed particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleEmitter::SetMaxParticlesCount`.

**Particle rotation max speed**  
Change the maximum rotation speed of the particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Angular speed (in degrees per second)

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleEmitter::SetParticleRotationMaxSpeed`.

**Particle rotation min speed**  
Change the minimum rotation speed of the particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Angular speed (in degrees per second)

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleEmitter::SetParticleRotationMinSpeed`.

**Gravity angle**  
Change gravity angle

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Angle (in degrees)

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleGravityAngle`.

**Gravity**  
Change the gravity of the emitter.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleGravityLength`.

**Gravity value on X axis**  
Change value of the gravity on X axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleGravityX`.

**Gravity value on Y axis**  
Change value of the gravity on Y axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleGravityY`.

**Start color green component**  
Modify the start color green component.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value (0-255)

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleGreen1`.

**End color green component**  
Modify the end color green component.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value (0-255)

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleGreen2`.

**Maximum lifetime**  
Modify particles maximum lifetime.  
Particles have to be recreated in order to take changes in account.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Duration (in seconds)

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleLifeTimeMax`.

**Minimum lifetime**  
Modify particles minimum lifetime. Particles have to be recreated in order to take changes in account.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Duration (in seconds)

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleLifeTimeMin`.

**Start color red component**  
Modify the start color red component.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value (0-255)

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleRed1`.

**End color red component**  
Modify the end color red component.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value (0-255)

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleRed2`.

**Start size**  
Modify the particle start size.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleSize1`.

**End size**  
Modify the particle end size.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ParticleSize2`.

**Recreate particles**  
Destroy and recreate particles, so as to take changes made to setup of the emitter in account.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::RecreateParticleSystem`.

**Flow**  
Change the flow of the emitter.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Flow (in particles per second)

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::SetFlow`.

**Capacity**  
Change the capacity of the emitter.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Capacity

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::SetTank`.

**Particle image**  
Change the image of particles (if displayed).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (imageResource): Image file (or image resource name)

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::SetTextureFromResource`.

**Start emission**  
Refill tank (if not infinite) and start emission of the particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::StartEmission`.

**Stop emission**  
Stop the emission of particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::StopEmission`.

**Creation radius**  
Modify creation radius of particles.  
Particles have to be recreated in order to take changes in account.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `ParticleSystem::ZoneRadius`.


### Object conditions

**Angle of the spray cone**  
Test the angle of the spray cone of the emitter

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Angle to compare to (in degrees)

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ConeSprayAngle`.

**Emission angle**  
Test the value of emission angle of the emitter.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Angle to compare to (in degrees)

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::EmitterAngle`.

**Flow**  
Test the flow of the emitter.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Flow to compare to (in particles per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::Flow`.

**No more particles**  
Check if the object does not emit particles any longer, so as to destroy it for example.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::NoMoreParticles`.

**Start opacity**  
Compare the start opacity of particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare to (0-255)

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleAlpha1`.

**End opacity**  
Compare the end opacity of particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare to (0-255)

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleAlpha2`.

**Start color blue component**  
Compare the start color blue component.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare to (0-255)

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleBlue1`.

**End color blue component**  
Compare the end color blue component.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare to (0-255)

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleBlue2`.

**Activate particles additive rendering**  
Check if the particles additive rendering is activated.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleEmitter::AdditiveRendering`.

**Number of displayed particles**  
Compare the maximum number of displayed particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleEmitter::MaxParticlesCount`.

**Particle rotation max speed**  
Compare the maximum rotation speed of the particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Angular speed (in degrees per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleEmitter::ParticleRotationMaxSpeed`.

**Particle rotation min speed**  
Compare the minimum rotation speed of the particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Angular speed (in degrees per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleEmitter::ParticleRotationMinSpeed`.

**Gravity angle**  
Test the gravity angle of the emitter

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Angle to compare to (in degrees)

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleGravityAngle`.

**Gravity**  
Test the gravity of the emitter.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleGravityLength`.

**Gravity value on X axis**  
Compare value of the gravity on X axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleGravityX`.

**Gravity value on Y axis**  
Compare value of the gravity on Y axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleGravityY`.

**Start color green component**  
Compare the start color green component.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare to (0-255)

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleGreen1`.

**End color green component**  
Compare the end color green component.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare to (0-255)

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleGreen2`.

**Maximum lifetime**  
Test maximum lifetime of particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Duration to compare to (in seconds)

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleLifeTimeMax`.

**Minimum lifetime**  
Test minimum lifetime of particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Duration to compare to (in seconds)

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleLifeTimeMin`.

**Start color red component**  
Compare the start color red component.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare to (0-255)

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleRed1`.

**End color red component**  
Compare the end color red component.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare to (0-255)

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleRed2`.

**Start size**  
Compare the particle start size.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleSize1`.

**End size**  
Compare the particle end size.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ParticleSize2`.

**Capacity**  
Test the capacity of the emitter.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Capacity to compare to

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::Tank`.

**Image**  
Test the name of the image displayed by particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::Texture`.

**Creation radius**  
Test creation radius of particles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `ParticleSystem::ZoneRadius`.


### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ConeSprayAngle()` | Angle of the spray cone ||
| `Object.CurrentParticleCount()` | Number of particles currently displayed. ||
| `Object.EmitterAngle()` | Emission angle of the particles. ||
| `Object.EmitterForceMax()` | The maximal emission force of the particles. ||
| `Object.EmitterForceMin()` | The minimal emission force of the particles. ||
| `Object.Flow()` | Flow of the particles (particles/second). ||
| `Object.MaxParticlesCount()` | Return the maximum number of displayed particles. ||
| `Object.ParticleAlpha1()` | Start opacity of the particles. ||
| `Object.ParticleAlpha2()` | End opacity of the particles. ||
| `Object.ParticleBlue1()` | The start color blue component of the particles. ||
| `Object.ParticleBlue2()` | The end color blue component of the particles. ||
| `Object.ParticleGravityAngle()` | Angle of gravity. ||
| `Object.ParticleGravityLength()` | Value of gravity. ||
| `Object.ParticleGravityX()` | Gravity of particles applied on X-axis. ||
| `Object.ParticleGravityY()` | Gravity of particles applied on Y-axis. ||
| `Object.ParticleGreen1()` | The start color green component of the particles. ||
| `Object.ParticleGreen2()` | The end color green component of the particles. ||
| `Object.ParticleLifeTimeMax()` | Maximum lifetime of the particles. ||
| `Object.ParticleLifeTimeMin()` | Minimum lifetime of the particles. ||
| `Object.ParticleRed1()` | The start color red component of the particles. ||
| `Object.ParticleRed2()` | The end color red component of the particles. ||
| `Object.ParticleRotationMaxSpeed()` | Return the maximum rotation speed of the particles. ||
| `Object.ParticleRotationMinSpeed()` | Return the minimum rotation speed of the particles. ||
| `Object.ParticleSize1()` | Start size of particles. ||
| `Object.ParticleSize2()` | End size of particles. ||
| `Object.RendererParam1()` | Rendering first parameter ||
| `Object.RendererParam2()` | Rendering second parameter ||
| `Object.Tank()` | Capacity of the particle tank. ||
| `Object.Texture()` | Name of the image displayed by particles. ||
| `Object.ZoneRadius()` | The radius of the emission zone. ||



---

The Particle system extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Particle system** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).