# Character game feel

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Videogames/a9c73353ecb47ef44b3cf3c744d303a7df2b28787b82eeb1d9cceb2a3980ad9c_Videogames_videogame_pacman_game_video.svg" class="extension-icon"></img>
Add game feel to your platformer character object.

**Authors and contributors** to this community extension: [VegeTato](https://gd.games/VegeTato).

---

Add game feel behavior to your platformer character object to get the animations:


- **Idle:** gives your character breath animation while not moving.
- **Jump:** gives your character squash and stretch animation when jumping.
- **Fall:** gives your character stretch animation when falling.
- **Land:** gives your character squash and stretch animation when landing.

# Behavior

- Game feel behavior.
   - Includes the options (Scale strength/Scaling speed) for every animation.

# Condition

- Animation is playing.

# Action

- Disable animation.
- Enable animation.

# Important

- In the events add the action [Separate player object from floor object] to avoid any kind of bugs.
![](https://i.imgur.com/TtdrAFp.png)

- Your sprite "origin" point, must be at the center bottom.
![](https://i.imgur.com/OdNv0cu.png)

- Your sprite bottom collision, must be filled entirely.
![](https://i.imgur.com/sHGOeqW.png)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Character game feel 

For platformer character. 

### Behavior actions

**Disable animation**  
Disable game feel animation.

**Enable animation**  
Enable game feel animation.

**Idle animation property**  
Update the property value for "idle animation".

**Scale strength property**  
Change the property value for the scale strength.

**Scaling speed property**  
Change the property value for the scaling speed.

**Jump animation property**  
Update the property value for "jump animation".

**Scale strength property**  
Change the property value for the scale strength.

**Scaling speed property**  
Change the property value for the scaling speed.

**Fall animation property**  
Update the property value for "fall animation".

**Scale strength property**  
Change the property value for the scale strength.

**Scaling speed property**  
Change the property value for the scaling speed.

**Land animation property**  
Update the property value for "land animation".

**Scale strength property**  
Change the property value for the scale strength.

**Scaling speed property**  
Change the property value for the scaling speed.

**Toggle Idle animation property**  
Toggle the property value for idle animation.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Jump animation property**  
Toggle the property value for jump animation.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Fall animation property**  
Toggle the property value for fall animation.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Land animation property**  
Toggle the property value for land animation.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Animation is playing**  
Check if the object game feel animation is playing.

**Idle animation property**  
Check the property value for idle animation.

**Scale strength property**  
Compare the property value for the scale strength.

**Scaling speed property**  
Compare the property value for the scaling speed.

**Jump animation property**  
Check the property value for jump animation.

**Scale strength property**  
Compare the property value for the scale strength.

**Scaling speed property**  
Compare the property value for the scaling speed.

**Fall animation property**  
Check the property value for fall animation.

**Scale strength property**  
Compare the property value for the scale strength.

**Scaling speed property**  
Compare the property value for the scaling speed.

**Land animation property**  
Check the property value for land animation.

**Scale strength property**  
Compare the property value for the scale strength.

**Scaling speed property**  
Compare the property value for the scaling speed.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.CharacterGameFeel::PropertyBIdleScale()` | Return the property value for the scale strength. ||
| `Object.CharacterGameFeel::PropertyCIdleScalingSpeed()` | Return the property value for the scaling speed. ||
| `Object.CharacterGameFeel::PropertyGJumpScale()` | Return the property value for the scale strength. ||
| `Object.CharacterGameFeel::PropertyHJumpScalingSpeed()` | Return the property value for the scaling speed. ||
| `Object.CharacterGameFeel::PropertyJFallScale()` | Return the property value for the scale strength. ||
| `Object.CharacterGameFeel::PropertyKFallScalingSpeed()` | Return the property value for the scaling speed. ||
| `Object.CharacterGameFeel::PropertyMLandScale()` | Return the property value for the scale strength. ||
| `Object.CharacterGameFeel::PropertyNLandScalingSpeed()` | Return the property value for the scaling speed. ||

---

*This page is an auto-generated reference page about the **Character game feel** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).