# MQTT Client (advanced)

<img src="https://resources.gdevelop-app.com/assets/Icons/message-flash.svg" class="extension-icon"></img>
An MQTT client for GDevelop: allow connections to a MQTT server and send/receive messages.

**Authors and contributors** to this community extension: [arthuro555](https://gd.games/arthuro555).

---

This extension wraps [MQTT.js](https://github.com/mqttjs/MQTT.js) to allow connections to a MQTT server and communication via pub/sub. The only transport method is Websockets. Make sure to use a broker that support those!

# Dataloss

The dataloss let you chose how to handle data. Due to how the GDevelop event loop is made, only one message per topic can be processed per frame. When dataloss is on, when you get 2 messages from one topic in one frame, only the latest one is remembered. When it is off, the first message is processed and the second is queued for the next frame.

# QoS (Quality of service)

Here is how QoS works:


 - QoS 0 (received at most once): The packet is sent, and that's it. There is no validation about whether it has been received.
 - QoS 1 (received at least once): The packet is sent and stored as long as the client has not received a confirmation from the server. MQTT ensures that it will be received, but there can be duplicates.
 - QoS 2 (received exactly once): Same as QoS 1 but there is no duplicates.

About data consumption: QoS 2 will consume more than QoS 1, which will consume more than QoS 0.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Connect to a broker**  
Connects to an MQTT broker. 

**Disconnect from broker**  
Disconnects from the current MQTT broker.

**Publish message**  
Publishes a message on a topic.

**Subscribe to a topic**  
Subcribe to a topic. All messages published on that topic will be received.

**Unsubscribe from a topic**  
Unsubcribe from a topic. No more messages from this topic will be received.

## Conditions

**Is connected to a broker?**  
Triggers if the client is connected to an MQTT broker server.

**On message**  
Triggers whenever a message was received. Note that you first need to subcribe to a topic in order to get messages from it.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `MQTT::GetLastMessage(string)` | Get the last received message of a topic. ||
| | _string_ | The topic to get the message from |
| `MQTT::getCurrentError()` | Gets the last error. Returns an empty string if there was no errors. ||

---

*This page is an auto-generated reference page about the **MQTT Client (advanced)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).