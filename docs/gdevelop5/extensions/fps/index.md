# Frames per second (FPS)

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/SEO/SEO_board_performance_profit.svg" class="extension-icon"></img>
Calculate and display frames per second (FPS).

**Authors and contributors** to this experimental extension: [Ahnaf30e](https://gd.games/Ahnaf30e), [VictrisGames](https://gd.games/VictrisGames).

---

Provides an expression to get the current FPS and a text object behavior to display the current FPS.

Frames Per Second (FPS) describes how many times in the last second your game logic was executed. 
This includes running behaviors and events, and then rendering the new game state into the game window. The higher the FPS, the more fluid and performant your game looks.

Note: Use the Performance Profiler (inside in the Debugger) for detailed performance information about your game.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `FPS::FPS()` | Frames per second (FPS) during the last second. ||

## FPS Displayer 

Makes a text object display the current FPS. 

### Behavior properties

- **Number of decimal digits** (🔢 Number, Dimensionless). Default value is `0`.
- **FPS counter prefix** (🔤 String). Default value is `FPS: `.

??? quote "See internal technical details"


    - **Number of decimal digits** is stored as `DecimalDigits` (Number). Unit is Dimensionless. Default value is `0`.
    > This behavior must be used on an object also having a behavior with type "TextContainerCapability::TextContainerBehavior". This is stored on property `Text`.

    - **FPS counter prefix** is stored as `prefix` (String). Default value is `FPS: `.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Frames per second (FPS)** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).