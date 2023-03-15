---
title: draft-optimization
---
FIXME **This page is not fully translated, yet. Please help completing the translation.**  
*(remove this paragraph once the translation is finished)*

!!! note

    This page is a draft for good rule to apply for optimize a game. \<note warning\>This is a draft in progress @Bouh

L'optimisation d'un jeu est un concept important à prendre en compte, ceci pour faire gagne quelques images par secondes et des temps de chargement moins long. Une bonne optimisation permettra à votre jeux de tourné plus rapidement sur n'importe quel support (téléphone ou pc).

GDevelop 5 permet une liberté dans les événements qui peut se retourné contre vous en cas de mauvaises pratiques ou compréhension des événements, mais également d'une mauvaise utilisation des comportements et de la tailles énorme sur les ressources importé (vidéo, image, audio).

Tout celà peut être coûteux pour votre jeux et aura comme effets de ralentir votre jeux sur les appareils n'ayant pas énormément de mémoire et de puissance.

Pour la suite de cet article il est important de comprendre [les principes de base des événements](/fr/gdevelop5/tutorials/basic-game-making-concepts##comment_les_evenements_affectent_les_objets) et que *tout les événements sont exécuté une fois par image durant l’exécution du jeux*.

# Optimisation déjà présente dans le moteur du jeu

Le moteur de jeu GDevelop dispose d'une optimisation très simple, il dit à l'interface graphique de ne pas calculé les images des objets hors de la zone de rendu. Le moteur s'occupe de cette optimisation en tache de fond et est complètement transparent pour les utilisateurs et joueurs.

Dans la suite de cette page sur l'optimisation nous allons prendre quelque cas et voir comment les rendre plus performant.

# Trigger once

La condition **Tigger once** permet à des actions d'être éxécuté une seule fois, chaque fois que la ou les conditions sont vrais.

Prenons un exemple où nous voulons créer un objet chaque fois que je clique sur la souris. Ceci vous montrera la mauvaise et la bonne façon de le faire.

La mauvaise: ![](/gdevelop5/events/bad_event_optimisation.png)

- Ce que je pense avoir : Lorsque le bouton gauche de la souris est pressé, un objet appelé **MyObject** est créer sur la scène aux position du curseur.
- Ce qui se passe vraiment : Lorsque le bouton gauche de la souris est pressé, beaucoup d'objets appelé **MyObject** sont créer sur la scène à la position du curseur.

Cela se produit lorsque le bouton de la souris est enfoncé car la pression sur la touche dure un certain temps, durant tout ce temps des objets seront créés.

Pour corrigé ceci nous avons besoin de **Trigger once** qui se trouve dans les conditions, ajoutons le à nos événements pour n'avoir qu'un seul nouvel objet. ![](/gdevelop5/events/good_event_optimisation.png)

# Sprites

Les sprites ont deux aspects important, leur poids en Ko, Mo, Go et les dimensions en pixels. Il est naturel d'avoir un niveau de jeux gigantesque et d'y mettre une image de fond comme un ciel par exemple sur la totalité du niveau. Evidemment ceci n'est pas conseillé car si cela est naturel pour vous ça ne l'est pas pour le moteur de jeu et les appareils sur lesquels tournera votre jeu.

Notamment à cause des images dépassant 2048 pixels de côté. Les images lourde en poids quand à elle ralentirons les temps de chargement.

!!! note
    
         **Pourquoi il ne faut pas dépasser 2048 pixels de côté ?**
    
    Les images plus grande peuvent ne pas s'afficher correctement sur certains téléphones. Sachez aussi que plus une image est grande, plus elle prendra de la place en mémoire, se qui est important à prendre en compte car les téléphones ne sont pas aussi performant qu'un ordinateur. 

Il est recommandé de découper les images dépassant cette taille. Il existe aussi [un type d'objet permettant de répété votre image](/fr/gdevelop5/objects/tiled_sprite) sur de longue distance.

# Animations

Les animations sont par exemple utilisé lorsque le personnage de votre jeu se déplace. Plus il y a d'images dans l'animation plus le mouvement est fluide. Toute fois l’œil humain ne nécessite pas d'avoir des dizaines et des dizaines d'images pour avoir un mouvement fluide, donc il est bon de retiré les images similaire qui n'auront visuellement aucun impact sur votre animation.

Il existe aussi des limitations technique possible, comme le fait d'avoir un maximum d'image par seconde dans le jeu. Dans ce cas si votre jeux tourne à 30fps, vous n'avez pas besoin de 60 images.

Ceci est encore plus vrais si vos images sont de très grande en taille. En un mot, réduisez le nombre d'images au strict nécessaire.

# Vidéo

Les vidéos doivent impérativement respecté quelques points pour être charger et lue correctement. Assurez vous de [lire les notes en haut de la page à ce sujet](/gdevelop5/objects/video), toutes les indications vous permettront d'avoir une optimisation optimal pour la vidéo.

# Audio

L'audio contient une particularité, les sons et les musiques sont deux choses différentes pour le moteur de jeu. Ceci permet une optimisation différente selon le type.

- Une musique est souvent longue et doit être préchargé avant d'être lue. - Un son est bref, comme un son de rebond sur le sol, celui-ci est si bref qu'il peut être chargé rapidement sans retard de lecture juste avant sont exécution par une action.

Une page complète pour [l'audio](/gdevelop5/all-features/audio#performance_considerations) est disponible et indiquera les meilleurs solution.

!!! note

    It can still be important to hide or disable what you don't need. This is the key of the optimization.

# Les comportements

Les comportements *Recherche de chemin* et *Physique 2.0* sont gourmand en puissance.

### Supprimer les objets inutile

Prenons un exemple d'un pistolet qui tire des balles, nous créons une balle lorsque nous faisons feu. La balle se dirige vers une direction grâce à une force. A chaque tir une nouvelle balle apparaît et se dirige aussi vers une direction grâce à une autre force qui lui est propre.

Si vous ne géré pas les objets que vous créez, le jeux sera à un moment débordé par le nombre d'objet, ceci affectera votre jeu car celui-ci commencera à ralentir.

La bonne solution consiste à supprimer les balles qui sont hors de l'écran. Un comportement à cet effet existe, vous pouvez l'attaché à votre objet balle. Toutes les balles qui seront hors de l'écran seront immédiatement supprimé.

### Désactiver les comportement sur les objets inutilisé

Les comportements sur les objets peuvent être désactivé.

Prenons un cas où votre jeux contient une centaines d'objet qui sont des gardiens de police et un autre objet qui est le joueur, vous souhaitez que les gardiens se dirigent vers vous toutes les 2 secondes en prenant compte des obstacles autour. Les gardiens disposent du comportement Recherche de chemin qui est rappelez vous, est gourmand en puissance et peut ralentir votre jeu si celui si est mal utilisé.

La mauvaise façon de bouger les gardiens:

-- Image avec le timer , et les gardiens qui bougent vers le joueur.-

Si vous faite seulement ceci tout les gardiens même ceux hors de l'écran bougerons. Nous ne voulons pas qu'ils bougent. Voyons comment limité le comportement des gardiens à ceux qui sont proche du joueur.

-- Image avec la désactivation du comportement pour le gardien en dehors de l'écran (prendre la condition object dans le viewport et l'inversé, mettre aussi le trigger once sur l'event) .-
