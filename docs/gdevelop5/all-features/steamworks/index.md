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

    Steamworks features only work in a **PC build launched through Steam** (with the Steam client running). They do nothing in the preview, in web/mobile exports, or when the game is not started from Steam. Before relying on any Steamworks feature, use the **Is Steamworks loaded** condition to check that the SDK could be initialized, and provide a fallback for players who are not on Steam.

## Achievements

Achievements are defined on the Steamworks partner website, where each one gets an **Achievement ID**. In your events, use the **Claim achievement** action with that ID to unlock it for the player — Steam then displays its own notification pop-up. The **Unclaim achievement** action removes it again (useful mostly for testing), and the **Has achievement** condition checks whether the player has already unlocked it.

## Player information and rich presence

You can read information about the currently signed-in player, such as their Steam **Name**, **Steam ID**, **Country code** and **Steam Level**. The Steam ID is a very large number, so it is provided as a string expression — store and compare it as text, not as a number.

The **Steam rich presence** action lets you show what the player is currently doing (for example their current level or game mode) directly in their Steam friends list. Setting the `status` attribute controls the text shown to friends; the `connect` attribute is what lets friends join the player's game via Steam.

## Steam Cloud saves

If Steam Cloud is enabled for your app on Steamworks, you can store save files that automatically sync across the player's devices. Use the **Write a file** action to save a string (for example, a serialized save built with the [Save State](/gdevelop5/all-features/save-state/) extension or a JSON variable) under a file name, and the **Read a file** expression to read it back. The **File exists** condition and **Delete a file** action let you manage save slots. Each write and delete action can store its success/failure in a variable so you can react if the operation fails.

## User-generated content (Steam Workshop)

Games that let players share creations (levels, skins, mods…) can integrate the Steam Workshop:

- **Create a Workshop item** first reserves an ID for a new item owned by the player.
- **Update a Workshop item** then uploads the item's content and metadata (title, description, preview image, tags, visibility). The content is provided as an absolute file path — a common approach is to write your item's data to a JSON file with the [Filesystem](/gdevelop5/all-features/filesystem/) actions and pass that path.
- **Subscribe** / **Unsubscribe** manage which items a player has installed, and **Download a Workshop item** forces an immediate download. The Workshop conditions and expressions let you check an item's download progress and find the folder where its files were installed so your game can load them.

## Matchmaking (lobbies)

Steamworks also provides lobby-based matchmaking (create, list, join and leave lobbies, set lobby attributes and invite friends) that can be used together with the [Multiplayer](/gdevelop5/all-features/multiplayer/) or [Peer-to-peer](/gdevelop5/all-features/p2p/) features to connect players who own your game on Steam.

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
