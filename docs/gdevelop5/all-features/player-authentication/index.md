---
title: Player authentication
---
# Player authentication

Allowing players to log in in your game can make the playing experience better: you can send their scores to a leaderboard, store their progress, greet them with a welcome message... It also allows to create a stronger tie between them and your game.

GDevelop provides a built-in solution to display a **register/login form** into your game, so you can then retrieve the **player's username** and allow them to submit **their scores to leaderboards** (which will be linked to their profile). In the future, more online services will be provided for players.

A user creating an account with this authentication solution will be able to re-use their account on all GDevelop games, and will also be able to use this account to connect to GDevelop itself.
Retrospectively, a GDevelop creator can use their account to log in to a game.

> Player accounts are stored on GDevelop cloud services, using a secure infrastructure. It is designed to handle games of all size, from small games to games with hundreds of thousands of players.

To allow players to connect, your game must be registered on GDevelop online services - it is by default when you first publish your game. If you are unsure, [open the Games Dashboard](/gdevelop5/interface/games-dashboard) to make sure your game is registered to have access to GDevelop cloud services.

!!! note

    Note that your game does not need to be necessarily shown publicly on Liluo.io or published there. Player authentication and leaderboards work on any platform (Play Store, App Store, Steam, desktop app, on your website or on any browser-based gaming platform).

## Display an authentication banner

This is the recommended way to allow your players to connect, as it displays a minimal banner on top of your game. It allows players who don't want to authenticate to continue playing and the banner is not interrupting their play session:

![](/gdevelop5/all-features/player-authentication-banner.png)

You can use the action **"Display authentication banner"**. For example, this can be at the launch of the game or of a scene:

![](/gdevelop5/all-features/player-authentication/player-authentication-display-banner.png)

We recommend showing the banner again if the user goes back to the main menu, or display a button to log in (see the next section).

## Open an authentication window

The authentication window opens up when the player clicks on the banner, but if you want to handle the opening of the window yourself, you can use the action **"Open an authentication window"**. This is perfect if you prefer to have a "Login" or "Connect" button in your game. It's also useful if you want to ensure your players log in before playing.

![](/gdevelop5/all-features/player-authentication/player-authentication-window.png)

You may want to know when it is open, to prevent some actions to be triggered or display a different background. To do so, you can use the condition **"Authentication window is open"**.

## Check if a player is authenticated

Based on wether the player is connected or not, your game logic will differ.
For instance, if they are not connected you will display an input for them to enter their username, and if they are connected you will display their username.
To do so, you can use the condition **"Player is authenticated"**.

![](/gdevelop5/all-features/player-authentication/is-authenticated.png)

## Handle a change of account

In certain cases, you'll want to know exactly when the user has logged in, so you can greet them with a welcome message, or save their username in the variables.
This is particularly useful to implement to handle when a player logs in to a different account, as the condition **"Player is authenticated"** will always stay true, whereas the condition **"Player has logged in"** will become true only for a single frame.

![](/gdevelop5/all-features/player-authentication/logged-in-events.png)

## Use a player's username

If you'd like to retrieve the username of the connected player, to name a character in your game, or adapt your messages to be more personalized, you can use the expression `PlayerAuthentication::Username()`.

## Log out the player

If needed, an action is available to log out the player from the game, you can use the action **"Log out player"**.

## Other features

!!! note

    Player accounts is still experimental and new features will quickly be added to find the player unique identifier, store progress, saves or items, and more!

## Reference

All actions, conditions and expressions are listed in [the player authentication reference page](/gdevelop5/all-features/player-authentication/reference/).