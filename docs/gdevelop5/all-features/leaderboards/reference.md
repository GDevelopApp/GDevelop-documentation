# Leaderboards Reference

Allow your game to send scores to your leaderboards (anonymously or from the logged-in player) or display existing leaderboards to the player. [Read more explanations about it.](/gdevelop5/all-features/leaderboards)

## Actions

**Close current leaderboard**  
Close the leaderboard currently displayed on top of the game.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Leaderboards::CloseLeaderboardView`.

**Display leaderboard**  
Display the specified leaderboard on top of the game. If a leaderboard was already displayed on top of the game, the new leaderboard will replace it.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Leaderboard Identifier (String)): Leaderboard
    - Parameter 2 (❓ Yes or No): Display loader while leaderboard is loading

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Leaderboards::DisplayLeaderboard`.

**Save connected player score**  
Save the connected player's score to the given leaderboard.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Leaderboard Identifier (String)): Leaderboard
    - Parameter 2 (🔢 Number): Score to register for the player

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Leaderboards::SaveConnectedPlayerScore`.

**Save player score**  
Save the player's score to the given leaderboard. If the player is connected, the score will be attached to the connected player (unless disabled).

??? quote "See parameters & details"

    - Parameter 1 (🔤 Leaderboard Identifier (String)): Leaderboard
    - Parameter 2 (🔢 Number): Score to register for the player
    - Parameter 3 (🔤 String): Name to register for the player
      Let this empty to let the leaderboard auto-generate a player name (e.g: "Player23464"). You can configure this in the leaderboard administration.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Leaderboards::SavePlayerScore`.

**Always attach scores to the connected player**  
Set if the score sent to a leaderboard is always attached to the connected player - if any. This is on by default.

??? quote "See parameters & details"

    - Parameter 1 (❓ Yes or No): Enable?

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Leaderboards::SetPreferSendConnectedPlayerScore`.


## Conditions

**Last score save has errored**  
Check if the last attempt to save a score has errored.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Leaderboard Identifier (String)): Leaderboard
      If no leaderboard is specified, will return the value related to the last leaderboard save action.

    > Technical note: this condition internal type (in GDevelop JSON) is `Leaderboards::HasLastSaveErrored`.

**Last score save has succeeded**  
Check if the last attempt to save a score has succeeded.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Leaderboard Identifier (String)): Leaderboard
      If no leaderboard is specified, will return the value related to the last leaderboard save action that successfully ended.

    > Technical note: this condition internal type (in GDevelop JSON) is `Leaderboards::HasLastSaveSucceeded`.

**Closed by player**  
Check if the player has just closed the leaderboard view.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Leaderboards::HasPlayerJustClosedLeaderboardView`.

**Leaderboard display has errored**  
Check if the display of the leaderboard errored.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Leaderboards::IsLeaderboardViewErrored`.

**Leaderboard display has loaded**  
Check if the display of the leaderboard has finished loading and been displayed on screen.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Leaderboards::IsLeaderboardViewLoaded`.

**Leaderboard display is loading**  
Check if the display of the leaderboard is loading.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Leaderboards::IsLeaderboardViewLoading`.

**Score is saving**  
Check if a score is currently being saved in leaderboard.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Leaderboard Identifier (String)): Leaderboard
      If no leaderboard is specified, will return the value related to the last leaderboard save action.

    > Technical note: this condition internal type (in GDevelop JSON) is `Leaderboards::IsSaving`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Leaderboards::FormatPlayerName(string)` | Formats a name so that it can be submitted to a leaderboard. ||
| | _🔤 String_ | Raw player name |
| `Leaderboards::LastSaveError(leaderboard identifier)` | Get the error of the last save attempt. ||
| | _🔤 Leaderboard Identifier (String)_ | Leaderboard If no leaderboard is specified, will return the value related to the last leaderboard save action. _Optional_. |



---

The Leaderboards extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Leaderboards** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).