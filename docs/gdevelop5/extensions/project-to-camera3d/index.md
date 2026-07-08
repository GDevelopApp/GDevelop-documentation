# Convert 3D position to screen position

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Maps and Navigation/5f308b28df69a05ce442f41f469dbeeae407726098ae481cbc58efb4f3514fe6_Maps and Navigation_location_pin_map.svg" class="extension-icon"></img>
Move a 2D object to overlap a 3D position.

**Authors and contributors** to this experimental extension: [PANDAKO](https://gd.games/PANDAKO), [D8H](https://gd.games/D8H).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

It can be useful to:

- Display a gun sights in a 3rd person view
- Display point of interest indicators

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Overlap a 3D point**  
Change the 2D position of an object to make it overlaps the 3D position in a 3D layer.  
Objects must be on a 2D layer which is neither zoomed nor scrolled.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): 2D object
    - Parameter 2 (🔤 Layer name (String)): 3D layer
    - Parameter 3 (🔢 Number): X position
    - Parameter 4 (🔢 Number): Y position
    - Parameter 5 (🔢 Number): Z position

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ProjectToCamera3D::MoveToProjectedPoint`.





---

*This page is an auto-generated reference page about the **Convert 3D position to screen position** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).