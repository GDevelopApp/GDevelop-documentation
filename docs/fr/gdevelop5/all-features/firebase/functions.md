---
title: Les Fonctions Firebase
---
# Les Fonctions Firebase

!!! danger

    Ceci est une fonctionnalité pensée pour les développeurs JavaScript expérimentés.

Firebase est fait pour remplacer complètement un serveur de backend. Malheureusement certaines fonctionnalités ne peuvent pas être précisés et nécessitent l'écriture d'une logique côte serveur. C'est pour ça que Firebase a les fonctions Firebase.

Firebase laisse ces utilisateurs écrire une logique à faire tourner quand des évènements se produisent. La documentation complète est disponible ici: https://firebase.google.com/docs/functions/callable.

In de ces évènements est un appel https. Il est possible d'appeler ces fonctions via une action depuis GDevelop! Il suffit d'utiliser l'action "Appeler la fonction Firebase" avec le nom de la fonction appelable https. Il est aussi possible de passer un objet JavaScript et de retourner à GDevelop un objet (qui sera converti en structure automatiquement).