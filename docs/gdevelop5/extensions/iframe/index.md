# Iframe

<img src="https://resources.gdevelop-app.com/assets/Icons/iframe-array-outline.svg" class="extension-icon"></img>
Create or delete an iframe to embed websites.

**Authors and contributors** to this experimental extension: [Bouh](https://gd.games/Bouh), [DHsw](https://gd.games/DHsw).

---

This extension allows you to set up and create Iframes to show websites on your game.

New action in this extension:

- Create an iFrame
- Delete an iFrame

For security reasons on browsers, some websites can be limited if the host and the iFrame do not have the same origin. 
Read more: [Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Create an Iframe**  
Create a new Iframe to embed a website inside the game.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Name (DOM id)
    - Parameter 2 (🔤 String): URL
    - Parameter 3 (🔢 Number): Width
    - Parameter 4 (🔢 Number): Height
    - Parameter 5 (🔢 Number): Position X
    - Parameter 6 (🔢 Number): Position Y
    - Parameter 7 (❓ Yes or No): Show scrollbar
    - Parameter 8 (❓ Yes or No): Show border
    - Parameter 9 (🔤 String): Extra CSS styles (optional)
      e.g: `"border: 10px #f00 solid;"`

    > Technical note: parameters 0, 10 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Iframe::Create`.

**Delete an Iframe**  
Delete the specified Iframe.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Name (DOM id)

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Iframe::Delete`.





---

*This page is an auto-generated reference page about the **Iframe** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).