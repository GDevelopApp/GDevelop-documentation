# AdMob Reference

Allow to display AdMob banners, app open, interstitials, rewarded interstitials and rewarded video ads. [Read more explanations about it.](/gdevelop5/all-features/admob)

## Actions

**Mark the reward of the rewarded interstitial as claimed**  
Mark the rewarded interstitial reward as claimed. Useful if you used the condition to check if the reward was given to the user without clearing the reward.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `AdMob::ClaimRewardedInterstitialReward`.

**Mark the reward of the rewarded video as claimed**  
Mark the rewarded video reward as claimed. Useful if you used the condition to check if the reward was given to the user without clearing the reward.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `AdMob::ClaimRewardedVideoReward`.

**Hide banner**  
Hide the banner. You can show it again with the corresponding action.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `AdMob::HideBanner`.

**Initialize AdMob manually**  
Initialize AdMob manually. This will trigger the consent dialog if needed, and then load the ads.  
Use this action if you have disabled the auto init and want to control when the consent dialog will be shown.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `AdMob::InitializeAdmob`.

**Load app open**  
Start loading an app open (that can be displayed automatically when the loading is finished).  
If test mode is set, a test app open will be displayed.

??? quote "See parameters & details"

    - Parameter 0 (string): Android app open ID
      Get it from your AdMob account. You can use `"ca-app-pub-3940256099942544/9257395921"` for loading a test app open.
    - Parameter 1 (string): iOS app open ID
      Get it from your AdMob account. You can use `"ca-app-pub-3940256099942544/5575463023"` for loading a test app open.
    - Parameter 2 (❓ Yes or No): Display in landscape? (portrait otherwise)
    - Parameter 3 (❓ Yes or No): Displayed automatically when loading is finished?

    > Technical note: this action internal type (in GDevelop JSON) is `AdMob::LoadAppOpen`.

**Load interstitial**  
Start loading an interstitial (that can be displayed automatically when the loading is finished).  
If test mode is set, a test interstitial will be displayed.

??? quote "See parameters & details"

    - Parameter 0 (string): Android interstitial ID
      Get it from your AdMob account. You can use `"ca-app-pub-3940256099942544/1033173712"` for loading a test interstitial.
    - Parameter 1 (string): iOS interstitial ID
      Get it from your AdMob account. You can use `"ca-app-pub-3940256099942544/4411468910"` for loading a test interstitial.
    - Parameter 2 (❓ Yes or No): Displayed automatically when loading is finished?

    > Technical note: this action internal type (in GDevelop JSON) is `AdMob::LoadInterstitial`.

**Load rewarded interstitial**  
Start loading a rewarded interstitial (that can be displayed automatically when the loading is finished).  
If test mode is set, a test rewarded interstitial will be displayed.
This is similar to a rewarded video, but can be displayed at any time, and the user can close it.

??? quote "See parameters & details"

    - Parameter 0 (string): Android rewarded interstitial ID
      Get it from your AdMob account. You can use `"ca-app-pub-3940256099942544/5354046379"` for loading a test rewarded interstitial.
    - Parameter 1 (string): iOS interstitial ID
      Get it from your AdMob account. You can use `"ca-app-pub-3940256099942544/6978759866"` for loading a test rewarded interstitial.
    - Parameter 2 (❓ Yes or No): Displayed automatically when loading is finished?

    > Technical note: this action internal type (in GDevelop JSON) is `AdMob::LoadRewardedInterstitial`.

**Load rewarded video**  
Start loading a reward video (that can be displayed automatically when the loading is finished).  
If test mode is set, a test video will be displayed.

??? quote "See parameters & details"

    - Parameter 0 (string): Android reward video ID
      Get it from your AdMob account. You can use `"ca-app-pub-3940256099942544/5224354917"` for loading a test rewarded video.
    - Parameter 1 (string): iOS reward video ID
      Get it from your AdMob account. You can use `"ca-app-pub-3940256099942544/1712485313"` for loading a test rewarded video.
    - Parameter 2 (❓ Yes or No): Displayed automatically when loading is finished?

    > Technical note: this action internal type (in GDevelop JSON) is `AdMob::LoadRewardedVideo`.

**Prevent AdMob auto initialization**  
Prevent AdMob from initializing automatically. You will need to call "Initialize AdMob" action manually.  
This is useful if you want to control when the consent dialog will be shown (for example, after the user has accepted your game terms).

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `AdMob::PreventAdmobAutoInitialization`.

**Enable test mode**  
Activate or deactivate the test mode ("development" mode).  
When activated, tests ads will be served instead of real ones.

It is important to enable test ads during development so that you can click on them without charging advertisers. If you click on too many ads without being in test mode, you risk your account being flagged for invalid activity.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Enable test mode?

    > Technical note: this action internal type (in GDevelop JSON) is `AdMob::SetTestMode`.

**Configure the banner**  
Configure a banner, which can then be displayed.  
If a banner is already displayed, it will be removed
If test mode is set, a test banner will be displayed.

Once a banner is positioned (at the top or bottom of the game), it can't be moved anymore.

??? quote "See parameters & details"

    - Parameter 0 (string): Android banner ID
      Get it from your AdMob account. You can use `"ca-app-pub-3940256099942544/6300978111"` for showing a test banner.
    - Parameter 1 (string): iOS banner ID
      Get it from your AdMob account. You can use `"ca-app-pub-3940256099942544/2934735716"` for showing a test banner.
    - Parameter 2 (❓ Yes or No): Display at top? (bottom otherwise)

    > Technical note: this action internal type (in GDevelop JSON) is `AdMob::SetupBanner`.

**Show app open**  
Show the app open that was loaded. Will work only when the app open is fully loaded.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `AdMob::ShowAppOpen`.

**Show banner**  
Show the banner that was previously set up.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `AdMob::ShowBanner`.

**Show interstitial**  
Show the interstitial that was loaded. Will work only when the interstitial is fully loaded.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `AdMob::ShowInterstitial`.

**Show rewarded interstitial**  
Show the rewarded interstitial that was loaded. Will work only when the rewarded interstitial is fully loaded.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `AdMob::ShowRewardedInterstitial`.

**Show rewarded video**  
Show the reward video that was loaded. Will work only when the video is fully loaded.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `AdMob::ShowRewardedVideo`.

## Conditions

**AdMob initialized**  
Check if AdMob has been initialized.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::AdmobInitialized`.

**AdMob initializing**  
Check if AdMob is initializing.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::AdmobInitializing`.

**App open errored**  
Check if there was an error while loading the app open.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::AppOpenErrored`.

**App open loading**  
Check if an app open is currently loading.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::AppOpenLoading`.

**App open ready**  
Check if an app open is ready to be displayed.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::AppOpenReady`.

**App open showing**  
Check if there is an app open being displayed.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::AppOpenShowing`.

**Banner configured**  
Check if there is a banner correctly configured ready to be shown.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::BannerConfigured`.

**Banner had an error**  
Check if there was a error while displaying a banner.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::BannerErrored`.

**Banner loaded**  
Check if there is a banner correctly loaded ready to be shown.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::BannerLoaded`.

**Banner showing**  
Check if there is a banner being displayed.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::BannerShowing`.

**Interstitial had an error**  
Check if there was a error while loading the interstitial.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::InterstitialErrored`.

**Interstitial loading**  
Check if an interstitial is currently loading.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::InterstitialLoading`.

**Interstitial ready**  
Check if an interstitial is ready to be displayed.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::InterstitialReady`.

**Interstitial showing**  
Check if there is an interstitial being displayed.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::InterstitialShowing`.

**Rewarded interstitial had an error**  
Check if there was a error while loading the rewarded interstitial.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::RewardedInterstitialErrored`.

**Rewarded interstitial loading**  
Check if a rewarded interstitial is currently loading.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::RewardedInterstitialLoading`.

**Rewarded interstitial ready**  
Check if a rewarded interstitial is ready to be displayed.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::RewardedInterstitialReady`.

**Rewarded Interstitial reward received**  
Check if the reward of the rewarded interstitial was given to the user.  
You can mark this reward as cleared, so that the condition will be false and you can show later another rewarded interstitial.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Clear the reward (needed to show another rewarded interstitial)

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::RewardedInterstitialRewardReceived`.

**Rewarded interstitial showing**  
Check if there is a rewarded interstitial being displayed.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::RewardedInterstitialShowing`.

**Rewarded video had an error**  
Check if there was a error while loading the rewarded video.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::RewardedVideoErrored`.

**Rewarded video loading**  
Check if a rewarded video is currently loading.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::RewardedVideoLoading`.

**Rewarded video ready**  
Check if a rewarded video is ready to be displayed.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::RewardedVideoReady`.

**Rewarded Video reward received**  
Check if the reward of the rewarded video was given to the user.  
You can mark this reward as cleared, so that the condition will be false and you can show later another rewarded video.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Clear the reward (needed to show another rewarded video)

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::RewardedVideoRewardReceived`.

**Rewarded video showing**  
Check if there is a rewarded video being displayed.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdMob::RewardedVideoShowing`.





---

The AdMob extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **AdMob** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).