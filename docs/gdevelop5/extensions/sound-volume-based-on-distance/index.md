# Sound volume based on distance

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Music/Music_speaker_audio_sound.svg" class="extension-icon"></img>
Make any sound volume on any channel increase and decrease based on distance.

**Authors and contributors** to this experimental extension: [VegeTato](https://gd.games/VegeTato).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

# User can

- Set any channel volume based on the distance betwen 2 objects.
- Use the extension action multi times on different objects.
- Set the Sound range.
- Set the maximum volume range.

# Example
![](https://i.imgur.com/uBgnRU7.png)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Sound volume based on distance**  
Change a channel volume based on distance between 2 objects.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Player object
    - Parameter 2 (👾 Object): Sound source object
    - Parameter 3 (🔢 Number): Sound channel
    - Parameter 4 (🔢 Number): Sound range
      How far the player can go before the sound start fading out.
    - Parameter 5 (🔢 Number): Max volume range (in pixels)
      Distance between object and sound source object to get the maximum volume.  
      *Note: increasing max volume range will also increase the sound range.*

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SoundVolumeBasedOnDistance::SoundObjects`.





---

*This page is an auto-generated reference page about the **Sound volume based on distance** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).