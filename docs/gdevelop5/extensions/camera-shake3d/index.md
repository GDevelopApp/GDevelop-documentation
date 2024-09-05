# 3D camera shake

<img src="https://resources.gdevelop-app.com/assets/Icons/vector-difference-ab.svg" class="extension-icon"></img>
Shake 3D layer cameras.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

---

Shake layer cameras on 3 rotations.


- Short shaking can be used to give impact (explosion, hit)
- Shaking can go indefinitely to set an ambiance (engine vibration, earthquake, pulsing)
- Low frequency shaking allows to simulate slow moving objects (ship rocking back and forth)


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Horizontal rotation amplitude**  
Change the horizontal rotation amplitude of the shaking (in degrees).

**Shakable layer**  
Mark a layer as shakable.

**Layer shaking frequency**  
Change the number of back and forth per seconds.

**Spinning shake amplitude**  
Change the spinning amplitude of the shaking (in degrees).

**Vertical rotation amplitude**  
Change the vertical rotation amplitude of the shaking (in degrees).

**Shake camera**  
Shake the camera on layers chosen with configuration actions.

**Start camera shaking**  
Start shaking the camera indefinitely.

**Stop camera shaking**  
Stop shaking the camera.

## Conditions

**Horizontal rotation amplitude**  
Compare the horizontal rotation amplitude of the shaking (in degrees).

**Camera is shaking**  
Check if the camera is shaking.

**Spinning shake amplitude**  
Compare the spinning amplitude of the shaking (in degrees).

**Vertical rotation amplitude**  
Compare the vertical rotation amplitude of the shaking (in degrees).

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `CameraShake3D::HorizontalAmplitudeAngle()` | Return the horizontal rotation amplitude of the shaking (in degrees). ||
| `CameraShake3D::SpineAmplitudeAngle()` | Return the spinning amplitude of the shaking (in degrees). ||
| `CameraShake3D::VerticalAmplitudeAngle()` | Return the vertical rotation amplitude of the shaking (in degrees). ||

---

*This page is an auto-generated reference page about the **3D camera shake** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).