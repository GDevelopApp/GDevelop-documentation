3d game---
title: Publish your game to Android
---
# Publish your game to Android

GDevelop allows you to publish your games to multiple platforms, including Android and iOS with the Cloud Build services, or [manually](/gdevelop5/publishing/android_and_ios_with_cordova).

## Making sure that your game is ready for packaging

It is important to verify that your game is ready to be exported for Android:

  * In the game properties that are accessible from the [Project Manager](/gdevelop5/interface)), make sure to enter a valid _package name_. A package name is an identifier like this: `com.yourname.gamename`. It's like the address of a website but reversed. You can choose any package name provided that:
      * It is not used by another game or application on iOS or Android.
      * It is written with only letters, numbers, and dots. Only put one dot between words (for example, `com..mygame` or `..mygame` are not valid). _Limit this identifier to 2-5 words maximum._
  * Check that you've included the required icons.

## Launch export

Click on the **Share** button in the GDevelop toolbar, then choose **Android** and **One-click packaging**.

### Choose between APK or AAB export

Choose if you want to create an **APK** or an **Android App Bundle**:

- An **APK** allows you to send the generated file to your phone and install it. It's ideal to quickly **test your game on your Android device**.
- An **Android App Bundle** (also shorten to "AAB") is the format required to [publish to Google Play](/gdevelop5/publishing/android/play-store). When you create a game on the Google Play Developer Console, you'll need to upload an AAB file.

![](/gdevelop5/publishing/publish-mobile-options.png)

Once you are ready, click on **Package for Android**. Now, wait for the game to be built. There are a few steps, during which the game is exported, compressed, uploaded to the online build service and built.

In the end, you'll have a **Download** button to get the APK file that can be installed on Android, or the [AAB for publishing on Google Play](/gdevelop5/publishing/android/play-store).

![](/gdevelop5/publishing/publish-mobile-export.gif)

## Install the game on your Android phone (APK)

!!! note

    To test a game on your phone, you must have chosen APK when exporting the game. If you want to distribute it on Google Play, [read this page instead](/gdevelop5/publishing/android/play-store).

Plug your Android phone/tablet into your computer and put the APK file somewhere in a folder of the device. Alternatively, you can also store the APK on cloud storage ([Dropbox](https://www.dropbox.com/), [Google Drive](http://drive.google.com/), [OneDrive](https://onedrive.live.com/about/en-in/)...) and download it on your device.

Before installing the APK, go in Settings > Security and activate *Unknown sources*. This will enable you to [install the APK file](https://developer.android.com/studio/publish#publishing-unknown) even if it is not yet registered on the Google Play Store.

Finally, open a *File Manager*, go in the folder containing your APK and touch it to start the installation:

![](/gdevelop5/publishing/android-file-manager.png)

The application is installed. Click *Open* to run it:

![](/gdevelop5/publishing/android-app-installed.png)


### Play the game

The game is now nicely installed on your phone! Launch it like any other app or game.

You've created a *game for Android* directly from GDevelop! You can update it easily: just export and package the game again, send the APK to your phone or tablet and install it.

## Get a GDevelop membership to unlock more packagings each day

GDevelop cloud builds, which includes automatic packaging for Android, iOS and desktop, are part of GDevelop memberships. Check the [GDevelop website](https://gdevelop.io/pricing) to compare the different plans and which one will work best for you.

## Publish your game on the stores ("Android App Bundles")

Once you've built your game for Android and tested it, you can publish build it as an **Android App Bundle** to publish it on Google Play. Read [this page about publishing to Google Play Store](/gdevelop5/publishing/android/play-store).

You can also publish it on the [Amazon App Store](/gdevelop5/publishing/publishing-to-amazon-app-store) (using an **APK**).
