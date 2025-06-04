# Multiplayer Reference

Allow players to connect to lobbies and play together. [Read more explanations about it.](/gdevelop5/all-features/multiplayer)

## Actions

**Disable variable synchronization**  
Disable synchronization of the variable over the network. It will not be sent to other players anymore.

**End Lobby Game**  
End the lobby game. This will trigger the "Lobby game has just ended" condition.

**Configure lobby game to end when host leaves**  
Configure the lobby game to end when the host leaves. This will trigger the "Lobby game has just ended" condition. (Default behavior is to migrate the host)

**Get message variable**  
Store the data of the specified message in a variable. Use with the condition 'Message has been received' to know when the message has been properly processed by the host.

**Leave Game Lobby**  
Leave the current game lobby. This will trigger the "Player has left" condition on the other players, and the "Lobby game has ended" condition on the player leaving.

**Open Game Lobbies**  
Open the game lobbies window, where players can join lobbies or see the one they are in.

**Join the next available lobby**  
Join the next available lobby. The player will join the game instantly if this is possible.

**Remove ownership of variable**  
Remove the ownership of the variable. It will still be synchronized to other players, but the host owns it.

**Send custom message to other players**  
Send a custom message to other players in the lobby, with an automatic retry system if it hasn't been received. Use with the condition 'Message has been received' to know when the message has been properly processed by the host.

**Send custom message to other players with a variable**  
Send a custom message to other players in the lobby containing a variable, with an automatic retry system if it hasn't been received. Use with the condition 'Message has been received' to know when the message has been properly processed by the host.

**Objects synchronization rate**  
Change objects synchronization rate (between 1 and 60, default is 30 times per second).

**Player variable ownership**  
Change the player owning the variable.

**Allow players to close the lobbies window**  
Allow players to close the lobbies window. Allowed by default.

**Take ownership of variable**  
Take the ownership of the variable. It will then be synchronized to other players, with the current player as the owner.

## Conditions

**Current player number in lobby**  
Compare the current player number in the lobby (1, 2, ...).

**Any player has joined**  
Check if any player has joined the lobby.

**Any player has left**  
Check if any player has left the lobby game.

**Lobby game has just ended**  
Check if the lobby game has just ended.

**Lobby game has just started**  
Check if the lobby game has just started.

**Custom message has been received from another player**  
Check if a custom message has been received from another player. Will be true only for one frame.

**Player has joined**  
Check if the player has joined the lobby.

**Player has left**  
Check if the player has left the lobby game.

**Lobbies window is open**  
Check if the lobbies window is open.

**Lobby game is running**  
Check if the lobby game is running.

**Host is migrating**  
Check if the host is migrating, in order to adapt the game state (like pausing the game).

**Player is connected**  
Check if the specified player is connected to the lobby.

**Player is host**  
Check if the player is the host. (Player 1 is the host)

**Is searching for a lobby to join**  
Is searching for a lobby to join.

**Objects synchronization rate**  
Compare objects synchronization rate (between 1 and 60, default is 30 times per second).

**Player variable ownership**  
Compare the player owning the variable.

**Number of players in lobby**  
Compare the number of players in the lobby.

**Quick join failed to join a lobby**  
Quick join failed to join a lobby.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Multiplayer::CurrentPlayerNumber()` | Return the current player number in the lobby (1, 2, ...). ||
| `Multiplayer::CurrentPlayerPing()` | Get the ping of the current player in the lobby. ||
| `Multiplayer::CurrentPlayerUsername()` | Get the username of the current player in the lobby. ||
| `Multiplayer::LastJoinedPlayerNumber()` | Returns the player number of the player that has just joined the lobby. ||
| `Multiplayer::LastLeftPlayerNumber()` | Returns the player number of the player that has just left the lobby. ||
| `Multiplayer::MessageData(string)` | Returns the data received when the specified message was received from another player. ||
| | _string_ | Message name |
| `Multiplayer::MessageSender(string)` | Returns the player number of the sender of the specified message. ||
| | _string_ | Message name |
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

### Behavior actions

**Enable (or disable) the synchronization of a behavior**  
Enable or disable the synchronization of a behavior over the network. If disabled, the behavior's current state will not be sent to other players anymore.

**Remove object ownership**  
Remove the ownership of the object from the player. It will still be synchronized to other players, but the host owns it.

**Player object ownership**  
Change the player owning the object.

**Take ownership of object**  
Take the ownership of the object. It will then be synchronized to other players, with the current player as the owner.

### Behavior conditions

**Is object owned by current player**  
Check if the object is owned by the current player, as a player or the host.

**Player object ownership**  
Compare the player owning the object.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.MultiplayerObject::PlayerObjectOwnership()` | Return the player owning the object. ||
---

The Multiplayer extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Multiplayer** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).