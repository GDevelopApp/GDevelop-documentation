---
title: Steamworks
---

# Steamworks (Steam integration)

GDevelop has native support for Steamworks, a suite of tools provided by Steam to help integrate your game with their platform and provide common game development features, including

- Achievements
- Matchmaking (lobbies)
- UGC (User Generated Content) Workshop
- Steam Cloud saves
- Steam Input (controller support)
- Getting player information
- Anti-cheat/DRM

!!! warning

    Steamworks is an **experimental** feature. It only works in PC builds exported with the desktop app (Windows, macOS, Linux) and run through the Steam client. It has no effect in previews, in web/mobile exports, or when the game is not launched from Steam.

To use Steamworks in GDevelop, you will need to:

1. Register your game on Steamworks, and obtain an **App ID** for your game
2. Open the **Game properties** in the **Project Manager**
3. Scroll down to the **Steamworks section** and enter your **App ID** in the corresponding text-field
4. Use actions, conditions and expressions in the "**Steamworks**" section

## Checking that Steamworks is available

Because Steamworks only works in a PC build launched through Steam, most features silently do nothing in any other context (previews, web, mobile). Use the **"Steamworks is properly loaded"** condition before relying on Steam features, so you can gracefully disable (or replace) them when the game is not running through Steam.

## Achievements

Achievements must first be defined in the Steamworks partner back-office, where each one is given an **Achievement ID**. In your events, use that same ID to **claim** an achievement when the player earns it, to **unclaim** it (mostly useful during testing), or to check whether the player **has** already unlocked it.

## Player information

You can retrieve the local player's **Steam ID**, **name**, **country code** and **Steam level**. These are handy to display the player's profile in-game or to tag online activity. Additional checks let you know whether the player **owns the game**, has a **VAC ban**, or should not be **exposed to violence** (useful for age-appropriate content).

## Rich presence

Steam rich presence lets friends see what the player is currently doing (for example "In main menu" or "Playing level 3"). Set the `status` attribute to a human-readable string, and the other standard attributes (`connect`, `steam_display`, ...) to enable "Join game" from the friends list.

## Matchmaking (lobbies)

Steam lobbies provide a simple way to group players together before (or during) an online game. You can **create** a lobby, fetch a **list** of existing lobbies, **join** or **leave** one, and open the Steam **invite dialogue** to invite friends. Lobbies also carry **attributes** (arbitrary key/value data), a **member list**, a **member limit** and an **owner**, which you can read and, for the current lobby, change.

!!! note

    Lobbies only handle matchmaking (finding and grouping players). To actually synchronize gameplay between players, combine them with GDevelop's [Multiplayer](/gdevelop5/all-features/multiplayer) or [peer-to-peer](/gdevelop5/all-features/p2p) features.

## Steam Cloud saves

When Steam Cloud is enabled for your app, you can **write**, **read**, **delete** and check the existence of files on the Steam Cloud, so that saves and settings follow the player across their devices. Use the "Steam Cloud is enabled" condition first, as the player can disable cloud syncing.

## Steam Input

Steam Input lets players remap and use a wide range of controllers through Steam's own configuration. You can count connected controllers, activate an **action set**, check whether a **digital action** was triggered, and read **analog action** vectors (X/Y) — rather than reading raw buttons, you react to the abstract actions the player has bound.

## Workshop (User Generated Content)

The Workshop lets players create and share content for your game. You can **create** and **update** a Workshop item (with its title, description, preview and visibility), and let players **subscribe** or **unsubscribe** to items to install or remove them.

## Other utilities

Additional expressions and conditions let you read the game's **Steam App ID**, get the **current time from the Steam servers**, detect whether the game is running on a **Steam Deck**, and read game properties such as the **Steam game language**, the current **beta branch name** and the current **app build ID**.

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
