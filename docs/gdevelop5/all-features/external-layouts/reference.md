# External layouts Reference

External layouts hold instances placed apart from a scene, using the objects and layers of the scene they are associated with. Their instances are not created when the scene starts: the scene creates them when needed, with the action to create objects from an external layout, at their editor positions (offset by an origin), on their layer, with their size, angle, Z order, visibility and instance variables. The objects and layers used must exist in the scene creating them (any external layout of the project can be loaded, not only the ones associated with the scene). Nothing is removed first: creating the same external layout again duplicates its objects, so delete the previous instances (for example the previous level) before loading new ones. Typical uses: the levels of a game built in a single scene (one external layout per level, loaded at the beginning of the scene according to a variable), a room or an enemy wave spawned on demand. For a UI panel, a custom object is usually a better fit (it is reusable, resizable and can hold its own logic); use an external layout for a simple, one-off UI screen. [Read more explanations about it.](/gdevelop5/interface/scene-editor/external-layouts)

## Actions

**Create objects from an external layout**  
Create in the scene all the instances of an external layout, as placed in its editor (positions offset by the given origin). Nothing is removed first: calling the action again creates the objects again.

??? quote "See parameters & details"

    - Parameter 1: 🔤 External Layout Name (String)
    - Parameter 2 (🔢 Number): X position of the origin
      Added to the X position of every created instance (0 keeps the positions of the external layout).
    - Parameter 3 (🔢 Number): Y position of the origin
      Added to the Y position of every created instance.
    - Parameter 4 (🔢 Number): Z position of the origin
      Added to the Z position of every created 3D instance.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `BuiltinExternalLayouts::CreateObjectsFromExternalLayout`.






---

The External layouts extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **External layouts** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).