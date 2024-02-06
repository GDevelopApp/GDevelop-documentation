---
title: Firebase Setup
---
##  Firebase Setup

To use Firebase, you have to connect it to a Firebase account. This page explains how to do so.

### Step 1: Set Up Firebase

First, go to <https://console.firebase.google.com/>. You should see your projects. Let's create a new one, if you do not have one for your game yet: 

![](/gdevelop5/all-features/firebase/quickstart1.jpg)

Enter a name for your project. In this guide, we'll be calling it "Tutorial-GDevelop-5". 

![](/gdevelop5/all-features/firebase/quickstart2.jpg)

Choose to enable Google Analytics or not. Enabling them will make Firebase collect a lot of data about your users to help you learn more about how they interact with your game. Note that all the data will be shared with Google as well. If you just want to know how many players play, how often, and fully preserve annonimity, respect of user's private data & GDPR compliance, you can also try GDevelop Analytics instead. In this example, we'll enable it as we want to showcase every feature. If you are unsure, you can always enable it later.

![](/gdevelop5/all-features/firebase/bandicam_2020-05-07_17-25-40-916.jpg)

Accept the terms to create the project.

![](/gdevelop5/all-features/firebase/bandicam_2020-05-07_17-25-55-986.jpg)

You should now have a Firebase dashboard for your game.

![](/gdevelop5/all-features/firebase/bandicam_2020-05-07_17-26-34-404.jpg)

### Step 2: Register an app for your GDevelop game

To register your game, you need to create a new "Web App" in Firebase. Regardless of the platform GDevelop games are exported to, GDevelop will only work as a Web App. To do so, click on the third button (the one with the angle brackets) to add a "web app":

![](/gdevelop5/all-features/firebase/bandicam_2020-05-07_17-27-51-338.jpg)

Type any name you want again and untick "Set-Up Firebase Hosting".

!!! note

    GDevelop has no built-in integration to publish to Firebase Hosting. Try our integrated, in-house [gd.games](https://gd.games) hosting platform instead!

Firebase will now show you code to initialize the Firebase integration:

![](/gdevelop5/all-features/firebase/fb1.png)

You only need the Firebase configuration. Copy-paste the part between the `{}`, including the `{}`, and excluding the semi-colon. For example, in this screenshot what we need to copy is: 

```

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

Now open the GDevelop project you want to integrate Firebase to, and go to the project properties. In the "Firebase Configuration" field, paste the configuration you copied. However, GDevelop only accepts the configuration in JSON format. You will need to wrap all the key names with quotes. Make sure you do not include a comma after the last key-value pair. The example would become:

```

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
