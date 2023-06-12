---
title: Properties of the game
---
# Properties of the game

When you click on Properties in the [Project Manager](/gdevelop5/interface/project-manager), a window is opened where you can change some global parameters for the game. Some will be used when the game is exported as a [Windows/macOS/Linux app](/gdevelop5/publishing/windows-macos-linux) or an [Android/iOS mobile game](/gdevelop5/publishing/android_and_ios).

![](/gdevelop5/interface/project-manager/properties/pasted/20230309-191705.png)

It is in these properties, you can find:

* **Game name:** The name given to your game (will be the application name).
* **Game description:** The description for your game that will be used if you upload to GDevelop's game hosting platform, [gd.games](https://gd.games/).
* **Author name:** Enter your name, or the name of your company. This field can be used for applications generated on Windows, macOS or Linux. As well as when publishing to GDevelop's game hosting platform, [gd.games](https://gd.games/).
* **Device orientation (for iOS and Android):** Choose if the game should run in portrait or landscape mode on mobile devices.
* **Package name (for iOS and Android):** [Read about this here](/gdevelop5/publishing/android_and_ios#make_sure_that_your_game_is_ready_for_packaging).
* **Version number:** Each time you're releasing a new version, you should incrementally increase this version number. This is mandatory to do on some stores, like the Google Play Store or the App Store.
* **Publisher name:** The name that will be used when packaging and submitting your application to stores.
* **Game resolution width:** The width of the game area and default window width.
* **Game resolution height:** The height of the game area and default window height.
* **Game resolution resize mode:** Adjusting the rendering area to the game window to fit the size of the screen it's in. You can choose to adjust the game's width or height, or to not change the game's rendering area.(in which case, the game will run with black margins)
* **Minimum FPS:** By default, 20 is the minimum number of frames per second. If the game doesn't run over this framerate (because of lag, or the device/computer is not powerful enough), the game will be slowed down.
* **Maximum FPS:** By default, 60 is the maximum number of frames per second. If this value is set to 0, the game will run at the highest framerate the device/computer it's running on can handle.
* **Scale mode (also called "Sampling"):** when set to linear, textures will be antialiased, meaning that their edges will be smoothed and the image will render well even if resized. Set to "nearest" to keep pixels visible, without any interpolation. This is the setting for games that use pixel art, or games are pixel perfect.
* **Project file type:** By default, your game is saved in a single file. You can also choose to save it as multiple files: each scene, external layout, and external event sheet will be saved in a different file. This is perfect for working on a large game in a team and sharing your game in a version control system like Github or Mercurial.
* **AdMob application ID (for iOS and Android):** ID number used to connect your game with your AdMob account. Only required if you're running ads in your game. [Read more about AdMob](/gdevelop5/all-features/admob).
* **Firebase configuration string:** The mandatory authentication key for use with Firebase events. Only required if you're using Firebase in your project. [Read more about Firebase](https://wiki.gdevelop.io/gdevelop5/all-features/firebase/quickstart).

## Branding and Loading screen

In the top right corner of the game properties window, you can select **Branding and Loading Screen** which will show you options for customizing the loading screen at the beginning of your game. From this tab you will be able to pick if your game has the GDevelop watermark, logo on startup, or both. As well as some other customization options.

To remove both the watermark and GDevelop logo from your game, please [get a subscription](/gdevelop5/interface/profile) to help supporting GDevelop.

![](/gdevelop5/interface/project-manager/properties/pasted/20230309-200228.png)