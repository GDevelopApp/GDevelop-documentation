# WebSocket client

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Communication/Communication_pc_server_sync_sharing.svg" class="extension-icon"></img>
A WebSocket client for fast client-server networking.

**Authors and contributors** to this experimental extension: (not specified).

---

This extension allows to use WebSocket based networking. 
You can use it to interact with a WebSocket based API, or a server for your multiplayer game.

Features:

 - Connection and disconnection from a server
 - Receiving strings from the server
 - Sending strings to the server
 - Error handling
 - Handling more than 1 event per frame

Doesn't contain:

 - Sending or receiving binary data
 - A WebSocket server

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Connect to server**  
Connects to a WebSocket server. 

??? quote "See parameters & details"

    - Parameter 1 (string): The server address

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WebSocketClient::Connect`.

**Disconnect from server**  
Disconnects from the current WebSocket server.

??? quote "See parameters & details"

    - Parameter 1 (string): The reason for disconnection

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WebSocketClient::Disconnect`.

**Mark as processed**  
Dismisses an event after processing it to allow processing the next one without waiting for the next frame.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WebSocketClient::FinalizeEvent`.

**Send data to the server**  
Sends a string to the server.

??? quote "See parameters & details"

    - Parameter 1 (string): The data to send to the server

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `WebSocketClient::Send`.

## Conditions

**An event was received**  
Triggers when the server has sent the client some data.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `WebSocketClient::EventReceived`.

**Connection to a server was closed**  
Triggers if the connection to a WebSocket server was closed.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `WebSocketClient::IsClosed`.

**Connected to a server**  
Triggers if the client is connected to a WebSocket server.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `WebSocketClient::IsConnected`.

**Connecting to a server**  
Triggers if the client is currently connecting to the WebSocket server.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `WebSocketClient::IsConnecting`.

**An error occurred**  
Triggers when a WebSocket error has occurred.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `WebSocketClient::OnError`.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `WebSocketClient::Data()` | Returns the piece of data from the server that is currently being processed. ||
| `WebSocketClient::LastError()` | Gets the last error that occurred. ||


---

*This page is an auto-generated reference page about the **WebSocket client** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).