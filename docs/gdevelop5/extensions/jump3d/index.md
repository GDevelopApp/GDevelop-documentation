# 3D jump (deprecated)

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Sports and Fitness/29b5c1893f81031cca98c9a1c447464b433717bdf3569ce5fac7c7cb0a8a2b82_Sports and Fitness_gym_running_foot_run.svg" class="extension-icon"></img>
Jump and fall along Z axis.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H), [gabrielzv1233](https://gd.games/gabrielzv1233), [TulenvakiProductions](https://gd.games/TulenvakiProductions).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

It handles basic collisions with 3D boxes but rotations around X and Y axes are not supported.

This extension is deprecated. The [3D physics engine](https://wiki.gdevelop.io/gdevelop5/behaviors/physics3d) should be used instead.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## 3D jump (deprecated) 

Jump and fall along Z axis. 

### Behavior actions

**Abort jump**  
Abort the current jump and stop the object vertically. This action doesn't have any effect when the character is not jumping.

**Land on the floor**  
Stop the object from falling and land on the floor. The object will start falling again the next frame.

**Separate from platforms**  
Separate from walls and land on platforms. 3D boxes rotated around X and Y axes are not supported.

**Allow jumping again**  
When this action is executed, the object is able to jump again, even if it is in the air: this can be useful to allow a double jump for example. This is not a permanent effect: you must call again this action everytime you want to allow the object to jump (apart if it's on the floor).

**Current falling speed**  
Change the current falling speed of the object. Its value is always positive.

**Current jump speed**  
Change the current jump speed of the object. Its value is always positive.

**Gravity**  
Change the gravity of the object. Its value is always positive.

**Jump height**  
Change the jump height of the object. Its value is always positive.

**Jump sustain time**  
Change the jump sustain time of the object. Maximum time (in seconds) during which the jump strength is sustained if the jump key is held - allowing variable height jumps.

**Maximum falling speed**  
Change the maximum falling speed of the object. Its value is always positive.

**Stop falling when Z equals 0**  
Change if stop falling when Z equals 0.

**Simulate jump key press**  
Simulate a press of the jump key.

### Behavior conditions

**Can jump**  
Check if the object can jump.

**Current falling speed**  
Compare the current falling speed of the object. Its value is always positive.

**Current jump speed**  
Compare the current jump speed of the object. Its value is always positive.

**Current vertical speed**  
Compare the current speed of the object on Z axis. Its value is negative when the object falls.

**Gravity**  
Compare the gravity of the object. Its value is always positive.

**Is falling**  
Check if the object is falling.\nNote that the object can be flagged as jumping and falling at the same time: at the end of a jump, the fall speed becomes higher than the jump speed.

**Is jumping**  
Check if the object is jumping.

**Is on floor**  
Check if the object is on a platform.

**Jump height**  
Compare the jump height of the object. Its value is always positive.

**Jump sustain time**  
Compare the jump sustain time of the object. Maximum time (in seconds) during which the jump strength is sustained if the jump key is held - allowing variable height jumps.

**Maximum falling speed**  
Compare the maximum falling speed of the object. Its value is always positive.

**Stop falling when Z equals 0**  
Check if stop falling when Z equals 0.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Jump3D::CurrentFallSpeed()` | Return the current falling speed of the object. Its value is always positive. ||
| `Object.Jump3D::CurrentJumpSpeed()` | Return the current jump speed of the object. Its value is always positive. ||
| `Object.Jump3D::CurrentVerticalSpeed()` | Return the current speed of the object on Z axis. Its value is negative when the object falls. ||
| `Object.Jump3D::Gravity()` | Return the gravity of the object. Its value is always positive. ||
| `Object.Jump3D::JumpHeight()` | Return the jump height of the object. Its value is always positive. ||
| `Object.Jump3D::JumpSustainDurationMax()` | Return the jump sustain time of the object. Maximum time (in seconds) during which the jump strength is sustained if the jump key is held - allowing variable height jumps. ||
| `Object.Jump3D::MaxFallingSpeed()` | Return the maximum falling speed of the object. Its value is always positive. ||


---

*This page is an auto-generated reference page about the **3D jump (deprecated)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).