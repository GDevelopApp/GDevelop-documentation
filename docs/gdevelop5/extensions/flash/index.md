# Flash (blink)

<img src="https://resources.gdevelop-app.com/assets/Icons/flash-outline.svg" class="extension-icon"></img>
Make objects flash (alternately visible and invisible) for a period of time.

**Authors and contributors** to this community extension: [4ian](https://gd.games/4ian).

---

Make objects flash (alternately visible and invisible) for a period of time.

It can be used to:

- Let players know they are invincible after being hit
- Catch player attention on the interface (for instance a "press start" text)



!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Flash (blink) 

Make the object flash (blink) for a period of time, so that it is alternately visible and invisible.
Trigger the effect by using the Flash action. 

### Behavior actions

**Flash (blink)**  
Make the specified object(s) blink for the given duration.

**FlashDuration property**  
Change the property value for the flashDuration.

**Half period (time during which object is invisible) property**  
Change the property value for the half period (time during which object is invisible).

**IsFlashing property**  
Update the property value for "isFlashing".

**Stop flashing**  
Stop the flashing of the specified object.

**Toggle IsFlashing property**  
Toggle the property value for isFlashing.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Is object flashing**  
Check if the specified objects are flashing.

**FlashDuration property**  
Compare the property value for the flashDuration.

**Half period (time during which object is invisible) property**  
Compare the property value for the half period (time during which object is invisible).

**IsFlashing property**  
Check the property value for isFlashing.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Flash::PropertyFlashDuration()` | Return the property value for the flashDuration. ||
| `Object.Flash::PropertyHalfPeriodTime()` | Return the property value for the half period (time during which object is invisible). ||

---

*This page is an auto-generated reference page about the **Flash (blink)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).