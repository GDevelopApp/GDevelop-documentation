---
title: Publish your game to Android and iOS
---
# Publish your game to Android and iOS

GDevelop allows you to publish your games to a variety of formats including Android and iOS with the build online services, or [manually](/gdevelop5/publishing/android_and_ios_with_cordova).

## Make sure that your game is ready for packaging!

It is important to verify that your game is ready to be exported for Android and iOS:

* In the game properties that are accessible from the [Project Manager](/gdevelop5/interface)), make sure to enter a valid _package name_. A package name is an identifier like this: `com.yourname.gamename`. It's like the address of a website but reversed. You can choose any package name provided that:
    * It is not used by another game or application on iOS or Android.
    * It is written with only letters, numbers, and dots. Only put one dot between words (for example, `com..mygame` or `..mygame` are not valid). _Limit this identifier to 2-5 words maximum._
* Check that you've included the required icons.

## Launch export

In the File menu, choose Export. Then choose **Publish on Stores**,  and select the **Mobile** option.

![](/gdevelop5/publishing/publish-mobile-locate.gif)

### Create an account if you don't have one

To use the packaging for Android, you need a [GDevelop account](/gdevelop5/interface/profile). If you don't have one, click on "Create my account", enter your email and choose a password.

Choose if you want to create an **APK** or an **Android App Bundle**:

- An **APK** allows you to send the generated file to your phone and install it. It's ideal to quickly **test your game on your Android device**.
- An **Android App Bundle** (also shorten to "AAB") is the format required to [publish to Google Play](/gdevelop5/publishing/android_and_ios/play-store). When you create a game on the Google Play Developer Console, you'll need to upload an AAB file.

![](/gdevelop5/publishing/publish-mobile-options.png)

Once you are ready, click on **Package for Android**. Now, wait for the game to be built. There are a few steps, during which the game is exported, compressed, uploaded to the online build service and built.

In the end, you'll have a **Download** button to get the APK file that can be installed on Android, or the [AAB for publishing on Google Play](/gdevelop5/publishing/android_and_ios/play-store).

![](/gdevelop5/publishing/publish-mobile-export.gif)

## Install the game on your Android phone (APK)

!!! note

    To test a game on your phone, you must have chosen APK. If you want to distribute it on Google Play, [read this page instead](/gdevelop5/publishing/android_and_ios/play-store).

Plug your Android phone/tablet into your computer and put the APK file somewhere in a folder of the device. Alternatively, you can also store the APK on cloud storage ([Dropbox](https://www.dropbox.com/), [Google Drive](http://drive.google.com/), [OneDrive](https://onedrive.live.com/about/en-in/)...) and download it on your device.

Before installing the APK, go in Settings > Security and activate _Unknown sources_. This will enable you to [install the APK file](https://developer.android.com/studio/publish#publishing-unknown) even if it is not yet registered on the Google Play Store.

Finally, open a _File Manager_, go in the folder containing your APK and touch it to start the installation:

![](/gdevelop5/publishing/android-file-manager.png)

The application is installed. Click _Open_ to run it:

![](/gdevelop5/publishing/android-app-installed.png)

### Play the game

The game is now nicely installed on your phone! Launch it like any other app or game.

You've created a _game for Android_ directly from GDevelop! You can update it easily: just export and package the game again, send the APK to your phone or tablet and install it.

## Subscribe to allow more packaging each day.

As a registered user, you can package your game twice every day for Android.

If you're working more on your game, you may want to upgrade your account to unlock more packaging each day! You can do 10 exports a day with an Indie subscription, and up to 70 with a Pro subscription.

Getting a subscription helps the author of GDevelop to continue working on it (GDevelop is an open-source software) and you will also be able to package your game for Windows/macOS/Linux.

[See here for more information.](https://wiki.gdevelop.io/gdevelop5/interface/profile)

## Publish your game on the stores ("Android App Bundles")

Once you've built your game for Android and tested it, you can publish build it as an **Android App Bundle** to publish it on Google Play. Read [this page about publishing to Google Play Store](/gdevelop5/publishing/android_and_ios/play-store).

You can also publish it on the [Amazon App Store](/gdevelop5/publishing/publishing-to-amazon-app-store) (using an **APK**).