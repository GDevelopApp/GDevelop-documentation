# Clipboard

<img src="https://resources.gdevelop-app.com/assets/Icons/clipboard-text-multiple-outline.svg" class="extension-icon"></img>
Read and write the clipboard.

**Authors and contributors** to this community extension: [Bouh](https://gd.games/Bouh), [arthuro555](https://gd.games/arthuro555).

---

This extension allows to access the clipboard.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Get text from the clipboard**  
Read the text from the clipboard asynchronously.   

Note also that on web browsers, the user might be asked for permissions to read from the clipboard.

**(No waiting) Get text from the clipboard**  
Read the text from the clipboard asynchronously. As this is "asynchronous", the variable won't be immediately filled with the text from the clipboard. You will have to wait a few frames before it will be. If you want your subsequent actions and subevents to automatically wait for the read to finish, use the waiting version of this action instead (recomended).   

Note also that on web browsers, the user might be asked for permissions to read from the clipboard.

**Write text to the clipboard**  
Write the text in the clipboard.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Clipboard::ReadText()` | [DEPRECATED] Read the text from the clipboard (Windows, macOS, Linux only) ||

---

*This page is an auto-generated reference page about the **Clipboard** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).