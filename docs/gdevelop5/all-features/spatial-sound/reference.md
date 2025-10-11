# Spatial sound Reference

Allow positioning sounds in a 3D space. The stereo system of the device is used to simulate the position of the sound and to give the impression that the sound is located somewhere around the player. 

## Actions

**Listener position**  
Change the spatial position of the listener/player.

??? quote "See parameters"

    - Parameter 0 (🔢 Number): X position
    - Parameter 1 (🔢 Number): Y position
    - Parameter 2 (🔢 Number): Z position

**Set position of sound**  
Sets the spatial position of a sound. When a sound is at a distance of 1 to the listener, it's heard at 100% volume. Then, it follows an *inverse distance model*. At a distance of 2, it's heard at 50%, and at a distance of 4 it's heard at 25%.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Channel
    - Parameter 2 (🔢 Number): X position
    - Parameter 3 (🔢 Number): Y position
    - Parameter 4 (🔢 Number): Z position

    > Technical note: parameter 0 are internal parameters handled by GDevelop.





---

The Spatial sound extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Spatial sound** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).