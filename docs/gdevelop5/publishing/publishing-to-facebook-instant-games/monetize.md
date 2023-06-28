---
title: Monetize your game on Facebook Instant Games platform
---
# Monetize your game on Facebook Instant Games platform

With GDevelop, you can create games for the Facebook Instant Games platform.
There is an option to [directly export your game from GDevelop to a Facebook Instant Games](/gdevelop5/publishing/publishing-to-facebook-instant-games).

Facebook provides options to monetize your game by display **Interstitial Ad** and **Rewarded Video Ad**.
Let's see how to add this to your game.

Note that ads will only work on mobile: as indicated on the [Facebook documentation](https://developers.facebook.com/docs/games/instant-games/guides/ads-monetization/), ads cannot be requested by desktop browsers.

## Prerequisites: configure your ad placement

To begin, you need to create an ad placement. For this you need to:

  * Have Facebook Audience Network into your app: go to <https://business.facebook.com/pub/start>
  * Have an ad placement created: go to <https://www.facebook.com/help/publisher/355647874927053/> and follow the instructions.

In the end, copy the **ad placement id** (click on Copy ID when you are shown the *Placement ID*).

## Showing an Interstitial Ad

After getting the ad placement id, you can now load (preferably at the beginning of the scene) the ad and show it when you wish (for example, when the user beats a level).

GDevelop will provide you with two actions to do it.

  * Add an event with a single condition "Add the beginning of the scene".
  * Add an action "Load and prepare an interstitial ad" (in "Facebook Instant Games", "Ads").

In the parameter, set your **ad placement id** (don't forget the **double quotes** around it).

![](/gdevelop5/publishing/publishing-to-facebook-instant-games/facebook-load-interstitial-action.png)

This will load the ad. We still need to tell Facebook to actually show the ad later. As an example, we're going to show the ad when the user touch the screen. In a real game, replace the condition by something more useful:

  * Add a new event at the end of the events sheet. Add two conditions: "Touch or Left mouse button is down" and then "Trigger Once".
  * Add an action and this time choose "Show the loaded interstitial ad".

This is how it should look like:

![](/gdevelop5/publishing/publishing-to-facebook-instant-games/facebook-interstitial-complete-events-2.png)

You can now save, export your game to a Facebook Instant Games and upload it to your Instant Game account.

Test it on your mobile phone to see the ad (*ads won't be shown on Desktop browser!*).

## Showing a Rewarded Video Ad

For showing a reward video ad, do the same as the interstitial but use the action "Load and prepare a rewarded video" at the beginning of the scene, and "Show the loaded rewarded video" when the user touches the screen (or with any other condition according to your game).

![](/gdevelop5/publishing/publishing-to-facebook-instant-games/facebook-video-complete-events.png)

!!! warning

    If things are not working, double check that you've loaded the interstitial or video, using the proper placement id (with double quotes around it).

## Examples

!!! tip

        **See it in action!** 🎮
    Open this example online.

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://facebook-instant-game){ .md-button .md-button--primary }