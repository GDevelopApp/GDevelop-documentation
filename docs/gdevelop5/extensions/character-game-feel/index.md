# Character game feel

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Videogames/a9c73353ecb47ef44b3cf3c744d303a7df2b28787b82eeb1d9cceb2a3980ad9c_Videogames_videogame_pacman_game_video.svg" class="extension-icon"></img>
Add game feel to your platformer character object.

**Authors and contributors** to this experimental extension: [VegeTato](https://gd.games/VegeTato).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

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

### Behavior conditions

**Animation is playing**  
Check if the object game feel animation is playing.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Character game feel** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).