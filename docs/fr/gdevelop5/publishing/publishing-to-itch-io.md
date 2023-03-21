---
title: Publier votre jeu sur itch.io
---
# Publier votre jeu sur itch.io

## Qu'est-ce que itch.io ?

![](/gdevelop5/publishing/app-iecon_copy.png) [itch.io](https://itch.io) est un site d'hébergement et de vente de jeux ouvert à tous avec une attention particulière portée sur les développeurs indépendants.

Les développeurs ont accès à une analyse détaillée sur les visites de leurs créations comme le nombre de téléchargement ou les sites de provenance.

------------------------------------------------------------------------

## Pourquoi itch.io ?

- Il est complètement **gratuit et ouvert à tous**.
- La **préparation du contenu** à envoyer est simple
- Les **mises à jour** de contenu sont tout aussi simple.
- Un carnet de bord "Devlog" est intégré.
- Il laisse le choix **d'activer les commentaire** et de mettre en place un **forum pour la communauté**.
- Il n'y aucune restriction sur la qualité du contenu.
- Le contenu envoyé est optimisé pour les moteurs de recherches.
- Les jeux partagés peuvent être compatible Windows, Linux, Mac, Android ou des jeux HTML5 jouables directement dans un navigateur.
- Il permet de **gagner de l'argent** sans officialiser une structure juridique. itch.io gère les paiements, les demandes de remboursement, paye les taxes pour vous et les bénéfices peuvent être récupéré à tout moment.
- Dans le cas d'une officialisation de structure, itch.io continue de gérer les transactions mais les taxes et les demandes de remboursement sont à votre responsabilité.
- Un **prix** peut être défini pour vos créations mais il est possible de les distribuer **gratuitement** ou d'accepter les dons. La décision du prix peut également être laissé à l'acheteur.
- La part de bénéfice reversé à l'hébergeur est aussi flexible. C'est ce rend itch.io unique en son genre. Cette part peut être de 0%. itch.io hébergera néanmoins vos créations gratuitement en espérant qu'un futur succès vous donnera envie de les remercier.
- **Aucune publicité** ne vient perturber l'exploration des jeux.
- Il est compatible avec Patreon et permet de donner l'accès à votre contenu aux personnes qui vous soutiennent.

Il est cependant uniquement en anglais : amis non-anglophones, passez votre chemin !

## Exporter un projet

![](/gdevelop5/publishing/screenshot_20190602191918.png) Commençons par exporter notre jeu dans une version prête à être publiée et jouable depuis un navigateur ou exécutable sur un ordinateur. **Cliquez** sur l’icône à gauche de ce texte. Elle est **en haut à gauche** de la fenêtre de GDevelop.

![](/gdevelop5/publishing/screenshot_20190602192225.png)

Une boite de dialogue apparait et permet de choisir pour quelle plateforme exporter le jeu. Ce tutoriel se concentre sur l'export HTML5 qui permet de jouer directement depuis un navigateur. Défilez vers le bas si nécessaire jusqu'à voir apparaitre **Advanced** et choisissez **Dossier local**.

![](/gdevelop5/publishing/screenshot_20190602192758.png)

Créez un dossier vide sur votre ordinateur et choisissez-le en cliquant sur **Choose Folder**. Ici, le dossier **Endless Runner** a été choisi.

## Créer une archive Zip du projet exporté

Préparer un jeu pour itch.io est très simple. La seule chose à faire est d'archiver le dossier exporté dans un fichier ZIP. Il faut tout de même bien veiller à ce que le fichier "index.html" soit dans le dossier archivé et non dans un sous-dossier.

Pour compresser le dossier au format ZIP, vous aurez besoin d'un logiciel de compression. Il en existe de nombreux. En voici un très couramment utilisé : [7-Zip](http://www.7-zip.org), il est complètement gratuit et facile à utiliser. Téléchargez donc 7-Zip et installez-le. Une fois cela fait, faites un clic droit sur le dossier contenant votre jeu : vous devriez voir apparaitre 7-Zip dans la liste des choix. Cliquez sur "Ajouter à l'archive".

![](/gdevelop5/7zip-add-to-archive.png)

Si le clic droit sur le dossier ne permet de faire apparaitre 7-Zip dans la liste de choix, lancez 7-Zip normalement, puis cliquez sur le bouton "Ajouter".

![](/gdevelop5/7zip-add-button.png)

Différentes options s'offrent alors à vous, ne vous en préoccupez pas ! Cliquez simplement sur "OK" afin de lancer la création de votre fichier Zip. Une fois cela fait, le fichier Zip obtenu sera prêt à être chargé sur itch.io

## Envoyer votre projet sur itch.io

Vous allez ensuite devoir [créer votre compte itch.io](https://itch.io/register). Il s'agit là d'une procédure classique, suivez simplement les instructions qui vous sont données par le site. (nous ne détaillerons pas toute la procédure dans cet article)

Une fois votre comte itch.io créé, connectez-vous, allez sur la page "Dashboard", puis cliquez sur le bouton "Create new project"

![](/gdevelop5/itchio-create-new-project-button.png)

Vous pouvez à présent paramétrer votre projet. Voici les rubriques principales :

- **Title :** C'est le titre de votre jeu, il doit être unique.
- **Project URL :** C'est l'adresse URL où votre jeu sera sur itch.io. Ordinairement, ce devrait être proche de cela : votrenom.itch.io/nom-de-votre-jeu. Le nom du jeu dans l'URL peut être ce que vous désirez, c'est à vous de choisir librement.
- **Classification :** Vous choisissez ici le type de contenu que vous voulez charger : jeu, livre.... (dans notre exemple, nous choisirons bien entendu "game" )
- **Kind of project :** vous choisissez ici le type de projet que vous désirez charger : jeu télechargeable, HTML, ... Nous choisirons pour notre exemple "HTML"
- **Pricing :** C'est ici que vous choisissez si votre jeu : accepte les dons, est payant ou est gratuit.
- **Uploads :** C'est grâce à ce bouton que vous pouvez charger votre jeu sur itch.io

![](/gdevelop5/itchio-upload-files-button.png)

Cliquez sur le bouton "Uploads", et sélectionnez le fichier ZIP que vous venez de créer : le chargement commence. Une fois terminé, vous aurez le choix entre différentes options :

![](/gdevelop5/ithio-upload-file-options.png)

Vous pouvez choisir si le fichier que vous venez de charger est un exécutable, un livre, un code source ou un mode. Vous pouvez également choisir la plateforme et le prix pour chaque fichier que vous aurez chargé. L'option la plus importante pour nous dans notre exemple est "This file will be played in the browser".

![](/gdevelop5/itchio-play-in-browser-option.png)

En cochant la case, cela permettra de pouvoir lancer notre jeu HTML dans les navigateurs.

Enfin, cliquez sur le bouton "Save and view page".

![](/gdevelop5/itchio-save-view-page-button.png)

Après avoir chargé un aperçu de la page de notre jeu, le jeu se lancera dans votre navigateur (si vous n'avez pas fait d'erreur !).

## Partager votre projet

La dernière chose restante à faire est à présent de rendre le jeu public afin que tout le monde puiss y jouer. Pour faire ceci, cliquez sur le bouton "Edit game" en haut (ou retournez sur le Dashboard) La page de création de projet va s'ouvrir, et vous pourrez activer l'option afin de rendre votre jeu public.

![](/gdevelop5/itchio-set-public.png)

Cliquez ensuite sur le bouton "Save".

Voilà, c'est terminé ! Tout le monde est à présent en mesure de trouver et jouer à votre jeu ! Vous avez également la possibilité de partager un lien afin qu’un maximum de personnes joue à votre jeu !

!!! note

    N'oubliez pas de renseigner GDevelop comme moteur utilisé dans les métadonnées. Il apparaitra sur [la page "made with GDevelop"](https://itch.io/games/made-with-gdevelop) 
