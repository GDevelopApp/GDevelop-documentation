# Yandex Games SDK for GDevelop

<img src="https://resources.gdevelop-app.com/assets/Icons/numeric-3-circle.svg" class="extension-icon"></img>
Yandex Games SDK allows to interact with Yandex APIs for games distributed on this platform.

**Authors and contributors** to this experimental extension: [3freelancers](https://gd.games/3freelancers).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

YGameSDK.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**GetLang**  
GetLang.

??? quote "See parameters & details"

    - Parameter 1 (string): Global variable (string)

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `YGameSDK::GetLang`.

**GetPlayerName**  
GetPlayerName.

??? quote "See parameters & details"

    - Parameter 1 (string): Global variable (string)

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `YGameSDK::GetPlayerName`.

**InitPayments**  
InitPayments.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `YGameSDK::InitPayments`.

**InitPlayer**  
InitPlayer.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `YGameSDK::InitPlayer`.

**InitSDK**  
Init SDK.

??? quote "See parameters & details"

    - Parameter 1 (❓ Yes or No): Fullscreen
    - Parameter 2 (stringwithselector): Screen orientation (one of: "portrait", "landscape")
    - Parameter 3 (❓ Yes or No): Lock screen

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `YGameSDK::InitSDK`.

**LoadLeaderboardByName**  
LoadLeaderboardByName.

??? quote "See parameters & details"

    - Parameter 1 (string): TableNameYandex
    - Parameter 2 (string): GlobalVariableName

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `YGameSDK::LoadLeaderboardByName`.

**LoadPurchaseByID**  
LoadPurchaseByID.

??? quote "See parameters & details"

    - Parameter 1 (string): product ID
    - Parameter 2 (string): Glodal variable result true/false

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `YGameSDK::LoadPurchaseByID`.

**PurchaseByID**  
PurchaseByID.

??? quote "See parameters & details"

    - Parameter 1 (string): product ID
    - Parameter 2 (string): Global variable true/false

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `YGameSDK::PurchaseByID`.

**SetScoreLeaderboard**  
SetScoreLeaderboard.

??? quote "See parameters & details"

    - Parameter 1 (string): GlobalVariableName
    - Parameter 2 (string): TableNameYandex

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `YGameSDK::SetScoreLeaderboard`.

**ShowBanner**  
ShowBanner.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `YGameSDK::ShowBanner`.

**ShowVideo**  
ShowVideo.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `YGameSDK::ShowVideo`.


## Conditions

**IsInit**  
IsInit SDK.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `YGameSDK::IsInit`.

**IsInitLeaderboard**  
IsInitLeaderboard.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `YGameSDK::IsInitLeaderboard`.

**IsInitPayments**  
IsInitPayments.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `YGameSDK::IsInitPayments`.

**IsInitPlayer**  
IsInitPlayer.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `YGameSDK::IsInitPlayer`.

**IsVideoClosed**  
IsVideoClosed.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `YGameSDK::IsVideoClosed`.

**IsVideoFailed**  
IsVideoFailed.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `YGameSDK::IsVideoFailed`.

**IsVideoOpen**  
IsVideoOpen.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `YGameSDK::IsVideoOpen`.

**IsVideoRewarded**  
IsVideoRewarded.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `YGameSDK::IsVideoRewarded`.





---

*This page is an auto-generated reference page about the **Yandex Games SDK for GDevelop** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).