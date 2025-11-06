# Facebook Instant Games Reference

Allow your game to send scores and interact with the Facebook Instant Games platform. [Read more explanations about it.](/gdevelop5/publishing/publishing-to-facebook-instant-games)

## Actions

**Load and prepare an interstitial ad**  
Request and load an interstitial ad from Facebook, so that it is ready to be shown.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): The Ad Placement id (can be found while setting up the ad on Facebook)
    - Parameter 1 (🗄️ Scene variable): Variable where to store the error message (optional, if an error occurs)

    > Technical note: this action internal type (in GDevelop JSON) is `FacebookInstantGames::LoadInterstitialAd`.

**Load player data**  
Load the player data with the given key in a variable

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Data key name (e.g: "Lives")
    - Parameter 1 (🗄️ Scene variable): Variable where to store loaded data
    - Parameter 2 (🗄️ Scene variable): Variable where to store the error message (optional, if an error occurs)

    > Technical note: this action internal type (in GDevelop JSON) is `FacebookInstantGames::LoadPlayerData`.

**Load player entry**  
Load the player entry in the given leaderboard

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Leaderboard name (e.g: "PlayersBestTimes")
    - Parameter 1 (🗄️ Scene variable): Variable where to store the player rank (of -1 if not ranked)
    - Parameter 2 (🗄️ Scene variable): Variable where to store the player score (of -1 if no score)
    - Parameter 3 (🗄️ Scene variable): Variable where to store extra data (if any)
    - Parameter 4 (🗄️ Scene variable): Variable where to store the error message (optional, if an error occurs)

    > Technical note: this action internal type (in GDevelop JSON) is `FacebookInstantGames::LoadPlayerEntry`.

**Load and prepare a rewarded video**  
Request and load a rewarded video from Facebook, so that it is ready to be shown.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): The Ad Placement id (can be found while setting up the ad on Facebook)
    - Parameter 1 (🗄️ Scene variable): Variable where to store the error message (optional, if an error occurs)

    > Technical note: this action internal type (in GDevelop JSON) is `FacebookInstantGames::LoadRewardedVideo`.

**Save player data**  
Save the content of the given scene variable in the player data, stored on Facebook Instant Games servers

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Data key name (e.g: "Lives")
    - Parameter 1 (🗄️ Scene variable): Scene variable with the content to save
    - Parameter 2 (🗄️ Scene variable): Variable where to store the success message (optional)
    - Parameter 3 (🗄️ Scene variable): Variable where to store the error message (optional, if an error occurs)

    > Technical note: this action internal type (in GDevelop JSON) is `FacebookInstantGames::SavePlayerData`.

**Save player score**  
Save the score, and optionally the content of the given variable in the player score, for the given metadata.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Leaderboard name (e.g: "PlayersBestTimes")
    - Parameter 1 (🔢 Number): Score to register for the player
    - Parameter 2 (🗄️ Scene variable): Optional variable with metadata to save
    - Parameter 3 (🗄️ Scene variable): Variable where to store the success message (optional)
    - Parameter 4 (🗄️ Scene variable): Variable where to store the error message (optional, if an error occurs)

    > Technical note: this action internal type (in GDevelop JSON) is `FacebookInstantGames::SavePlayerScore`.

**Show the loaded interstitial ad**  
Show the interstitial ad previously loaded in memory. This won't work if you did not load the interstitial before.

??? quote "See parameters & details"

    - Parameter 0 (🗄️ Scene variable): Variable where to store the error message (optional, if an error occurs)

    > Technical note: this action internal type (in GDevelop JSON) is `FacebookInstantGames::ShowInterstitialAd`.

**Show the loaded rewarded video**  
Show the rewarded video previously loaded in memory. This won't work if you did not load the video before.

??? quote "See parameters & details"

    - Parameter 0 (🗄️ Scene variable): Variable where to store the error message (optional, if an error occurs)

    > Technical note: this action internal type (in GDevelop JSON) is `FacebookInstantGames::ShowRewardedVideo`.


## Conditions

**Check if ads are supported**  
Check if showing ads is supported on this device (only mobile phones can show ads)

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `FacebookInstantGames::AreAdsSupported`.

**Is the interstitial ad ready**  
Check if the interstitial ad requested from Facebook is loaded and ready to be shown.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `FacebookInstantGames::IsInterstitialAdReady`.

**Is the rewarded video ready**  
Check if the rewarded video requested from Facebook is loaded and ready to be shown.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `FacebookInstantGames::IsRewardedVideoReady`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `FacebookInstantGames::PlayerId()` | Get the player unique identifier ||
| `FacebookInstantGames::PlayerName()` | Get the player name ||



---

The Facebook Instant Games extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Facebook Instant Games** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).