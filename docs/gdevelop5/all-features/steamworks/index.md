---
title: Steamworks
---

# Steamworks (Steam integration)

GDevelop has native support for Steamworks, a suit of tools provided by steam to help integrate your game with their platform and provide common game development features, including

- Achievements
- Matchmaking (Steam lobbies)
- UGC (User Generated Content) Workshop
- Steam Cloud saves
- Steam Input (controllers)
- Getting player information
- Rich presence (showing what the player is doing to their friends)
- Anti-cheat/DRM

To use Steamworks in GDevelop, you will need to:

1. Register your game on Steamworks, and obtain an **App ID** for your game
2. Open the **Game properties** in the **Project Manager**
3. Scroll down to the **Steamworks section** and enter your **App ID** in the corresponding text-field
4. Use actions, conditions and expressions in the "**Steamworks**" section

!!! warning

    Steamworks is still an experimental feature. It only works in the **desktop (Windows/macOS/Linux) export** and requires the Steam client to be running: it has no effect in web or mobile exports. Steamworks features are also unavailable in the GDevelop preview, so you need to test them in an exported build launched through Steam.

## Checking that Steam is available

Because Steamworks only works in the desktop build with the Steam client running, all of its actions do nothing when Steam is not available (for example when the game is run on the web, or during a preview).

Use the **Steamworks is properly loaded** condition to detect this situation. This lets you gate Steam-specific features and provide a fallback: for instance, only try to unlock achievements or write to Steam Cloud when Steamworks is loaded, and hide Steam-only menu buttons otherwise. It's good practice to check this condition before using any other Steamworks feature.

## Achievements

Achievements must first be created in your game's Steamworks partner dashboard, where each one is given an **Achievement ID**. In your events, use that same ID (as a string) with the **Claim achievement** action to unlock it for the player, and with the **Has achievement** condition to check whether the player already unlocked it. The **Unclaim achievement** action resets it, which is mostly useful while testing.

## Player information and rich presence

You can read details about the current player, such as their Steam ID, display name, country code and Steam level, to personalize the game or display them in a profile screen.

The **Set steam rich presence attribute** action updates what the player's Steam friends see they are currently doing (for example the current level or game mode). The `status` attribute is the text shown in the friends list, while `connect` and the `steam_player_group` attributes are used to let friends join the same game or party.

## Steam Cloud saves

Steam Cloud lets you store save files on Steam's servers so they follow the player across their devices. Use the actions to write, read, check the existence of, and delete cloud files. Steam Cloud must be enabled for your app in the partner dashboard, and you can verify it is active at runtime with the corresponding condition.

## Lobbies and Workshop

For multiplayer, the lobby actions let you create, list, join and leave Steam lobbies, set attributes on the current lobby (like a game mode or map name used for matchmaking) and invite friends. To distribute player-made content, the Workshop actions let you create, update, subscribe to and download Workshop items.

## Enabling Steam DRM

!!! warning "Mobile and HTML5 builds"

    Steam DRM **only protects PC builds**, since Steam is a PC-only platform and do not write code for Mobile and HTML5. If you publish builds tagetting these other platforms, ensure you protect them with **other DRM solutions** to not render Steam DRM useless.

If you want to prevent someone who has not bought your game on Steam from running your PC build, all you need to do is:

1. Open the **Game properties** in the **Project Manager**
2. Scroll down to the **Steamworks section**
3. Check the "**Require Steam**" checkbox

This will make the game close itself and launch steam if it was not started through steam. Steam will automatically launch the game if it is installed and indeed owned by the user.

[Click here](https://partner.steamgames.com/doc/features/drm) to learn more about Steam DRM.

## Publishing

Once your game is in a playable state and has integrated Steamworks features, you can publish your game on steam [using this guide](/gdevelop5/publishing/publish-to-steam/).
