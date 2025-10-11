# Leaderboard dialog

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/4b89b420c0ed9c540a7f00c5735a31af0db2160679d3fab2170df3681c3ac38c_trophy.svg" class="extension-icon"></img>
Display the player score and allow to submit it to a leaderboard.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

Display the player score and allow to submit it to a leaderboard.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Leaderboard dialog 

Displays the player score and allows to submit it to a leaderboard. 

### Object actions

**Best score**  
Change the best score of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Default player name**  
Change the default player name.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Leaderboard**  
Change the leaderboard of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔤 Leaderboard Identifier (String)): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Score**  
Change the score.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Title**  
Change the title of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Object conditions

**Best score**  
Compare the best score of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Default player name**  
Compare the default player name.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Back button clicked**  
Check if the back button of the dialog is clicked.

??? quote "See parameters"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Next button clicked**  
Check if the next button of the dialog is clicked.

??? quote "See parameters"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Restart button clicked**  
Check if the restart button of the dialog is clicked.

??? quote "See parameters"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Score is submitted**  
Check if the score has been sucessfully submitted by the dialog.

??? quote "See parameters"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Leaderboard**  
Compare the leaderboard of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 Leaderboard Identifier (String)): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Player name**  
Compare the player name.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Score**  
Compare the score.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.BestScore()` | Return the best score of the object. ||
| `Object.DefaultPlayerName()` | Return the default player name. ||
| `Object.LeaderboardId()` | Return the leaderboard of the object. ||
| `Object.PlayerName()` | Return the player name. ||
| `Object.Score()` | Return the score. ||


---

*This page is an auto-generated reference page about the **Leaderboard dialog** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).