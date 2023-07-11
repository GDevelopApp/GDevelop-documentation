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
