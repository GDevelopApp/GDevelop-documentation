---
title: Authentication
---
# Authentication

Authentication is the process of verifying the identity of an individual. People often call it the "account login", or something similar.
Firebase gives tools to help you create user accounts, authenticate (log into) an account using popular strategies (email-password, google auth, email link, etc),
and linking their account to data using Firestore.

## Authenticating

The first and most important thing is the authentication process. That is the part where the user proves who he is. You usually do that through a _login screen_.

Firebase provides a few ways to authenticate:

  - **Anonymously**: you can use this to provide limited preview access to services requiring authentication. That way you can also assign data to this temporary profile. It may be possible to upgrade an anonymous account to a persistent account in the future, but GDevelop doesn't support that yet.
  - By **email**: you make the user enter an email and password, and Firebase will take care of all the rest.
  - Using **external providers**: the user can identify through a third party website, using for example their _Facebook_ or _Google_ accounts.

!!! danger

    For now, external providers only work on the browser, it won't work on PC exports or previews.

## Identifying the user

Once you are sure about the identity of the user, Firebase provides you a handy user ID that links your user to their data.
Everything related to this user should be stored with this ID to be able to track their ownership of the data back and provide it to them
once they need it.

For example, if you make a leaderboard, try to not only store the score and name of the user but also their user ID. That way,
people can verify that indeed **that person** got the high score, as people could have the same display name,
or to be able to exclude a user from the leaderboards if he turned out to be cheating.

That ID will stay unique to each user and never change for a user. That is why it is ideal to identify the user.

!!! tip

    Remember: use the **ID** to //**ID**entify// the user!

## Get and set basic user data

You can set basic user data, and get it back later. This user data can be the email, password, phone number, display name, photo URL, etc.
This is all you need for a basic profile most of the time.
To store more data, you will need to use something like [Firestore](/gdevelop5/all-features/firebase/firestore).
!!! tip

    To use the photo URL, take a look at the example that [loads an image from a URL to a sprite](https://editor.gdevelop.io/?project=example://load-image-from-url).

## Provider setup

To use an authentication provider, you first need to enable it on the Firebase dashboard.

![](/gdevelop5/all-features/firebase/enable_signin.png)

## Dangerous actions

Some actions are called dangerous actions: those can make the account inaccessible to the user if misused.
For example, changing the email or password of the account is dangerous as if the user loses one of them, it will be hard for them to gain access back to their account.
Those actions will require therefore re-authenticating to be sure the user is indeed requesting the action and not some peer trying to hijack the account.
Please actually make the user log in again and don't store their credentials in a variable to reauthenticate them without their knowledge, as this can lead to account hijack.