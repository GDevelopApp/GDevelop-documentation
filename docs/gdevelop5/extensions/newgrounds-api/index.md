# Newgrounds API

<img src="https://resources.gdevelop-app.com/assets/Icons/api.svg" class="extension-icon"></img>
Allows developers to use newgrounds API.

Limitations: only works with browser games.

**Authors and contributors** to this community extension: [planktonfun](https://gd.games/planktonfun).

---

Allows developers to use newgrounds API for their games

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

**Login to Newgrounds**  
Login to Newgrounds (A webpage popup will display).

**Logout from Newgrounds**  
Logout from Newgrounds.

**Post Score on Newgrounds**  
Post Score on Newgrounds (you can create scoreboards from the game edit page on newgrounds).

**Unlock a game Medal**  
Unlock a game Medal (you can create medals from the game edit page on newgrounds).

## Conditions

**User Is logged In?**  
User Is logged In?.

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