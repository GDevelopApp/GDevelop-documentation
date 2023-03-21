---
title: Configuration a distance Firebase
---
# Configuration a distance Firebase

!!! note

    N'oublie pas [d'installer Firebase](/gdevelop5/all-features/firebase/quickstart)!

    La configuration distante Firebase te permet de *changer des paramètres* de jeu pour tout tes utilisateurs ou une partie d'entre eux **depuis le net**. Par example: tu peux augmenter la difficulté du jeu a distance uniquement pour les joueurs expérimentés qui se plaignent de la facilité du jeu sans avoir à déployer un patch. \<note\>Pour pouvoir sélectionner des groupes de joueurs efficacement ça aide d'activer les Analytics et l'Authentification

### A propos de cet article

Cet article va prendre un jeu très simple et y rajouter de la configuration distante pour expliquer son fonctionnement et intégration dans un jeu. Voici le jeu de base: ![](/gdevelop5/all-features/firebase/rc1.png) ![](/gdevelop5/all-features/firebase/rc2.png)

Comme tu peux le voir, il s'agit d'un simple clicker où on peut gagner et perdre de l'argent.

### Préparer la configuration distante

La configuration distante requiert une action pour fonctionner. Elle permet de passer une structure comme **défaut**. Ce défaut est important car c'est la valeur qui va être utilisée avant la première connexion avec le serveur ou si le jeu est n'est pas connecté au réseau pour télécharger la configuration. Voici la structure que je vais utiliser comme défaut (seul le contenu de la structure est importante, pas son nom) ![](/gdevelop5/all-features/firebase/rc3.png) Puis il suffit de passer cette structure a l'action: ![](/gdevelop5/all-features/firebase/rc4.png) Les deux variables que je vais utiliser sont pour décider la valeur retirée et/ou ajoutée quand on clique sur un des boutons.

### Préparer Firebase

    Maintenant ajoutons une valeur a ces variables sur Firebase. Pour ce faire cliques sur "Configuration Distante" depuis le tableau de bord Firebase: ![](/gdevelop5/all-features/firebase/rc5.png) Maintenant il suffit de mettre les mêmes variables et valeurs: ![](/gdevelop5/all-features/firebase/rc6.png) \<note warning\> N'oublie pas d'enregistrer les modifications ! ![](/gdevelop5/all-features/firebase/rc7.png) 

### Ajouter un mécanisme de synchronisation

Cette extension te laisse choisir quand synchroniser la configuration avec le serveur. Le moyen conseillé et d'utiliser l'action pour synchroniser la configuration **au démarrage du jeu et dans un événement périodique**. C'est a dire dans un événement qui arrive souvent mais pas trop dans le jeu \<WRAP center round info 90%\> Il est aussi possible d'utiliser l'action "Mettre l'auto synchronisation" mais elle n'est pas très fiable. {.is-info} Comme évènement périodique je pourrais utiliser un [Timer](/gdevelop5/all-features/timers), mais je veux garder le code simple et utilise donc un événement périodique existant; l'appui de bouton: ![](/gdevelop5/all-features/firebase/rc8.png)

### Remplacer des valeurs par la configuration

Maintenant, il suffit de remplacer les valeurs a rendre modulable par l'expression pour obtenir les valeurs du serveur: ![](/gdevelop5/all-features/firebase/rc9.png)

#### Adapter le jeu a la modularité

Il est important de faire attention en remplaçant des valeurs fixes par des valeurs modulables. Il faut par example mettre a jour dynamiquement des valeurs qui étaient fixes. Dans mon cas, il faut que je rajoute une action pour mettre a jour mon texte précédemment statique en cas de changement de la valeur: ![](/gdevelop5/all-features/firebase/rc10.png)

### Utilise le tableau de bord Firebase pour changer les variables

Et c'est bon! Tu as terminé et peux distribuer ton jeu. Si tu dois modifier une des variables, il te suffit de le faire depuis le tableau de bord Firebase.
