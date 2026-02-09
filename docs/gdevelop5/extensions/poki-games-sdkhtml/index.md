# Poki Games SDK

<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzguODggMjczLjE2Ij4KCTxwYXRoIGZpbGw9ImJsYWNrIiBkPSJNNTQxIDg1LjhjMjEgMCAzOC0xNy40IDM4LTM4LjcgMC0yMC40LTE3LjQtMzcuNy0zOC0zNy43UzUwMy41IDI2LjYgNTAzLjUgNDdjMCAyMS40IDE3IDM4LjggMzcuNyAzOC44eiI+Cgk8L3BhdGg+Cgk8cGF0aCBmaWxsPSJibGFjayIgZD0iTTUwNCA5OS4zdjExMC41TDQ3MCAxMzZjMTUuNC0xOS4zIDIxLjctNDYuNCAyMi40LTY2VjU0aC02MC4ydjE1LjVjLTEgMTkuNi03LjMgMjguOC0yNC44IDM0LjVWMEgzNDZ2NDQuNEMzMjQgMjEuNiAyOTMgOS42IDI1Ni43IDkuNmMtNDAgMC03MyAxMy44LTk1LjYgNDBhMTE4IDExOCAwIDAgMC0xNyAyNi4yQzEyOSA2MC42IDEwOC40IDU0IDg0IDU0SDB2MjE5LjJoNTZWMjIxaDI4YzI0LjQgMCA0NS04LjMgNjAtMjMuN2ExMTYuMyAxMTYuMyAwIDAgMCAxNy42IDI3YzIyLjcgMjUuOCA1NS41IDM5LjMgOTUgMzkuMyAzOC42IDAgNzEtMTMuNSA5My42LTM5bDQuNS01LjZoNTIuN3YtNTQuM2w4LTIgMjYgNTYuNGgxMzYuOFY5OS40aC03NHptLTQxOCA2NEg1NnYtNTNoMjkuMmM3LjYgMCAyMC4zIDUuMiAyMC4zIDI1LjUgMCAxMy01LjQgMjcuMy0xOS40IDI3LjN6bTE3MCA2MGMtNDcuMyAwLTg1LjctMzkuNC04NS43LTg3LjhDMTcwLjMgODkgMjA5LjUgNTAgMjU2IDUwczg1LjYgMzkgODUuNiA4NS41YzAgNDguNC0zOC40IDg3LjgtODUuNiA4Ny44eiI+Cgk8L3BhdGg+Cgk8cGF0aCBmaWxsPSJibGFjayIgZD0iTTI1NiAxNDJjLTM4IDAtNTcgNi41LTY1IDguNiA2LjcgMzAuNSAzMy4yIDUzLjMgNjUgNTMuM3M1OC4zLTIzIDY1LTUzLjRjLTgtMi0yNy4yLTguNy02NS04Ljd6Ij4KCTwvcGF0aD4KPC9zdmc+Cg==" class="extension-icon"></img>
Allow games to be hosted on Poki website and display ads.

**Authors and contributors** to this experimental extension: [alex_](https://gd.games/alex_).

---

Please refer to [Poki's guide](https://sdk.poki.com/sdk-documentation.html) to know when to call the different actions.

[Read more...](/gdevelop5/extensions/poki-games-sdkhtml/details)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Game loading finished**  
Inform Poki game finished loading.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PokiGamesSDKHtml::CallGameLoadingFinished`.

**Gameplay started**  
Inform Poki gameplay started.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PokiGamesSDKHtml::CallGameplayStart`.

**Gameplay stopped**  
Inform Poki gameplay stopped.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PokiGamesSDKHtml::CallGameplayStop`.

**Measure event**  
Measure an event for analytics.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Category (for example: level, tutorial, drawing)
    - Parameter 2 (🔤 String): What is measured (for example: 1, de_dust, skip-level)
    - Parameter 3 (🔤 String): Action (for example: start, complete, fail)

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PokiGamesSDKHtml::Measure`.

**Move Poki Pill**  
Move the Poki Pill on mobile.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Top percent (0-50)
    - Parameter 2 (🔢 Number): Additional pixel offset

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PokiGamesSDKHtml::MovePill`.

**Open external link**  
Open an external URL via Poki SDK.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): URL to open

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PokiGamesSDKHtml::OpenExternalLink`.

**Commercial break**  
Request commercial break.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PokiGamesSDKHtml::RequestCommercialBreak`.

**Rewarded break**  
Request rewarded break.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PokiGamesSDKHtml::RequestRewardedBreak`.

**Create shareable URL**  
Create a shareable URL from parameters stored in a variable structure.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Variable structure with URL parameters (example children: id, type)

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PokiGamesSDKHtml::ShareableURL`.


## Conditions

**Commercial break just finished playing**  
Checks if a commercial break just finished playing.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PokiGamesSDKHtml::DidCommercialBreakJustFinishPlaying`.

**Rewarded break just finished playing**  
Checks if a rewarded break just finished playing.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PokiGamesSDKHtml::DidRewardedBreakJustFinishPlaying`.

**Commercial break is playing**  
Checks if a commercial break is playing.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PokiGamesSDKHtml::IsCommercialBreakPlaying`.

**Rewarded break is playing**  
Checks if a rewarded break is playing.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PokiGamesSDKHtml::IsRewardedBreakPlaying`.

**Poki SDK is ready**  
Check if the Poki SDK is ready to be used.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PokiGamesSDKHtml::IsSdkReady`.

**Should reward player**  
Checks if player should be rewarded after a rewarded break finished playing.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PokiGamesSDKHtml::ShouldRewardPlayer`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `PokiGamesSDKHtml::LastShareableURL()` | Get the last shareable URL generated by Create shareable URL. ||
| `PokiGamesSDKHtml::getURLParam(string)` | Read a URL parameter from Poki URL or the current URL. ||
| | _🔤 String_ | Parameter name (without the gd prefix) |


---

*This page is an auto-generated reference page about the **Poki Games SDK** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).