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

!!! note

    Steamworks features only work when the game runs through the Steam client on Windows, Linux or macOS. On web, mobile or when the game is launched outside of Steam, these actions do nothing. Design your game so it still runs without Steam (for example when previewing in the editor).

## Available features

The Steamworks integration is grouped into several sections in the instruction list. Below is an overview of what each one is for.

### Achievements

Use the achievement actions to **claim** an achievement when the player reaches a milestone (this is what unlocks it on Steam), and to **unclaim** it (mainly useful during testing to reset progress). The "Player has previously claimed the achievement" condition lets you check whether an achievement is already unlocked, for example to show it in an in-game achievement list.

Achievements must first be created in your Steamworks partner dashboard; the **Achievement ID** used in GDevelop must match the API name you set there.

### Player information

Expressions in the **Player** category give you information about the current user: their registered Steam **Name**, their unique **Steam ID**, their **country code**, and their **Steam level**. The Steam ID is too large to be handled as a number, so always use it as a text (string).

You can also detect whether the game **is running on a Steam Deck** to, for instance, switch to a controller-friendly interface.

### Ownership and DLC

Check whether the player **owns another application** on Steam (useful for cross-game bonuses) or has **installed a piece of DLC**, so you can unlock the corresponding content.

### Steam Cloud

Steam Cloud saves let a player's progress follow them across computers. You can **write**, **read**, **delete** and **check the existence** of files on the cloud, as well as verify that **Steam Cloud is enabled** for the game. Remember to declare your cloud files in the Steamworks dashboard for them to sync.

### Rich presence

Set **rich presence** attributes to show the player's current activity (like the level they are in) to their Steam friends.

### Matchmaking (lobbies)

The matchmaking actions let you **create**, **join** and **leave** lobbies, set the lobby **joinability** and **attributes** (searchable key/values), read the **members** and **owner** of a lobby, and open the Steam **invitation dialogue** so friends can join.

### Workshop (User Generated Content)

The Workshop section lets players **create**, **update**, **subscribe to** and **download** Workshop items, and query an item's **download progress**, **installation location** and **state**. This is how you add support for user-made mods, levels or content.

### Steam Input

Use the Steam Input actions to get the number of connected controllers and to **activate an action set**, letting Steam handle controller mapping and glyphs.

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
