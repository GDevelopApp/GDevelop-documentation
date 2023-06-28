---
title: Firebase Setup
---
## Firebase Setup

To use Firebase, you have to connect it to a Firebase account. This page explains how to do so.

### Step 1: Set Up Firebase

First, go to <https://console.firebase.google.com/>. You should have your projects. Let's create a new one: ![](/gdevelop5/all-features/firebase/quickstart1.jpg)

Enter a name for your project. In this guide, we'll be calling it "Tutorial-GDevelop-5". ![](/gdevelop5/all-features/firebase/quickstart2.jpg)

Choose to enable Google Analytics or not (It is recommended that you enable it). In this example, we'll enable it as we want to showcase every feature, You can always change that later.

![](/gdevelop5/all-features/firebase/bandicam_2020-05-07_17-25-40-916.jpg)

Accept the terms

![](/gdevelop5/all-features/firebase/bandicam_2020-05-07_17-25-55-986.jpg)

You should now have a Firebase dashboard.

![](/gdevelop5/all-features/firebase/bandicam_2020-05-07_17-26-34-404.jpg)

### Step 2: Register an app for your GDevelop game

To register your game, you need to create a new "web app" in Firebase (even if your game is going to be exported to mobile/PC). To do so, click on the third button (the one with the angle brackets) to add a "web app" (see the following screenshot)

![](/gdevelop5/all-features/firebase/bandicam_2020-05-07_17-27-51-338.jpg)

Type any name you want again and untick "Set-Up Firebase Hosting".

!!! note

    At the time of writing, there is no support for Firebase Hosting but it may be added to GDevelop later.

Firebase will now show you some code known as the firebase SDK that you would use if you were coding a website (we won't need everything).

![](/gdevelop5/all-features/firebase/fb1.png)

You only need the Firebase configuration part. Copy-paste the part between the {} including the {}. For example, in this screenshot what we need to copy is:

```text
{
    apiKey: "AIzaSyCbFhG_bCyAvnxlmVSgIgn7Em0XOYE9YXA",
    authDomain: "tutorial-gdevelop.firebaseapp.com",
    databaseURL: "https://tutorial-gdevelop.firebaseio.com",
    projectId: "tutorial-gdevelop",
    storageBucket: "tutorial-gdevelop.appspot.com",
    messagingSenderId: "386980638073",
    appId: "1:386980638073:web:b00afc0ecb3ed7ca4f53a8",
    measurementId: "G-R0KBN0HPQ8"
}
```

Now open the GDevelop project you want to integrate Firebase to, and go to the project properties. In the "Firebase Configuration" field, paste the configuration you copied. However, the format used by GDevelop is stricter than the code provided by Firebase. You need to wrap all the key names with quotes. The example would become:

```text
{
    "apiKey": "AIzaSyCbFhG_bCyAvnxlmVSgIgn7Em0XOYE9YXA",
    "authDomain": "tutorial-gdevelop.firebaseapp.com",
    "databaseURL": "https://tutorial-gdevelop.firebaseio.com",
    "projectId": "tutorial-gdevelop",
    "storageBucket": "tutorial-gdevelop.appspot.com",
    "messagingSenderId": "386980638073",
    "appId": "1:386980638073:web:b00afc0ecb3ed7ca4f53a8",
    "measurementId": "G-R0KBN0HPQ8"
}
```

![](/gdevelop5/all-features/firebase/quickstart6.png)

You can now start using [Firebase services](/gdevelop5/all-features/firebase).
