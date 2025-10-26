# Discord rich presence (Windows, Mac, Linux)

<img src="https://resources.gdevelop-app.com/assets/Icons/discord.svg" class="extension-icon"></img>
Adds discord rich presence to your games.

**Authors and contributors** to this experimental extension: [arthuro555](https://gd.games/arthuro555).

---

Allows adding discord rich presence to your games. Only works on Windows/Mac/Linux exports. To test it on a preview, restart the discord desktop client while GDevelop is already opened, and start a preview.

You can get more infos on each field via [the discord documentation](https://discord.com/developers/docs/rich-presence/how-to#updating-presence-update-presence-payload-fields).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Initialize rich presence**  
Attempts to connect to discord if it is installed, and initialize rich presence.

??? quote "See parameters & details"

    - Parameter 1 (string): The discord client ID

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DiscordRichPresence::ConnectToDiscord`.

**Update rich presence**  
Update the data in the rich presence. See the discord documentation for more info on each field. Each field except state is optional.

??? quote "See parameters & details"

    - Parameter 1 (string): The current state
    - Parameter 2 (string): The details of the current state
    - Parameter 3 (🔢 Number): The timstamp of the start of the match
      If this is filled, discord will show the time elapsed since the start.
    - Parameter 4 (🔢 Number): The timestamp of the end of the match
      If this is filled, discord will display the remaining time.
    - Parameter 5 (string): The name of the big image
    - Parameter 6 (string): The text of the large image
    - Parameter 7 (string): The name of the small image
    - Parameter 8 (string): The text of the small image

    > Technical note: parameters 0, 9 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DiscordRichPresence::UpdateRichPresence`.




---

*This page is an auto-generated reference page about the **Discord rich presence (Windows, Mac, Linux)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).