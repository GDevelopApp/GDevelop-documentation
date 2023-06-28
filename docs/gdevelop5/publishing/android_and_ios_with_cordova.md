---
title: Publish your game to Android and iOS manually using Cordova
---
# Publish your game to Android and iOS manually using Cordova

From GDevelop, you can publish your games to Android and iOS. In the [export dialog](/gdevelop5/publishing), you can choose the first **[Android and iOS](/gdevelop5/publishing/android_and_ios)** option, which will use GDevelop online services to automatically build your game for Android and iOS.

If you want more control or have special needs, you can also choose **iOS and Android (manual)** option. This option exports your game as a Cordova project. [Cordova](https://cordova.apache.org/), also known as PhoneGap, is a technology allowing HTML5 games and apps to run on Android and iOS and be packaged as apps, and then distributed on the App Store or Play Store.

!!! warning

    This option requires you to install advanced developer tools and some knowledge of how to use them. It's a good idea to read some external documentation as you discover them.

## Export Window

Go to File > Export. Next, select **Build Manually** under **Publish your game**. Then, select the **Mobile** tab.

![](/gdevelop5/publishing/manual-build-mobile-locate.gif)

## Build

First, choose a folder where the game will be exported. It is recommended to choose an **empty folder**, at least for the first time, to avoid losing any file that could be overwritten by the export.

You can then click on **Package**. The game will be exported to a Cordova project. You can then use [Cordova](https://cordova.apache.org/) command line tool to generate an Android Studio project (for Android) or XCode project (for iOS) and build the game.

![](/gdevelop5/publishing/manual-build-mobile-export.gif)

## Compiling for Android or iOS with Cordova

Building for Android or iOS with Cordova requires you to install specific tools on your system.

Ensure you checkout the latest documentation of Cordova to know exactly what needs to be installed: [Cordova required tools](https://cordova.apache.org/docs/en/11.x/guide/platforms/android/#the-required-software-&-tools)

Here is a summary:

### iOS/iPhone

you need **macOS with XCode** installed.

### Android

You need to install:

  * Android Studio with the Android SDK
  * Java (version 11, can be downloaded from the Oracle website) - as we are using cordova-android 11
  * Gradle.

## Build Cordova project

To be able to build the exported Cordova project, you also need to have **[Node.js](https://nodejs.org/en/)** installed on your system. Finally, you need to install Cordova by typing on the command prompt or terminal:

```sh
npm install -g cordova
```

After that, navigate to your Cordova project's directory and type this on the command prompt or terminal:

  * `cordova platform add ios` if you want to export your game to iOS.
  * `cordova platform add android@11` if you want to export your game to Android.

This will create new folders on your project's directory:

  * _platforms/ios_: iOS project of your game, which can be open with XCode.
  * _platforms/android_: Android project of your game, which can be open with Android Studio.

Once you have specified what platform you want your game to be exported to, you can now build the Cordova project. Type on the command prompt or terminal either:

  * `cordova build`: this will build your project to all the platforms you have.
  * `cordova build ios`: this will only build your project into an iOS executable, that can be used to install your game on iOS devices.
  * `cordova build android`: this will only build your project into an Android executable (apk), that can be used to install your game on Android devices.

!!! tip

    ![](/gdevelop5/publishing/android-build-tool.png)
    Cordova may need a specific version of the Android build tool. It can be installed with the SDK Manager.
    Ensure you have the Android SDKs of version 30 and 31.

## Testing on emulators or Android/iOS devices

## Testing on Android

You can run `cordova run android` to run the compiled application, or `cordova run android --device` to run on an Android device. Make sure that the device has the _developer mode_ activated, is connected and recognized by the computer.

You can also open Android Studio and open the project (choose the `platforms/android` folder). Then you can see in the top right the list of connected devices (or installed emulators) and run the app.

## Testing on iOS

  * You can list iOS simulators installed on your Mac with `cordova emulate ios --list`.
  * You can run the app on a specific simulator using `target`: `cordova run ios --target="iPhone-8"`.

  * To test on an iOS device, it's recommended to launch XCode and open your project (`open platforms/ios/YourProject.xcworkspace`). You'll need to set up a "Development Team" and choose your device. This is because each device must be added to your "Development Team" before it can run development applications.

## Exporting to the stores

### Android

For Android, you can compile your app as a **release AAB** (that can be uploaded on the Play Store), with `cordova build`. The command line should look like this:

```sh
cordova build android --release -- --keystore=/path/to/keystore --storePassword=KEYSTORE_STORE_PASSWORD --alias=KEYSTORE_ALIAS --password=KEYSTORE_PASSWORD --packageType bundle
```

You can also use Android Studio (open it, then open the _platforms/android_ folder) for building a _release APK_ or _Android App Bundle_. Choose **Build > Generate Signed Bundle / APK...**.

![](/gdevelop5/publishing/android_and_ios_with_cordova/pasted/20210117-174059.png)

When you have a signed release APK or Android App Bundle, you can upload it to the [Play Developer Console](https://play.google.com/apps/publish).

### iOS

For iOS, it's recommended to open the project (workspace) in XCode and to use the menu **Project > Archive**.

Note that you might have to change the code signing in the **Build Settings**:
![](/gdevelop5/publishing/android_and_ios_with_cordova/pasted/20210117-172321.png)

Once Code Signing is set up (XCode should guide you if there are errors) and the Archive process finished, you'll see a list of your app archives. You can now distribute the app to upload it to the App Store:

![](/gdevelop5/publishing/android_and_ios_with_cordova/pasted/20210117-172518.png)

Follow the process to get your app uploaded and then go on [iTunes Connect](https://itunesconnect.apple.com/login) to fill in the descriptions, add optional testers with TestFlight, and submit your app for review by Apple.

## Export to other platforms (Web, Windows, macOS, Linux)

See the [other export options](/gdevelop5/publishing) to learn how to publish your game on other platforms!