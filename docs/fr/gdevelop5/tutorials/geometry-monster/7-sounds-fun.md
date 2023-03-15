---
title: 7-sounds-fun
---
FIXME **Cette page est entièrement traduite. Veuillez cependant corriger toutes les erreurs et les éventuelles imprécisions.**_(supprimer ce paragraphe une fois les modifications terminées)_

⬅️ **[Étape précédente : 6. Détection des collisions](/fr/gdevelop5/tutorials/geometry-monster/6-collision-detection)** ➡️ **[Étape suivante : 8. Suivi du score](/fr/gdevelop5/tutorials/geometry-monster/8-tracking-score)**

# 7. Bruitages amusants

La [détection des collisions](/fr/gdevelop5/tutorials/geometry-monster/6-collision-detection) est à elle seule brève et "nue", mais lorsque Monster et la forme entrent en collision, rien ne se passe mise à part la destruction de la forme. Nous pouvons profiter de cette condition (la détection d'une collision) et y ajouter quelque chose de plus, un ***son*** (bruitage).

Ajoutez une action, sélectionnez **Monster** puis l'onglet **OTHER ACTIONS** (Autres actions).

![](/gdevelop5/tutorials/geometry-monster/101.png)

Recherchez **Audio** dans le menu déroulant qui s'ouvre, optez pour **Play a sound** (Jouer un son). Dans le panneau de droite, cliquez sur **Choose a new audio file** (Choisir un nouveau fichier audio).

![](/gdevelop5/tutorials/geometry-monster/102.png)

Cette action ouvre une fenêtre contextuelle où vous pourrez choisir et charger un fichier audio qui sera joué lorsque une forme est collectée par le monstre. Pour nous, il s'agit du fichier `monster.wav`.

![](/gdevelop5/tutorials/geometry-monster/103.png)

Si vous l'avez sélectionné correctement, vous devriez voir le nom du fichier son qui sera utilisé.

![](/gdevelop5/tutorials/geometry-monster/104.png)

!!! note

    Assurez-vous que **Repeat the sound** (Répéter le son) est réglé sur **NO** car nous voulons que le son ne soit joué qu'une seule fois lorsque le monstre récupère la forme. Le volume par défaut est `100`.

![](/gdevelop5/tutorials/geometry-monster/105.png)

Maintenant que le bruitage est programmé, nous pouvons commencer à penser à [suivre le score](/fr/gdevelop5/ tutoriels/ geometry-monster/ 8-tracking-score).

⬅️ **[\|Étape précédente : 6. Détection des collisions](/fr/gdevelop5/tutorials/geometry-monster/6-collision-detection)** ➡️ **[Étape suivante : 8. Suivi du score](/fr/gdevelop5/tutorials/geometry-monster/8-tracking-score)**
