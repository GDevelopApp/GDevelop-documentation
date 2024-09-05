# Leaderboards Reference

Allow your game to send scores to your leaderboards. [Read more explanations about it.](/gdevelop5/all-features/leaderboards)

## Actions

**Close current leaderboard**  
Close the leaderboard currently displayed on top of the game.

**Display leaderboard**  
Display the specified leaderboard on top of the game. If a leaderboard was already displayed on top of the game, the new leaderboard will replace it.

**Save connected player score**  
Save the connected player's score to the given leaderboard.

**Save player score**  
Save the player's score to the given leaderboard. If the player is connected, the score will be attached to the connected player (unless disabled).

**Always attach scores to the connected player**  
Set if the score sent to a leaderboard is always attached to the connected player - if any. This is on by default.

## Conditions

**Last score save has errored**  
Check if the last attempt to save a score has errored.

**Last score save has succeeded**  
Check if the last attempt to save a score has succeeded.

**Closed by player**  
Check if the player has just closed the leaderboard view.

**Leaderboard display has errored**  
Check if the display of the leaderboard errored.

**Leaderboard display has loaded**  
Check if the display of the leaderboard has finished loading and been displayed on screen.

**Leaderboard display is loading**  
Check if the display of the leaderboard is loading.

**Score is saving**  
Check if a score is currently being saved in leaderboard.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Leaderboards::FormatPlayerName()` | Formats a name so that it can be submitted to a leaderboard. ||
| `Leaderboards::LastSaveError()` | Get the error of the last save attempt. ||

---
*This page is an auto-generated reference page about the **Leaderboards** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).