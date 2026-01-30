# Anchor Reference

Anchor objects to the window's bounds. [Read more explanations about it.](/gdevelop5/behaviors/anchor)



## Anchor 

Anchor objects to the window's bounds. 

### Behavior properties

- **Bottom edge** (Choice, one of: "None", "WindowTop", "WindowCenter", "WindowBottom", "Proportional"). Anchor the bottom edge of the object on Y axis. Default value is `None`.
- **Left edge** (Choice, one of: "None", "WindowLeft", "WindowCenter", "WindowRight", "Proportional"). Anchor the left edge of the object on X axis. Default value is `None`.
- **Anchor relatively to original window size** (🔘 Boolean). otherwise, objects are anchored according to the window size when the object is created. Default value is `true`.
- **Right edge** (Choice, one of: "None", "WindowLeft", "WindowCenter", "WindowRight", "Proportional"). Anchor the right edge of the object on X axis. Default value is `None`.
- **Top edge** (Choice, one of: "None", "WindowTop", "WindowCenter", "WindowBottom", "Proportional"). Anchor the top edge of the object on Y axis. Default value is `None`.
- **Stretch object when anchoring right or bottom edge (deprecated, it's recommended to leave this unchecked and anchor both sides if you want Sprite to stretch instead.)** (🔘 Boolean). Default value is `false`.

??? quote "See internal technical details"


    - **Bottom edge** is stored as `bottomEdgeAnchor` (Choice). Default value is `None`.
    - **Left edge** is stored as `leftEdgeAnchor` (Choice). Default value is `None`.
    - **Anchor relatively to original window size** is stored as `relativeToOriginalWindowSize` (Boolean). Default value is `true`.
    - **Right edge** is stored as `rightEdgeAnchor` (Choice). Default value is `None`.
    - **Top edge** is stored as `topEdgeAnchor` (Choice). Default value is `None`.
    - **Stretch object when anchoring right or bottom edge (deprecated, it's recommended to leave this unchecked and anchor both sides if you want Sprite to stretch instead.)** is stored as `useLegacyBottomAndRightAnchors` (Boolean). Default value is `false`.

_No expressions for this behavior._




---

The Anchor extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Anchor** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).