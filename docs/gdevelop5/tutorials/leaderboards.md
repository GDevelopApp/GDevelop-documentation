---
title: Adding realtime leaderboards to a game
---
# Adding realtime leaderboards to a game

!!! tip

    It's now much simpler to add a leaderboard to your game! Check out the built-in **[Leaderboards](/gdevelop5/all-features/leaderboards) provided by GDevelop** - fast, flexible leaderboards that you can add them to your game in a few clicks.

This guide will explain how to add leaderboards to your game via Firebase Cloud Firestore. If you haven't yet, don't forget to [set-up Firebase](/gdevelop5/all-features/firebase/quickstart).

## 1. Chose a data structure

The first step when making a project that interacts with an online database is to decide the shape in which the data is stored. Firebase is good at querying (filtering by data) documents in collections, so we will put each score as a document in a collection named "scores". Each document will have to be a structure variable with this shape:

```text
{
  name: "A user name",
  score: 23,
}
```

That way, we can query documents by score and then get the username bound to each document directly. In this case, we do not care about the name of the document, so we will let Firebase assign random names to those.

## 2. Writing security rules

### 2.1 Why security rules?

Now that we have a data structure defined, we need to write security rules to make sure your database is not abused. Without rules, anyone can read and write anything to it and use your database quota to store their data, and anyone can write wrong values with the intent to crash the game or hack all users.

### 2.2 The security rules

Here, I will use the following rules:

```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /scores/{document} {
      allow read;
      allow create: if
      	  request.resource.data.keys().hasOnly(["name", "score"]) &&
          request.resource.data.keys().hasAll(["name", "score"]) &&
          request.resource.data.score is number &&
          request.resource.data.score > 1 &&
          request.resource.data.name is string &&
          request.resource.data.name.size() > 1 &&
          request.resource.data.name.size() < 15;
    }
  }
}
```

![](/gdevelop5/tutorials/leaderboards-1.png)
To set security rules, navigate to the editor via the [Firebase console](https://console.firebase.google.com/).

### 2.3 Walking through the security rules

  * **match /scores/{document}**: Only add rules for documents inside scores. This already makes it more secure, as all rules are false by default so this makes sure only the collection and the documents we need are accessible.

  * **allow read;**: We always want the database to be readable. Therefore, we do not add any condition.

  * **allow create: if**: We only allow creation, not writing, as this would allow users to change their score later.

  * **request.resource.data.keys().hasOnly(["name", "score"]) && request.resource.data.keys().hasAll(["name", "score"])**: This is making sure that the data has the shape we defined in 1: it has all the properties a score needs and not any extra properties.

  * **request.resource.data.score is number && request.resource.data.score > 1**: We make sure the score is a number and in the range of scores possible. Here, a score can be any number higher than 1.

  * **request.resource.data.name is string && request.resource.data.name.size() > 1 && request.resource.data.name.size() < 15;**: And finally, we make sure the name is a text with at least 1 character, and up to 14 characters.

!!! tip

    Keep in mind that those rules are specific to this example: You can use them as an example, but you should not reuse them. All cases need their own specific rules.

## 3. Adding scores to the database from GDevelop

To add a score, it is pretty simple. All you need to do is put the data in a structure with the shape chosen and upload it!
![](/gdevelop5/tutorials/leaderboards/pasted/20210530-213318.png)

## 4. Fetching the scores from the database with GDevelop

Fetching the scores requires making a query to only download a few scores, and only the best presorted. Else, we would have to write sorting algorithms and have all the scores downloaded locally, which would make the game very laggy on bigger games with many scores. Then, we will have to update some sort of interface to display those.

### 4.1 Creating a query

For the sake of this tutorial, we will load the 50 best scores. This can be achieved by adding the "Order by descending" and "Limit to 50 first" query filters. Then, we will watch the query to download the scores and have them update in real time.
![](/gdevelop5/tutorials/leaderboards/pasted/20210530-213842.png)

### 4.2 Awaiting the data

Now, we need to await the data fetching, as Firebase is asynchronous. This can be simply done using this event:
![](/gdevelop5/tutorials/leaderboards/pasted/20210530-214148.png)

It will trigger once Firebase marked the operation as complete by putting "ok" inside the status variable, and we will set it back to 0. This last step is done to trigger the event once each time Firebase finishes fetching new scores, to allow processing the realtime updates.

### 4.3 Processing the data

To process the data, the easiest method is to use a "For each child variable" event:
![](/gdevelop5/tutorials/leaderboards/pasted/20210530-214520.png)

This allows to access the document via the variable `doc` inside that event and the position in the list via the variable `i`. For example, to access the position of a player you can use `Variable(i) + 1`. The `+ 1` is used as arrays start from 0, but leaderboards usually start from place 1. To access the score, in the context of this tutorial, you could use `Variable(doc.data.score)`, and to access the username `VariableString(doc.data.name)`. To display it all in a text object for example, we can use this:

![](/gdevelop5/tutorials/leaderboards/pasted/20210530-215054.png)

And voilà, you have a functioning realtime leaderboard in your game!