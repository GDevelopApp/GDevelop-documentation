# P2P Reference

Allow game instances to communicate remotely using messages sent via WebRTC (P2P). [Read more explanations about it.](/gdevelop5/all-features/p2p)

## Actions

**Connect to another client**  
Connects the current client to another client using its id.

**Disconnect from all**  
Disconnects the client from the broker server and all other clients.

**Disconnect from all peers**  
Disconnects this client from all other clients.

**Disconnect from broker**  
Disconnects the client from the broker server.

**Disconnect from a peer**  
Disconnects this client from another client.

**Disable IP address sharing**  
Disables the sharing of IP addresses with the other peers. This action needs to be called BEFORE connecting to the broker server.

**Get event data (variable)**  
Store the data of the specified event in a variable. Check in the conditions that the event was received using the "Event received" condition.

**Override the client ID**  
Overrides the client ID of the current game instance with a specified ID. Must be called BEFORE connecting to a broker.

**Trigger event on all connected clients**  
Triggers an event on all connected clients

**Trigger event on all connected clients (variable)**  
Triggers an event on all connected clients

**Trigger event on a specific client**  
Triggers an event on a specific connected client

**Trigger event on a specific client (variable)**  
Triggers an event on a specific connected client

**Connect to the default broker server**  
Connects to the default broker server.

**Connect to a broker server**  
Connects the extension to a broker server.

**Use a custom ICE server**  
Disables the default ICE (STUN or TURN) servers list and use one of your own. Note that it is recommended to add at least 1 self-hosted STUN and TURN server for games that are not over LAN but over the internet. This action can be used multiple times to add multiple servers. This action needs to be called BEFORE connecting to the broker server.

## Conditions

**Is P2P ready**  
True if the peer-to-peer extension initialized and is ready to use.

**Peer Connected**  
Triggers once when a remote peer initiates a connection.

**Peer disconnected**  
Triggers once when a peer disconnects.

**An error occurred**  
Triggers once when an error occurs. Use P2P::GetLastError() expression to get the content of the error if you want to analyse it or display it to the user.

**Event triggered by peer**  
Triggers once when a connected client sends the event

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
*This page is an auto-generated reference page about the **P2P** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).