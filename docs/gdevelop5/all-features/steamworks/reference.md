# Steamworks (Steam) (experimental) Reference

Adds integrations for Steam's Steamworks game development SDK. 

## Actions

**Activate an action set**  
Activates a Steam Input action set of a Steam Input controller.

??? quote "See parameters & details"

    - Parameter 0 (🔢 Number): Controller number
    - Parameter 1 (🔤 Name (String)): ActionName

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::ActivateActionSet`.

**Claim achievement**  
Marks a Steam achievement as obtained. Steam will pop-up a notification with the achievement's data defined on the Steamworks partner website.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Name (String)): Achievement ID

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::ClaimAchievement`.

**Create a lobby**  
Creates a new steam lobby owned by the player, for other players to join.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Visibility
      [Click here](https://partner.steamgames.com/doc/api/ISteamMatchmaking#ELobbyType) to learn more about the different lobby visibilities. (one of: "Private", "FriendsOnly", "Public", "Invisible")
    - Parameter 1 (🔢 Number): Maximal player count
    - Parameter 2 (🗄️ Scene variable): Store results in
      The variable will be set to the ID of the lobby if successful, otherwise to "failure".

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::CreateLobby`.

**Create a Workshop item**  
Creates an item owned by the current player on the Steam Workshop. This only assignes an ID to an item for the user - use the action "Update workshop item" to set the item data and upload the workshop file.

??? quote "See parameters & details"

    - Parameter 0 (🗄️ Scene variable): The variable where to store the result
      This will be set to the Workshop item ID if successful and to the string "failure" otherwise.

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::CreateWorkshopItem`.

**Delete a file**  
Deletes a file from the Steam Cloud.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Name (String)): Name of file to delete
    - Parameter 1 (🗄️ Scene variable): Variable where to store the result
      The variable will be set to true if the file was successfully deleted and to false if it could not be.

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::DeleteCloudFile`.

**Download a Workshop item**  
Initiates the download of a Workshop item now.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Name (String)): Workshop Item ID
    - Parameter 1 (❓ Yes or No): Stop other downloads?
      This will temporarily pause any other Steam download on the player's machine to download the Workshop item NOW without waiting for other pending downloads to finish.

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::DownloadWorkshopItem`.

**Get the lobby's members**  
Gets the Steam ID of all players in the current lobby.

??? quote "See parameters & details"

    - Parameter 0 (🗄️ Scene variable): Variable where to store the player list

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::GetCurrentLobbyMembers`.

**Get a list of lobbies**  
Fills an array variable with a list of lobbies for the player to join.

??? quote "See parameters & details"

    - Parameter 0 (🗄️ Scene variable): Array to fill with lobbies
      The variable will be set to an array of the IDs of the lobbies if they could be successfully obtained. If they could not be obtained, it is set to the string "failure".

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::GetLobbies`.

**Get a lobby's members**  
Gets the Steam ID of all players in a lobby.

??? quote "See parameters & details"

    - Parameter 0 (string): The lobby ID
    - Parameter 1 (🗄️ Scene variable): Variable where to store the player list

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::GetLobbyMembers`.

**Join a lobby (by ID)**  
Join a Steam lobby, using its lobby ID.

??? quote "See parameters & details"

    - Parameter 0 (string): Lobby ID
    - Parameter 1 (🗄️ Scene variable): Store results in
      The variable will be set to the ID of the lobby if successful, otherwise to "failure".

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::JoinLobby`.

**Leave current lobby**  
Marks the player as having left the current lobby.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::LeaveLobby`.

**Open invite dialogue**  
Opens the steam invitation dialogue to let the player invite their Steam friends to the current lobby. Only works if the player is currently in a lobby.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::OpenInviteDialogue`.

**Set a lobby attribute**  
Sets an attribute of the current lobby. Attributes are readable to anyone that can see the lobby. They can contain public information about the lobby like a description, or for example a P2P ID for knowing where to connect to join this lobby.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Name (String)): The attribute to set
    - Parameter 1 (string): Value to set the attribute to
    - Parameter 2 (🗄️ Scene variable): Variable where to store the result
      The variable will be set to true if the attribute was successfully set and to false if it could not be set.

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::SetCurrentLobbyAttribute`.

**Set the lobby joinability**  
Sets whether other users can join the current lobby or not.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Should the lobby be joinable?
    - Parameter 1 (🗄️ Scene variable): Variable where to store the result
      The variable will be set to true if the joinability was successfully set and to false if it could not be changed.

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::SetCurrentLobbyJoinability`.

**Steam rich presence**  
Changes an attribute of Steam's rich presence. Allows other player to see exactly what the player's currently doing in the game.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): The attribute to change
      [Click here](https://partner.steamgames.com/doc/api/ISteamFriends#SetRichPresence) to find out more about the different default rich-presence attributes. (one of: "status", "connect", "steam_display", "steam_player_group", "steam_player_group_size")
    - Parameter 1 (string): The new value for that attribute

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::SetRichPresence`.

**Subscribe to a Workshop item**  
Makes the player subscribe to a workshop item. This will cause it to be downloaded and installed ASAP.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Name (String)): Workshop Item ID
    - Parameter 1 (🗄️ Scene variable): The variable where to store the result
      This will be set to `true` if successful and to `false` otherwise.

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::SubscribeWorkshopItem`.

**Unclaim achievement**  
Removes a player's Steam achievement.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Name (String)): Achievement ID

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::UnclaimAchievement`.

**Unsubscribe to a Workshop item**  
Makes the player unsubscribe to a workshop item. This will cause it to removed after quitting the game.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Name (String)): Workshop Item ID
    - Parameter 1 (🗄️ Scene variable): The variable where to store the result
      This will be set to `true` if successful and to `false` otherwise.

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::UnsubscribeWorkshopItem`.

**Update a Workshop item**  
Releases an update to a Workshop item owned by the player. If you leave a field empty, it will be kept unmodified as it was before the update.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Name (String)): Workshop Item ID
    - Parameter 1 (string): Title
    - Parameter 2 (string): Description
    - Parameter 3 (string): Changelog
    - Parameter 4 (string): Path to the preview image file
      An absolute file-path to an image file to be shown as preview of the workshop item on Steam.
    - Parameter 5 (string): Path to the file with the item's file
      An absolute file-path to a file that contains the all the data for your workshop item. You can use the Filesystem actions to write a JSON file with your player's Workshop item's data to a file in the temporary data folder, and pass the path here.
    - Parameter 6 (string): Tags
      The tags must be comma-separated without spaces after the comma, for example: `mytag,another tag,my_last_tag`.
    - Parameter 7 (🔤 String): Visibility (one of: "Public", "FriendsOnly", "Private", "Unlisted")
    - Parameter 8 (🗄️ Scene variable): The variable where to store the result
      This will be set to `true` if the update is successfully release and to `false` otherwise.

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::UpdateWorkshopItem`.

**Write a file**  
Writes a file onto the Steam Cloud.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Name (String)): Name of file to write
    - Parameter 1 (string): File contents
    - Parameter 2 (🗄️ Scene variable): Variable where to store the result
      The variable will be set to true if the file was successfully written and to false if it could not be.

    > Technical note: this action internal type (in GDevelop JSON) is `Steamworks::WriteCloudFile`.

## Conditions

**Has achievement**  
Checks if a player owns one of this game's Steam achievement.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Name (String)): Achievement ID

    > Technical note: this condition internal type (in GDevelop JSON) is `Steamworks::HasAchievement`.

**Player bought the game**  
Checks if the current user actually bought & owns the game. If the "Require Steam" checkbox has been checked in the game properties, this will always be true as Steam will not allow to launch the game if it is not owned. Can be used to display an anti-piracy message instead of straight up blocking the launch of the game.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Steamworks::HasPlayerBoughtGame`.

**Player installed an application**  
Checks if the current user has a Steam application currently installed.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Name (String)): The Steam App ID of the application

    > Technical note: this condition internal type (in GDevelop JSON) is `Steamworks::HasPlayerInstalledApp`.

**Player installed DLC**  
Checks if the current user has installed a piece of DLC.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Name (String)): The Steam App ID of the DLC

    > Technical note: this condition internal type (in GDevelop JSON) is `Steamworks::HasPlayerInstalledDLC`.

**File exists**  
Checks if a file exists on Steam Cloud.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Name (String)): File name

    > Technical note: this condition internal type (in GDevelop JSON) is `Steamworks::IsCloudFileExisting`.

**Digital action activated**  
Triggers when a digital action (a button that is either pressed or not) of a Steam Input controller has been triggered.

??? quote "See parameters & details"

    - Parameter 0 (🔢 Number): Controller number
    - Parameter 1 (🔤 Name (String)): ActionName

    > Technical note: this condition internal type (in GDevelop JSON) is `Steamworks::IsDigitalActionPressed`.

**Is on Steam Deck**  
Checks whether the game is currently running on a Steam Deck or not.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Steamworks::IsOnSteamDeck`.

**Player cannot be exposed to violence**  
Checks if the current user may only be exposed to low violence, due to e.g. their age and content restrictions in their country.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Steamworks::IsPlayerLowViolence`.

**Player owns an application**  
Checks if the current user owns an application on Steam.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Name (String)): The Steam App ID of the application

    > Technical note: this condition internal type (in GDevelop JSON) is `Steamworks::IsPlayerOwningApp`.

**Player has a VAC ban**  
Checks if the current user has a VAC ban on their account.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Steamworks::IsPlayerVACBanned`.

**Is Steam Cloud enabled?**  
Checks whether steam cloud has been enabled or not for this application.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Steamworks::IsSteamCloudEnabled`.

**Is Steamworks Loaded**  
Checks whether the Steamworks SDK could be properly loaded. If steam is not installed, the game is not running on PC, or for any other reason Steamworks features will not be able to function, this function will trigger allowing you to disable functionality that relies on Steamworks.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Steamworks::IsSteamworksLoaded`.

**Check workshop item state**  
Check whether a state flag is set for a Workshop item.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Name (String)): Workshop Item ID
    - Parameter 1 (🔤 String): State flag to check for (one of: "None", "Subscribed", "LegacyItem", "Installed", "NeedsUpdate", "Downloading", "DownloadPending")

    > Technical note: this condition internal type (in GDevelop JSON) is `Steamworks::IsWorkshopItemState`.

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