# Gamejolt

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Glyphster Pack/Master/SVG/Graphic Design/7e88b8d233e2643ac7abf20c1c7373e93ab9d8b42236b431709fa910883c818a_Graphic Design_flash_light_on_bolt_lightning.svg" class="extension-icon"></img>
Support the complete Gamejolt API.

**Authors and contributors** to this community extension: [infokubarcade](https://gd.games/infokubarcade).

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

**Add score with label to the leaderboard**  
Add a labelled score in the leaderboard.

**Achieve a trophy**  
Set that a trophy has been obtained by the player.

**Gamejolt authentication**  
Authenticate Gamejolt user before using the account functionalities.

**Check a game session**  
Check on the server the session status.

**Close a game session**  
Close a game session for the connected user.

**Change number**  
Update a numerical value in the cloud storage.

**Change text**  
Update a text value in the cloud storage.

**Fetch stored data**  
Fetch cloud game data from Gamejolt.

**Fetch data keys**  
Fetch all the data keys.

**Fetch the best scores**  
Fetch the best scores on the leaderboard.

**Fetch scores of a user**  
Fetch user's scores on the leaderboard.

**Fetch leaderboard rank**  
Fetch the score rank in the leaderboard.

**Fetch all leaderboard's informations**  
Fetch all the leaderboard informations (without scores).

**Get the server time**  
Retrieve the server time.

**Fetch the user trophies**  
Fetch trophies informations of the connected user.

**Fetch the user trophies (by identifier)**  
Fetch trophies (by identifier) informations of the connected user.

**Fetch user data**  
Fetch complete user data from Gamejolt.

**Fetch user friends**  
Fetch the connected user friend list.

**Open a game session**  
Open a game session for the connected user.

**Register Gamejolt game**  
Setup a game before using the Gamejolt API.

**Remove stored data**  
Remove cloud game data from Gamejolt.

**Remove a trophy**  
Remove a trophy from the player achievements.

**Activate test user**  
Activate a test user for the Gamejolt API.

**Store data**  
Save game data in the Gamejolt cloud storage.

**Change the session status**  
Change the game session status on the server.

## Conditions

**Player is authenticated**  
Check if the user is authenticated on Gamejolt.

**The request is finished**  
The named request is finished. You can read its content.

**Last error message**  
Compare Error message from the last request.

**Last request is successful**  
Check if the last request is successful.

**Request error message**  
Compare Error message from a specific request.

**Request is successful**  
Check if a specific request is successful.

**Session is active**  
Check if the user session is active.

**Is in test mode**  
Check if the API is in test mode.

**User game token**  
Compare Authenticated user game token used for requests.

**Username**  
Compare Authenticated username used for requests.

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