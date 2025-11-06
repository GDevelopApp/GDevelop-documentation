# Firebase Reference

Use Google Firebase services (database, functions, storage...) in your game. [Read more explanations about it.](/gdevelop5/all-features/firebase)

## Actions

**Create a custom performance tracker**  
Creates a new custom performance tracker (If it doesn't already exists). They are used to measure performance of custom events.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Tracker Name

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::AddTracer`.

**Enable analytics**  
Enables Analytics for that project.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::AnalyticsEnable`.

**Log an Event**  
Triggers an Event/Conversion for the current user on the Analytics.Can also pass additional data to the Analytics

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Event Name
    - Parameter 1 (🔤 String): Additional Data

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::AnalyticsLog`.

**Set a user's property**  
Sets an user's properties.Can be used to classify user in Analytics.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Property Name
    - Parameter 1 (🔤 String): Property Data

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::AnalyticsSetProperty`.

**User UID**  
Changes the current user's analytics identifier. This is what let Analytics differentiate user, so it should always be unique for each user. For advanced usage only.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): New Unique ID

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::AnalyticsSetUID`.

**Sign In as an anonymous guest**  
Sign into a temporary anonymous account.

??? quote "See parameters & details"

    - Parameter 0 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::AnonymousSignIn`.

**Sign into an account with email**  
Sign into an account with email and password as credentials. 

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Email
    - Parameter 1 (🔤 String): Password
    - Parameter 2 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::BasicAccountSignIn`.

**Call a HTTP function**  
Calls a HTTP function by name, and store the result in a variable.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): HTTP Function Name
    - Parameter 1 (🔤 String): Parameter(s) as JSON or string.
    - Parameter 2 (🗄️ Scene variable): Callback variable with returned value
    - Parameter 3 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::CallHttpFunction`.

**User email**  
This action is dangerous so it requires reauthentication.  
Changes the user's email address.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Old email
    - Parameter 1 (🔤 String): Password
    - Parameter 2 (🔤 String): New email
    - Parameter 3 (❓ Yes or No): Send a verification email before doing the change?
    - Parameter 4 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::ChangeEmail`.

**User email (Provider)**  
This action is dangerous so it requires reauthentication.  
Changes the user's email address.
This is the same as Change the user email but reauthenticates via an external provider.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): New email
    - Parameter 1 (❓ Yes or No): Send a verification email before doing the change?
    - Parameter 2 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::ChangeEmailProvider`.

**User password**  
This action is dangerous so it requires reauthentication.  
Changes the user password.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Email
    - Parameter 1 (🔤 String): Old password
    - Parameter 2 (🔤 String): New password
    - Parameter 3 (❓ Yes or No): Send a verification email before doing the change?
    - Parameter 4 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::ChangePassword`.

**User password (Provider)**  
This action is dangerous so it requires reauthentication.  
Changes the user password.
This is the same as "Change the user password" but reauthenticates via an external provider.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): New Password
    - Parameter 1 (❓ Yes or No): Send a verification email before doing the change?
    - Parameter 2 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::ChangePasswordProvider`.

**Create account with email**  
Create an account with email and password as credentials.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Email
    - Parameter 1 (🔤 String): Password
    - Parameter 2 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::CreateBasicAccount`.

**Delete a field of a variable**  
Deletes a field of a variable on the database.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Path
    - Parameter 1 (🔤 String): Field to delete
    - Parameter 2 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::DatabaseDeleteField`.

**Delete a database variable**  
Deletes a variable from the database.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Path
    - Parameter 1 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::DatabaseDeleteVariable`.

**Get a field of a variable**  
Return the value of a field in a variable from the database and store it in a scene variable.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Path
    - Parameter 1 (🔤 String): Field to get
    - Parameter 2 (🗄️ Scene variable): Callback variable where to store the field's value
    - Parameter 3 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::DatabaseGetField`.

**Get a variable from the database**  
Gets a variable from the database and store it in a Scene variable.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Path
    - Parameter 1 (🗄️ Scene variable): Callback variable where to store the data
    - Parameter 2 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::DatabaseGetVariable`.

**Check for existence of a variable's field**  
Checks for the existence of a field in a variable. Sets the result variable to 1 if it exists else to 2.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Path
    - Parameter 1 (🔤 String): Field to check
    - Parameter 2 (🗄️ Scene variable): Callback Variable where to store the result
    - Parameter 3 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::DatabaseHasField`.

**Check for a variable's existence**  
Checks for the existence of a variable. Sets the result variable to 1 if it exists else to 2.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Path
    - Parameter 1 (🗄️ Scene variable): Callback variable where to store the result
    - Parameter 2 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::DatabaseHasVariable`.

**Update a field of a document**  
Updates a field of a Database document.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Path
    - Parameter 1 (🔤 String): Field to update
    - Parameter 2 (🔤 String): Value to write
    - Parameter 3 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::DatabaseUpdateField`.

**Update a document in Database**  
Updates a variable on the database.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Path
    - Parameter 1 (🗄️ Scene variable): Variable to update with
    - Parameter 2 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::DatabaseUpdateVariable`.

**Write a field in Database**  
Writes a field of a Database document.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Path
    - Parameter 1 (🔤 String): Field to write
    - Parameter 2 (🔤 String): Value to write
    - Parameter 3 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::DatabaseWriteField`.

**Write a variable to Database**  
Writes a variable to Database.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Path
    - Parameter 1 (🗄️ Scene variable): Variable to write
    - Parameter 2 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::DatabaseWriteVariable`.

**Delete the user account**  
This action is dangerous so it requires reauthentication.  
Deletes the user account.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Email
    - Parameter 1 (🔤 String): Password
    - Parameter 2 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::DeleteUser`.

**Delete the user account (Provider)**  
This action is dangerous so it requires reauthentication.  
Deletes the user account.
This is the same as "Delete the user account" but reauthenticates via an external provider.

??? quote "See parameters & details"

    - Parameter 0 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::DeleteUserProvider`.

**Enable performance measuring**  
Enables performance measuring.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::EnablePerformance`.

**Add a document to firestore**  
Adds a document (variable) to cloud firestore with a unique name.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Collection
    - Parameter 1 (🗄️ Scene variable): Variable to write
    - Parameter 2 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreAddDocument`.

**Delete a document in firestore**  
Deletes a firestore document (variable).

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Collection
    - Parameter 1 (🔤 String): Document
    - Parameter 2 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreDeleteDocument`.

**Delete a field of a document**  
Deletes a field of a firestore document.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Collection
    - Parameter 1 (🔤 String): Document
    - Parameter 2 (🔤 String): Field to delete
    - Parameter 3 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreDeleteField`.

**Disable network**  
Disables the connection to the database.  
While the network is disabled, any read operations will return results from cache, and any write operations will be queued until the network is restored.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreDisableNetwork`.

**Disable persistence**  
Disables the storing of fetched data and clear all the data that has been stored.  
This needs to be called before any other firestore operation, otherwise it will fail.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreDisablePersistence`.

**Re-enable network**  
Re-enables the connection to the database after disabling it.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreEnableNetwork`.

**Enable persistence**  
When persistence is enabled, all data that is fetched from the database is being automatically stored to allow to continue accessing the data if cut off from the network, instead of waiting for reconnection.  
This needs to be called before any other firestore operation, otherwise it will fail.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreEnablePersistence`.

**Run a query once**  
Runs the query once and store results in a scene variable.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Query name
    - Parameter 1 (🗄️ Scene variable): Callback variable where to load the results
      See how the data will be filled in this structure variable on [the wiki page](https://wiki.gdevelop.io/gdevelop5/all-features/firebase/firestore#the_query_result).
    - Parameter 2 (🗄️ Scene variable): Callback variable with state (ok or error message)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreExecuteQuery`.

**Get a document from firestore**  
Gets a firestore document and store it in a variable.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Collection
    - Parameter 1 (🔤 String): Document
    - Parameter 2 (🗄️ Scene variable): Callback variable where to load the document
    - Parameter 3 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreGetDocument`.

**Get a field of a document**  
Return the value of a field in a firestore document.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Collection
    - Parameter 1 (🔤 String): Document
    - Parameter 2 (🔤 String): Field to get
    - Parameter 3 (🗄️ Scene variable): Callback variable where to store the field's value
    - Parameter 4 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreGetField`.

**Check for a document's existence**  
Checks for the existence of a document. Sets the result variable to true if it exists else to false.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Collection
    - Parameter 1 (🔤 String): Document
    - Parameter 2 (🗄️ Scene variable): Callback variable where to store the result
    - Parameter 3 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreHasDocument`.

**Check for existence of a document's field**  
Checks for the existence of a field in a document. Sets the result variable to 1 if it exists else to 2.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Collection
    - Parameter 1 (🔤 String): Document
    - Parameter 2 (🔤 String): Field to check
    - Parameter 3 (🗄️ Scene variable): Callback Variable where to store the result
    - Parameter 4 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreHasField`.

**Limit amount of documents**  
Limits the amount of documents returned by the query. Can only be used after an order filter.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Query name
    - Parameter 1 (🔢 Number): Amount to limit by
    - Parameter 2 (❓ Yes or No): Begin from the end
      If yes, the last X documents will be kept, else the first X documents will be kept.

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreQueryLimit`.

**Order by field value**  
Orders all documents in the query by a the value of a field.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Query name
    - Parameter 1 (🔤 String): Field to order by
      Note that [some limitations may apply when combined with a where query](https://firebase.google.com/docs/firestore/query-data/order-limit-data#limitations).
    - Parameter 2 (🔤 String): Direction (ascending or descending) (one of: "asc", "desc")

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreQueryOrderBy`.

**Skip some documents**  
Removes documents before or after a certain value on the field ordered by in a query. Can only be used after an order filter.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Query name
    - Parameter 1 (🔢 Number): The value of the field ordered by to skip after
    - Parameter 2 (❓ Yes or No): Skip documents before?
      If yes, the documents with a bigger field value will be kept, else the documents with a smaller field value be kept by the query.
    - Parameter 3 (❓ Yes or No): Include documents which field value equals the value to skip after?

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreQuerySkipSome`.

**Filter by field value**  
Only match the documents that have a field passing a check.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Query name
    - Parameter 1 (🔤 String): Field to check
    - Parameter 2 (🔤 String): Check type
      See the [Firebase documentation](https://firebase.google.com/docs/firestore/query-data/queries#query_operators) to understand the operators. It is important as some [don't work when combined](https://firebase.google.com/docs/firestore/query-data/queries#query_limitations). (one of: "<", "<=", "==", "!=", ">=", ">", "array-contains")
    - Parameter 3 (🔢 Number): Value to check

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreQueryWhereNumber`.

**Filter by field text**  
Only match the documents that have a field passing a check.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Query name
    - Parameter 1 (🔤 String): Field to check
    - Parameter 2 (🔤 String): Check type
      See the [Firebase documentation](https://firebase.google.com/docs/firestore/query-data/queries#query_operators) to understand the operators. It is important as some [don't work when combined](https://firebase.google.com/docs/firestore/query-data/queries#query_limitations). (one of: "<", "<=", "==", "!=", ">=", ">", "array-contains")
    - Parameter 3 (🔤 String): Text to check

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreQueryWhereText`.

**Start a query**  
Start a query on a collection. A query allows to get a filtered and ordered list of documents in a collection.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Query name
    - Parameter 1 (🔤 String): Collection

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreStartQuery`.

**Start a query from another query**  
Start a query with the same collection and filters as another one.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Query name
    - Parameter 1 (🔤 String): Source query name

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreStartQueryFrom`.

**Update a document in firestore**  
Updates a firestore document (variable).

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Collection
    - Parameter 1 (🔤 String): Document
    - Parameter 2 (🗄️ Scene variable): Variable to update with
    - Parameter 3 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreUpdateDocument`.

**Update a field of a document**  
Updates a field of a firestore document.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Collection
    - Parameter 1 (🔤 String): Document
    - Parameter 2 (🔤 String): Field to update
    - Parameter 3 (🔤 String): Value to write
    - Parameter 4 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreUpdateField`.

**Continuously run (watch) a query**  
Runs a query continuously, so that every time a new documents starts or stops matching the query, or a document that matches the query has been changed, the variables will be filled with the new results.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Query name
    - Parameter 1 (🗄️ Scene variable): Callback variable where to load the results
      See the shape of the returned data on [the wiki page]().
    - Parameter 2 (🗄️ Scene variable): Callback variable with state (ok or error message)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreWatchQuery`.

**Write a document to firestore**  
Writes a document (variable) to cloud firestore.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Collection
    - Parameter 1 (🔤 String): Document
    - Parameter 2 (🗄️ Scene variable): Variable to write
    - Parameter 3 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreWriteDocument`.

**Write a field in firestore**  
Writes a field of a firestore document.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Collection
    - Parameter 1 (🔤 String): Document
    - Parameter 2 (🔤 String): Field to write
    - Parameter 3 (🔤 String): Value to write
    - Parameter 4 (🗄️ Scene variable): Callback variable with state (ok or error)
    - Parameter 5 (❓ Yes or No): If the document already exists, merge them instead of replacing the old one?

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::FirestoreWriteField`.

**Force sync the configuration**  
Use this to sync the Remote Config with the client at any time.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::ForceReloadRemoteConfig`.

**Log out of the account**  
Logs out of the current account. 

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::Logout`.

**Sign into an account via an external provider**  
Signs into an account using an external provider's system. The available providers are: "google", "facebook", "github" and "twitter".  
Provider authentication only works in the browser! Not on previews or pc/mobile exports.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Provider (one of: "google", "facebook", "github", "twitter")
    - Parameter 1 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::ProviderAccountSignIn`.

**Record performance**  
Record performance for a delimited period of time. Use this if you want to measure the performance for a specified duration.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Tracker Name
    - Parameter 1 (🔢 Number): Delay before measuring start (in ms)
    - Parameter 2 (🔢 Number): Measuring duration (in ms)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::RecordTracer`.

**Send a verification email**  
Send a link per email to verify the user email.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::SendEmailVerification`.

**Send a password reset email**  
Send a password reset link per email.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Email of the user whose password must be reset

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::SendPasswordResetEmail`.

**Display name**  
Sets the user display name.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): New display name

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::SetDisplayName`.

**Profile picture**  
Change the user profile picture URL to a new one.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): New profile picture URL

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::SetPhotoURL`.

**Set Remote Config Auto Update Interval**  
Sets Remote Config Auto Update Interval.

??? quote "See parameters & details"

    - Parameter 0 (🔢 Number): Update Interval in ms

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::SetRemoteConfigAutoUpdateInterval`.

**Set the default configuration**  
As the Remote Config is stored online, you need to set default values or the Remote Config expressions to return while there is no internet or the config is still loading.

??? quote "See parameters & details"

    - Parameter 0 (🗄️ Scene variable): Structure with defaults

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::SetRemoteConfigDefaultConfig`.

**Start a tracer**  
Start measuring performance for that tracer

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Tracker Name

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::StartTracer`.

**Stop a tracer**  
Stop measuring performance for that tracer

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Tracker Name

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::StopTracer`.

**Get Download URL**  
Get a unique download URL for a file.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Storage path to the file
    - Parameter 1 (🗄️ Scene variable): Callback variable where to store the result
    - Parameter 2 (🗄️ Scene variable): Callback variable with state (ok or error)

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::StorageDownload`.

**Upload a file**  
Upload a file to firebase Storage.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): Upload ID
    - Parameter 1 (🔤 String): File content
    - Parameter 2 (🔤 String): Storage path
    - Parameter 3 (🔤 String): File content format (one of: "none", "base64", "base64url", "data_url")
    - Parameter 4 (🗄️ Scene variable): Callback variable with state (ok or error)
    - Parameter 5 (🗄️ Scene variable): Callback variable with the url to the uploaded file

    > Technical note: this action internal type (in GDevelop JSON) is `Firebase::StorageUpload`.


## Conditions

**Is the user email address verified**  
Checks if the email address of the user got verified.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Firebase::IsEmailVerified`.

**Is the user signed in?**  
Checks if the user is signed in.   
You should always use this before actions requiring authentications.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `Firebase::IsSignedIn`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Firebase::GetAccountCreationTime()` | Return the accounts creation time. ||
| `Firebase::GetAuthToken(string)` | Get the user authentication token. The token is the proof of authentication. ||
| | _🔤 String_ | Setting Name |
| `Firebase::GetLastLoginTime()` | Return the user last login time. ||
| `Firebase::GetPhoneNumber()` | Return the user phone number. ||
| `Firebase::GetPhotoURL()` | Gets an URL to the user profile picture. ||
| `Firebase::GetRefreshToken()` | Return the user refresh token. For advanced usage only. ||
| `Firebase::GetRemoteConfigNumber(string)` | Get a setting from Firebase Remote Config as Number. ||
| | _🔤 String_ | Setting Name |
| `Firebase::GetRemoteConfigString(string)` | Get a setting from Firebase Remote Config as a string. ||
| | _🔤 String_ | Setting Name |
| `Firebase::GetTenantID()` | Return the user tenant ID. For advanced usage only. ||
| `Firebase::GetUserDisplayName()` | Return the user display name. ||
| `Firebase::GetUserEmail()` | Return the user email address. ||
| `Firebase::GetUserUID()` | Return the user Unique IDentifier. Use that to link data to an user instead of the name or email. ||
| `Firebase::ServerTimestamp()` | Set a field to the timestamp on the server when the request arrives there ||



---

The Firebase extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Firebase** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).