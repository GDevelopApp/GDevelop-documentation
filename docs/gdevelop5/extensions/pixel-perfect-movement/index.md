# Pixel perfect movement

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Graphic Design/Graphic Design_grid.svg" class="extension-icon"></img>
Grid-based or pixel perfect platformer and top-down movements.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H), [MikeSheldon](https://gd.games/MikeSheldon), [Mistafixxa069](https://gd.games/Mistafixxa069).

---

Games with pixel art usually use pixels bigger than actual pixels of the screen. This can lead to big pixels partially overlapping each other which doesn't look good.

This extension allows to seamlessly keep big pixels aligned when the object is stopped and still beneficiate from the high resolution of the screen to have smooth movements.

It can be used for:

* Pixel-perfect platformers ([open the project online](https://editor.gdevelop.io/?project=example://platformer-with-tilemap))
* Align top-down characters on a grid ([open the project online](https://editor.gdevelop.io/?project=example://top-down-grid-movement))

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Define JavaScript classes for top-down**  
Define JavaScript classes for top-down.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `PixelPerfectMovement::BrakingDistance(number, number)` | Return the braking distance according to an initial speed and a deceleration. ||
| | _number_ | Speed |
| | _number_ | Deceleration |
| `PixelPerfectMovement::SpeedToReach(number, number)` | Return the speed necessary to cover a distance according to the deceleration. ||
| | _number_ | Distance |
| | _number_ | Deceleration |

## Pixel perfect platformer character 

Seamlessly align big pixels using a platformer character movement. 

### Behavior actions

**IsDecelerating property**  
Update the property value for "isDecelerating".

**Pixel grid offset X property**  
Change the property value for the pixel grid offset X.

**Pixel grid offset Y property**  
Change the property value for the pixel grid offset Y.

**Pixel size property**  
Change the property value for the pixel size.

**PreviousSpeedX property**  
Change the property value for the previousSpeedX.

**TargetDirectionX property**  
Change the property value for the targetDirectionX.

**TargetDirectionY property**  
Change the property value for the targetDirectionY.

**TargetX property**  
Change the property value for the targetX.

**TargetY property**  
Change the property value for the targetY.

**Toggle IsDecelerating property**  
Toggle the property value for isDecelerating.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**IsDecelerating property**  
Check the property value for isDecelerating.

**Pixel grid offset X property**  
Compare the property value for the pixel grid offset X.

**Pixel grid offset Y property**  
Compare the property value for the pixel grid offset Y.

**Pixel size property**  
Compare the property value for the pixel size.

**PreviousSpeedX property**  
Compare the property value for the previousSpeedX.

**TargetDirectionX property**  
Compare the property value for the targetDirectionX.

**TargetDirectionY property**  
Compare the property value for the targetDirectionY.

**TargetX property**  
Compare the property value for the targetX.

**TargetY property**  
Compare the property value for the targetY.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PixelPerfectPlatformerCharacter::PropertyOffsetX()` | Return the property value for the pixel grid offset X. ||
| `Object.PixelPerfectPlatformerCharacter::PropertyOffsetY()` | Return the property value for the pixel grid offset Y. ||
| `Object.PixelPerfectPlatformerCharacter::PropertyPixelSize()` | Return the property value for the pixel size. ||
| `Object.PixelPerfectPlatformerCharacter::PropertyPreviousSpeedX()` | Return the property value for the previousSpeedX. ||
| `Object.PixelPerfectPlatformerCharacter::PropertyTargetDirectionX()` | Return the property value for the targetDirectionX. ||
| `Object.PixelPerfectPlatformerCharacter::PropertyTargetDirectionY()` | Return the property value for the targetDirectionY. ||
| `Object.PixelPerfectPlatformerCharacter::PropertyTargetX()` | Return the property value for the targetX. ||
| `Object.PixelPerfectPlatformerCharacter::PropertyTargetY()` | Return the property value for the targetY. ||

## Pixel perfect top-down movement 

Seamlessly align big pixels using a top-down movement. 

### Behavior actions

**Pixel grid offset X property**  
Change the property value for the pixel grid offset X.

**Pixel grid offset Y property**  
Change the property value for the pixel grid offset Y.

**Pixel size property**  
Change the property value for the pixel size.

### Behavior conditions

**Pixel grid offset X property**  
Compare the property value for the pixel grid offset X.

**Pixel grid offset Y property**  
Compare the property value for the pixel grid offset Y.

**Pixel size property**  
Compare the property value for the pixel size.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PixelPerfectTopDownMovement::PropertyOffsetX()` | Return the property value for the pixel grid offset X. ||
| `Object.PixelPerfectTopDownMovement::PropertyOffsetY()` | Return the property value for the pixel grid offset Y. ||
| `Object.PixelPerfectTopDownMovement::PropertyPixelSize()` | Return the property value for the pixel size. ||

---

*This page is an auto-generated reference page about the **Pixel perfect movement** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).