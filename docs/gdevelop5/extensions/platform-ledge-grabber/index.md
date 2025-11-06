# Platform ledge grabber

<img src="https://resources.gdevelop-app.com/assets/Icons/human-handsup.svg" class="extension-icon"></img>
Grab platforms ledges within reach automatically.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Platforms ledges are grabbed automatically when they are within reach.

Additional constraints can be added to:

- make the grabbing range smaller
- only grab ledges the character is facing

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Platform ledge grabber 

Grab platforms ledges within reach automatically. 

### Behavior properties

- **Only grab facing ledges** (🔘 Boolean). Default value is `false`.
- **Maximum ledge distance on X axis** (🔢 Number). Default value is `32`.

??? quote "See internal technical details"


    - **Only grab facing ledges** is stored as `IsOnlyGabbingFacingLedges` (Boolean). Default value is `false`.
    - **Maximum ledge distance on X axis** is stored as `LedgeMarginX` (Number). Default value is `32`.
    > This behavior must be used on an object also having a behavior with type "PlatformBehavior::PlatformerObjectBehavior". This is stored on property `PlatformerCharacter`.


### Behavior actions

**Only grab facing ledges**  
Change whether the character only grabs facing ledges or any ledges at reach.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Only grab facing ledges

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformLedgeGrabber::PlatformLedgeGrabber::SetIsOnlyGabbingFacingLedges`.

**Maximum ledge distance**  
Change the maximum ledge distance on X axis where the character moves toward the ledge. Note that the character won't move unless it can actually grab the platform.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Maximum ledge distance on X axis

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformLedgeGrabber::PlatformLedgeGrabber::SetLedgeMarginX`.


### Behavior conditions

**Is moving toward a ledge**  
Check if the character is moving toward a ledge.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformLedgeGrabber::PlatformLedgeGrabber::IsMovingToLedge`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Platform ledge grabber** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).