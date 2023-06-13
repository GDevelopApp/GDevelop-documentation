---
title: Cloud Firestore Database
---
# Cloud Firestore Database

Firestore is a realtime database, it let you store data online fast and reliably, and also works if the device is offline.

!!! note

    If you aren't sure whether you should use Firestore or the old Realtime Database, read [the official comparison](https://firebase.google.com/docs/firestore/rtdb-vs-firestore). In case of doubt, we recommend you stick with the Cloud Firestore Database, as it is faster, cheaper, more modern, more scalable, and generally more powerful.

## Documents and collections

A Firestore database is ordered in documents and collections. A document contains data, and a collection contains documents.
Documents can also contain collections, named sub collections.

The advantage of collections is that they don't require you to download it entirely when accessing them.
For example, if you wanted to store for each user a structure containing his friends,
you could either structure the database by putting the structure into the document or
turning it into a sub-collection (where each child is a document).
If you put it into the document, you make the document bigger, and each time you want to take some data
from the document you have download the whole data again just for one field, and you make it also longer
to get other data from the document. If you put it as a sub collection, you can get each friend of
the friend list individually and you can get the player data without getting all the friends each time you do so.

!!! tip

    The other advantage of collections is that they are very good and fast at filtering/ordering data before sending it to the player.
    Sadly, GDevelop doesn't yet supports sending queries to collections.

For more informations on the data model of Firestore, read
[the data model guide](https://firebase.google.com/docs/firestore/data-model) and
[the data structuring guide](https://firebase.google.com/docs/firestore/manage-data/structure-data).

## Regulating access

You may not want to allow everyone to write everything.
Else, everyone could modify the data of the others! To choose who can access what and how, Firebase has the rules system.
It interoperates with [firebase authentication](/gdevelop5/all-features/firebase/authentication), so that you can write this rule to only let
authenticated players access the database:
![](/gdevelop5/all-features/firebase/firestore/pasted/20201205-202545.png)

You could also have a collection of users, and in each document (named after the user uid) have their permissions.
Here for example, you could allow every user with the permission verified to access their own document in the `userdata` collection,
and every admin to access documents in the `globaldata` collection:
![](/gdevelop5/all-features/firebase/firestore/pasted/20201205-203628.png)

To learn in details how to write rules, read
[the syntax guide](https://firebase.google.com/docs/rules/rules-language) and
[the authentication integration guide](https://firebase.google.com/docs/rules/rules-and-auth).

# Queries

Queries are a feature of Firebase that have two main utilities:

## 1. Filtering, selecting and ordering documents in a collection.

You can build a query to apply criteria on what documents you wish to obtain and how to obtain them.

To build a query, you first need to create one. You can either create one from scratch or copy one you have already built.

![](/gdevelop5/all-features/firebase/firestore/pasted/20210526-001217.png)

Then, you can add some *filters* to it.

### The value/text filter

The value/text filter allows to check all documents that meet a certain criteria. For example, you can select only the documents that have in the `owner` field the UID of the current user:

![](/gdevelop5/all-features/firebase/firestore/pasted/20210526-001747.png)

### The order by filter

!!! tip

    This filter has to be applied to a query in order to be able to use the "Skip some" and "Limit" filters.

This filter allows to automatically sort the documents of the query to be ordered by the value of a field. For example, if you have documents that look like this:

```text
{ price: 69, name: "Lamp oil"},
{ price: 42, name: "Rope"},
{ price: 420, name: "Bombs"}
```

And use the filter like this:

![](/gdevelop5/all-features/firebase/firestore/pasted/20210526-002304.png)

Then the documents would be reordered inside the query like this:

```text
{ price: 420, name: "Bombs"},
{ price: 69, name: "Lamp oil"},
{ price: 42, name: "Rope"}
```

### The skip some filter

!!! warning

    You need to have added the "Order by" filter to the query before adding this filter

This filter allows removing all documents before or after a value of the document ordered by. For example, if we take the same example as for the "Order by" filter, and use the filter like this:

![](/gdevelop5/all-features/firebase/firestore/pasted/20210526-003048.png)

Then the query would become `{ price: 42, name: "Rope"}`, as all documents in the list before the one with price 69, including the document with the field at 69 will be skipped/removed from the query.

### The limit filter

!!! warning

    You need to have added the "Order by" filter to the query before adding this filter

This filter allows getting only the first or last X documents of the query. For example if you use it this way:

![](/gdevelop5/all-features/firebase/firestore/pasted/20210526-003435.png)

Then only the first document would be kept. If we take the same example as in the "Order by" filter, only `{ price: 420, name: "Bombs"}` would remain.

!!! tip

    It is possible to make pagination by combining the limit and skip some filters

## 2. Listening to changes in a collection and getting the documents and their content

Once you have built your query (or just created an empty one to target all documents in a collection), you can watch the query or execute it once. When you watch it, it will *replace the content of the passed variable with the query results each time a document matching the query is added, modified or removed from the collection*. If you execute it, it will just fetch the documents matching the query *once* and put the result in the passed variable.

### The query result

When a query finishes, it stores its result in the passed structure variable. It will look like this:

```text
{
  size: 1,
  empty: false,
  docs: [
    {
      exists: true,
      id: "The document ID in the collection",
      data: {
        the: "data of the document"
      }
    }
  ]
}
```

For example, if you want to get the data of the first document as JSON, you can use this expression:

`ToJSON(QueryResultVariable.docs[0].data)`

#### Query result description

`size`: The amount of documents matching the query
`empty`: A boolean value that is true if no documents matched the query
`docs`: An array of all documents that matched the query (ordered by the filters)

#### Document result description

`exists`: A boolean value that is false if the document doesn't actually exist in the collection.
`id`: The ID (name) of the document in the collection.
`data`: A structure containing the data inside the document.

For example, if you want to get the amount of documents