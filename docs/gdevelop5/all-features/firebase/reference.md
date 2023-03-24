# Firebase

Use Google Firebase services (database, functions, storage...) in your game. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/firebase)

## Actions

**Create a custom performance tracker**  
Creates a new custom performance tracker (If it doesn't already exists). They are used to measure performance of custom events.

**Enable analytics**  
Enables Analytics for that project.

**Log an Event**  
Triggers an Event/Conversion for the current user on the Analytics.Can also pass additional data to the Analytics

**Set a user's property**  
Sets an user's properties.Can be used to classify user in Analytics.

**Change user UID**  
Changes the current user's analytics identifier. This is what let Analytics differienciate user, so it should always be unique for each user. For advanced usage only.

**Sign In as an anonymous guest**  
Sign into a temporary anonymous account.

**Sign into an account with email**  
Sign into an account with email and password as credentials. 

**Call a HTTP function**  
Calls a HTTP function by name, and store the result in a variable.

**Change the user email**  
This action is dangerous so it requires reauthentication.  
Changes the user's email address.

**Change the user email (Provider)**  
This action is dangerous so it requires reauthentication.  
Changes the user's email address.
This is the same as Change the user email but reauthenticates via an external provider.

**Change the user password**  
This action is dangerous so it requires reauthentication.  
Changes the user password.

**Change the user password (Provider)**  
This action is dangerous so it requires reauthentication.  
Changes the user password.
This is the same as "Change the user password" but reauthenticates via an external provider.

**Create account with email**  
Create an account with email and password as credentials.

**Delete a field of a variable**  
Deletes a field of a variable on the database.

**Delete a database variable**  
Deletes a variable from the database.

**Get a field of a variable**  
Gets the value of a field in a variable from the database and store it in a scene variable.

**Get a variable from the database**  
Gets a variable from the database and store it in a Scene variable.

**Check for existence of a variable's field**  
Checks for the existence of a field in a variable. Sets the result variable to 1 if it exists else to 2.

**Check for a variable's existence**  
Checks for the existence of a variable. Sets the result variable to 1 if it exists else to 2.

**Update a field of a document**  
Updates a field of a Database document.

**Update a document in Database**  
Updates a variable on the database.

**Write a field in Database**  
Writes a field of a Database document.

**Write a variable to Database**  
Writes a variable to Database.

**Delete the user account**  
This action is dangerous so it requires reauthentication.  
Deletes the user account.

**Delete the user account (Provider)**  
This action is dangerous so it requires reauthentication.  
Deletes the user account.
This is the same as "Delete the user account" but reauthenticates via an external provider.

**Enable performance measuring**  
Enables performance measuring.

**Add a document to firestore**  
Adds a document (variable) to cloud firestore with a unique name.

**Delete a document in firestore**  
Deletes a firestore document (variable).

**Delete a field of a document**  
Deletes a field of a firestore document.

**Disable network**  
Disables the connection to the database.  
While the network is disabled, any read operations will return results from cache, and any write operations will be queued until the network is restored.

**Disable persistence**  
Disables the storing of fetched data and clear all the data that has been stored.  
This needs to be called before any other firestore operation, otherwise it will fail.

**Re-enable network**  
Re-enables the connection to the database after disabling it.

**Enable persistence**  
When persistence is enabled, all data that is fetched from the database is being automatically stored to allow to continue accessing the data if cut off from the network, instead of waiting for reconnection.  
This needs to be called before any other firestore operation, otherwise it will fail.

**Run a query once**  
Runs the query once and store results in a scene variable.

**Get a document from firestore**  
Gets a firestore document and store it in a variable.

**Get a field of a document**  
Gets the value of a field in a firestore document.

**Check for a document's existence**  
Checks for the existence of a document. Sets the result variable to true if it exists else to false.

**Check for existence of a document's field**  
Checks for the existence of a field in a document. Sets the result variable to 1 if it exists else to 2.

**Limit amount of documents**  
Limits the amount of documents returned by the query. Can only be used after an order filter.

**Order by field value**  
Orders all documents in the query by a the value of a field.

**Skip some documents**  
Removes documents before or after a certain value on the field ordered by in a query. Can only be used after an order filter.

**Filter by field value**  
Only match the documents that have a field passing a check.

**Filter by field text**  
Only match the documents that have a field passing a check.

**Start a query**  
Start a query on a collection. A query allows to get a filtered and ordered list of documents in a collection.

**Start a query from another query**  
Start a query with the same collection and filters as another one.

**Update a document in firestore**  
Updates a firestore document (variable).

**Update a field of a document**  
Updates a field of a firestore document.

**Continuously run (watch) a query**  
Runs a query continously, so that every time a new documents starts or stops matching the query, or a document that matches the query has been changed, the variables will be filled with the new results.

**Write a document to firestore**  
Writes a document (variable) to cloud firestore.

**Write a field in firestore**  
Writes a field of a firestore document.

**Force sync the configuration**  
Use this to sync the Remote Config with the client at any time.

**Log out of the account**  
Logs out of the current account. 

**Sign into an account via an external provider**  
Signs into an account using an external provider's system. The available providers are: "google", "facebook", "github" and "twitter".  
Provider authentication only works in the browser! Not on previews or pc/mobile exports.

**Record performance**  
Record performance for a delimited period of time. Use this if you want to measure the performance for a specified duration.

**Send a verification email**  
Send a link per email to verify the user email.

**Send a password reset email**  
Send a password reset link per email.

**Set display name**  
Sets the user display name.

**Set the user profile picture**  
Sets the user profile picture URL to a new one.

**Set Remote Config Auto Update Inteval**  
Sets Remote Config Auto Update Inteval.

**Set the default configuration**  
As the Remote Config is stored online, you need to set default values or the Remote Config expressions to return while there is no internet or the config is still loading.

**Start a tracer**  
Start measuring performance for that tracer

**Stop a tracer**  
Stop measuring performance for that tracer

**Get Download URL**  
Get a unique download URL for a file.

**Upload a file**  
Upload a file to firebase Storage.

## Conditions

**Is the user email address verified**  
Checks if the email address of the user got verified.

**Is the user signed in?**  
Checks if the user is signed in.   
You should always use this before actions requiring authentications.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Firebase::GetAccountCreationTime()` | Gets the accounts creation time. ||
| `Firebase::GetAuthToken(string)` | Get the user authentififcation token. The token is the proof of authentication. ||
| | _string_ | Setting Name |
| `Firebase::GetLastLoginTime()` | Gets the user last login time. ||
| `Firebase::GetPhoneNumber()` | Gets the user phone number. ||
| `Firebase::GetPhotoURL()` | Gets an URL to the user profile picture. ||
| `Firebase::GetRefreshToken()` | Gets the user refresh token. For advanced usage only. ||
| `Firebase::GetRemoteConfigNumber(string)` | Get a setting from Firebase Remote Config as Number. ||
| | _string_ | Setting Name |
| `Firebase::GetRemoteConfigString(string)` | Get a setting from Firebase Remote Config as a string. ||
| | _string_ | Setting Name |
| `Firebase::GetTenantID()` | Gets the user tenant ID. For advanced usage only. ||
| `Firebase::GetUserDisplayName()` | Gets the user display name. ||
| `Firebase::GetUserEmail()` | Gets the user email address. ||
| `Firebase::GetUserUID()` | Gets the user Unique IDentifier. Use that to link data to an user instead of the name or email. ||
| `Firebase::ServerTimestamp()` | Set a field to the timstamp on the server when the request arrives there ||

---
*This page is an auto-generated reference page about the **Firebase** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).