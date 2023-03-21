---
title: Démarrer avec Firebase
---
##  Démarrer avec Firebase 

Firebase n'est pas une fonctionnalité a proprement parler mais une *intégration*. Cela veut dire qu'il faut *connecter* une application Firebase a GDevelop pour utiliser des fonctionnalités de Firebase.

### Step 1: Créer un projet Firebase

D’abord, va sur <https://console.firebase.google.com/>. Il devrait y avoir ta liste de projets, créés en un nouveau: ![](/gdevelop5/all-features/firebase/quickstart1.png) Nomme ton projet comme tu veux. Dans le cadre de cet article, je vais nommer mon projet Tutorial-GDevelop. ![](/gdevelop5/all-features/firebase/quickstart2.png) \<WRAP center round info 80%\> Tu peux activer les Analytics si tu veux, mais cela n'est pas nécessaire pour utiliser les autres services. Tu peux toujours les activer plus tard plus tard. {.is-info}

Tu devrais voir le tableau de bord Firebase de ton projet.

### Step 2: Connecter le jeu au projet Firebase

    Les jeux GDevelop fonctionnent comme une *application web*, créés en donc une depuis Firebase ![](/gdevelop5/all-features/firebase/quickstart3.png) Mets un nom de ton choix et tu peux décocher la case "Firebase hosting". \<note\> A l'heure ou cet article est écrit il n'y a pas de possibilité d'utilisation de firebase hosting mais c'est possible que cela change  Firebase devrait te montrer du code ressemblant celui-ci à present: ![](/gdevelop5/all-features/firebase/quickstart4.png) La seule partie nécessaire est *la configuration*, la partie entre les {}. Copie donc le contenu entre les {} **y compris les {}**. Chez moi ça serait: ```

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

Maintenant colle le dans la case "Configuration Firebase" des propriétés du projet. Tu remarqueras sans doute le *message d'erreur*: ![](/gdevelop5/all-features/firebase/quickstart5.png) Cette erreur est normale et due au fait que GDevelop utilisé un *format* légèrement different, où les *clés* sont entourés par des " ". Dans mon cas ils faudrait transformer ma configuration en: ```

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

``` L'erreur devrait avoir disparu: ![](/gdevelop5/all-features/firebase/quickstart6.png) Et voilà, bravo! Tu est fin prêt a utiliser Firebase dans GDevelop!
