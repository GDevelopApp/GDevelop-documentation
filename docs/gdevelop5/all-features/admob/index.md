---
title: Integrating ads using Google AdMob
---
# Integrating ads using Google AdMob

GDevelop supports integrating ads into your game using **Google AdMob**, on *Android* and *iOS*.

Follow the [Google official documentation](https://support.google.com/admob/answer/6128738?hl=en&ref_topic=7384409) to learn more about the different types of ads.

Ads can be loaded and displayed in your game at any time. They can be displayed as:

* **App open** that opens while your app starts
* **Banners** at the top or bottom of the screen
* **Interstitials** that cover the entire screen.
* **Rewarded videos** that show a video to the user rewarding them something at the end.
* **Rewarded interstitials** that are similar to videos, but that the user can skip

Banner ads are usually displayed during gameplay. Interstitial screens and reward videos are displayed after the completion of a level or an objective.

## Setting up your Google AdMob account

To get started, go to [AdMob website](https://www.google.com/admob/) and create an account. Once that is done, you can create a new app and an ad unit.

Click on "Apps" then "Add App" in the left menu".

![](/gdevelop5/all-features/admob-left-menu-add-app.png)

Add your application by entering its name and choosing its platform. If your game is for both iOS and Android, you must register two ad units.

When created, your **app id** will be displayed.

![](/gdevelop5/all-features/admob-app-created.png)

Next, choose the type of add you want to show:

![](/gdevelop5/all-features/gdevelop5/all-features/admob/ads-types.png)

Enter the name for this ad unit and click on "Create Ad Unit".

![](/gdevelop5/all-features/admob-banner-setup.png)

You will now see the app id and the ad unit identifier.

![](/gdevelop5/all-features/admob-adunit-id.png)

!!! warning

    The first identifier is the **app id**. The second is the **ad unit identifier**. You need to know these identifiers to insert them in the game properties and actions parameters to display the ads. Copy them or leave the screen open.

## Setup Payments in Admob

Before your ads can be displayed, you need to set up the payment method in your account. Go to the Payments page and fill in the necessary information:

![](/gdevelop5/all-features/admob-payments-menu.png)

When your account is ready, Admob will tell you so by showing that your account is *approved*:

![](/gdevelop5/all-features/admob-account-approved.png)

Ads should now be able to be shown.

!!! danger

    It can take at least few hours (~h24) or days for ads to show the first time. If ads are not showing, double check that you've entered all the necessary information in this page and that you properly configured your game (see next section).

!!! danger

    After your account has been approved, use the test mode when testing your game by yourself. If you use your app with the ads in production mode, your account will be blocked because AdMob prohibits the consumption of advertisements for your own applications. If you really want to try production mode, **while we heavily advise against it**, you can diminish the risks of getting banned by having the phone you test the game on on a different network, preferably a the phone's 4G, and use a phone that is logged into a different Google account than the one you use to publish your game to the Google Play Store. In general though, you should rather use the test mode or ask a friend to try the game for you from their home.

## Setting up your game

Once you have created your AdMob account and have the app id and the ad unit identifier, open your game properties. Open the **Project Manager**, then click on Game settings and **Properties**.

In the AdMob section, enter your **app id**, one for Android and one for iOS (though it might be the same).

!!! danger

    The app id must be entered *without* quotes.

![](/gdevelop5/all-features/admob/pasted/20210128-231626.png)

!!! warning

    Do not confuse the *app id* and the *ad unit identifier*. The app id is the unique id for your app, while ad unit identifiers are different for each ad you're creating.

## Loading and displaying ads

Once your game is set up with the *app id*, you can add an event with an action to show the ad unit that you've created. All actions can be found inside the AdMob category:

![](/gdevelop5/all-features/admob/pasted/20210131-221349.png)

Choose the actions adapted to your ad unit:

* If you created a **banner**, use the action to 1) *Configure the banner* and 2) *Show the banner*.
* For **interstitials** and **rewarded videos**, use the action to first load them (during the gameplay) and then the action to show them whenever you're ready (the player just finished a level for example).

In the action, paste the **ad unit id** in the parameters (one for Android and one for iOS). Because parameters are string expressions, you must put the *ad unit identifier between quotes*.

![](/gdevelop5/all-features/admob/pasted/20210131-221724.png)

To display the ad as soon as it is ready, activate the corresponding option. It's only for interstitials and rewarded videos. Banners are loaded and shown when loaded automatically using the *Show banner* action.

Finally, while your account is not yet approved it is possible to view the space that the ad will take by activating the  "**Test Mode**". This will present a fake banner, interstitial or rewarded video - this is a great way to test your actions.

For this, insert the action to enable the test mode at the beginning of your game:

![](/gdevelop5/all-features/admob/pasted/20210131-221920.png)

## Testing and publishing your game on Android (or iOS)

You must first build your game for Android (or iOS) to have the ads displayed on your device. See **[the page about Android and iOS publishing](/gdevelop5/publishing/android_and_ios)**.

![](/gdevelop5/all-features/export-android.png)

The one-click packaging for Android service included with GDevelop is compatible with Admob, so no additional tooling or development kits are needed.

In summary, before you launch your application with ads, you must:

* Your Admob account needs to be approved.
* Make sure to disable the test mode.
* Double check that you have set the **app id** (for Android and iOS), and the **ad unit identifiers** (for Android and iOS).

Wait a few hours before seeing the first ads.

!!! warning

    Remember that ads are not visible in the previews run in GDevelop, only in the exported Android (or iOS) app. It may take a few days for the AdMob service to start providing ads in your application, especially for video content.

## Example

See how the ads work in a game by opening the example called **AdMob**. Replace the app id and the ad unit identifiers in the actions to test with your own account.

!!! tip

    Try it online! Click **[here to open the Admob example](https://editor.gdevelop.io/?project=example://admob)**. You must export to Android using the desktop app to test it on a real phone.

## Reference

All actions, conditions and expressions are listed in the [AdMob reference page](/gdevelop5/all-features/admob/reference/).