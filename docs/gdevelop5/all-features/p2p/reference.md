# P2P Reference

Allow game instances to communicate remotely using messages sent via WebRTC (P2P). [Read more explanations about it.](/gdevelop5/all-features/p2p)

## Actions

**Connect to another client**  
Connects the current client to another client using its id.

??? quote "See parameters & details"

    - Parameter 0 (string): ID of the other client

    > Technical note: this action internal type (in GDevelop JSON) is `P2P::Connect`.

**Disconnect from all**  
Disconnects the client from the broker server and all other clients.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `P2P::DisconnectFromAll`.

**Disconnect from all peers**  
Disconnects this client from all other clients.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `P2P::DisconnectFromAllPeers`.

**Disconnect from broker**  
Disconnects the client from the broker server.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `P2P::DisconnectFromBroker`.

**Disconnect from a peer**  
Disconnects this client from another client.

??? quote "See parameters & details"

    - Parameter 0 (string): ID of the peer to disconnect from

    > Technical note: this action internal type (in GDevelop JSON) is `P2P::DisconnectFromPeer`.

**Disable IP address sharing**  
Disables the sharing of IP addresses with the other peers. This action needs to be called BEFORE connecting to the broker server.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Disable sharing of IP addresses

    > Technical note: this action internal type (in GDevelop JSON) is `P2P::ForceRelayServer`.

**Get event data (variable)**  
Store the data of the specified event in a variable. Check in the conditions that the event was received using the "Event received" condition.

??? quote "See parameters & details"

    - Parameter 0 (string): Event name
    - Parameter 1 (🗄️ Scene variable): Variable where to store the received data

    > Technical note: this action internal type (in GDevelop JSON) is `P2P::GetEventVariable`.

**Override the client ID**  
Overrides the client ID of the current game instance with a specified ID. Must be called BEFORE connecting to a broker.

??? quote "See parameters & details"

    - Parameter 0 (string): ID

    > Technical note: this action internal type (in GDevelop JSON) is `P2P::OverrideID`.

**Trigger event on all connected clients**  
Triggers an event on all connected clients

??? quote "See parameters & details"

    - Parameter 0 (string): Event name
    - Parameter 1 (string): Extra data (optional)

    > Technical note: this action internal type (in GDevelop JSON) is `P2P::SendToAll`.

**Trigger event on all connected clients (variable)**  
Triggers an event on all connected clients

??? quote "See parameters & details"

    - Parameter 0 (string): Event name
    - Parameter 1 (🗄️ Scene variable): Variable containing the extra data

    > Technical note: this action internal type (in GDevelop JSON) is `P2P::SendToAllVariable`.

**Trigger event on a specific client**  
Triggers an event on a specific connected client

??? quote "See parameters & details"

    - Parameter 0 (string): ID of the other client
    - Parameter 1 (string): Event name
    - Parameter 2 (string): Extra data (optional)

    > Technical note: this action internal type (in GDevelop JSON) is `P2P::SendToOne`.

**Trigger event on a specific client (variable)**  
Triggers an event on a specific connected client

??? quote "See parameters & details"

    - Parameter 0 (string): ID of the other client
    - Parameter 1 (string): Event name
    - Parameter 2 (🗄️ Scene variable): Variable containing the extra data

    > Technical note: this action internal type (in GDevelop JSON) is `P2P::SendToOneVariable`.

**Connect to the default broker server**  
Connects to the default broker server.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `P2P::UseDefaultBroker`.

**Connect to a broker server**  
Connects the extension to a broker server.

??? quote "See parameters & details"

    - Parameter 0 (string): Host
    - Parameter 1 (🔢 Number): Port
    - Parameter 2 (string): Path
    - Parameter 3 (string): Key
    - Parameter 4 (❓ Yes or No): SSl enabled?

    > Technical note: this action internal type (in GDevelop JSON) is `P2P::UseOwnBroker`.

**Use a custom ICE server**  
Disables the default ICE (STUN or TURN) servers list and use one of your own. Note that it is recommended to add at least 1 self-hosted STUN and TURN server for games that are not over LAN but over the internet. This action can be used multiple times to add multiple servers. This action needs to be called BEFORE connecting to the broker server.

??? quote "See parameters & details"

    - Parameter 0 (string): URL to the ICE server
    - Parameter 1 (string): (Optional) Username
    - Parameter 2 (string): (Optional) Password

    > Technical note: this action internal type (in GDevelop JSON) is `P2P::UseOwnICEServer`.

## Conditions

**Is P2P ready**  
True if the peer-to-peer extension initialized and is ready to use.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `P2P::IsReady`.

**Peer Connected**  
Triggers once when a remote peer initiates a connection.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `P2P::OnConnection`.

**Peer disconnected**  
Triggers once when a peer disconnects.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `P2P::OnDisconnection`.

**An error occurred**  
Triggers once when an error occurs. Use P2P::GetLastError() expression to get the content of the error if you want to analyse it or display it to the user.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `P2P::OnError`.

**Event triggered by peer**  
Triggers once when a connected client sends the event

??? quote "See parameters & details"

    - Parameter 0 (string): Event name
    - Parameter 1 (❓ Yes or No): Data loss allowed?

    > Technical note: this condition internal type (in GDevelop JSON) is `P2P::OnEvent`.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `P2P::GetEventData(string)` | Returns the data received when the specified event was last triggered ||
| | _string_ | Event name |
| `P2P::GetEventSender(string)` | Returns the id of the peer that triggered the event ||
| | _string_ | Event name |
| `P2P::GetID()` | Gets the client ID of the current game instance ||
| `P2P::GetLastConnectedPeer()` | Gets the ID of the newly connected peer. ||
| `P2P::GetLastDisconnectedPeer()` | Gets the ID of the latest peer that has disconnected. ||
| `P2P::GetLastError()` | Gets the description of the last P2P error ||



---

The P2P extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **P2P** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).