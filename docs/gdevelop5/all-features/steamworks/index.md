---
title: Steamworks
---

# Steamworks (Steam integration)

GDevelop has native support for Steamworks, a suite of tools provided by Steam to help integrate your game with their platform and provide common game development features, including

- Achievements
- Networking
- Matchmaking (lobbies)
- UGC (User Generated Content) Workshop
- Steam Cloud saves
- Steam Input (controller mapping)
- Getting player information
- Anti-cheat/DRM

To use Steamworks in GDevelop, you will need to:

1. Register your game on Steamworks, and obtain an **App ID** for your game
2. Open the **Game properties** in the **Project Manager**
3. Scroll down to the **Steamworks section** and enter your **App ID** in the corresponding text-field
4. Use actions, conditions and expressions in the "**Steamworks**" section

!!! warning

    Steamworks features only run when the game is launched through the Steam client on a desktop computer (Windows, macOS, Linux). They have no effect in previews, web builds, mobile builds, or when Steam is not running. Always wrap your Steamworks events with the condition **"Is Steamworks Loaded"** so that the rest of your game keeps working when Steam is unavailable.

## Achievements

Steam achievements must first be **declared on the Steamworks partner website** (in the "Stats & Achievements" section of your app). Each achievement is identified by an **API name** — that's the string you'll pass to GDevelop actions.

Once declared, use the action **"Claim achievement"** with the API name to unlock it. Steam will show its own toast notification (with the icon and title you set on the partner site), so you don't need to display anything yourself. The condition **"Has achievement"** lets you check if the player already earned a given achievement, which is useful to avoid replaying related cinematics or to gate content.

The action **"Unclaim achievement"** removes an achievement. This is mainly useful during development for testing — be careful with it in released games, as players generally don't appreciate losing achievements.

## Player information

A handful of expressions give access to information about the player currently signed in to Steam:

- `Steamworks::SteamID()` — the player's unique Steam ID. This is a very large number, so it is returned as a **string** — never store it in a number variable or it will be corrupted.
- `Steamworks::Name()` — the player's display name on Steam (a good default to use for in-game name tags or leaderboard submissions).
- `Steamworks::CountryCode()` — the player's two-letter country code, handy to pre-select a language or currency.
- `Steamworks::Level()` — the player's Steam level (as a number).

## Rich presence

Rich presence lets the player's Steam friends see what they are currently doing in your game ("In main menu", "Boss fight in Level 3", etc.). Use the action **"Steam rich presence"** to set the special `status` attribute to a short human-readable description.

For more advanced setups (group play, "join game" buttons, localized strings), Steam exposes additional standard attributes like `connect`, `steam_display` and `steam_player_group`. See the [Steam Rich Presence documentation](https://partner.steamgames.com/doc/api/ISteamFriends#SetRichPresence) for details.

## Steam Deck detection

The condition **"Is on Steam Deck"** lets you detect when your game is running on a Steam Deck. This is the right place to enable a controller-friendly UI by default, scale up the touch hit areas, or pick the Deck-optimized control scheme.

## Steam Cloud saves

If you enable Steam Cloud for your app on the Steamworks partner site, you can read and write small save files that Steam will automatically sync across the player's devices. The dedicated actions read/write/delete files and check whether a file exists. The condition **"Is cloud enabled"** is true only when Cloud is enabled both for your app and for the player's account — fall back to local storage when it is false.

This is a good fit for save slots, settings and progression data. For large assets, keep using the standard file system.

## Matchmaking (lobbies)

Steam lobbies are short-lived rooms where players gather before a multiplayer match. They are typically combined with peer-to-peer networking (see the [P2P extension](/gdevelop5/all-features/p2p)) for the actual gameplay data — the lobby itself only holds metadata.

The typical flow is:

1. The host calls **"Create a lobby"** with a visibility (Public, FriendsOnly, Private, Invisible) and a max player count.
2. Other players call **"Get a list of lobbies"** to discover public lobbies, then **"Join a lobby (by ID)"**.
3. Both sides read the lobby's **attributes** (custom key/value strings, like the host's P2P ID, the chosen map, etc.) and connect to each other.
4. Once the game is ready to start, the host can call **"Set the lobby joinability"** to false to stop new players from joining.

The action **"Open invite dialogue"** opens the Steam overlay so the player can invite their Steam friends to the current lobby in one click.

## Workshop (User Generated Content)

The Workshop lets players publish and download mods, levels, skins, etc. directly through Steam. The actions in the **Workshop** category let you:

- Create and update items (uploading a content folder, preview image, title, description, tags and visibility).
- Let the player subscribe or unsubscribe to items.
- Start a download and monitor its progress.
- Find where a downloaded item is installed on disk, so your game can read its files.

Workshop is only enabled for apps that opted in on the Steamworks partner site.

## Steam Input

Steam Input maps gamepads, the Steam Controller and the Steam Deck controls to "actions" you define in a Visual Action Set Editor on the partner site (rather than to hard-coded buttons). The Steam Input actions in GDevelop let you read those action states — for instance, "is the *Jump* digital action pressed?" — without caring whether the player remapped *Jump* to A, the Steam Deck back paddle, or a keyboard key.

This is a good fit if you want to ship your game with first-class Steam Deck and gamepad support and let players freely remap controls through Steam's UI.

## Detecting ownership and DLC

Several conditions check what the player owns:

- **"User bought the game"** — useful when the game is also distributed in a free demo mode.
- **"Is DLC installed"** / **"Is App installed"** — to unlock content that requires a specific DLC, by passing the DLC's App ID.
- The expression `Steamworks::CurrentGameLanguage()` returns the language the player chose for the game in Steam, which is the right thing to default the in-game language to.

## Enabling Steam DRM

!!! warning "Mobile and HTML5 builds"

    Steam DRM **only protects PC builds**, since Steam is a PC-only platform. If you also publish builds targeting mobile or HTML5, protect those with **other DRM solutions** — otherwise Steam DRM only covers a fraction of your distribution.

If you want to prevent someone who has not bought your game on Steam from running your PC build, all you need to do is:

1. Open the **Game properties** in the **Project Manager**
2. Scroll down to the **Steamworks section**
3. Check the "**Require Steam**" checkbox

This will make the game close itself and launch Steam if it was not started through Steam. Steam will automatically launch the game if it is installed and indeed owned by the user.

[Click here](https://partner.steamgames.com/doc/features/drm) to learn more about Steam DRM.

## Publishing

Once your game is in a playable state and has integrated Steamworks features, you can publish your game on Steam [using this guide](/gdevelop5/publishing/publish-to-steam/).
