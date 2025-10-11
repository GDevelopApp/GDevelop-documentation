# Newgrounds API

<img src="https://resources.gdevelop-app.com/assets/Icons/api.svg" class="extension-icon"></img>
Allows developers to use newgrounds API.

**Authors and contributors** to this experimental extension: [planktonfun](https://gd.games/planktonfun).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Allows developers to use newgrounds API for their games

Limitations: only works with browser games.

Features:

Conditions:
   - UserIsLoggedIn

Actions:

  - LoadNewgroundsAPI
  - PostScoreOnScoreBoard
  - UnlockMedal
  - LogInToNewGrounds
  - LogOutFromNewGrounds

StringExpressions:

  - RetrievePlayerName
  - RetrieveDateTime
  - RetrieveVersion
  - RetrieveMedalList
  - RetrieveScoreBoardList
  - RetrieveScoreOnScoreBoard

[Example link](https://gdevelop.io/game-example/newgrounds-api).

[Read more...](https://bitbucket.org/newgrounds/newgrounds.io-for-javascript-html5/src/master/)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Load Newgrounds API**  
Load Newgrounds API.

??? quote "See parameters"

    - Parameter 1 (string): App ID (You can find this in your newground game edit page)
    - Parameter 2 (string): Encrypt Key (You can find this in your newground game edit page)

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Login to Newgrounds**  
Login to Newgrounds (A webpage popup will display).

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**Logout from Newgrounds**  
Logout from Newgrounds.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**Post Score on Newgrounds**  
Post Score on Newgrounds (you can create scoreboards from the game edit page on newgrounds).

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Scoreboard Id
    - Parameter 2 (🔢 Number): Score Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Unlock a game Medal**  
Unlock a game Medal (you can create medals from the game edit page on newgrounds).

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Medal ID

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

## Conditions

**User Is logged In?**  
User Is logged In?.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `NewgroundsAPI::RetrieveApiDateTime()` | Get Newgrounds API Date Time. ||
| `NewgroundsAPI::RetrieveApiVersion()` | Get Newgrounds API Version. ||
| `NewgroundsAPI::RetrieveMedalList()` | Get Newgrounds Medal List. ||
| `NewgroundsAPI::RetrievePlayerName()` | Get Newgrounds Player Name. ||
| `NewgroundsAPI::RetrieveScoreBoardList()` | Get Newgrounds Score Board List. ||


---

*This page is an auto-generated reference page about the **Newgrounds API** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).