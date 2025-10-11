# MQTT Client (advanced)

<img src="https://resources.gdevelop-app.com/assets/Icons/message-flash.svg" class="extension-icon"></img>
An MQTT client for GDevelop: allow connections to a MQTT server and send/receive messages.

**Authors and contributors** to this experimental extension: [arthuro555](https://gd.games/arthuro555).

---

This extension wraps [MQTT.js](https://github.com/mqttjs/MQTT.js) to allow connections to a MQTT server and communication via pub/sub. The only transport method is Websockets. Make sure to use a broker that support those!

## Dataloss

The dataloss let you chose how to handle data. Due to how the GDevelop event loop is made, only one message per topic can be processed per frame. When dataloss is on, when you get 2 messages from one topic in one frame, only the latest one is remembered. When it is off, the first message is processed and the second is queued for the next frame.

## QoS (Quality of service)

Here is how QoS works:


 - QoS 0 (received at most once): The packet is sent, and that's it. There is no validation about whether it has been received.
 - QoS 1 (received at least once): The packet is sent and stored as long as the client has not received a confirmation from the server. MQTT ensures that it will be received, but there can be duplicates.
 - QoS 2 (received exactly once): Same as QoS 1 but there is no duplicates.

About data consumption: QoS 2 will consume more than QoS 1, which will consume more than QoS 0.

## Test Broker

You can find a free test broker server over at https://test.mosquitto.org/ - keep in mind, anyone can read and write data sent there, and it offers no uptime guarantees!

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Connect to a broker**  
Connects to an MQTT broker. 

??? quote "See parameters"

    - Parameter 1 (string): Host port
    - Parameter 2 (string): Settings as JSON
      You can find the list of settings at [the MQTT.js docs](https://github.com/mqttjs/MQTT.js/#client).  
      An example of valid configuration would be `"{\"clientId\": \"myUserName\"}"`.
    - Parameter 3 (❓ Yes or No): Use secure WebSockets?

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Disconnect from broker**  
Disconnects from the current MQTT broker.

??? quote "See parameters"

    - Parameter 1 (❓ Yes or No): Force end the connection?
      By default, MQTT waits for pending messages or messages in the process of being sent to finish being sent before ending the connection. Use this to cancel any request and immediately shutdown the connection.

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Publish message**  
Publishes a message on a topic.

??? quote "See parameters"

    - Parameter 1 (string): Text to publish
    - Parameter 2 (string): Topic to publish to
    - Parameter 3 (🔢 Number): The QoS
      See [this](https://github.com/mqttjs/MQTT.js#qos) for more details.
    - Parameter 4 (❓ Yes or No): Should the message be retained?
      When a message is retained, it will be sent to every client that subscribe to the topic. Only one message can be retained per topic, if another retained message is sent it will overwrite the previous one.  
      Read more [here](https://www.hivemq.com/blog/mqtt-essentials-part-8-retained-messages/#retained-messages).

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Subscribe to a topic**  
Subcribe to a topic. All messages published on that topic will be received.

??? quote "See parameters"

    - Parameter 1 (string): The topic to subscribe to
    - Parameter 2 (🔢 Number): The QoS
      See https://github.com/mqttjs/MQTT.js#qos for more details
    - Parameter 3 (❓ Yes or No): Is dataloss allowed?
      See https://wiki.gdevelop.io/gdevelop5/all-features/p2p#choosing_if_you_want_to_activate_data_loss_mode for more details

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Unsubscribe from a topic**  
Unsubcribe from a topic. No more messages from this topic will be received.

??? quote "See parameters"

    - Parameter 1 (string): The topic to subscribe to

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

## Conditions

**Is connected to a broker?**  
Triggers if the client is connected to an MQTT broker server.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**On message**  
Triggers whenever a message was received. Note that you first need to subcribe to a topic in order to get messages from it.

??? quote "See parameters"

    - Parameter 1 (string): The topic to listen to

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `MQTT::GetLastMessage(string)` | Get the last received message of a topic. ||
| | _string_ | The topic to get the message from |
| `MQTT::getCurrentError()` | Gets the last error. Returns an empty string if there was no errors. ||


---

*This page is an auto-generated reference page about the **MQTT Client (advanced)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).