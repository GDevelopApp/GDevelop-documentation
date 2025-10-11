# Gamejolt

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Glyphster Pack/Master/SVG/Graphic Design/7e88b8d233e2643ac7abf20c1c7373e93ab9d8b42236b431709fa910883c818a_Graphic Design_flash_light_on_bolt_lightning.svg" class="extension-icon"></img>
Support the complete Gamejolt API.

**Authors and contributors** to this experimental extension: [infokubarcade](https://gd.games/infokubarcade).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Support for Gamejolt API.

It features the complete API:


* Trophies and leaderboards
* Sessions and server time
* User connection and friends
* Data storage
* Test user

Be careful: most of the actions are Asynchronous !

The request result is stored in a Scene variable of your choice that you can use later.

[Read more...](https://gamejolt.com/game-api/doc)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Add score to the leaderboard**
Add score to the Gamejolt leaderboard.

??? quote "See parameters"

    - Parameter 1 (❓ Yes or No): Force guest record
    - Parameter 2 (string): Guest username (fallback if the player is not connected)
    - Parameter 3 (🔢 Number): Score to send
      Example: 120 for 120km.
    - Parameter 4 (string): Score unit (km, points, seconds...)
      Example: "km" for 120km.
    - Parameter 5 (string): (optional) Extra data you want to save with the score record
    - Parameter 6 (string): Leaderboard identifier (keep empty for default)

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

**Add score with label to the leaderboard**
Add a labelled score in the leaderboard.

??? quote "See parameters"

    - Parameter 1 (❓ Yes or No): Force guest record
    - Parameter 2 (string): Guest username (fallback if the player is not connected)
    - Parameter 3 (🔢 Number): Score to send
      Example: 80 for 80s.
    - Parameter 4 (string): Label of the score
      Example: "01:20" for 80s.
    - Parameter 5 (string): (optional) Extra data you want to save with the score record
    - Parameter 6 (string): Leaderboard identifier (keep empty for default)

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

**Achieve a trophy**
Set that a trophy has been obtained by the player.

??? quote "See parameters"

    - Parameter 1 (string): Trophy identifier

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Gamejolt authentication**
Authenticate Gamejolt user before using the account functionalities.

??? quote "See parameters"

    - Parameter 1 (string): Gamejolt Username
    - Parameter 2 (string): Gamejolt user secret game token

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Check a game session**
Check on the server the session status.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**Close a game session**
Close a game session for the connected user.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**Change number**
Update a numerical value in the cloud storage.

??? quote "See parameters"

    - Parameter 1 (❓ Yes or No): Use global storage (instead of user storage)
    - Parameter 2 (string): Storage key
    - Parameter 3 (🔤 String): Operation to do on the data (one of: "add", "subtract", "multiply", "divide")
    - Parameter 4 (🔢 Number): Operation value

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Change text**
Update a text value in the cloud storage.

??? quote "See parameters"

    - Parameter 1 (❓ Yes or No): Use global storage (instead of user storage)
    - Parameter 2 (string): Storage key
    - Parameter 3 (🔤 String): Operation to do on the data (one of: "append", "prepend")
    - Parameter 4 (🔢 Number): Operation value

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Fetch stored data**
Fetch cloud game data from Gamejolt.

??? quote "See parameters"

    - Parameter 1 (string): Request name (default: empty)
      **Result format** - 
      Structure of elements:
      * **``data``** (string): the content of the storage for the specified key
    - Parameter 2 (❓ Yes or No): Use global storage (instead of user storage)
    - Parameter 3 (string): Storage key

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Fetch data keys**
Fetch all the data keys.

??? quote "See parameters"

    - Parameter 1 (string): Request name (default: empty)
      **Result format** - 
      Array named **``keys``** of elements having the following structure:
      * **``key``** (string): the key of the data
    - Parameter 2 (❓ Yes or No): Use global storage (instead of user storage)
    - Parameter 3 (string): (optional) Pattern to filter keys
      How to use patterns : 
      - write the part of the key you know, for example "room"
      - then put a * where the key can change
      
      Example "room*" will retrieve "room_123" "room_456" "roomABC" etc.

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Fetch the best scores**
Fetch the best scores on the leaderboard.

??? quote "See parameters"

    - Parameter 1 (string): Request name (default: empty)
      **Result format** - 
      Array named **``scores``** of elements having the following structure:
      * **``score``** (number): the score string
      * **``sort``** (number): the score's numerical sort value
      * **``extra_data``** (string): any extra data associated with the score
      * **``user``** (string): if this is a user score, this is the display name for the user
      * **``user_id``** (number): if this is a user score, this is the user's identifier
      * **``guest``** (string): if this is a guest score, this is the guest's submitted name
      * **``stored``** (string): when the score was logged by the user - Example: "1 week ago"
      * **``stored_timestamp``** (number): returns the timestamp (in seconds) of when the score was logged by the user
    - Parameter 2 (🔢 Number): Result limit (between 1 and 100, default : 10)
    - Parameter 3 (string): Leaderboard identifier (keep empty for default)
    - Parameter 4 (🔤 String): Score filter (optional, default : none) (one of: "none", "better_than", "worse_than")
    - Parameter 5 (🔢 Number): (optional) If a filter is selected, set the score basis to use

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

**Fetch scores of a user**
Fetch user's scores on the leaderboard.

??? quote "See parameters"

    - Parameter 1 (string): Request name (default: empty)
      **Result format** - 
      Array named **``scores``** of elements having the following structure:
      * **``score``** (number): the score string
      * **``sort``** (number): the score's numerical sort value
      * **``extra_data``** (string): any extra data associated with the score
      * **``user``** (string): if this is a user score, this is the display name for the user
      * **``user_id``** (number): if this is a user score, this is the user's identifier
      * **``guest``** (string): if this is a guest score, this is the guest's submitted name
      * **``stored``** (string): when the score was logged by the user - Example: "1 week ago"
      * **``stored_timestamp``** (number): returns the timestamp (in seconds) of when the score was logged by the user
    - Parameter 2 (❓ Yes or No): Search in guest records
    - Parameter 3 (string): Guest username (fallback if the player is not connected)
    - Parameter 4 (🔢 Number): Result limit (between 1 and 100, default : 10)
    - Parameter 5 (string): Leaderboard identifier (keep empty for default)
    - Parameter 6 (🔤 String): Score filter (optional, default : none) (one of: "none", "better_than", "worse_than")
    - Parameter 7 (🔢 Number): (optional) If a filter is selected, set the score basis to use

    > Technical note: parameters 0, 8 are internal parameters handled by GDevelop.

**Fetch leaderboard rank**
Fetch the score rank in the leaderboard.

??? quote "See parameters"

    - Parameter 1 (string): Request name (default: empty)
      **Result format** - 
      Structure of elements:
      * **``rank``** (number): the rank of the score on the score table
    - Parameter 2 (🔢 Number): Score to evaluate
    - Parameter 3 (string): Leaderboard identifier (keep empty for default)

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Fetch all leaderboard's informations**
Fetch all the leaderboard informations (without scores).

??? quote "See parameters"

    - Parameter 1 (string): Request name (default: empty)
      **Result format** - 
      Array named **``tables``** of elements having the following structure:
      * **``id``** (number): the identifier of the table
      * **``name``** (string): the name of the score table
      * **``description``** (string): the description of the score table
      * **``primary``** (number): 1 if the table is the primary/default one, 0 instead

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Get the server time**
Retrieve the server time.

??? quote "See parameters"

    - Parameter 1 (string): Request name (default: empty)
      **Result format** - 
      Structure of elements:
      * **``timestamp``** (number): the UNIX time stamp (in seconds) representing the server's time
      * **``timezone``** (string): the timezone of the server - Example: ``America/New_York``
      * **``year``** (number): the current year
      * **``month``** (number): the current month
      * **``day``** (number): the day of the month
      * **``hour``** (number): the hour of the day
      * **``minute``** (number): the minute of the hour
      * **``second``** (number): the seconds of the minute

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Fetch the user trophies**
Fetch trophies informations of the connected user.

??? quote "See parameters"

    - Parameter 1 (string): Request name (default: empty)
      **Result format** - 
      Array named **``trophies``** of elements having the following structure:
      * **``id``** (number): the identifier of the table
      * **``title``** (number): the title of the trophy on Gamejolt
      * **``description``** (string): the trophy description text
      * **``difficulty``** (string): ``Bronze``, ``Silver``, ``Gold``, or ``Platinum``
      * **``image_url``** (string): the URL of the trophy thumbnail image
      * **``achieved``** (string): the date when the trophy was achieved, "false" instead - Example: "5 days ago"
    - Parameter 2 (🔤 String): Filter the trophies (default: none) (one of: "none", "achieved", "not_achieved")

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Fetch the user trophies (by identifier)**
Fetch trophies (by identifier) informations of the connected user.

??? quote "See parameters"

    - Parameter 1 (string): Request name (default: empty)
      **Result format** - 
      Array named **``trophies``** of elements having the following structure:
      * **``id``** (number): the identifier of the table
      * **``title``** (number): the title of the trophy on Gamejolt
      * **``description``** (string): the trophy description text
      * **``difficulty``** (string): ``Bronze``, ``Silver``, ``Gold``, or ``Platinum``
      * **``image_url``** (string): the URL of the trophy thumbnail image
      * **``achieved``** (string): the date when the trophy was achieved, "false" instead - Example: "5 days ago"
    - Parameter 2 (string): Trophy identifier
      You can use a comma-separated list to fetch multiple trophies.
      Example: 123123,505050,98700

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Fetch user data**
Fetch complete user data from Gamejolt.

??? quote "See parameters"

    - Parameter 1 (string): Request name (default: empty)
      **Result format** - 
      Array named **``users``** of elements having the following structure:
      * **``id``** (number): the identifier of the user
      * **``type``** (string): the type of user. Can be ``User``, ``Developer``, ``Moderator``, or ``Administrator``
      * **``username``** (string): the user's username
      * **``avatar_url``** (string): the URL of the user's avatar
      * **``signed_up``** (string): how long ago the user signed up
      * **``signed_up_timestamp``** (number): the timestamp (in seconds) of when the user signed up
      * **``last_logged_in``** (string): how long ago the user was last logged in
      * **``last_logged_in_timestamp``** (number): the timestamp (in seconds) of when the user was last logged in
      * **``status``** (string): ``Active`` if the user is still a member of the site. ``Banned`` if they've been banned
      * **``developer_name``** (string): the user's display name
      * **``developer_website``** (string): the user's website (or empty string if not specified) 
      * **``developer_description``** (string): the user's profile markdown description
    - Parameter 2 (string): Username or identifier
      You can use comma-separated list to find multiple users
      Example 1: gdevelop,player123,snailmaster
      Example 2: 321123,505050,778899
    - Parameter 3 (❓ Yes or No): Use identifier instead of username

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Fetch user friends**
Fetch the connected user friend list.

??? quote "See parameters"

    - Parameter 1 (string): Request name (default: empty)
      **Result format** - 
      Array named **``friends``** of elements having the following structure:
      * **``friend_id``** (number): the friend's user identifier

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Open a game session**
Open a game session for the connected user.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**Register Gamejolt game**
Setup a game before using the Gamejolt API.

??? quote "See parameters"

    - Parameter 1 (string): Gamejolt game identifier
    - Parameter 2 (string): Gamejolt game secret key
      You can find all these informations in the Gamejolt API Settings of your game.

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Remove stored data**
Remove cloud game data from Gamejolt.

??? quote "See parameters"

    - Parameter 1 (❓ Yes or No): Use global storage (instead of user storage)
    - Parameter 2 (string): Storage key

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Remove a trophy**
Remove a trophy from the player achievements.

??? quote "See parameters"

    - Parameter 1 (string): Trophy identifier

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Activate test user**
Activate a test user for the Gamejolt API.

??? quote "See parameters"

    - Parameter 1 (string): Test username
    - Parameter 2 (string): Test user game token

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Store data**
Save game data in the Gamejolt cloud storage.

??? quote "See parameters"

    - Parameter 1 (❓ Yes or No): Use global storage (instead of user storage)
    - Parameter 2 (string): Storage key
    - Parameter 3 (string): Data to save

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Change the session status**
Change the game session status on the server.

??? quote "See parameters"

    - Parameter 1 (🔤 String): Session status
      Status role : 
      - keep : keep the same status as before
      - active : set that the player is playing the game
      - idle : set that the player is waiting
      
      Warning : "keep" will only be sent every 30s to the server. The others are always sent. Be careful. (one of: "keep", "active", "idle")

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

## Conditions

**Player is authenticated**
Check if the user is authenticated on Gamejolt.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**The request is finished**
The named request is finished. You can read its content.

??? quote "See parameters"

    - Parameter 1 (string): Request name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Last error message**
Compare Error message from the last request.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Last request is successful**
Check if the last request is successful.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**Request error message**
Compare Error message from a specific request.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare
    - Parameter 3 (string): Request name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Request is successful**
Check if a specific request is successful.

??? quote "See parameters"

    - Parameter 1 (string): Request name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Session is active**
Check if the user session is active.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**Is in test mode**
Check if the API is in test mode.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**User game token**
Compare Authenticated user game token used for requests.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Username**
Compare Authenticated username used for requests.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `GamejoltAPI::LastErrorMessage()` | Return Error message from the last request. ||
| `GamejoltAPI::LastResponse()` | JSON response from the last request. ||
| `GamejoltAPI::RequestErrorMessage(string)` | Return Error message from a specific request. ||
| | _string_ | Request name |
| `GamejoltAPI::RequestResponse(string)` | JSON response from a specific request. ||
| | _string_ | Request name |
| `GamejoltAPI::UserToken()` | Return Authenticated user game token used for requests. ||
| `GamejoltAPI::Username()` | Return Authenticated username used for requests. ||


---

*This page is an auto-generated reference page about the **Gamejolt** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).