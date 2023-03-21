# Particle system

A particle emitter allows to create various effects by showing a lot of tiny images called particles. It's ideal for fires, smoke, explosions, magical effects, etc... [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/particles_emitter)



## Particles emitter 

Displays a large number of small particles to create visual effects. 

### Object actions

**Angle of the spray cone**  
Modify the angle of the spray cone.

**Emission angle**  
Modify emission angle.

**Emission maximal force**  
Modify maximal emission force of particles.

**Emission minimal force**  
Modify minimal emission force of particles.

**Jump emitter forward in time**  
Simulate the passage of time for an emitter, including creating and moving particles

**Start opacity**  
Modify the start opacity of particles.

**End opacity**  
Modify the end opacity of particles.

**Start color blue component**  
Modify the start color blue component.

**End color blue component**  
Modify the end color blue component.

**Start color**  
Modify start color of particles.

**End color**  
Modify end color of particles.

**Activate particles additive rendering**  
Set (or unset) if the particles additive rendering is activated.

**Number of displayed particles**  
Change the maximum number of displayed particles.

**Particle rotation max speed**  
Change the maximum rotation speed of the particles.

**Particle rotation min speed**  
Change the minimum rotation speed of the particles.

**Gravity angle**  
Change gravity angle

**Gravity**  
Change the gravity of the emitter.

**Gravity value on X axis**  
Change value of the gravity on X axis.

**Gravity value on Y axis**  
Change value of the gravity on Y axis.

**Start color green component**  
Modify the start color green component.

**End color green component**  
Modify the end color green component.

**Maximum lifetime**  
Modify particles maximum lifetime.  
Particles have to be recreated in order to take changes in account.

**Minimum lifetime**  
Modify particles minimum lifetime. Particles have to be recreated in order to take changes in account.

**Start color red component**  
Modify the start color red component.

**End color red component**  
Modify the end color red component.

**Start size**  
Modify the particle start size.

**End size**  
Modify the particle end size.

**Recreate particles**  
Destroy and recreate particles, so as to take changes made to setup of the emitter in account.

**Flow**  
Change the flow of the emitter.

**Capacity**  
Change the capacity of the emitter.

**Particle image**  
Change the image of particles (if displayed).

**Start emission**  
Refill tank (if not infinite) and start emission of the particles.

**Stop emission**  
Stop the emission of particles.

**Particle image (using an expression)**  
Change the image of particles (if displayed).

**Creation radius**  
Modify creation radius of particles.  
Particles have to be recreated in order to take changes in account.

### Object conditions

**Angle of the spray cone**  
Test the angle of the spray cone of the emitter

**Emission angle**  
Test the value of emission angle of the emitter.

**Flow**  
Test the flow of the emitter.

**No more particles**  
Check if the object does not emit particles any longer, so as to destroy it for example.

**Start opacity**  
Compare the start opacity of particles.

**End opacity**  
Compare the end opacity of particles.

**Start color blue component**  
Compare the start color blue component.

**End color blue component**  
Compare the end color blue component.

**Activate particles additive rendering**  
Check if the particles additive rendering is activated.

**Number of displayed particles**  
Compare the maximum number of displayed particles.

**Particle rotation max speed**  
Compare the maximum rotation speed of the particles.

**Particle rotation min speed**  
Compare the minimum rotation speed of the particles.

**Gravity angle**  
Test the gravity angle of the emitter

**Gravity**  
Test the gravity of the emitter.

**Gravity value on X axis**  
Compare value of the gravity on X axis.

**Gravity value on Y axis**  
Compare value of the gravity on Y axis.

**Start color green component**  
Compare the start color green component.

**End color green component**  
Compare the end color green component.

**Maximum lifetime**  
Test maximum lifetime of particles.

**Minimum lifetime**  
Test minimum lifetime of particles.

**Start color red component**  
Compare the start color red component.

**End color red component**  
Compare the end color red component.

**Start size**  
Compare the particle start size.

**End size**  
Compare the particle end size.

**Capacity**  
Test the capacity of the emitter.

**Image**  
Test the name of the image displayed by particles.

**Creation radius**  
Test creation radius of particles.

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
*This page is an auto-generated reference page about the **Particle system** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).