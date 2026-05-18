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

!!! tip

    Before using any Steamworks action or expression, use the **"Is Steamworks loaded"** condition to check that the SDK initialized correctly. Previews run from the editor on a PC where Steam is open will also have Steamworks available, which is convenient for testing. If Steam is not installed or the build is not running on PC, the actions will silently do nothing — wrapping calls behind this condition avoids running gameplay logic that depends on data Steam never returned.

## Achievements

Achievements are defined on the Steamworks partner website (each achievement has an ID, a name, an icon and a description). In your game, use the "Claim achievement" action with that ID when the player meets the goal — Steam will display its standard pop-up. The "Has achievement" condition lets you check whether the player has unlocked it (useful for unlocking content or showing progress in your own UI), and a separate "Unclaim achievement" action can reset it during testing.

## Player information

The Steamworks expressions give access to the connected player's **Steam ID**, **name**, **country code**, and **Steam level**. These can replace your own login flow when targeting Steam: there is no need to register or authenticate the player yourself.

!!! warning

    The Steam ID is a 64-bit number too large to fit in a standard number variable. Always store and compare it as a **text**.

## Cloud saves

When Steam Cloud is enabled for your application on the partner website, you can read and write text files that Steam will automatically sync between the player's devices. This is a simple alternative to the standard storage extensions when shipping on Steam: the "Write a file" and "Read a file" actions take a file name and a string of content (typically a variable converted to JSON with `ToJSON`). Use "Is Steam Cloud enabled" to detect when the player has disabled cloud sync and fall back to local storage in that case.

## Rich presence

Rich presence is the short status line Steam displays under the player's name on their friends list (for example: *"In Main Menu"*, *"Level 3 — 2/4"*). The "Steam rich presence" action sets one of the standard attributes — `status`, `connect`, `steam_display`, etc. — to a string of your choosing. See the [Steam rich presence documentation](https://partner.steamgames.com/doc/api/ISteamFriends#SetRichPresence) for the meaning of each attribute.

## Lobbies and matchmaking

Steam lobbies let players find each other before launching a game session. The extension provides actions to create a lobby (with a visibility — `Public`, `FriendsOnly`, `Private` or `Invisible` — and a maximum player count), list and join existing lobbies, open Steam's built-in invitation dialog, and read/write lobby attributes. Combine lobbies with the [Peer-to-peer extension](/gdevelop5/all-features/p2p) by storing the host's P2P ID as a lobby attribute, so joining players can connect directly to the host.

## Workshop (User Generated Content)

The Workshop actions let players publish, browse, subscribe to and download user-generated items from inside your game. The typical flow is: create a Workshop item (Steam assigns it an ID), update it with a title, description, preview image and the folder containing the content, then upload. Other players can subscribe to it, and your game can locate the installed content on disk to load it as game resources (levels, mods, custom assets, etc.).

## Steam Deck

The "Is on Steam Deck" condition is useful to adapt your game when running on a Steam Deck — for example to enable on-screen controller hints by default, change the default resolution, or use larger UI elements.

## Steam overlay

The Steam overlay (opened with **Shift+Tab** by default during the game) is automatically enabled for your exported PC build: players can access friends, chat, achievements and screenshots without any additional setup on your side.

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

## Reference

All actions, conditions and expressions are listed in [the Steamworks reference page](/gdevelop5/all-features/steamworks/reference/).
