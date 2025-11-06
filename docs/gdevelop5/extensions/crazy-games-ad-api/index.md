# CrazyGames SDK v3

<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODkiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgODkgMTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTg0LjkwMzQgMjUuODkyOUM4NS4wNzI3IDE4LjY4MjQgODQuNjQ5NCA2LjExNjk0IDgwLjA3NzYgMC44NzQ4NTlDNzcuNTcyOSAtMS45OTY2NCA3MS42MTgzIDIuODA4MDEgNjcuNzY2MSA2LjUxOTA5QzYxLjM4MSAzLjQwNzcxIDUzLjUzNTUgMS44NzY3MSA0My45OTY4IDEuODc2NzFDMzQuNDU4IDEuODc2NzEgMjYuNjE5NiAzLjQxNDc2IDIwLjI0MTYgNi41MTkwOUMxNi4zODI0IDIuODA4MDEgMTAuNDM0OCAtMS45ODk1OSA3LjkzMDE0IDAuODgxOTE1QzMuMzY1MzcgNi4xMTY5NCAyLjkzNSAxOC42NDAxIDMuMTA0MzIgMjUuODU3NkMxLjA1MTIzIDMxLjUwMTkgMCAzOC4wOTE1IDAgNDUuNjEyNUMwIDYxLjQzMDQgNC41Mjk1IDczLjE0MjIgMTMuNDU0NCA4MC40NzI3QzE5LjQ2NTYgODUuMzk3MyAyNy4zMTgxIDg4LjIzMzUgMzcuMzIyNSA4OS4wODcyQzM2Ljg2MDcgODkuMzE4MSAzNi4zOTIzIDg5LjU0NjggMzUuOTE3NyA4OS43Nzg1TDM1LjkxNjMgODkuNzc5MkwzNS45MTU5IDg5Ljc3OTRDMzUuMTg3NSA5MC4xMzUgMzQuNDQ0NyA5MC40OTc3IDMzLjY4OSA5MC44ODYzTDMwLjA2MjYgOTIuNjY0MkwyOC4wMDI1IDkzLjY3MzFDMjcuNDEwMiA5My45ODI5IDI2LjgxMjMgOTQuMjgyIDI2LjIwNjUgOTQuNTg1MkwyNi4yMDYyIDk0LjU4NTRDMjQuNzY5NyA5NS4zMDQyIDIzLjI4ODQgOTYuMDQ1NSAyMS43MzAzIDk3LjAwMzJMMjEuMTg3IDk3LjI5MjVDMjEuMDMxOCA5Ny40MDU0IDIwLjg4MzcgOTcuNTk1OSAyMC44NTU0IDk3LjgwNzVDMjAuNzg0OSA5OC4yMDk3IDIxLjA2MDEgOTguNTkwNyAyMS40NjIyIDk4LjY0NzFDMjIuMDU4NyA5OC43MzY4IDIyLjY1MzMgOTguODM0NSAyMy4yNDggOTguOTMyMkwyMy4yNDgzIDk4LjkzMjJDMjQuNjY1IDk5LjE2NSAyNi4wODE2IDk5LjM5NzcgMjcuNTIyNyA5OS41MjE5TDI5LjA0NjYgOTkuNjkxM0MyOS41NDc2IDk5Ljc0NzcgMzAuMDU1NSA5OS43OSAzMC41NzA2IDk5LjgxODNMMzMuNjMyNiA5OS45ODc2QzM3LjczMTcgMTAwLjA1OCA0MS44NTkxIDk5LjgzMjQgNDUuOTUxMSA5OS4xOTAzQzUwLjAzNjEgOTguNTc2NSA1NC4wNTA2IDk3LjQzMzYgNTcuOTA5OCA5NS44NDYxQzYxLjc1NSA5NC4yNTg3IDY1LjQyMzcgOTIuMTkxNSA2OC43NDY4IDg5LjY3MjhDNzUuMzM2NCA4NC41NTc3IDgwLjUxNSA3Ny42NzE3IDgzLjU5ODEgNjkuOTk1NkM4NC43MjcgNjcuMjE1OCA4NS41NjY2IDY0LjMzMDIgODYuMTczMyA2MS40MDIyQzg3LjM5MzkgNTYuNzAzNCA4OC4wMTQ4IDUxLjQ0MDEgODguMDE0OCA0NS42MTI1Qzg4LjAxNDggMzguMTEyNyA4Ni45NzA2IDMxLjUzNzIgODQuOTI0NSAyNS45TDg0LjkwMzQgMjUuODkyOVpNNDMuOTg5NyA3My41MjMyQzI3LjEyNzYgNzMuNTIzMiAxNS45MDI2IDY4Ljc4MiAxNS45MDI2IDQ1LjYwNTRDMTUuOTAyNiAzNC42NzY4IDE4LjQwNzMgMjcuMjc1OCAyMy41NzE3IDIzLjAyODVDMjcuOTMxOSAxOS40MzAzIDM0LjYyMDMgMTcuNjg3NiA0My45ODk3IDE3LjY4NzZDNTMuMzU5MiAxNy42ODc2IDYwLjA0NzYgMTkuNDQ0NCA2NC40MDc4IDIzLjAyODVDNjkuNTU4MSAyNy4yNjg3IDcyLjA3NjkgMzQuNjU1NiA3Mi4wNzY5IDQ1LjYwNTRDNzIuMDc2OSA2OC43ODIgNjAuODUxOSA3My41MjMyIDQzLjk4OTcgNzMuNTIzMlpNMzUuMDI5NiAzOS42NzE5QzM1LjAyOTYgMzcuNTkwNiAzNi40MTI0IDM1LjgyNjggMzguMzEwMyAzNS4yMzQxQzM3LjI2NjEgMzQuMjY3NiAzNS44NjkxIDMzLjY3NDkgMzQuMzMxMSAzMy42NzQ5QzMxLjEwNjggMzMuNjc0OSAyOC40NjgxIDM2LjI5OTUgMjguNDY4MSAzOS41MDI2VjUxLjE1NzlDMjguNDY4MSA1NC4zNjEgMzEuMTA2OCA1Ni45ODU2IDM0LjMzMTEgNTYuOTg1NkMzNy41NTU0IDU2Ljk4NTYgNDAuMTk0IDU0LjM2ODEgNDAuMTk0IDUxLjE1NzlWNDQuMzAwMkM0MC4wMzE4IDQ0LjMxNDMgMzkuODY5NSA0NC4zMjg0IDM5LjcwNzIgNDQuMzI4NEMzNy4xMTc5IDQ0LjMyODQgMzUuMDIyNSA0Mi4yNDcxIDM1LjAyMjUgMzkuNjc5TDM1LjAyOTYgMzkuNjcxOVpNNTcuMjExNCAzNC44ODg0QzU1LjQxMjMgMzUuNTM3NSA1NC4xMjgyIDM3LjI0NDkgNTQuMTI4MiAzOS4yNTU3VjM5LjI2MjdDNTQuMTI4MiA0MS44MzA4IDU2LjIyMzYgNDMuOTEyMSA1OC44MTI5IDQzLjkxMjFDNTkuMDUyOCA0My45MTIxIDU5LjI4NTYgNDMuODkxIDU5LjUxMTQgNDMuODU1N1Y1MS4xNTc5QzU5LjUxMTQgNTQuMzY4MSA1Ni44NzI3IDU2Ljk4NTYgNTMuNjQ4NCA1Ni45ODU2QzUwLjQyNDIgNTYuOTg1NiA0Ny43ODU1IDU0LjM2MSA0Ny43ODU1IDUxLjE1NzlWMzkuNTAyNkM0Ny43ODU1IDM2LjI5OTUgNTAuNDI0MiAzMy42NzQ5IDUzLjY0ODQgMzMuNjc0OUM1NC45ODg5IDMzLjY3NDkgNTYuMjIzNiAzNC4xMzM1IDU3LjIxMTQgMzQuODg4NFoiIGZpbGw9IiMwQzBEMTQiLz4KPC9zdmc+Cg==" class="extension-icon"></img>
Allow games to be hosted on CrazyGames website, display ads and interact with CrazyGames user accounts.

**Authors and contributors** to this experimental extension: [planktonfun](https://gd.games/planktonfun), [Bouh](https://gd.games/Bouh), [ZachjuKamashi](https://gd.games/ZachjuKamashi), [lhphr](https://gd.games/lhphr), [Jurfix](https://gd.games/Jurfix).

---

Refer to the [CrazyGames guide](https://docs.crazygames.com/sdk/intro/) for a full overview of the CrazyGames SDK, and to [this guide](https://wiki.gdevelop.io/gdevelop5/extensions/crazy-games-ad-api/details/) for using this SDK inside your GDevelop game.

[Read more...](/gdevelop5/extensions/crazy-games-ad-api/details)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Retrieve user data**  
Retrieve user data.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::AuthenticateUser`.

**Display a banner**  
Display a banner that can be called once per 60 seconds.

??? quote "See parameters & details"

    - Parameter 1 (string): Banner name
    - Parameter 2 (stringwithselector): Ad size (one of: "970x90", "320x50", "160x600", "336x280", "728x90", "300x600", "468x60", "970x250", "300x250", "250x250", "120x600")
    - Parameter 3 (🔢 Number): Position X
    - Parameter 4 (🔢 Number): Position Y

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::DisplayBanner`.

**Display video ad**  
Display a video ad. The game is automatically muted while the video is playing.

??? quote "See parameters & details"

    - Parameter 1 (stringwithselector): Ad Type (one of: "midgame", "rewarded")

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::DisplayCrazyGamesAd`.

**Display happy time**  
Display an happy time by emitting sparkling confetti. The celebration should remain a special moment.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::DisplayHappyTime`.

**Generate an invite link**  
Generate an invite link to invite friends to join your game sessions. This URL can be added to the clipboard or displayed in the game to let the user select it.

??? quote "See parameters & details"

    - Parameter 1 (string): Room id

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::GenerateInviteLink`.

**Generate Xsolla token**  
Generate Xsolla token.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::GenerateXsollaToken`.

**Hide all banners**  
Hide all banners.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::HideAllBanners`.

**Hide a banner**  
Hide a banner.

??? quote "See parameters & details"

    - Parameter 1 (string): Banner name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::HideBanner`.

**Hide invite button**  
Hide the invite button.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::HideInviteButton`.

**Display invite button**  
Display an invite button.

??? quote "See parameters & details"

    - Parameter 1 (string): Room id

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::InviteButton`.

**Show account link prompt**  
Show account link prompt.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::LinkAccount`.

**Load SDK**  
Load CrazyGames SDK.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::LoadSDK`.

**Save session data**  
Save the session data.

??? quote "See parameters & details"

    - Parameter 1 (string): Id
    - Parameter 2 (string): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::SaveSessionData`.

**Scan for ad blockers**  
Scan for ad blockers.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::ScanForAdBlockers`.

**Gameplay started**  
Let CrazyGames know gameplay started.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::SetGameplayStarted`.

**Gameplay stopped**  
Let CrazyGames know gameplay stopped.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::SetGameplayStopped`.

**Loading started**  
Let CrazyGames know loading started.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::SetLoadingStarted`.

**Loading stopped**  
Let CrazyGames know loading stopped.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::SetLoadingStopped`.

**Show CrazyGames login window**  
Show CrazyGames login window.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::ShowAuthWindow`.

**Check and load if an user is signed in CrazyGames**  
Check if an user is signed into CrazyGames. If signed in, retrieves username and profile picture.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CrazyGamesAdApi::UserSignIn`.


## Conditions

**Video ad just finished playing**  
Checks if a video ad just finished playing successfully.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CrazyGamesAdApi::AdFinishedPlaying`.

**Video ad had an error**  
Check if a video ad had an error.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CrazyGamesAdApi::AdHadAnError`.

**CrazyGames User ID**  
Compare the CrazyGames User ID.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (string): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CrazyGamesAdApi::CrazyGamesUserID`.

**Ad blocker is detected**  
Check if user is using an ad blocker. This condition is always false before the "Scan for ad blockers" is called.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CrazyGamesAdApi::IsAdBlocked`.

**CrazyGames SDK is ready**  
Check if the CrazyGames SDK is ready to be used.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CrazyGamesAdApi::IsSDKLoaded`.

**Is user account available**  
Compare the availability of the user's account.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (string): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CrazyGamesAdApi::IsUserAccountAvailable`.

**Video ad is playing**  
Checks if a video ad is playing.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CrazyGamesAdApi::IsVideoAdPlaying`.

**Get last error**  
Compare the last error from the CrazyGames API.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (string): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CrazyGamesAdApi::LastError`.

**User changed**  
Check if the user changed.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CrazyGamesAdApi::UserChanged`.

**Username**  
Compare the username.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (string): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CrazyGamesAdApi::UserName`.

**User is signed in**  
Check if the user is signed in.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CrazyGamesAdApi::UserSignedIn`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `CrazyGamesAdApi::CrazyGamesUserID()` | Return the CrazyGames User ID. ||
| `CrazyGamesAdApi::Environment()` | Get the environment. ||
| `CrazyGamesAdApi::InviteLink(string)` | Return an invite link. ||
| | _string_ | Room id |
| `CrazyGamesAdApi::InviteParam(string)` | Get invite parameters if user is invited to this game. ||
| | _string_ | Param |
| `CrazyGamesAdApi::IsDisableChat()` | Return true if the user prefers the chat disabled. ||
| `CrazyGamesAdApi::IsInstantMultiplayer()` | Return true when the user prefers to instantly join a lobby. ||
| `CrazyGamesAdApi::IsUserAccountAvailable()` | Return the availability of the user's account. ||
| `CrazyGamesAdApi::LastError()` | Return the last error from the CrazyGames API. ||
| `CrazyGamesAdApi::LinkAccountResponse()` | Get link account response. ||
| `CrazyGamesAdApi::ProfilePic()` | Gets the signed-in user's profile picture URL. ||
| `CrazyGamesAdApi::SessionData(string)` | Get user session data, if there is no saved data, "null" will be returned. ||
| | _string_ | Id |
| `CrazyGamesAdApi::SystemInfo()` | Retrieves user system info, browser, version and device. ||
| `CrazyGamesAdApi::UserName()` | Return the username. ||
| `CrazyGamesAdApi::UserToken()` | Retrieve the user's session token for authentication. ||
| `CrazyGamesAdApi::XsollaToken()` | Retrieve the authentication token from Xsolla. ||


---

*This page is an auto-generated reference page about the **CrazyGames SDK v3** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).