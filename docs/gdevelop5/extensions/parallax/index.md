# Parallax for Tiled Sprite

<img src="https://resources.gdevelop-app.com/assets/Icons/image-move.svg" class="extension-icon"></img>
Behaviors to animate Tiled Sprite objects in the background, following the camera with a parallax effect.

**Authors and contributors** to this community extension: [4ian](https://gd.games/4ian).

---

Behaviors to animate Tiled Sprite objects in the background, following the camera with a parallax effect.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Horizontal Parallax for a Tiled Sprite 

Move the image of a Tiled Sprite to follow the camera horizontally with a parallax effect. After adding this to an object, put the object on a layer that is not moving, behind the layer that is followed (for example, a layer called "Background"). 

### Behavior actions

**Layer to be followed (leave empty for the base layer) property**  
Change the property value for the layer to be followed (leave empty for the base layer).

**Parallax factor (speed for the parallax, usually between 0 and 1) property**  
Change the property value for the parallax factor (speed for the parallax, usually between 0 and 1).

### Behavior conditions

**Layer to be followed (leave empty for the base layer) property**  
Compare the property value for the layer to be followed (leave empty for the base layer).

**Parallax factor (speed for the parallax, usually between 0 and 1) property**  
Compare the property value for the parallax factor (speed for the parallax, usually between 0 and 1).

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.HorizontalTiledSpriteParallax::PropertyFollowedLayer()` | Return the property value for the layer to be followed (leave empty for the base layer). ||
| `Object.HorizontalTiledSpriteParallax::PropertyParallaxFactor()` | Return the property value for the parallax factor (speed for the parallax, usually between 0 and 1). ||

## Vertical Parallax for a Tiled Sprite 

Move the image of a Tiled Sprite to follow the camera vertically with a parallax effect. After adding this to an object, put the object on a layer that is not moving, behind the layer that is followed (for example, a layer called "Background"). 

### Behavior actions

**Layer to be followed (leave empty for the base layer) property**  
Change the property value for the layer to be followed (leave empty for the base layer).

**Parallax factor (speed for the parallax, usually between 0 and 1) property**  
Change the property value for the parallax factor (speed for the parallax, usually between 0 and 1).

### Behavior conditions

**Layer to be followed (leave empty for the base layer) property**  
Compare the property value for the layer to be followed (leave empty for the base layer).

**Parallax factor (speed for the parallax, usually between 0 and 1) property**  
Compare the property value for the parallax factor (speed for the parallax, usually between 0 and 1).

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.VerticalTiledSpriteParallax::PropertyFollowedLayer()` | Return the property value for the layer to be followed (leave empty for the base layer). ||
| `Object.VerticalTiledSpriteParallax::PropertyParallaxFactor()` | Return the property value for the parallax factor (speed for the parallax, usually between 0 and 1). ||

---

*This page is an auto-generated reference page about the **Parallax for Tiled Sprite** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).