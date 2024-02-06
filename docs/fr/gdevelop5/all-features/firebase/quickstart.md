---
title: Démarrer avec Firebase
---

##  Démarrer avec Firebase

Firebase n'est pas une fonctionnalité a propre à GDevelop mais une *intégration* à un service externe. Cela veut dire qu'il faut *connecter* une application Firebase a GDevelop pour utiliser les fonctionnalités de Firebase.

### Step 1: Créer un projet Firebase

D’abord, va sur <https://console.firebase.google.com/>. Depuis ta liste de projets, si tu n'en as pas déja un pour ton jeu, crée en un nouveau: 

![](/gdevelop5/all-features/firebase/quickstart1.png) 

Nomme ton projet comme tu veux. Dans le cadre de cet article, je vais nommer mon projet Tutorial-GDevelop. Tu peux activer les Analytics si tu veux, mais cela n'est pas nécessaire pour utiliser les autres services. Tu peux toujours les activer plus tard plus tard.

![](/gdevelop5/all-features/firebase/quickstart2.png)

Tu devrais voir le tableau de bord Firebase de ton projet.

### Step 2: Connecter le jeu au projet Firebase

Les jeux GDevelop fonctionnent comme une *application web*, quel que soit la plateforme où le jeu tournera au final. Créés en donc une depuis Firebase: 

![](/gdevelop5/all-features/firebase/quickstart3.png) 

Mets un nom de ton choix et tu peux décocher la case "Firebase hosting". 

!!!note
    
    GDevelop ne possède pas d'intégration permettant de déployer son jeu via Firebase Hosting directement. Il est conseillé d'utiliser le service de hosting intégré [gd.games](https://gd.games) à la place! 

Firebase devrait te montrer du code ressemblant celui-ci à present: ![](/gdevelop5/all-features/firebase/quickstart4.png) La seule partie nécessaire est *la configuration*, la partie entre les {}. Copie donc le contenu entre les {} **y compris les {}**, mais **sans le point-virgule à la fin**. Chez moi, ça serait: 

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

Maintenant colle le dans la case "Configuration Firebase" des propriétés du projet. Tu remarqueras sans doute le *message d'erreur*: 

![](/gdevelop5/all-features/firebase/quickstart5.png) 

!!! note

    L'erreur n'est actuellement plus présente pour le moment dans GDevelop pour des raisons d'implémentation techniques, mais le changement de la configuration reste nécéssaire!

Cette erreur est normale et due au fait que GDevelop nécéssite une configuration au format JSON, où les clés sont entourés par des `" "`. Dans mon cas, ils faudrait donc transformer ma configuration en: 

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
 
L'erreur devrait avoir disparu: 

![](/gdevelop5/all-features/firebase/quickstart6.png)

Les [fonctionalités de Firebase](/fr/gdevelop5/all-features/firebase) devrait à présent être prêt à l'usage. 

!!!note

    Certaines fonctionalités doivent parfois encore être activées depuis la page de gestion du projet!
