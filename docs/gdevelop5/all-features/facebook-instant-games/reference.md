# Facebook Instant Games Reference

Allow your game to send scores and interact with the Facebook Instant Games platform. [Read more explanations about it.](/gdevelop5/publishing/publishing-to-facebook-instant-games)

## Actions

**Load and prepare an interstitial ad**  
Request and load an interstitial ad from Facebook, so that it is ready to be shown.

**Load player data**  
Load the player data with the given key in a variable

**Load player entry**  
Load the player entry in the given leaderboard

**Load and prepare a rewarded video**  
Request and load a rewarded video from Facebook, so that it is ready to be shown.

**Save player data**  
Save the content of the given scene variable in the player data, stored on Facebook Instant Games servers

**Save player score**  
Save the score, and optionally the content of the given variable in the player score, for the given metadata.

**Show the loaded interstitial ad**  
Show the interstitial ad previously loaded in memory. This won't work if you did not load the interstitial before.

**Show the loaded rewarded video**  
Show the rewarded video previously loaded in memory. This won't work if you did not load the video before.

## Conditions

**Check if ads are supported**  
Check if showing ads is supported on this device (only mobile phones can show ads)

**Is the interstitial ad ready**  
Check if the interstitial ad requested from Facebook is loaded and ready to be shown.

**Is the rewarded video ready**  
Check if the rewarded video requested from Facebook is loaded and ready to be shown.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `FacebookInstantGames::PlayerId()` | Get the player unique identifier ||
| `FacebookInstantGames::PlayerName()` | Get the player name ||



---

The Facebook Instant Games extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Facebook Instant Games** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).