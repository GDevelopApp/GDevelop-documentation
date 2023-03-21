---
title: Analytics
---
# Analytics

Les Analytics sont simples a utiliser dans GDevelop. Il suffit d'utiliser l'action "Activer Firebase", Firebase va ensuite automatiquement collecter et traiter les données. Les Analytics du jour mettent environ 24h a s'afficher sur le tableau de bord Firebase.

### Enregistrer des événements customisés

Tu veux enregistrer des données spécifiques a ton jeu? Disons que tu veux voir la proportion de joueurs qui finissent le premier niveau. Il suffit de log a la fin du niveau: Quand le niveau se termine, avant de changer de scène uttilise l'action pour log un évènement comme "niveau1_fini". Grâce a ça, tu peux voir qui/quels types de /combien de gens réussissent le premier niveau, et si personne ne le réussit tu peux le voir et adapter la difficulté! Tu peux aussi envoyer des données additionnelles comme un score ou le temps pris a finir le niveau.

### Utiliser des propriétés utilisateur

Les propriétés servent a grouper les joueurs. Par exemple, tu peux demander le groupe d'âges d'une personne (0-20, 20-40, 40-60, 60+) au début de jeu, l'enregistrer comme propriété utilisateur, avant de log le score. Tu pourrais en suite trier les scores et voire leur moyenne en fonction de la plage d'âge. Cela peut être utile pour par exemple changer la difficulté du jeu (via la [](/fr/gdevelop5/all-features/firebase/rc)) selon le groupe de la personne pour donner une expérience de jeu personnalisée.

### Déboguer/Tester les événements customisés et les propriétés

Vu que les données n'apparaissent pas très rapidement, comment être sûr que les données sont bien envoyées? D'abord, télécharge [l'extension de débogage d'analytics Google](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna). Ensuite, exporte ton jeu vers HTML5. Mets en suite le jeu sur un serveur web (par example Apache, ou si tu as python `python -m http.server`, etc). En suite va sur le tableau de bord Firebase et sélectionne DebugView: ![](/gdevelop5/all-features/firebase/analytics1.png) Enfin, navigue ver ton serveur web et active l'extension de débogage an cliquant sur son icône. Ça devrait recharger le jeu, et maintenant il devrait apparaître dans DebugView, et tout les événements et changements de propriétés utilisateur devrait y apparaître avec un délai d'environ 20 secondes maximum.
