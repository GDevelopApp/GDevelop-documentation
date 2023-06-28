---
title: Realtime Database
---
# Realtime Database

Realtime Database let you store data as a big online structure variable.

!!! note

    If you aren't sure whether you should use Firestore or Realtime Database, read [the official comparison](https://firebase.google.com/docs/firestore/rtdb-vs-firestore).

## Comparison with structure variables

The data is all stored in a JSON tree, which is comparable with a [structure variable](/gdevelop5/all-features/variables#structure).
There are a few key differences though:

#### Access of children

Unlike GDevelop variables, where you get the child via `<structureVariable>.<childVariableName>`, on Realtime Database you get it with a slash:
`<structureVariable>/<childVariableName>`. That means that for dynamic access, you would write the path name as
`"structure/" + VariableString(dynamicVariableAccess) + "/specificProperty"`, unlike GDevelop structures where you write it this way:
`Variable(structure[VariableString(dynamicVariableAccess)].specificProperty)`

#### Nesting of children

While in GDevelop there is no fixed limit of how deep the nesting of children can go, Realtime Database doesn't let you have
a higher deepness than 32.

## Data structuring

You should structure data in a way that allows the least nesting as possible, as nesting data can cause a problems in a few situations:

  - Fetching data. Whenever you fetch the data from the server, you also download all the nested data. If it is much, it can take time and cause lag.
  - Permissions inheritance. If you make a security rule allowing access to a field, all the nested fields will be given the same access level and it is not possible to override the access for individual nested fields.
  - The nesting limit. If you nest data too much, you might be stuck with it to continue supporting older versions of your game, but also keep the structure coherent. If you have reached the max nesting level (32) though, you cannot add new nested properties, and therefore cannot keep a coherent structure without redesigning the database structure in a less nested way, which means losing support for all older versions and a ton of work.

Apart from trying to stay away from nesting, you should be able to design the structure of your database however you want.

For more infos on data modeling in Realtime Database, read
[the data structuring guide](https://firebase.google.com/docs/database/web/structure-data).

## Regulating access

You may not want to allow everyone to write everything.
Else, everyone could modify the data of the others! To choose who can access what and how, Firebase has the rules system.
It interoperates with [Firebase authentication](/gdevelop5/all-features/firebase/authentication), so that you can write this rule to only let
authenticated players write the authonly variable of the database:

```json
{
  "rules": {
    "authonly": {
      ".read": true,
      ".write": "auth != null"
    }
  }
}
```

You could also have a variable with all users, and have for each child (named after the user uid) have their permissions as a map.
Here for example, you could allow every user with the "verified" permission to access their own variable named by their user id in the `userdata` variable, every authenticated user to read the `globaldata` variable and every admin to write all variables:

```json
{
  "rules": {
    "userdata": {
      "$uid": {
        ".read": "$uid == auth.uid",
        ".write": "auth != null && (root.child('permissions').child(auth.uid).child('verified').val() == true && $uid == auth.uid) || root.child('permissions').child(auth.uid).child('admin').val() == true"
      }
    },
    "globaldata": {
      ".read": "auth != null",
      ".write": "auth != null && root.child('permissions').child(auth.uid).child('admin').val() == true"
    },
    "permissions": {
      "$uid": {
        ".read": "auth != null",
        ".write": "auth != null && root.child('permissions').child(auth.uid).child('admin').val() == true"
      }
    }
  }
}
```

To learn in details how to write rules, read
[the syntax guide](https://firebase.google.com/docs/database/security/core-syntax),
[the conditions writing guide](https://firebase.google.com/docs/database/security/rules-conditions) and
[the reference document](https://firebase.google.com/docs/reference/security/database).