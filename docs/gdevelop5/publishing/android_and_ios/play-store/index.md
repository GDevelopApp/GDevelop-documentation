---
title: Publish your game on the Play Store
---
# Publish your game on the Play Store

After building your game with Android (either using the [one-click build for Android](/gdevelop5/publishing/android_and_ios) or [the manual process with Cordova for advanced users](/gdevelop5/publishing/android_and_ios_with_cordova)), you can publish it on the Google Play Store.

To do this, you need to have an account on the Google Play Store. There is a one-time $25 registration fee asked by Google.

!!! warning

    Have you in the past published a game by uploading an APK? You need to do [the steps to upgrade your game from an APK to an Android App Bundle](/gdevelop5/publishing/android_and_ios/play-store/upgrading-from-apk-to-aab) to continue publishing. [Read this page](/gdevelop5/publishing/android_and_ios/play-store/upgrading-from-apk-to-aab), as it's mandatory to do since August 2021.

## Create your Google Play Developer account

To create your account, go on the [Google Player Console](https://play.google.com/console/about/).

## Package your game

Package [your game as explained here](/gdevelop5/publishing/android_and_ios) - choosing **Android App Bundle**.

After the packaging is finished, you'll have a **Download button** to get the AAB file that can be published to Google Play.
Download it and store it somewhere on your computer.

## Create the app and fill in the app details

Connect to the Play Store Developer Console (<https://play.google.com/apps/publish/>). On the pages listing your applications, click on **Create Application**:

![](/gdevelop5/publishing/android_and_ios/play-store/pasted/20210721-144512.png)

Enter a title and choose a language. The application is created on the Play Store and you're now able to complete the information that will be displayed on the Play Store:

![](/gdevelop5/publishing/android_and_ios/play-store/pasted/20210721-144627.png)

Click on **Create app** to continue.

## Create a "release" and upload the Android App Bundle

In the menu on the left, find the **Release** section. Choose **Production**, **Open testing**, **Closed testing** or **Internal testing** according to how you want to distribute your game first. We recommend you start with **Internal testing**. You can then make a "Production" release once you're satisfied with the game.

Click then on **Create Release**:

![](/gdevelop5/publishing/android_and_ios/play-store/pasted/20210721-145039.png)

You are asked for *Google Play App Signing*, click on **Continue**.

![](/gdevelop5/publishing/android_and_ios/play-store/pasted/20210721-145303.png)

In **App Bundles**, choose **Upload** and select your Android App Bundle that was packaged by GDevelop.

The AAB is uploaded to the Play Store. Wait a bit.
Once it's finished, you should see a message telling that the upload finished successfully.

If the upload is a success, you can see your AAB file listed below:
![](/gdevelop5/publishing/android_and_ios/play-store/pasted/20210721-145535.png)

In **What's new in this release?**, enter the release notes that should be displayed on the play store. Finish by clicking on **Save**.

### Something went wrong?

If there is an error telling you that the upload failed, read the error message to know more about what went wrong. Usually, it means that:

  * The package name is not correct. In GDevelop, using [the project manager](http://wiki.compilgames.net/doku.php/gdevelop5/interface/project-manager), enter a new, unique package name
  * Or you used the same package name as an existing application. Choose another in the [the project manager](http://wiki.compilgames.net/doku.php/gdevelop5/interface/project-manager) and package again your game to create a new AAB.

!!! note

    If you used to publish your app using an APK, you need to upgrade to Android App Bundles. [Read this page to learn how to do this](/gdevelop5/publishing/android_and_ios/play-store/upgrading-from-apk-to-aab).

## Finish entering all the details about the game

Before making your game public, you must finish the enter all the details about your game, including the price and find a rating for the content. Check the "Grow" section in the menu and be sure to fill all the required details:

![](/gdevelop5/publishing/android_and_ios/play-store/pasted/20210721-145735.png)

## Publish the game!

Once you've completed everything, entered a nice description, set up beautiful screenshots and uploaded the Android App Bundle of your game, you can go back to the **Release** section. Click on **Production** and create a release for it.

## Congratulations! The game is on the Play Store.

**Congrats!** You've made it and published your game.
Some users can have to wait for a few hours before seeing the game in the Play Store.

Remember to tell about it on social medias, on the Discord and on the forum to let the community know that you've published a game 🚀

!!! tip

    Later, if you want to publish an upload, be sure to increase the version number (in the game properties in GDevelop). Otherwise, the Play Store will reject the new Android App Bundle if it has the same version number as an existing one.
