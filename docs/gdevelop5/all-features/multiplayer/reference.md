# Multiplayer Reference

This allows players to join online lobbies and synchronize gameplay across devices without needing to manage servers or networking.

Use the "Open game lobbies" action to let players join a game, and use conditions like "Lobby game has just started" to begin gameplay. Add the "Multiplayer object" behavior to game objects that should be synchronized, and assign or change their ownership using player numbers. Variables and game state (like scenes, scores, or timers) are automatically synced by the host, with options to change ownership or disable sync when needed. Common multiplayer logic —like handling joins/leaves, collisions, and host migration— is supported out-of-the-box for up to 8 players per game. [Read more explanations about it.](/gdevelop5/all-features/multiplayer)

## Actions

**Disable variable synchronization**  
Disable synchronization of the variable over the network. It will not be sent to other players anymore.

??? quote "See parameters & details"

    - Parameter 1: 🗄️ Any variable

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::DisableVariableSynchronization`.

**End Lobby Game**  
End the lobby game. This will trigger the "Lobby game has just ended" condition.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::EndLobbyGame`.

**Configure lobby game to end when host leaves**  
Configure the lobby game to end when the host leaves. This will trigger the "Lobby game has just ended" condition. (Default behavior is to migrate the host)

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): End lobby game when host leaves

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::EndLobbyWhenHostLeaves`.

**Get message variable**  
Store the data of the specified message in a variable. Use with the condition 'Message has been received' to know when the message has been properly processed by the host.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Message name
    - Parameter 1: 🗄️ Any variable

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::GetMessageVariable`.

**Leave Game Lobby**  
Leave the current game lobby. This will trigger the "Player has left" condition on the other players, and the "Lobby game has ended" condition on the player leaving.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::LeaveGameLobby`.

**Open Game Lobbies**  
Open the game lobbies window, where players can join lobbies or see the one they are in.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::OpenGameLobbies`.

**Join the next available lobby**  
Join the next available lobby. The player will join the game instantly if this is possible.

??? quote "See parameters & details"

    - Parameter 1 (❓ Yes or No): Display loader while searching for a lobby.
    - Parameter 2 (❓ Yes or No): Display game lobbies if no lobby can be joined directly.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::QuickJoinLobby`.

**Join a specific lobby by its ID**  
Join a specific lobby. The player will join the game instantly if this is possible.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Lobby ID
    - Parameter 2 (❓ Yes or No): Display loader while joining a lobby.
    - Parameter 3 (❓ Yes or No): Display game lobbies if unable to join a specific one.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::QuickJoinWithLobbyID`.

**Remove ownership of variable**  
Remove the ownership of the variable. It will still be synchronized to other players, but the host owns it.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Variable
      Only root variables can change ownership. Arrays and structures children are synchronized with their parent.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::RemoveVariableOwnership`.

**Send custom message to other players**  
Send a custom message to other players in the lobby, with an automatic retry system if it hasn't been received. Use with the condition 'Message has been received' to know when the message has been properly processed by the host.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Message name
    - Parameter 1 (🔤 String): Message content

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::SendMessage`.

**Send custom message to other players with a variable**  
Send a custom message to other players in the lobby containing a variable, with an automatic retry system if it hasn't been received. Use with the condition 'Message has been received' to know when the message has been properly processed by the host.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Message name
    - Parameter 1: 🗄️ Any variable

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::SendVariableMessage`.

**Objects synchronization rate**  
Change objects synchronization rate (between 1 and 60, default is 30 times per second).

??? quote "See parameters & details"

    - Parameter 0: 🟰 Operator
    - Parameter 1 (🔢 Number): Sync rate

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::SetObjectsSynchronizationRate`.

**Player variable ownership**  
Change the player owning the variable.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Variable
      Only root variables can change ownership. Arrays and structures children are synchronized with their parent.
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Player number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::SetPlayerVariableOwnership`.

**Allow players to close the lobbies window**  
Allow players to close the lobbies window. Allowed by default.

??? quote "See parameters & details"

    - Parameter 1 (❓ Yes or No): Show close button

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::ShowLobbiesWindowCloseAction`.

**Take ownership of variable**  
Take the ownership of the variable. It will then be synchronized to other players, with the current player as the owner.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Variable
      Only root variables can change ownership. Arrays and structures children are synchronized with their parent.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::TakeVariableOwnership`.


## Conditions

**Current player number in lobby**  
Compare the current player number in the lobby (1, 2, ...).

??? quote "See parameters & details"

    - Parameter 0: 🟰 Relational operator
    - Parameter 1 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::CurrentPlayerNumber`.

**Any player has joined**  
Check if any player has joined the lobby.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::HasAnyPlayerJoined`.

**Any player has left**  
Check if any player has left the lobby game.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::HasAnyPlayerLeft`.

**Lobby game has just ended**  
Check if the lobby game has just ended.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::HasLobbyGameJustEnded`.

**Lobby game has just started**  
Check if the lobby game has just started.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::HasLobbyGameJustStarted`.

**Custom message has been received from another player**  
Check if a custom message has been received from another player. Will be true only for one frame.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Message name

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::HasMessageBeenReceived`.

**Player has joined**  
Check if the player has joined the lobby.

??? quote "See parameters & details"

    - Parameter 0 (🔢 Number): Player number

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::HasPlayerJoined`.

**Player has left**  
Check if the player has left the lobby game.

??? quote "See parameters & details"

    - Parameter 0 (🔢 Number): Player number

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::HasPlayerLeft`.

**Lobbies window is open**  
Check if the lobbies window is open.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::IsLobbiesWindowOpen`.

**Lobby game is running**  
Check if the lobby game is running.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::IsLobbyGameRunning`.

**Host is migrating**  
Check if the host is migrating, in order to adapt the game state (like pausing the game).

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::IsMigratingHost`.

**Player is connected**  
Check if the specified player is connected to the lobby.

??? quote "See parameters & details"

    - Parameter 0 (🔢 Number): The position of the player in the lobby (1, 2, ...)

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::IsPlayerConnected`.

**Player is host**  
Check if the player is the host. (Player 1 is the host)

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::IsPlayerHost`.

**Is searching for a lobby to join**  
Is searching for a lobby to join.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::IsSearchingForLobbyToJoin`.

**Objects synchronization rate**  
Compare objects synchronization rate (between 1 and 60, default is 30 times per second).

??? quote "See parameters & details"

    - Parameter 0: 🟰 Relational operator
    - Parameter 1 (🔢 Number): Sync rate

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::ObjectsSynchronizationRate`.

**Player variable ownership**  
Compare the player owning the variable.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Variable
      Only root variables can change ownership. Arrays and structures children are synchronized with their parent.
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Player number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::PlayerVariableOwnership`.

**Number of players in lobby**  
Compare the number of players in the lobby.

??? quote "See parameters & details"

    - Parameter 0: 🟰 Relational operator
    - Parameter 1 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::PlayersInLobbyCount`.

**Quick join failed to join a lobby**  
Quick join failed to join a lobby.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::QuickJoinJustFailed`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Multiplayer::CurrentLobbyID()` | Returns current lobby ID. ||
| `Multiplayer::CurrentPlayerNumber()` | Return the current player number in the lobby (1, 2, ...). ||
| `Multiplayer::CurrentPlayerPing()` | Get the ping of the current player in the lobby. ||
| `Multiplayer::CurrentPlayerUsername()` | Get the username of the current player in the lobby. ||
| `Multiplayer::LastJoinedPlayerNumber()` | Returns the player number of the player that has just joined the lobby. ||
| `Multiplayer::LastLeftPlayerNumber()` | Returns the player number of the player that has just left the lobby. ||
| `Multiplayer::MessageData(string)` | Returns the data received when the specified message was received from another player. ||
| | _🔤 String_ | Message name |
| `Multiplayer::MessageSender(string)` | Returns the player number of the sender of the specified message. ||
| | _🔤 String_ | Message name |
| `Multiplayer::ObjectsSynchronizationRate()` | Return objects synchronization rate (between 1 and 60, default is 30 times per second). ||
| `Multiplayer::PlayerPing(number)` | Get the ping of the player in the lobby. ||
| | _🔢 Number_ | The position of the player in the lobby (1, 2, ...) |
| `Multiplayer::PlayerUsername(number)` | Get the username of the player in the lobby. ||
| | _🔢 Number_ | The position of the player in the lobby (1, 2, ...) |
| `Multiplayer::PlayerVariableOwnership(variable)` | Return the player owning the variable. ||
| | _🗄️ Any variable_ | Variable Only root variables can change ownership. Arrays and structures children are synchronized with their parent. |
| `Multiplayer::PlayersInLobbyCount()` | Return the number of players in the lobby. ||
| `Multiplayer::QuickJoinFailureReason()` | Returns the reason why the Quick join action failed. It can either be 'FULL' if all lobbies were occupied, 'NOT_ENOUGH_PLAYERS' if the lobby's configuration requires more than 1 player to start the game and no other players were available. It can also take the value 'UNKNOWN'. ||

## Multiplayer object 

Allow the object to be synchronized with other players in the lobby. 

### Behavior properties

- **Action when player disconnects** (Choice, one of: "DestroyObject", "GiveOwnershipToHost", "DoNothing"). Default value is `DestroyObject`.
- **Player owning the object** (Choice, one of: "Host", "1", "2", "3", "4", "5", "6", "7", "8"). Who is synchronizing the object to the players. If this is an object controlled by a player, then assign the player number. Otherwise just leave "Host" and the host of the game will synchronize the object to the players. (Note: you can change the ownership of the object during the game with corresponding actions). Default value is `Host`.

??? quote "See internal technical details"


    - **Action when player disconnects** is stored as `actionOnPlayerDisconnect` (Choice). Default value is `DestroyObject`.
    - **Player owning the object** is stored as `playerNumber` (Choice). Default value is `Host`.

### Behavior actions

**Enable (or disable) the synchronization of a behavior**  
Enable or disable the synchronization of a behavior over the network. If disabled, the behavior's current state will not be sent to other players anymore.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🧩 Behavior): Multiplayer behavior
    - Parameter 2 (🧩 Behavior): Object behavior
    - Parameter 3 (❓ Yes or No): Enable synchronization

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::MultiplayerObjectBehavior::EnableBehaviorSynchronization`.

**Remove object ownership**  
Remove the ownership of the object from the player. It will still be synchronized to other players, but the host owns it.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::MultiplayerObjectBehavior::RemoveObjectOwnership`.

**Player object ownership**  
Change the player owning the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Player number

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::MultiplayerObjectBehavior::SetPlayerObjectOwnership`.

**Take ownership of object**  
Take the ownership of the object. It will then be synchronized to other players, with the current player as the owner.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `Multiplayer::MultiplayerObjectBehavior::TakeObjectOwnership`.


### Behavior conditions

**Is object owned by current player**  
Check if the object is owned by the current player, as a player or the host.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::MultiplayerObjectBehavior::IsObjectOwnedByCurrentPlayer`.

**Player object ownership**  
Compare the player owning the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Player number

    > Technical note: this condition internal type (in GDevelop JSON) is `Multiplayer::MultiplayerObjectBehavior::PlayerObjectOwnership`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.MultiplayerObject::PlayerObjectOwnership()` | Return the player owning the object. ||



---

The Multiplayer extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Multiplayer** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).