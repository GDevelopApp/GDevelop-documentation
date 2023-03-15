---
title: Auto typing animation for text ("typewriter" effect)
---
# Auto typing animation for text ("typewriter" effect)

![](https://resources.gdevelop-app.com/assets/Icons/typewriter.svg)
Animate text to simulate it being written one character at at time (a "typewriter" effect).

**Authors and contributors** to this community extension: [Bouh](https://gd.games/Bouh), [VictrisGames](https://gd.games/VictrisGames).

---

Animate text to simulate it being written one character at at time (a "typewriter" effect), with a customizable time between each character. Useful for dialogue scenes or visual novels.

How to use:

- Add the behavior to a Text object (BBText, Bitmap Text object) and choose the interval between characters.

Tips:

- Change the typing speed with the "Change interval" action.
- Pause the typing and resume it at any time.
- Use the "Skip to end of text" action to give users a way to skip text they don't want to read 
- If the text changes, the automatic typing starts again from the beginning with the new text.
- Use a condition to check if the typing finished.
- Use a condition to check if a new text character was added. This is useful to trigger audio effects.
- Use the "CurrentCharacter" expression to know when a specific character was displayed.

The top-down RPG example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://top-down-rpg)).

---

!!! tip

    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

*This page is an auto-generated reference page about the **Auto typing animation for text ("typewriter" effect)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).