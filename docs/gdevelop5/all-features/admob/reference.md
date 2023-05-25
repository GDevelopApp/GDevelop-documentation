# AdMob

Allow to display AdMob banners, app open, interstitials, rewarded interstitials and rewarded video ads. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/admob)

## Actions

**Mark the reward of the rewarded interstitial as claimed**  
Mark the rewarded interstitial reward as claimed. Useful if you used the condition to check if the reward was given to the user without clearing the reward.

**Mark the reward of the rewarded video as claimed**  
Mark the rewarded video reward as claimed. Useful if you used the condition to check if the reward was given to the user without clearing the reward.

**Hide banner**  
Hide the banner. You can show it again with the corresponding action.

**Load app open**  
Start loading an app open (that can be displayed automatically when the loading is finished).  
If test mode is set, a test app open will be displayed.

**Load interstitial**  
Start loading an interstitial (that can be displayed automatically when the loading is finished).  
If test mode is set, a test interstitial will be displayed.

**Load rewarded interstitial**  
Start loading a rewarded interstitial (that can be displayed automatically when the loading is finished).  
If test mode is set, a test rewarded interstitial will be displayed.
This is similar to a rewarded video, but can be displayed at any time, and the user can close it.

**Load rewarded video**  
Start loading a reward video (that can be displayed automatically when the loading is finished).  
If test mode is set, a test video will be displayed.

**Enable test mode**  
Activate or deactivate the test mode ("development" mode).  
When activated, tests ads will be served instead of real ones.

It is important to enable test ads during development so that you can click on them without charging advertisers. If you click on too many ads without being in test mode, you risk your account being flagged for invalid activity.

**Configure the banner**  
Configure a banner, which can then be displayed.  
If a banner is already displayed, it will be removed
If test mode is set, a test banner will be displayed.

Once a banner is positioned (at the top or bottom of the game), it can't be moved anymore.

**Show app open**  
Show the app open that was loaded. Will work only when the app open is fully loaded.

**Show banner**  
Show the banner that was previously set up.

**Show interstitial**  
Show the interstitial that was loaded. Will work only when the interstitial is fully loaded.

**Show rewarded interstitial**  
Show the rewarded interstitial that was loaded. Will work only when the rewarded interstitial is fully loaded.

**Show rewarded video**  
Show the reward video that was loaded. Will work only when the video is fully loaded.

## Conditions

**App open errored**  
Check if there was an error while loading the app open.

**App open loading**  
Check if an app open is currently loading.

**App open ready**  
Check if an app open is ready to be displayed.

**App open showing**  
Check if there is an app open being displayed.

**Banner configured**  
Check if there is a banner correctly configured ready to be shown.

**Banner had an error**  
Check if there was a error while displaying a banner.

**Banner loaded**  
Check if there is a banner correctly loaded ready to be shown.

**Banner showing**  
Check if there is a banner being displayed.

**Interstitial had an error**  
Check if there was a error while loading the interstitial.

**Interstitial loading**  
Check if an interstitial is currently loading.

**Interstitial ready**  
Check if an interstitial is ready to be displayed.

**Interstitial showing**  
Check if there is an interstitial being displayed.

**Rewarded interstitial had an error**  
Check if there was a error while loading the rewarded interstitial.

**Rewarded interstitial loading**  
Check if a rewarded interstitial is currently loading.

**Rewarded interstitial ready**  
Check if a rewarded interstitial is ready to be displayed.

**Rewarded Interstitial reward received**  
Check if the reward of the rewarded interstitial was given to the user.  
You can mark this reward as cleared, so that the condition will be false and you can show later another rewarded interstitial.

**Rewarded interstitial showing**  
Check if there is a rewarded interstitial being displayed.

**Rewarded video had an error**  
Check if there was a error while loading the rewarded video.

**Rewarded video loading**  
Check if a rewarded video is currently loading.

**Rewarded video ready**  
Check if a rewarded video is ready to be displayed.

**Rewarded Video reward received**  
Check if the reward of the rewarded video was given to the user.  
You can mark this reward as cleared, so that the condition will be false and you can show later another rewarded video.

**Rewarded video showing**  
Check if there is a rewarded video being displayed.



---
*This page is an auto-generated reference page about the **AdMob** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).