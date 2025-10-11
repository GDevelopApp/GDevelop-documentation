# Share dialog and sharing options

<img src="https://resources.gdevelop-app.com/assets/Icons/share-variant.svg" class="extension-icon"></img>
Allows to share content via the system share dialog. Works only on mobile (browser or mobile app).

**Authors and contributors** to this experimental extension: [4ian](https://gd.games/4ian), [arthuro555](https://gd.games/arthuro555).

---

Actions and conditions to share a text and/or URL via the operating system share dialog.

This will work for Android and iOS on browsers (Google Chrome, Safari...) and on mobile apps.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Share**  
Share a link or text via another app using the system share dialog.

??? quote "See parameters"

    - Parameter 1 (string): Text to share
    - Parameter 2 (string): Url to share
    - Parameter 3 (string): Title to show in the Share dialog

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

## Conditions

**Sharing is supported**  
Check if the browser/operating system of the device supports sharing. Sharing is typically not supported on desktop browsers or desktop apps.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**Result of the last share dialog**  
Compare the result of the last share dialog.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Value to compare (one of: "unsupported", "ok", "canceled")

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Share::LastShareResult()` | Return the result of the last share dialog. ||


---

*This page is an auto-generated reference page about the **Share dialog and sharing options** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).