# Platform ledge grabber

<img src="https://resources.gdevelop-app.com/assets/Icons/human-handsup.svg" class="extension-icon"></img>
Grab platforms ledges within reach automatically.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

---

Platforms ledges are grabbed automatically when they are within reach.

Additional constraints can be added to:

- make the grabbing range smaller
- only grab ledges the character is facing

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Platform ledge grabber 

Grab platforms ledges within reach automatically. 

### Behavior actions

**Only grab facing ledges**  
Change whether the character only grabs facing ledges or any ledges at reach.

**Maximum ledge distance**  
Change the maximum ledge distance on X axis where the character moves toward the ledge. Note that the character won't move unless it can actually grab the platform.

**IsMovingLeftAutomatically property**  
Update the property value for "isMovingLeftAutomatically".

**IsMovingRightAutomatically property**  
Update the property value for "isMovingRightAutomatically".

**Only grab facing ledges property**  
Update the property value for "only grab facing ledges".

**Maximum ledge distance on X axis property**  
Change the property value for the maximum ledge distance on X axis.

**Toggle IsMovingLeftAutomatically property**  
Toggle the property value for isMovingLeftAutomatically.  
If it was true, it will become false, and if it was false it will become true.

**Toggle IsMovingRightAutomatically property**  
Toggle the property value for isMovingRightAutomatically.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Only grab facing ledges property**  
Toggle the property value for only grab facing ledges.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Is moving toward a ledge**  
Check if the character is moving toward a ledge.

**IsMovingLeftAutomatically property**  
Check the property value for isMovingLeftAutomatically.

**IsMovingRightAutomatically property**  
Check the property value for isMovingRightAutomatically.

**Only grab facing ledges property**  
Check the property value for only grab facing ledges.

**Maximum ledge distance on X axis property**  
Compare the property value for the maximum ledge distance on X axis.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PlatformLedgeGrabber::PropertyLedgeMarginX()` | Return the property value for the maximum ledge distance on X axis. ||

---

*This page is an auto-generated reference page about the **Platform ledge grabber** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).