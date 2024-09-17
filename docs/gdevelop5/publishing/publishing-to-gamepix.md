# GamePix

GamePix is a thriving online gaming platform, offering the ultimate digital playground for players and developers around the world. Our mission is to provide an unparalleled gaming experience that is accessible, free, and open to all. 

## GamePix GDevelop 5 Plugin

The GamePix game SDK provides a series of utility methods needed for running your game in the GamePix ecosystem.

They enhance the user experience of your game and complete the integration with our ads network and revenues system.

## Installation

Using GDevelop extension import:

* Download the [json file](https://integration.gamepix.com/sdk/plugins/gdevelop/gdevelop-5.json)
* Go to *Project Manager > Create or search for new extension > Import Extension*
* Select the downloaded file
* Now you can use the extension on GDevelop 5

![Import extension](https://gpx-porting.s3.eu-central-1.amazonaws.com/docs/gdevelop-import.jpg)

## Usage

This SDK provides a set of actions and conditions to display advertising on the GamePix publishing platform. You can use them without initialisation (initialisation is handled by the extension itself). If you run your build locally, you will get a warning that the GamePix player is not found, don't worry, it's OK, it means you are using the test SDK, which is ideal for debugging.

Events sheet for the **interstitial ad**:

* Please add "*Show the interstitial ad*" action whenever you want to show this ad.
* Add a condition "*Check if interstitial has ended*", it will be set to true when player closes the interstitial ad. When this condition is read, the status will be immediately reset to false.


Events sheet for **reward ad**:

* Add a "*Show the reward ad*" action whenever you want to show this ad.
* Add a condition "*Check that the reward ad has ended*", it will be set to true when the player closes the reward ad. When this condition is read, the status is immediately reset to false.
* Add a condition "*Check if player should be rewarded*" as a subevent of "*Check that the reward ad has ended*". It will be set to true if the player should be rewarded, otherwise it will be false. (This condition will always track the last result of the reward ad and will never reset.)

**IMPORTANT**: As a rule on the GamePix platform, you must pause the game and sound effects before displaying an ad and resume them after the ad is closed. Unfortunately, GDevelop 5 does not handle this automatically. Therefore, you should utilize the built-in `Time Scale` and `Pause the sound/music of channel` actions. Simply set the time scale to 0 before the `Show the interstitial ad` action, and then set it back to 1 when the ad is closed. Same for sound/music.

![Pause/resume actions](https://gpx-porting.s3.eu-central-1.amazonaws.com/docs/gdevelop-pause-resume.png)

The "**Language**" expression can be used to retrieve the preferred language on the GamePix platform. It will only be available after the SDK has been initialised.

The "**GamePix SDK is being initialised**" condition can be used to check the status of SDK initialisation. It is set to true immediately after successful initialisation.

Events sheet example of GamePix SDK integration:

![Events sheet](https://gpx-porting.s3.eu-central-1.amazonaws.com/docs/gamepix-sdk-gdevelop.png)

## Advance Usage

GamePix SDK provides following javascript API:

* `gdjs._gamePixSdkExtension.lang()` - gets the current preferred language by the player
* `gdjs._gamePixSdkExtension().langSync()` - same as `lang()`, but will return null if SDK is not yet initialized
* `gdjs._gamePixSdkExtension.updateScore(score)` - should be called immediately every time the current score is updated
* `gdjs._gamePixSdkExtension.updateLevel(level)` - should be called to send the score after the player passed the level
* `gdjs._gamePixSdkExtension.happyMoment()` - should be called when Happy Moment just happened
* `gdjs._gamePixSdkExtension.setItem(key, value)` - persistently stores the value. The value must be a string
* `gdjs._gamePixSdkExtension.getItem(key)` - read value from storage
* `gdjs._gamePixSdkExtension.getItemSync(key)` - same as getItem(), but will return null if SDK is not yet initialized

