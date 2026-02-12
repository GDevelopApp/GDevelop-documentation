# Game over dialog

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Halloween/4bffa50f979bde55e4a0e49b67bf51aac30f4de5e1e12ab13952aa25773363b2_Halloween_skull.svg" class="extension-icon"></img>
Display the score and let players choose what to do next.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

Display the score and let players choose what to do next:

- Submit the score to a leaderboard
- Retry
- Go back to the main menu

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Game over dialog 

Display the score and let players choose what to do next. 

### Object properties

- **Default player name** (🔤 String).
- **Leaderboard** (🔤 Leaderboard Identifier (String)).
- **Format** (Choice, one of: "Number", "MM:SS.ms", "MM:SS", "SS.ms", "SS", "ms", "HH:MM:SS.ms", "HH:MM:SS"). Default value is `Number`.
- **Prefix** (🔤 String).
- **Suffix** (🔤 String).
- **Round to decimal point** (🔢 Number). Default value is `3`.
- **Score label** (🔤 String). Default value is `Score: `.
- **Best score label** (🔤 String). Default value is `Best: `.

??? quote "See internal technical details"


    - **Default player name** is stored as `DefaultPlayerName` (String). Default value is ``.
    - **Leaderboard** is stored as `LeaderboardId` (LeaderboardId). Default value is ``.
    - **Format** is stored as `Format` (Choice). Default value is `Number`.
    - **Prefix** is stored as `Prefix` (String). Default value is ``.
    - **Suffix** is stored as `Suffix` (String). Default value is ``.
    - **Round to decimal point** is stored as `NumberDecimalPoint` (Number). Default value is `3`.
    - **Score label** is stored as `ScoreLabelText` (String). Default value is `Score: `.
    - **Best score label** is stored as `BestScoreLabelText` (String). Default value is `Best: `.

### Object actions

**Best score**  
Change the best score of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LeaderboardDialog::LeaderboardDialog::SetBestScore`.

**Default player name**  
Change the default player name.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔤 String): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LeaderboardDialog::LeaderboardDialog::SetDefaultPlayerName`.

**Leaderboard**  
Change the leaderboard of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔤 Leaderboard Identifier (String)): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LeaderboardDialog::LeaderboardDialog::SetLeaderboardId`.

**Score**  
Change the score.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LeaderboardDialog::LeaderboardDialog::SetScore`.

**Title**  
Change the title of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔤 String): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LeaderboardDialog::LeaderboardDialog::SetTitle`.

**Fade in decorations**  
Fade in the decoration objects of the dialog.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LeaderboardDialog::LeaderboardDialog::TweenIn`.

**Fade out decorations**  
Fade out the decoration objects of the dialog.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LeaderboardDialog::LeaderboardDialog::TweenOut`.


### Object conditions

**Best score**  
Compare the best score of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LeaderboardDialog::LeaderboardDialog::BestScore`.

**Default player name**  
Compare the default player name.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LeaderboardDialog::LeaderboardDialog::DefaultPlayerName`.

**Decorations are faded in**  
Check if the fade in animation of the decorations is finished.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LeaderboardDialog::LeaderboardDialog::HasTweenedIn`.

**Decorations are faded out**  
Check if the fade out animation of the decorations is finished.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LeaderboardDialog::LeaderboardDialog::HasTweenedOut`.

**Back button clicked**  
Check if the back button of the dialog is clicked.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LeaderboardDialog::LeaderboardDialog::IsBackClicked`.

**Next button clicked**  
Check if the next button of the dialog is clicked.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LeaderboardDialog::LeaderboardDialog::IsNextClicked`.

**Restart button clicked**  
Check if the restart button of the dialog is clicked.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LeaderboardDialog::LeaderboardDialog::IsRestartClicked`.

**Score is submitted**  
Check if the score has been sucessfully submitted by the dialog.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LeaderboardDialog::LeaderboardDialog::IsScoreSubmitted`.

**Leaderboard**  
Compare the leaderboard of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 Leaderboard Identifier (String)): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LeaderboardDialog::LeaderboardDialog::LeaderboardId`.

**Player name**  
Compare the player name.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LeaderboardDialog::LeaderboardDialog::PlayerName`.

**Score**  
Compare the score.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LeaderboardDialog::LeaderboardDialog::Score`.


### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.BestScore()` | Return the best score of the object. ||
| `Object.DefaultPlayerName()` | Return the default player name. ||
| `Object.LeaderboardId()` | Return the leaderboard of the object. ||
| `Object.PlayerName()` | Return the player name. ||
| `Object.Score()` | Return the score. ||


---

*This page is an auto-generated reference page about the **Game over dialog** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).