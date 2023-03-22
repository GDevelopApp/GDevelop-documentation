---
title: particles_emitter
---
FIXME **Cette page n'est pas encore complètement traduite. De plus, la description de l'éditeur de particules n'est pas complète.**
*(remove this paragraph once the translation is finished)*

# Les émetteurs de particules

!!! note

        **Voir en action !** 🎮
    [J'aimerais voir des exemples d'émetteurs de particules ! SVP, montrez-les moi maintenant.](#Examples)

Les émetteurs de particules sont utilisés pour afficher un grand nombre de petites particules. Ils simulent des effets dans un jeu. Les feux, les explosions, la fumée et la poussière sont des exemples d'émetteurs de particules.

![](/gdevelop5/objects/particles-emitters-preview.png)

L'objet **Particles Emitter** (Émetteur de particules) peut être configuré avec une multitude de paramètres différents pour créer les effets souhaités.

## Les types de particules

Pour pouvoir utiliser l'émetteur de particules, créez un nouvel objet à partir de la liste **Objects**. Ce qui ouvre le panneau suivant :

![](/gdevelop5/objects/addnewobject-particlesemitter.png)

Sélectionnez **Particles Emitter** (Émetteur de particules) dans la liste.

Un nouveau panneau s'ouvre alors. Ce panneau contient les propriétés pouvant être définies pour votre émetteur. Vous devrez faire défiler l'écran vers le bas pour afficher toutes les propriétés disponibles.

![](/gdevelop5/objects/particleemitterspanelofchoices.png)

*GDevelop offre 3 types de rendu pour les émetteurs de particules : points, lignes et textures.*

* Le type Points (**Point**) affiche des cercles avec la taille spécifiée. * Le type Lignes (**Line**) affiche des lignes de longueur et d'épaisseur spécifiées. * Le type Texturé (**Textured**) affiche une image de la taille spécifiée.

## Les couleurs

* Vous pouvez choisir une couleur de départ (**Particles start color**) et une couleur de fin (**Particles end color**) pour les particules. Vous pouvez également choisir une valeur de départ pour la transparence de l'objet (**Start opacity**) et une valeur de fin (**End opacity**).

## Direction de l'émission

Les particules seront émises dans la direction représentée par l'orientation des émetteurs sur la scène. Vous pouvez modifier l'angle du * cône de pulvérisation *, qui est également représenté dans l'éditeur de scène par deux lignes : une valeur élevée pour ce * cône de pulvérisation * entraînera une émission de particules dans une grande plages de directions. Une valeur de 0 n'émettra des particules que dans une seule direction.

* Les particules apparaissent dans une sphère centrée sur la position de l'objet émetteur. Vous pouvez changer le rayon de la sphère.
* La gravité peut être appliquée sur des particules, sur les axes X et Y. Par exemple, une valeur négative sur l'axe des Y fera monter les particules en l'air.
* La friction influence la décélération des particules au cours du temps.

## La durée de vie

* Chaque particule a une durée de vie limitée qui est choisie aléatoirement entre deux valeurs. Ces deux valeurs peuvent être changées.
* Le nombre de particules contenues dans l'émetteur ("réservoir") peut être illimité (valeur -1) ou fixé à une certaine valeur. Si ce nombre est spécifié, l'émetteur cessera d'émettre après avoir émis le nombre spécifié de particules.
* Le flux est le nombre de particules créées chaque seconde. Vous pouvez entrer -1 pour tirer toutes les particules en un seul coup.

Vous pouvez également modifier le nombre maximal de particules rendues par l'objet à l'écran. Notez que ce numéro modifie la mémoire utilisée par l'émetteur. // Si ce nombre est trop grand, le jeu risque de planter.//

## Exemples

!!! note

        **Voir en action !** 🎮
    Ouvrez ces exemples en ligne.

[![](/gdevelop5/objects/particleemitterexplosionsnew.png)](https://editor.gdevelop.io/?project=example://particles-explosions)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://particles-explosions){ .md-button .md-button--primary }

[![](/gdevelop5/objects/particleemitervariousnew.png)](https://editor.gdevelop.io/?project=example://particles-various-effects)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://particles-various-effects){ .md-button .md-button--primary }
