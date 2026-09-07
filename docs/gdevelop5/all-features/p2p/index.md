---
title: Peer-to-peer
---
# Peer-to-peer

!!! danger


    P2P leaks the client's IP addresses when connecting to them. If someone knows your broker server and P2P ID, they know your IP address and can use it to DDoS or geolocalize you. Make sure to properly inform your players and not to use lobby/matchmaking systems alongside P2P, as those may share the player's P2P ID with unknown peers.

    If this is a concern, you can use the **Disable IP address sharing** action (before connecting to the broker) to force all traffic through a relay (TURN) server instead of connecting peers directly. This hides player IP addresses but requires you to provide a TURN server as an ICE candidate (see "Use a custom ICE server"), and makes connections slower.


!!! warning

    This is an experimental feature, it is subject to change and may contain bugs. Your feedback is welcome to improve this feature.

GDevelop supports peer-to-peer (P2P) connections to enable basic multiplayer games. This works through the concept of *remote events*.  Connect multiple instances of the game using their **ID**, before remotely triggering conditions on the other instances.

!!! danger

        This extension is not suitable for all types of multiplayer games and is potentially unsafe against cheating. As every instance of the game is connected directly to each other, there is no machine that can be considered trusted more than another.

    As such, it is hard to verify if someone is cheating (unlike dedicated servers). P2P supports a maximum of 250 simultaneous connections and is therefore also not suited for very large multiplayer-focused games like MMOs.

## Selecting a broker server

A running game, called a **client**, must connect to other clients before being able to send data. For this, it needs a way to self-identify and find other clients. To do so a **broker server** must be configured. It's a server with a fixed, well-known address that stores all the addresses of the connected clients and gives them to each client so that they can connect to each other.

There are two options for setting up a broker server:

  * Setting up a custom server (recommended), which can be run on a local computer as a test.
  * Using a default, public server.

####  Set up a custom (local) server

A local server can be set up easily. [Node.js](https://nodejs.org/en/download/) will need to be installed. The LTS version is recommended.

Open a command line. To do so on Windows:

  - Press the **Windows** and **R** keys. This will open the **run** window
  - Type **cmd** in the popup.
  - Press the **enter** key.

After opening a command line, complete the following:

  - If this is the first time completing these steps, to install the server type **npm install peer -g**
  - After the server is installed, and every subsequent time (to start the server), type **peerjs -p <the port>**
     *  Any port that is not already used by the computer can be used.
Other options can be passed to the PeerJS server, see [its website](https://github.com/peers/peerjs-server#config--cli-options) for more information.
After the above has been completed, the **Use custom broker server** action is used to connect to the server.

  *  **localhost** can be used as the host address to point to the local server.

!!! tip

    Note that this is a local server, so it will only work on your machine. When releasing your game you will need to deploy one to a Node.js compatible hosting, like Heroku.

####  Use the default server

!!! warning

    It is not recommended to use that server, you should use your own if possible. The default server is not operated by GDevelop and GDevelop team is not responsible if anything goes wrong using that server.

You can also use the default server provided by PeerJS.
To use that server use the action "Use the default server".

## Connecting

To connect instances, you need to enter their ID in the other instances. The ID can be found with the expression `P2P::GetID()`. To connect, use the "Connect to other instance" action and pass as a parameter the ID of another instance. Both instances will then connect automatically. You can then send an event from one instance to the other one to make sure that the connection is established.

### Changing the ID generation

The default P2P ID generation is very long to avoid conflicts, but if you want to have an easily shareable ID, it is not ideal. You can use a custom ID generation on your custom P2P broker by following [the instructions on the peerjs-server documentation](https://github.com/peers/peerjs-server#custom-client-id-generation).

## Interacting with connected games

Once you got connected, you can trigger actions remotely. You can select another specific game instance (using its id) or send an event to all connected instances.

A *remote event* is identified by an **event name** that you choose (for example `"PlayerMoved"` or `"Chat"`). One client sends the event with an action, and the other clients react to it with the **Event triggered by peer** condition using the same name.

### Sending and receiving data along with events

An event can carry **extra data**, so you can transmit more than just the fact that something happened (for example a position, a score, or a chat message).

- To send data, use one of the **Trigger event on all connected clients** / **Trigger event on a specific client** actions and fill in the *extra data* parameter. The extra data is a text (string). To send a number or a structure, there are variants of these actions that take a **variable** directly (the whole variable, including its children, is sent).
- To read the data on the receiving side (inside the **Event triggered by peer** condition), use the expression **Get event data** (`P2P::GetEventData("EventName")`) for a text value, or the action **Get event data (variable)** to copy the received variable into one of your own variables.
- To know **who** sent an event, use the expression **Get event sender** (`P2P::GetEventSender("EventName")`), which returns the ID of the peer that triggered it. This is useful to reply only to that peer or to identify players.

### Choosing if you want to activate data loss mode

You might be wondering what the "data loss" parameter is for.
Due to how GDevelop is made, only one occurrence of a remote event can be handled when the event sheet is executed (this happens roughly 60 times per second). To help optimize events execution, we provide the choice to use the dataloss mode.

* With the *no dataloss* mode, every remote event is queued, and on every frame, if there is one in the queue, we take the oldest one and handle it. **This makes sure every data is processed/taken into account.**
* With the *dataloss mode* activated, it doesn't queue the data but only stores the latest occurrence of the remote event. **This means only the latest data is processed and outdated data will be discarded.**


Here are two examples:

* if you use a synchronized score counter, you don't want to lose any data, as missing only one point of the counter would *desynchronize* the counters, so the dataloss mode would be deactivated.
* If you want to synchronize positions, only the last position sent is relevant, not older positions. In this case, you would activate the dataloss mode *to prevent delays/lags*.

## Handling connections and disconnections

You can react to peers joining or leaving to keep your game state consistent (for example, to spawn or remove other players):

- The **Peer Connected** condition triggers once when a new peer connects, and **Get ID of the connected peer** returns its ID.
- The **Peer disconnected** condition triggers once when a peer leaves, and **Get last disconnected peer** returns its ID.

To close connections yourself, use **Disconnect from a peer** (a single client), **Disconnect from all peers**, **Disconnect from broker** (stops being reachable by new peers while keeping current connections), or **Disconnect from all** (leaves the broker and all peers).

## Reference

All actions, conditions and expressions are listed in [the peer-to-peer reference page](/gdevelop5/all-features/p2p/reference/).