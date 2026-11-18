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

!!! warning

    Steamworks features only work in **PC builds** (Windows, macOS, Linux) launched through Steam, and require the Steam client to be running on the player's machine. They do nothing in the GDevelop preview, in web/mobile exports, or when the game is started outside of Steam.

Because of this, it is good practice to check the **Is Steamworks Loaded** condition before using any Steamworks feature. If it returns false (Steam not installed, game not running on PC, etc.), you can disable the related functionality and fall back to a non-Steam behavior so the game still runs everywhere.

## Overview of the available features

The following sections describe what you can do with the actions, conditions and expressions found in the "Steamworks" category. As always, refer to the [reference page](/gdevelop5/all-features/steamworks/reference/) for the exhaustive list.

### Achievements

You can **claim** (unlock) and **unclaim** (reset) achievements, and **check** whether the player already owns one. Achievements must first be created on the Steamworks partner website: the **Achievement ID** used in the actions is the identifier you defined there. When an achievement is claimed, Steam displays its notification pop-up using the name and icon configured on the partner website.

### Player information and rich presence

Expressions let you read the current player's **Steam ID**, **name**, **country code** and **Steam level**, as well as the current time from the Steam servers. The **Steam rich presence** action sets attributes that let the player's friends see what they are currently doing in the game (for example the level name or game mode).

### Application and DLC ownership

Conditions let you check whether the player **owns** or has **installed** a given application or **DLC** (using its App ID), whether they **bought** the current game, and whether they have a **VAC ban**. These are useful to unlock bonus content for owners of another of your games, or to gate downloadable content.

### Matchmaking (lobbies)

The matchmaking actions let you **create**, **list**, **join** and **leave** Steam lobbies, set **lobby attributes** and **joinability**, and open the Steam **invite dialogue**. Expressions give access to a lobby's owner, member count, member limit and custom attributes. Lobbies are a convenient way to let players group up before connecting them together (for example with the [P2P](/gdevelop5/all-features/p2p) feature).

### Steam Cloud saves

If Steam Cloud is enabled for your app, you can **write**, **read**, **delete** and check the existence of files stored in the Steam Cloud, so that saves and settings follow the player across their devices.

### Steam Workshop (User Generated Content)

The Workshop actions let your players create and share content: **create** a Workshop item, **update** its data and upload files, and **subscribe**, **unsubscribe** or **download** items. Conditions and expressions let you track an item's state, installation location, size and download progress.

### Steam Input

The Steam Input actions and conditions let you work with Steam's controller abstraction: **activate an action set**, check whether a **digital action** is activated, and read **analog action** vectors. This lets players remap controls through the Steam overlay.

### Steam Deck

The **Is on Steam Deck** condition lets you detect when the game runs on a Steam Deck, which is handy to adapt the UI, default controls or graphics settings for that device.

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
