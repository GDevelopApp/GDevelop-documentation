# GamePix SDK

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/61baa8834b0d9487f3e61ff92262e69581d7d4bed684b5016dcc4c9a0ba75db4_gamepad-variant-outline.svg" class="extension-icon"></img>
The GamePix game SDK provides a series of utility methods needed for running your game in the GamePix ecosystem.
They enhance the user experience of your game and complete the integration with our ads network and revenues system.

**Authors and contributors** to this community extension: [caiiiycuk](https://gd.games/caiiiycuk).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

---

The GamePix game SDK provides a series of utility methods needed for running your game in the GamePix ecosystem.
They enhance the user experience of your game and complete the integration with our ads network and revenues system.

This SDK provides a set of actions and conditions to display advertising on the GamePix publishing platform. You can use them without initialisation (initialisation is handled by the extension itself). If you run your build locally, you will get a warning that the GamePix player is not found, don't worry, it's OK, it means you are using the test SDK, which is ideal for debugging.

Events sheet for the **interstitial ad**:


* Please add "Show the interstitial ad" action whenever you want to show this ad.
* Add a condition "Check if interstitial has ended", it will be set to true when player closes the interstitial ad. When this condition is read, the status will be immediately reset to false.


Events sheet for **reward ad**:


* Add a "Show the reward ad" action whenever you want to show this ad.
* Add a condition "Check that the reward ad has ended", it will be set to true when the player closes the reward ad. When this condition is read, the status is immediately reset to false.
* Add a condition "Check if player should be rewarded" as a subevent of "Check that the reward ad has ended". It will be set to true if the player should be rewarded, otherwise it will be false. (This condition will always track the last result of the reward ad and will never reset.)

The **"Language"** expression can be used to retrieve the preferred language on the GamePix platform. It will only be available after the SDK has been initialised.

The **"GamePix SDK is being initialised"** condition can be used to check the status of SDK initialisation. It is set to true immediately after successful initialisation.

Events sheet example of GamePix SDK integration:

![Events sheet](https://gpx-porting.s3.eu-central-1.amazonaws.com/docs/gamepix-sdk-gdevelop.png)


**Advanced Usage**

GamePix SDK provides following javascript API:


* gdjs._gamePixSdkExtension.lang() - gets the current preferred language by the player
* gdjs._gamePixSdkExtension().langSync() - same as lang(), but will return null if SDK is not yet initialized
* gdjs._gamePixSdkExtension.updateScore(score) - should be called immediately every time the current score is updated
* gdjs._gamePixSdkExtension.updateLevel(level) - should be called to send the score after the player passed the level
* gdjs._gamePixSdkExtension.happyMoment() - should be called when Happy Moment just happened
* gdjs._gamePixSdkExtension.setItem(key, value) - persistently stores the value. The value must be a string
* gdjs._gamePixSdkExtension.getItem(key) - read value from storage
* gdjs._gamePixSdkExtension.getItemSync(key) - same as getItem(), but will return null if SDK is not yet initialized





!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Show the interstitial ad**  
Show the interstitial ad (full screen).

**Show the reward ad**  
Show the reward ad (full screen).

## Conditions

**GamePix SDK is initialised**  
Check if GamePix SDK is ready to use.

**Check if interstitial has ended**  
Check if interstitial has ended.

**Check that the reward ad has ended**  
Check that the reward ad has ended.

**Check if player should be rewarded**  
Check if player should be rewarded.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `GamePixSDK::Language()` | Player's preferred language. ||


---

*This page is an auto-generated reference page about the **GamePix SDK** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).