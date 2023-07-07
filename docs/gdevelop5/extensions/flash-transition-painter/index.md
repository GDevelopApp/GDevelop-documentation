# Flash and transition painter

<img src="https://resources.gdevelop-app.com/assets/Icons/movie-filter.svg" class="extension-icon"></img>
Behavior for shape painter allows you to paint a color all over the screen for period of time with an effect (useful for simulate flash and transition effect).

**Authors and contributors** to this community extension: (not specified).

---

* __Paint effect:__ Action to paint a color all over the screen for a period of time with specific effect.
effect type:
    * __Flash:__ is a monochrome color appear with fade then disappear with fade out.
    * __Vertical:__ is a monochrome color comes from right side then comes back.
    * __Horizontal:__ is a monochrome color come from top side then comes back.
    * __Circular:__ is a circle which increases from the center and narrows.

* __Paint effect ended:__ event when the paint effect ends.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Flash and transition painter 

Paint all over the screen a color for a period of time. 

### Behavior actions

**Paint Effect**  
Paint Effect.

**Color property**  
Change the property value for the color.

**Direction of transition property**  
Change the property value for the direction of transition.

**The maximum of the opacity only for flash property**  
Change the property value for the the maximum of the opacity only for flash.

**Timer property**  
Change the property value for the timer.

**Type of effect  property**  
Change the property value for the type of effect .

### Behavior conditions

**Paint effect ended **  
Paint effect ended.

**Color property**  
Compare the property value for the color.

**Direction of transition property**  
Compare the property value for the direction of transition.

**The maximum of the opacity only for flash property**  
Compare the property value for the the maximum of the opacity only for flash.

**Timer property**  
Compare the property value for the timer.

**Type of effect  property**  
Compare the property value for the type of effect .

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FlashTransitionPainter::PropertyColor()` | Return the property value for the color. ||
| `Object.FlashTransitionPainter::PropertyDirection()` | Return the property value for the direction of transition. ||
| `Object.FlashTransitionPainter::PropertyMaxOpacity()` | Return the property value for the the maximum of the opacity only for flash. ||
| `Object.FlashTransitionPainter::PropertyTimer()` | Return the property value for the timer. ||
| `Object.FlashTransitionPainter::PropertyType()` | Return the property value for the type of effect . ||

---

*This page is an auto-generated reference page about the **Flash and transition painter** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).