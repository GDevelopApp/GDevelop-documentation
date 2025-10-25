# Player Authentication Reference

Allow your game to authenticate players. [Read more explanations about it.](/gdevelop5/all-features/player-authentication)

## Actions

**Display authentication banner**  
Display an authentication banner at the top of the game screen, for the player to log in.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlayerAuthentication::DisplayAuthenticationBanner`.

**Hide authentication banner**  
Hide the authentication banner from the top of the game screen.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlayerAuthentication::HideAuthenticationBanner`.

**Log out the player**  
Log out the player.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlayerAuthentication::LogOut`.

**Open authentication window**  
Open an authentication window for the player to log in.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlayerAuthentication::OpenAuthenticationWindow`.

## Conditions

**Player has logged in**  
Check if the player has just logged in.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `PlayerAuthentication::HasPlayerLoggedIn`.

**Authentication window is open**  
Check if the authentication window is open.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `PlayerAuthentication::IsAuthenticationWindowOpen`.

**Player is authenticated**  
Check if the player is authenticated.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `PlayerAuthentication::IsPlayerAuthenticated`.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `PlayerAuthentication::UserID()` | Get the unique user ID of the authenticated player. ||
| `PlayerAuthentication::Username()` | Get the username of the authenticated player. ||



---

The Player Authentication extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Player Authentication** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).