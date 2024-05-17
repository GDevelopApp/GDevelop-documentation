---
title: GDevelop Multiplayer
---

# How can I add multiplayer features to my game?

There are several ways to add multiplayer features to your game with GDevelop, but most of them require some programming knowledge, if you want to have a good experience for your players.

Similar to [Player Authentication](/gdevelop5/all-features/player-authentication), GDevelop provides a built-in solution to add multiplayer features to your game, wether you're trying to create a simple multiplayer game or a more complex one, from a cooperative game to a competitive one.

It is built to be easy to use, accessible to everyone, whilst providing a good experience for all your players. (No need to worry about servers, sending custom messages, handling connections, lobbies, packets being lost, prediction of movements, interpolation, etc.)

What does it provide?

- Lobbies for your game
- Automatic authentication so you can identify players
- Automatic definition of the host of the game
- Objects are automatically synchronized between players, depending on who is in charge of each object

# How do I use it?

To use the multiplayer features, you will need to use the built-in extension "Multiplayer" in GDevelop. It is automatically available in your game, and you can start using it right away.
It provides actions, conditions, expressions and a behavior to handle the multiplayer features in your game.

## Lobby system

The multiplayer extension provides a lobby system, so players can join a game together. It is a key feature to allow players to play together, define which player number they are, and start the game when all players are ready.
Lobbies are automatically created for your game (In the future, we will provide a way to customize the lobby system).

### Starting a game

- Action: `Open game lobbies`

This action will show the lobbies to the player, so they can join a game.
If needed, you can use the condition `Lobbies window is open` to check if the lobbies are open and prevent some actions to happen on your scene.
Typically, you can use this action when the user presses a button in your menu.

!!! note

    All the lobby system is handled by GDevelop, so you don't need to worry joining lobbies or starting it.
    When players join a lobby, they are automatically assigned a player number, and the host of the game is automatically defined (player 1).
    When all players are ready, the player 1 can start the game.
    When the game is started, the lobby is automatically closed and players are automatically connected to each other.

!!! note

    To join a lobby, a player needs to log in to their GDevelop or gd.games account. This is automatically handled for you, so that calling this action will automatically open the authentication window if needed.
    If you want to handle this yourself, or allow players to change their account, you can use the actions and conditions provided by the Player Authentication extension.

- Condition: `Player is in a lobby`

If you need to know if a player has joined a lobby, you can use this condition.

- Condition: `Lobby game has just started`

Once the game has started, this condition will turn true, so you can start your game.
Typically, you can use this condition to either start moving things in your game, or to switch to another scene, where the game will happen.

### Ending a game

- Action `End the game`

When you want to end the game, you can use this action. The lobby will be reopened and players will still be in this lobby. This is useful if you want to restart a new game with the same players.

- Condition: `Lobby game has just ended`

When the action `End the game` is called, this condition will turn true, so you can end your game. Typically, you can use this condition to either stop moving things in your game, or to switch to another scene, where the lobby will be reopened.
You can also automatically re-open the lobby by using the action `Open the game lobbies`, so players can start a new game.

### During the game

- Expression `Number of players in the lobby`

You can use this expression to know how many players are in the lobby. This can be useful to know how many players are in the game, and adapt your game to the number of players. (For instance, deleting scores, enemies, players...)

- Condition and expression `Player number`

You can use this expression or condition to retrieve and compare the player number of a player in the lobby. Numbers are 1, 2, 3, etc.
This will be particularly useful during the game so you can assign who has permissions to do what, and who is in charge of what, depending on the player number.

- Condition `Player is server`

This is a shortcut condition to know if the player is the server of the game. By default, the player 1 is the server of the game, so it similar to checking if the player number is 1.

- Action `Send a custom message to other players`

GDevelop Multiplayer extension automatically synchronizes objects between players, as well as variables and object information. But if you need to send a custom message to other players, for some specific cases, you can use this action.

- Condition `Custom message has been received from another player`

When a custom message has been sent, this condition will turn true for both the sender and the players who received the message, so you can handle the message the same way for everyone in your events and do something in your game.

## Synchronizing objects

The Multiplayer extension provides a behavior to synchronize objects between players.
If this behavior is not used, no objects are synchronized between players when the game starts. It means that every player will see their own version of the game.

To synchronize an object between players, you need to add the behavior `Multiplayer object` to the object.
For each synchronized object, there is a notion of "owner" of the object. The owner is the player who is in charge of the object, and who can move it, change its properties, etc.
By default, when you use this behavior, the owner of the object is the server. But you can change the owner of an object by using the action `Player object ownership`.

!!! note

    Even if player 1 is the server, there is a difference between an object owned by the server and an object owned by player 1.
    You can for instance allow another player to grab an object if the server owns it (as in "no-one owns it"), but not if player 1 owns it.

You can also remove the ownership of an object by using the action `Remove object ownership`.
When used, the object will be owned back by the server, which will start synchronizing it again between players.

### What to synchronize?

Typically, you will want to use the behavior `Multiplayer object` on not too many objects, to avoid overloading the network and the game. You can use it on objects that are important for the game, and you want to be sure that everyone sees them the same way. For instance:

- The player character (each player will own their own character, and send their position to the server, which will synchronize it to other players)
- Projectiles/Bombs/Items that are thrown by players. (Each player will own the objects they create, and send their position to the server, which will synchronize it to other players)
- Objects that can be interacted with by players (doors, buttons, flags, bonuses, etc.) (Typically, the server will own these objects, until a player interacts with them, in which case the player will then own the object and send its new state to the server, which will synchronize it to other players)

### What is synchronized?

When an object is synchronized and owned by a player or the server, everything will be sent to other players:

- The position of the object, its angle, its scale, its opacity...
- The current forces and movements applied to the object, allowing to synchronize moving platforms, rotating objects, etc.
- The variables of the object, allowing to synchronize the health of an enemy, the score of a player, the state of a door, etc.
- The animations of the object, if it is a sprite or a 3D Mobel, allowing to synchronize the animation of a character, the state of a button, etc.
- The effects applied to the object
- The timers of the object, allowing to synchronize the cooldown of a spell, the time left before a bomb explodes, etc.
- The behaviors of the object. For instance, if the object has the behavior "Platformer character", the movement of the character will be synchronized, as well as the state of the character (jumping, falling, etc.) If you use physics behaviors, the forces applied to the object will be synchronized, etc.

When an object is destroyed, the destruction of the object will be synchronized to other players, so they can also remove the object from their game.

Sending all this information is done automatically by GDevelop, so you don't need to worry about it. You just need to add the behavior `Multiplayer object` to the objects you want to synchronize, define who is in charge of this object, and GDevelop will take care of the rest.

!!!note

    All this information is sent for 2 reasons:
    - so that the object is seen the same way by all players
    - so that, if a few packets are lost, each game will be able to predict the movement of the object, and avoid having the object "teleport" to a new position.

### Ownership of objects

The main action you will use during your game will be `Player object ownership`. This action allows you to change the owner of an object, so that another player can be in charge of the object.
It will be used:

- At the start of the game, to define who is in charge of the objects that are created at the start of the game.
  - Typically, you will use this action on the player characters, depending on their player number at the beginning of the scene.
  - You don't need to use this action on objects that are created by the server, as the server will be the owner by default. (for example, a door, a button, a bonus, etc.)
- When a player interacts with an object, to change the owner of the object. For instance, when a player grabs a bonus, the bonus will be owned by the player, and the player will send its position to the server, which will synchronize it to other players.
- When a player creates an object, to define who is in charge of the object. For instance, when a player throws a bomb, the bomb will be owned by the player, so you can use this action with the `Player number` and the player will send its position to the server, which will synchronize it to other players.

### Game and scene synchronization

During a game, the server will automatically synchronize the game variables and the scene variables between players. This is particularly useful to have a single source of truth for the game state, and to avoid having to synchronize everything manually.

If you want to make sure that everyone has the same information about a game state, then you can use the game and scene variables, and they will be automatically synchronized between players. For example, you can use the game variables to store which level is being played, which random seed is used for the level generation, which scene is currently active, etc.

!!! note

    It means that if a player tries to cheat by modifying the game variables, the server will automatically send the correct value to the player, so that the game state is the same for everyone.

On the other side, if you want an information to be shared by a player to everyone, you can use the variables of an object their own, as they will be synchronized between players.
For instance, you can use the variables of a player character to store the score of the player, the health of the player, the number of bullets left, etc. And these variables will be automatically synchronized between players.

## Handling collisions and interactions between synchronized objects

When you have objects that are synchronized between players, and you need to handle collisions or interactions between these objects, this can be a bit tricky.
If not handled correctly, you can have different behaviors on different players' games, which can lead to a bad experience for your players.
Especially if you delete the objects as soon as they collide, there is a risk that one player sees the collision happen, but the other player doesn't as they have not received the update in time.
General tip: If the collision or the interaction is important for the game, you should handle it only on one player's game (or the server), and then synchronize the result to other players.

For instance:

- An arrow shot by a player hits another character or an enemy? You should handle the collision on either the player who owns the arrow or the player who owns the character or enemy, and then synchronize the result to other players with variables.
  - If you handle the collision on the player who owns the arrow, ensure you use the condition `Player object ownership` to check if the current player owns the arrow. Once it happens, you can delete your arrow, and save the information about the collision in a variable of an object owned by the player. For instance a variable `LastHit` can be set to `Player 2` if the arrow hits player 2, and player 2 can react accordingly when they see this variable being set (change their animation, decrease their health, etc.)
  - If you handle the collision on the player who owns the character or enemy, ensure you use the condition `Player object ownership` to check if the current player owns the character. Once it happens, you can save the information about the collision in a variable of an object owned by the player. For instance a variable `LastHitBy` can be set to `Player 1` if the arrow belonged to player 1, and player 1 can react accordingly when they see this variable being set (and delete the arrow on their side, for instance).

!!!note

    You can also use the action `Send a custom message to other players` in this case, to ensure everyone is aware of the collision, and can handle it correctly. For instance a message `Arrow hit player 2` can be sent to all players, so that they can handle the collision on their side.

## Typical questions

TODO
