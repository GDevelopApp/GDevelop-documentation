---
title: Recherche de nouvelles extensions
---
# Recherche de nouvelles extensions

!!! tip

    **Voir la [liste des extensions GDevelop](/gdevelop5/extensions)**.

Trouver de **nouveaux comportements, conditions, actions ou expressions** pour votre jeu dans GDevelop est facile. Dans le [Project Manager](/gdevelop5/interface/project-manager), clique sur "Functions/Behaviors", puis sur "Search for new extensions" :

![](/gdevelop5/extensions/search-new-extensions-button.png)

Un dialogue montrera une barre de recherche et une liste d'extensions disponibles :

![](/gdevelop5/extensions/extension.png)


Tapez quelque chose dans la barre de recherche pour filtrer les extensions en fonction de ce que vous souhaitez. Vous pouvez également explorer les extensions en cliquant sur les balises situées sous la barre de recherche.
!!! tip
    
        
    Ou vous pouvez importer un fichier d'extension avec le bouton **Importer une extension**.

Les extensions sont présentées avec leur nom, suivi d'une courte description. Cela devrait vous donner une idée de ce que l'extension peut faire dans votre jeu.

## Installer une extension

Si vous trouvez une extension intéressante, cliquez dessus pour ouvrir une fenêtre avec plus de détails. Par exemple, voici un aperçu de l'extension "Flash (blink)" :

![](/gdevelop5/extensions/flash-extension.png)

La description explique généralement comment utiliser l'extension. Ici, c'est un comportement que vous pouvez ajouter à un objet, avec une action pour faire clignoter l'objet pendant un certain temps (comme dans un vieux jeu de plateforme, quand vous êtes touché par un ennemi).

Cliquez sur **Installer dans le projet** pour télécharger l'extension. Vous pouvez voir qu'elle est alors ajoutée à la liste des comportements/fonctions dans le [Project Manager](/gdevelop5/interface/project-manager) :

![](/gdevelop5/extensions/extensions-list-with-flash.png)

## Utiliser la nouvelle extension

Une fois que l'extension est installée, vous pouvez généralement :

* Trouvez-là dans la liste des **comportements**, lorsque [adding a new behavior](/gdevelop5/behaviors)à un objet.
* Même si aucun comportement n'est fourni, vous aurez quelques **actions ou conditions**. Trouvez-les dans la liste des actions ou des conditions lorsque vous éditez un événement. Le nom de la catégorie qui les contient est le même que celui de l'extension.

Par exemple, l'extension *Flash* fournit 2 nouvelles actions :

![](/gdevelop5/extensions/flash-extension-actions.png)

Elles peuvent être utilisées sur les objets qui ont le comportement *Flash* attaché.

## Créer vos propres comportements, actions, conditions ou expressions

Il est possible de créer facilement de nouvelles extensions, en utilisant les mêmes événements que ceux que vous utilisez dans les scènes. C'est une fonctionnalité puissante qui vous permet d'organiser votre jeu et d'étendre vos objets.

Lisez plus sur [créer vos propres extensions ici](/gdevelop5/extensions/create).

# Ajouter une extension manuellement

Dans le panneau de recherche de nouvelles extensions, en bas du panneau vous avez un bouton **IMPORTER UNE EXTENSION**, cela ouvrira un sélecteur de fichier de votre OS, vous devez sélectionner un format de fichier **.json**.

Une fois que vous avez sélectionné votre fichier et confirmé votre choix dans le sélecteur de fichiers, l'extension est ajoutée à votre projet.
Les comportements/conditions/actions/expressions sont maintenant disponibles dans GDevelop avec les autres comportements ou événements.