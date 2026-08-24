---
title: Steamworks
---

# Steamworks (Steam integration)

GDevelop has native support for Steamworks, a suit of tools provided by steam to help integrate your game with their platform and provide common game development features, including

- Achievements
- Networking
- Matchmaking
- UGC (User Generated Content) Workshop
- Getting player information
- Anti-cheat/DRM

To use Steamworks in GDevelop, you will need to:

1. Register your game on Steamworks, and obtain an **App ID** for your game
2. Open the **Game properties** in the **Project Manager**
3. Scroll down to the **Steamworks section** and enter your **App ID** in the corresponding text-field
4. Use actions, conditions and expressions in the "**Steamworks**" section

!!! warning "Desktop builds only"

    Steamworks features only work in the **Windows, macOS and Linux (desktop) builds** of your game. They do nothing in web or mobile exports, and they require the **Steam client to be running** with your App ID configured. When a feature can't run, it is silently ignored, so use the **"Is Steamworks loaded"** condition to check that Steam is available before relying on any Steamworks feature (for example, to fall back to your own logic when the game runs outside of Steam).

## Achievements

Achievements let you reward players for reaching milestones in your game. Each achievement must first be **defined on the Steamworks partner website**, where you give it an **Achievement ID**. In your events, you then use that ID to *claim* the achievement when the player earns it (for example, when they finish the first level). You can also *unclaim* an achievement to reset it, which is mostly useful during development, and check whether the player already has an achievement.

## Rich presence

Rich presence lets you show what the player is currently doing (a level name, "In the menu", "Playing ranked", etc.) directly in their Steam friends list. You set rich presence attributes from your events, and friends see them next to the player's name.

## Steam Cloud saves

Steam Cloud automatically synchronizes files between the player's devices, so their progress follows them from one computer to another. You can write, read, delete and check the existence of files on the Cloud. Steam Cloud must be enabled for your app in the partner settings for this to work — the **"Is Steam Cloud enabled?"** condition lets you check it at runtime.

## Matchmaking and lobbies

If your game has an online multiplayer or co-op mode, the matchmaking actions let you **create a lobby**, list existing lobbies, join one by its ID, and let the player invite friends through the standard Steam invite dialogue. Lobbies can store **attributes** (custom key/value data, like a game mode or map name) that other players can read before joining, and you can control whether a lobby is joinable and read the list of players in it.

## Steam Workshop (User Generated Content)

The Workshop lets your players create and share content (levels, mods, skins…). GDevelop can **create and update Workshop items**, let players **subscribe/unsubscribe** to items, **download** them, and read where a downloaded item is installed so your game can load its content. This is useful to build community-created content directly into your game.

## Ownership and DLC checks

You can check whether the current player **owns or has installed** a given application or a piece of **DLC** on Steam. This is the recommended way to unlock DLC content, since Steam guarantees the check. You can also read information about the player (Steam ID, name, country, Steam level) and detect whether the game is running on a **Steam Deck** to adapt your controls or UI.

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
