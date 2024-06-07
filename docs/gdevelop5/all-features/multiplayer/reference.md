# Multiplayer

Allow players to connect to lobbies and play together. [Read more explanations about it.](/gdevelop5/all-features/multiplayer)

## Actions

**End Lobby Game**  
End the lobby game. This will trigger the "Lobby game has just ended" condition.

**Open Game Lobbies**  
Open the game lobbies window, where players can join lobbies or see the one they are in.

**Send custom message to other players**  
Send a custom message to other players in the lobby, with an automatic retry system if it hasn't been received. Use with the condition 'Message has been received' to know when the message has been properly processed by the host.

**Allow players to close the lobbies window**  
Allow players to close the lobbies window. Allowed by default.

## Conditions

**Any player has left**  
Check if any player has left the lobby.

**Lobby game has just ended**  
Check if the lobby game has just ended.

**Lobby game has just started**  
Check if the lobby game has just started.

**Custom message has been received from another player**  
Check if a custom message has been received from another player. Will be true only for one frame.

**Player has left**  
Check if the player has left the lobby.

**Lobbies window is open**  
Check if the lobbies window is open.

**Lobby game is running**  
Check if the lobby game is running.

**Player is host**  
Check if the player is the host. (Player 1 is the host)

**Number of players in lobby**  
Compare the number of players in the lobby.

**Player number in lobby**  
Compare the player number in the lobby (1, 2, ...).

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Multiplayer::MessageData(string)` | Returns the data received when the specified message was received from another player. ||
| | _string_ | Message name |
| `Multiplayer::NumberOfPlayersInLobby()` | Return the number of players in the lobby. ||
| `Multiplayer::PlayerNumber()` | Return the player number in the lobby (1, 2, ...). ||
| `Multiplayer::PlayerPing(number)` | Get the ping of the player in the lobby. ||
| | _🔢 Number_ | The position of the player in the lobby (1, 2, ...) |
| `Multiplayer::PlayerUsername(number)` | Get the username of the player in the lobby. ||
| | _🔢 Number_ | The position of the player in the lobby (1, 2, ...) |

## Multiplayer object 

Allow the object to be synchronized with other players in the lobby. 

### Behavior actions

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
*This page is an auto-generated reference page about the **Multiplayer** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).