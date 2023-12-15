---
title: Details
---
# CrazyGames SDK extension

This extension allows games to be hosted on CrazyGames website and display modules in games such ads, banners, and various functionality related to the game.

## Advanced configurations

Please refer to [CrazyGames SDK documentation](https://docs.crazygames.com/sdk/html5/intro/) to know how to setup compatible environments for games, and to know about some tips about unwanted scrolling in the game's page.

## Video ads

A video ads filling all the game's screen can be displayed using the **Display video ad** action. An ad can either be `"midgame"` or `"rewarded"`.

- **Midgame**, advertisements can happen when a user died, a level has been completed, etc.

- **Rewarded**, advertisements can be requested by the user in exchange for a reward (An additional life, a retry when the user died, a bonus starting item, extra starting health, etc.). Rewarded ads should be shown when users explicitly consent to watch an advertisement.

![](crazy-games-video-ad-action.png)

You can use the **Video ad just finished playing** condition to resume the game after the end of the ad. 

![](crazy-games-video-ad-events.png)

## Banners
### Request banner

Ads banners are using a part of the game's screen according some statics dimensions such as: ``970x90, 320x50, 160x600, 336x280, 728x90, 300x600, 468x60, 970x250, 250x250, 120x600, 300x250, 320x100``.

// TODO Extension update

### Request responsive banner

Display an ads automatically according to the size of the game. The resulting banners will have one of the following sizes: ``970x90, 320x50, 160x600, 336x280, 728x90, 300x600, 468x60, 970x250, 300x250, 250x250, 120x600``. Only banners that fit into your container will be displayed, if your container cannot fit any of these sizes no ad will be rendered.

### Refreshing banners and limitations

A banners can be called only once per 60 seconds. If a banner is called before the delay an error is returned in the debugger.

### Clearing the banners

Two possible action for cealing banner ads:
- Delete banner by his name.
- Delete all the banners from the game.

## Game

### Happy time

Celebrate a special moment with in game with some sparkling confetti.
Celebrate the defeat of a boss, reaching a new highscore or something big. 

//TODO IMAGE

### Tracking users

Some actions, or events triggered automatically can be used to track when and how users are playing your games and get the stats directly on CrazyGames's game dashboard.

- The **Gameplay Start** action has to be called whenever the player starts playing or resumes playing after a break (menu/loading/achievement screen, game paused, etc).

- The **Gameplay Stop** action has to be called on every game break (entering a menu, switching level, pausing the game, etc) don't forget to call the Gameplay Start when the gameplay resumes.

//TODO Extension update
- The **Game Loading Start**,
- The **Game Loading Stop**, 

### Invite button

//TODO Extension update
Display a popup modal containing the invite link with a copy button, very usefull for multiplayer game to give a friend the possibility to join a session quickly. 

//TODO IMAGE

### Invite link
Return an URL to invite friend to join your game session. This URL can be addes to the clipboard, or displayed in game to let the user select it.


## User (Not sure to adding this)

# References
!!! tip

    Learn more about all the events from the extension in the [reference page](/gdevelop5/extensions/crazy-games-ad-api/)



