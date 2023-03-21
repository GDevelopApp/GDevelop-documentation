---
title: play-store
---
FIXME **This page is not fully translated, yet. Please help completing the translation.**  
*(remove this paragraph once the translation is finished)*

# Publish your game on the Play Store

After building your game with Android (either using the [one-click build for Android](/gdevelop5/publishing/android_and_ios) or [the manual process with Cordova for advanced users](/gdevelop5/publishing/android_and_ios_with_cordova)), you can publish it on the Google Play Store.

To do this, you need to have an account on Google Play Store. There is a one-time \$25 registration fee asked by Google.

## Create your Google Play Store Develop account

To create your account, go there: <https://play.google.com/apps/publish/>

## Package your game

Package your game as explained here. At the end, you'll have a **Download button** to get the .apk file that can be installed on Android.

Download this APK and keep it somewhere on your computer.

## Create the app and fill in the app details

Connect to the Play Store Developer Console (<https://play.google.com/apps/publish/>). On the pages listing your applications, click on **Create Application**:

![](/gdevelop5/publishing/android_and_ios/create-application-button_2x.png)

Enter a title and choose a language. The application is created on the Play Store and you're now able to complete the information that will be displayed on the Play Store:

![](/gdevelop5/publishing/android_and_ios/application-store-listing.png)

Don't forget to add screenshots and promo graphics:

![](/gdevelop5/publishing/android_and_ios/bub-screenshots-play-store.png)

Click on the button on the bottom of the page to submit all that you've entered.

## Upload the game .apk file

In the menu on the left, click on App Releases. Then, on the right, choose **Manage Production**:

![](/gdevelop5/publishing/android_and_ios/app-releases-play-store.png)

Click then on **Create Release**.

A new form appears. If you're asked for Google Play App Signing, click on **Opt Out**, than on **Confirm** for now.

In **APKs to add**, choose **Browse files**, then select the .apk file that you downloaded earlier: ![](/gdevelop5/publishing/android_and_ios/choose-apk-play-store.png)

The APK is uploaded to the Play Store. Wait a bit. Once it's finished, you should see a message telling that the upload finished successfully.

If there is an error telling you that the upload failed, read the error message to know more about what went wrong. Usually it means that:

* The package name is not correct. In GDevelop, using [the project manager](http://wiki.compilgames.net/doku.php/gdevelop5/interface/project-manager), enter a new, unique package name
* Or you used the same package name as an existing application. Choose another in the [the project manager](http://wiki.compilgames.net/doku.php/gdevelop5/interface/project-manager) and package again your game to create a new APK.

If the upload is a success, you can see your APK file listed below: ![](/gdevelop5/publishing/android_and_ios/apk-uploaded.png)

In **What's new in this release?**, enter the release notes that should be displayed on the play store. Finish by clicking on Save:

![](/gdevelop5/publishing/android_and_ios/releases-notes-play-store.png)

## Finish entering all the details about the game

Before making your game public, you must finish the enter all the details about your game, including the price and find a rating for the content. Everything that you must still complete is listed in the menu and can be seen thanks to a "warning" icon:

![](/gdevelop5/publishing/android_and_ios/menu-to-fill-play-store.png)

## Publish the game!

Once you've completed everything, entered a nice description, set up beautiful screenshots and uploaded the .apk of your game, you can go back to the **App Releases** page. Click on **Manage Production** or **Edit release**. In the page where you've uploaded your apk, you can still upload a new apk if you want to change it (if you made changes in your game).

When you're ready, click on **Review** (or **Save** and then **Review**) at the bottom of the page.

A final screen is shown: ![](/gdevelop5/publishing/android_and_ios/review-before-rollout-play-store.png)

When you're ready, click on **Roll out to production** (if it's grayed, then you forgot to complete something, check again everything in the menu on the left).

## Congratulations! The game is on the Play Store.

**Congrats!** You've made it and published your game. Some users can have to wait for a few hours before seeing the game in the Play Store.

Remember to send some Tweets to GDevelop and/or a messages on the forum to let the community know that you've published a game 🚀
