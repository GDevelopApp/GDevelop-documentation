# Steamworks (Steam) (experimental) Reference

Adds integrations for Steam's Steamworks game development SDK. 

## Actions

**Activate an action set**  
Activates a Steam Input action set of a Steam Input controller.

**Claim achievement**  
Marks a Steam achievement as obtained. Steam will pop-up a notification with the achievement's data defined on the Steamworks partner website.

**Create a lobby**  
Creates a new steam lobby owned by the player, for other players to join.

**Create a Workshop item**  
Creates an item owned by the current player on the Steam Workshop. This only assignes an ID to an item for the user - use the action "Update workshop item" to set the item data and upload the workshop file.

**Delete a file**  
Deletes a file from the Steam Cloud.

**Download a Workshop item**  
Initiates the download of a Workshop item now.

**Get the lobby's members**  
Gets the Steam ID of all players in the current lobby.

**Get a list of lobbies**  
Fills an array variable with a list of lobbies for the player to join.

**Get a lobby's members**  
Gets the Steam ID of all players in a lobby.

**Join a lobby (by ID)**  
Join a Steam lobby, using its lobby ID.

**Leave current lobby**  
Marks the player as having left the current lobby.

**Open invite dialogue**  
Opens the steam invitation dialogue to let the player invite their Steam friends to the current lobby. Only works if the player is currently in a lobby.

**Set a lobby attribute**  
Sets an attribute of the current lobby. Attributes are readable to anyone that can see the lobby. They can contain public information about the lobby like a description, or for example a P2P ID for knowing where to connect to join this lobby.

**Set the lobby joinability**  
Sets whether other users can join the current lobby or not.

**Steam rich presence**  
Changes an attribute of Steam's rich presence. Allows other player to see exactly what the player's currently doing in the game.

**Subscribe to a Workshop item**  
Makes the player subscribe to a workshop item. This will cause it to be downloaded and installed ASAP.

**Unclaim achievement**  
Removes a player's Steam achievement.

**Unsubscribe to a Workshop item**  
Makes the player unsubscribe to a workshop item. This will cause it to removed after quitting the game.

**Update a Workshop item**  
Releases an update to a Workshop item owned by the player. If you leave a field empty, it will be kept unmodified as it was before the update.

**Write a file**  
Writes a file onto the Steam Cloud.

## Conditions

**Has achievement**  
Checks if a player owns one of this game's Steam achievement.

**Player bought the game**  
Checks if the current user actually bought & owns the game. If the "Require Steam" checkbox has been checked in the game properties, this will always be true as Steam will not allow to launch the game if it is not owned. Can be used to display an anti-piracy message instead of straight up blocking the launch of the game.

**Player installed an application**  
Checks if the current user has a Steam application currently installed.

**Player installed DLC**  
Checks if the current user has installed a piece of DLC.

**File exists**  
Checks if a file exists on Steam Cloud.

**Digital action activated**  
Triggers when a digital action (a button that is either pressed or not) of a Steam Input controller has been triggered.

**Is on Steam Deck**  
Checks whether the game is currently running on a Steam Deck or not.

**Player cannot be exposed to violence**  
Checks if the current user may only be exposed to low violence, due to e.g. their age and content restrictions in their country.

**Player owns an application**  
Checks if the current user owns an application on Steam.

**Player has a VAC ban**  
Checks if the current user has a VAC ban on their account.

**Is Steam Cloud enabled?**  
Checks whether steam cloud has been enabled or not for this application.

**Is Steamworks Loaded**  
Checks whether the Steamworks SDK could be properly loaded. If steam is not installed, the game is not running on PC, or for any other reason Steamworks features will not be able to function, this function will trigger allowing you to disable functionality that relies on Steamworks.

**Check workshop item state**  
Check whether a state flag is set for a Workshop item.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Steamworks::ActionVectorX(number, string)` | The action vector of a Steam Input analog joystick on the X-axis, from 1 (all right) to -1 (all left). ||
| | _🔢 Number_ | Controller number |
| | _🔤 Name (String)_ | ActionName |
| `Steamworks::ActionVectorY(number, string)` | The action vector of a Steam Input analog joystick on the Y-axis, from 1 (all up) to -1 (all down). ||
| | _🔢 Number_ | Controller number |
| | _🔤 Name (String)_ | ActionName |
| `Steamworks::AppBuildID()` | Gets the ID of the current app build. ||
| `Steamworks::AppID()` | Obtains the game's Steam app ID, as declared in the games properties. ||
| `Steamworks::BetaName()` | Gets the name of the beta the player enrolled to in the Steam game properties. ||
| `Steamworks::ControllerCount()` | The amount of connected Steam Input controllers. ||
| `Steamworks::CountryCode()` | The player's country represented as its two-letter code. ||
| `Steamworks::CurrentLobbyAttribute(string)` | Obtains the value of one of the current lobby's attributes. ||
| | _🔤 Name (String)_ | The attribute to read |
| `Steamworks::CurrentLobbyID()` | The ID of the current lobby, useful for letting other players join it. ||
| `Steamworks::CurrentLobbyMemberCount()` | Obtains the current lobby's member count. ||
| `Steamworks::CurrentLobbyMemberLimit()` | Obtains the current lobby's maximum member limit. ||
| `Steamworks::CurrentLobbyOwner()` | Obtains the Steam ID of the user that owns the current lobby. ||
| `Steamworks::GameLanguage()` | Gets the language the user set in the Steam game properties. ||
| `Steamworks::InstalledApplicationPath(string)` | Gets the path to an installed Steam application. ||
| | _🔤 Name (String)_ | The Steam App ID of the application |
| `Steamworks::Level()` | Obtains the player's Steam level ||
| `Steamworks::LobbyAttribute(string, string)` | Obtains the value of one of a lobby's attributes. ||
| | _string_ | The ID of the lobby |
| | _🔤 Name (String)_ | The attribute to read |
| `Steamworks::LobbyMemberCount(string)` | Obtains a lobby's member count. ||
| | _string_ | The ID of the lobby |
| `Steamworks::LobbyMemberLimit(string)` | Obtains a lobby's maximum member limit. ||
| | _string_ | The ID of the lobby |
| `Steamworks::LobbyOwner(string)` | Obtains the Steam ID of the user that owns a lobby. ||
| | _string_ | The ID of the lobby |
| `Steamworks::Name()` | The player's registered name on Steam. ||
| `Steamworks::ReadCloudFile(string)` | Reads a file from Steam Cloud and returns its contents. ||
| | _🔤 Name (String)_ | Name of file to read |
| `Steamworks::ServerTime()` | Obtains the real current time from the Steam servers, which cannot be faked by changing the system time. ||
| `Steamworks::SteamID()` | The player's unique Steam ID number. Note that it is too big a number to load correctly as a traditional number ("floating point number"), and must be used as a string. ||
| `Steamworks::WorkshopItemDownloadProgress(string)` | The amount of data that has been downloaded by Steam for a currrently downloading item so far. ||
| | _🔤 Name (String)_ | Workshop Item ID |
| `Steamworks::WorkshopItemDownloadTotal(string)` | The amount of data that needs to be downloaded in total by Steam for a currrently downloading item. ||
| | _🔤 Name (String)_ | Workshop Item ID |
| `Steamworks::WorkshopItemInstallationTimestamp(string)` | The timestamp of the last time the contents file of an installed workshop item was updated. ||
| | _🔤 Name (String)_ | Workshop Item ID |
| `Steamworks::WorkshopItemLocation(string)` | The file path to the contents file of an installed workshop item. ||
| | _🔤 Name (String)_ | Workshop Item ID |
| `Steamworks::WorkshopItemSize(string)` | The size on disk taken by the contents file of an installed workshop item. ||
| | _🔤 Name (String)_ | Workshop Item ID |
---

The Steamworks (Steam) (experimental) extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Steamworks (Steam) (experimental)** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).