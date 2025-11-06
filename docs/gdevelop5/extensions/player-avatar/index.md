# Player avatar

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Users/1f89f002e87f1e836320f69725d21e3294e7e2e18ff7dd645c6973e9775d24c3_Users_avatar_user_profile_male.svg" class="extension-icon"></img>
Display player avatars according to their GDevelop account.

**Authors and contributors** to this experimental extension: [Bouh](https://gd.games/Bouh).

---

An object that displays a player avatar according to their GDevelop account. It can be used for multiplayer games.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `PlayerAvatar::UserID(number)` | Return the UserID from a lobby player number. ||
| | _🔢 Number_ | Lobby player number |

## Multiplayer Avatar 

Display a player avatar according to their GDevelop account. 

### Object properties

- **Lobby player number** (🔢 Number, Dimensionless). Default value is `0`.
- **Border enabled** (🔘 Boolean). Enable the border on the avatar. Default value is `true`.

??? quote "See internal technical details"


    - **Lobby player number** is stored as `PlayerNumber` (Number). Unit is Dimensionless. Default value is `0`.
    - **Border enabled** is stored as `BorderEnabled` (Boolean). Default value is `true`.

### Object actions

**Player unique ID**  
Change the player unique ID of the avatar.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlayerAvatar::PlayerAvatar::SetUserID`.


### Object conditions

**Player unique ID**  
Compare the player unique ID of the avatar.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: relationaloperator
    - Parameter 2 (string): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PlayerAvatar::PlayerAvatar::UserID`.


### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.UserID()` | Return the player unique ID of the avatar. ||


---

*This page is an auto-generated reference page about the **Player avatar** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).