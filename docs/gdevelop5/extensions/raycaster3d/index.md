# 3D raycast

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/8419f46b76bce482c14b4c03b4141a64d457e4cdc92686f3470381f5d2694abd_ray-start-arrow.svg" class="extension-icon"></img>
Find 3D objects that cross a line.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

---

It can be useful to:

- Find 3D objects under the pointer
- Target objects from a 1st person view
- Make AI that detect objects in their field of view

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Conditions

**Last recast distance**  
Compare the last recast intersection distance.

**Raycast to a position**  
Sends a ray from the given source position to the final point, intersecting the closest object. The intersected object will become the only one taken into account.

**Raycast from camera center**  
Sends a ray from the center of the camera, intersecting the closest object. The intersected object will become the only one taken into account.

**Raycast from a camera point**  
Sends a ray from the given source point on the camera screen, intersecting the closest object. The intersected object will become the only one taken into account.

**Raycast**  
Sends a ray from the given source position and angle, intersecting the closest object. The intersected object will become the only one taken into account.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Raycaster3D::Distance()` | Return the last recast intersection distance. ||
| `Raycaster3D::IntersectionX()` | Return the last recast intersection position on X axis. ||
| `Raycaster3D::IntersectionY()` | Return the last recast intersection position on Y axis. ||
| `Raycaster3D::IntersectionZ()` | Return the last recast intersection position on Z axis. ||
| `Raycaster3D::NormalX()` | Return the last recast intersection normal on X axis. ||
| `Raycaster3D::NormalY()` | Return the last recast intersection normal on X axis. ||
| `Raycaster3D::NormalZ()` | Return the last recast intersection normal on Z axis. ||

---

*This page is an auto-generated reference page about the **3D raycast** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).