# Destroy Outside Screen Behavior Reference

This behavior can be used to destroy objects when they go outside of the bounds of the 2D camera. Useful for 2D bullets or other short-lived objects. Don't use it for 3D objects in a FPS/TPS game or any game with a camera not being a top view (for 3D objects, prefer comparing the position, for example Z position to see if an object goes outside of the bound of the map). Be careful when using this behavior because if the object appears outside of the screen, it will be immediately removed. [Read more explanations about it.](/gdevelop5/behaviors/destroyoutside)



## Destroy when outside of the screen 

Destroy objects automatically when they go outside of the 2D camera borders. 

### Behavior actions

**Additional border (extra distance before deletion)**  
Change the extra distance (in pixels) the object must travel beyond the screen before it gets deleted.

### Behavior conditions

**Additional border (extra distance before deletion)**  
Compare the extra distance (in pixels) the object must travel beyond the screen before it gets deleted.

_No expressions for this behavior._



---

The Destroy Outside Screen Behavior extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Destroy Outside Screen Behavior** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).