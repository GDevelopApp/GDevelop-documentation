---
title: Un tutoriel pour débutants de jeu de course infinie
---
# Un tutoriel pour débutants de jeu de course infinie

>  ![](/gdevelop5/tutorials/endlessrunnergame_intro.png) Ce tutoriel vous aidera à vous familiariser avec le fonctionnement de GDevelop. Dans ce tutoriel, nous allons créer un jeu de course sans fin très basique où **les plateformes sont générées de manière aléatoire** et où le joueur doit se déplacer pour éviter d'être poussé hors de l'écran. Il y a également un **système de score** qui met à jour le score lorsque le joueur est en action.
>
> Pour connaître les bases du fonctionnement du logiciel, vous pouvez vous référer à la page [Commencer](/fr.gdevelop5/getting_started) pour plus d'informations.
>


## Télécharger GDevelop

Si vous n'avez pas encore installé GDevelop, téléchargez-le depuis le site officiel : [GDevelop App](https://gdevelop-app.com/fr/download/).

Il est conseillé de toujours vérifier la page ci-dessus pour les dernières versions de GDevelop et de garder le logiciel à jour à tout moment. Une fois que vous avez téléchargé et installé le logiciel, lorsque vous lancez le programme, vous serez accueilli par un écran "Start".

![](/gdevelop5/tutorials/gdevelopstartscreen.png)

Pour plus de confort, vous pouvez changer la langue par défaut pour le français.

## Principaux éléments du jeu

#### ☆Player Sprite

![](/gdevelop5/tutorials/p1_stand.png) C'est le personnage principal que l'utilisateur va contrôler. Le sprite joueur doit "sauter" pour éviter les obstacles et rester dans l'écran. Il possède des animations **Idle**, **Run** et **Jump**.

#### ☆Platformes/Obstacles

![](/gdevelop5/tutorials/endlessrunnerplatform.png) Ce sont les blocs mobiles que le sprite du joueur doit éviter. Ces blocs seront rencontrés par le joueur de manière aléatoire.

#### ☆Affichage du score

Ce bloc de texte met à jour et affiche le score pendant que le Sprite joueur est en action.

>
>
> #### Télécharger les ressources
>
Vous aurez besoin d'images que vous pourrez utiliser pour créer les personnages, les plateformes et les arrière-plans du jeu. Trouvez toutes les ressources dont vous avez besoin pour ce jeu par ![ici](/gdevelop5/tutorials/endless_runner_resources.rar).

## Étape 1 : Créer un nouveau projet

Une fois sur l'écran de démarrage, cliquez sur le bouton "Créer un nouveau projet".

Une boîte de dialogue "Créer un nouveau jeu" apparaît.

Vous pouvez choisir de personnaliser l'emplacement de votre projet.

![](/gdevelop5/tutorials/store_location_for_endless_runner.png)

Cliquez sur l'option "Choisir un dossier" pour choisir l'emplacement de votre choix. Les fichiers du projet de jeu seront stockés à cet emplacement.

Ensuite, faites défiler la liste et trouvez l'onglet "Jeu vide". Cliquez dessus pour ouvrir un nouveau projet.

![](/gdevelop5/tutorials/screeenshot_na_test.png)

## Etape 2 : Création d'une nouvelle scène

Un jeu repose sur des scènes pour différents scénarios de jeu. Nous pouvons créer et utiliser plusieurs scènes, mais pour ce tutoriel, nous n'avons besoin que de **1 Scène**. Créons une nouvelle scène.

![](/gdevelop5/tutorials/new_scene_creation_for_endless_runner.png)

Cliquez sur la zone où il est indiqué `Cliquez pour ajouter une Scène` pour créer votre première scène vide.

Vous pouvez personnaliser le nom de votre scène en cliquant sur les trois points à côté de la scène créée et en cliquant sur `Renommer`.

> Vérifiez que vous avez déjà téléchargé l'archive mentionnée précédemment. Vous en aurez besoin pour les sprites du jeu.tip

## Étape 3 : travailler sur la nouvelle scène

Cliquez sur la scène que nous avons créée à l'étape précédente pour ouvrir l' **Éditeur de scène**. C'est ici que nous allons créer les éléments du jeu.

![](/gdevelop5/tutorials/new_scene_for_endless_runner.png)

Vous devriez voir l'onglet **Objet** et l'onglet **Propriétés**. ![](/gdevelop5/tutorials/screenshot_20190523182052.png) ![](/gdevelop5/tutorials/screenshot_20190523182628.png) Si par hasard, vous ne voyez pas ces onglets, cliquez sur l'icône affichée à gauche pour ouvrir l'onglet "Objets". De même, cliquez sur l'icône de droite pour ouvrir l'onglet "Propriétés".

>  La dernière version de GDevelop vous avertira si vous essayez de charger une ressource qui n'est pas dans l'emplacement de votre projet de jeu. Veillez à toujours placer vos images dans le même dossier que le jeu (ou un sous-dossier). Sinon, si vous déplacez votre jeu, cela brisera les liens vers les images. Décompressez l'archive fournie dans le dossier du jeu et utilisez ces images. tip

## Etape 4 : Création d'un sprite de joueur

Comme mentionné dans la section **Éléments principaux du jeu**, nous avons besoin d'un personnage que l'utilisateur peut contrôler. Notez que, comme il s'agit d'un jeu de course sans fin, nous voulons seulement que le personnage saute pour éviter les obstacles qui se présentent sur son chemin afin de rester en vie.

![](/gdevelop5/tutorials/screenshot_20190523183140.png)

Cliquez sur la zone `Ajouter un nouvel objet` dans l'onglet Objets pour créer votre premier objet. Une boîte de dialogue s'ouvre et présente les différents types d'objets. cliquez sur l'onglet "Nouvel objet à partir de zéro". Pour notre personnage, nous avons besoin d'un objet de type **Sprite**, où nous pouvons ajouter des animations pour que le personnage soit **Idle**, **Jump**, ou **Running**.

![](/gdevelop5/tutorials/screenshot_20190523183646.png)

En cliquant sur "Sprite(image animée)", une boîte de dialogue permettant de modifier les propriétés de l'objet Sprite apparaît. Nous allons maintenant ajouter des animations pour notre personnage. Pour ajouter votre première animation, cliquez simplement sur le bouton "+Ajouter une animation".

![](/gdevelop5/tutorials/screenshot_20190523184135.png)

Un nouvel emplacement Animation vide apparaît. Nous allons maintenant charger nos images Sprite pour créer notre animation. Comme vous pouvez le remarquer, notre animation a un identifiant `0`. Nous pouvons également donner un nom à notre animation.

Pour notre première animation, nous voulons créer une animation Idle. Cliquez sur le gros bouton **+Ajouter** qui ouvrira une boîte de dialogue pour charger une image. Notez que nous pouvons également ajouter plusieurs images, mais pour cette animation, nous n'en avons besoin que d'une seule.

Choisissez l'image `p1_stand.png` dans l'archive que vous avez téléchargée et décompressée. Après avoir choisi le fichier, le placeholder de l'animation ressemble maintenant à ceci.

![](/gdevelop5/tutorials/screenshot_20190523184730.png)

Notez que j'ai donné à notre objet Sprite le nom "Player". De la même manière, j'ai également attribué un nom à notre animation : " Idle ". L'attribution d'un nom est facultative, mais le fait de nommer les sprites dans votre projet permet de l'organiser et de le rendre plus facile à utiliser.

Notre première animation est terminée. Maintenant, ajoutons les animations **Jumping** et **Running**. Essayez de le faire en utilisant les images fournies dans l'archive que vous avez téléchargée. Il y aura plusieurs images pour l'animation Running, tandis que l'animation Jumping n'aura qu'une seule image selon le fichier archivé fourni. Une fois que vous aurez terminé les trois animations, cela ressemblera un peu à ceci.

![](/gdevelop5/tutorials/screenshot_20190523185739.png)

Comme vous pouvez le voir, l'animation **Run** comporte plusieurs images. ![](/gdevelop5/tutorials/output_xfxzmp.gif) Chaque image a un fichier image séparé. Lorsqu'elles sont exécutées, toutes les images sont lues séquentiellement, créant ainsi une animation en cours. L'animation Run ressemblera à l'action montrée dans l'image de gauche.

Nous allons maintenant ajouter un **Comportement** à notre Sprite de joueur. Les comportements ajoutent des capacités supplémentaires aux objets. Cliquez sur l'onglet Comportements dans la boîte de dialogue Player Sprite. Créez ensuite un comportement en cliquant sur la zone " Ajouter un comportement à l'objet ". Sélectionnez ensuite le type de comportement **Objet se déplaçant sur des plateformes**.

![](/gdevelop5/tutorials/screenshot_20190524121809.png)

Le menu de l'éditeur de comportement va s'ouvrir. Ici, assurez-vous de décocher la fonction **Touches par défaut** pour ce comportement. La propriété des contrôles par défaut ajoute tous les mouvements nécessaires pour un personnage de plateforme, y compris le déplacement à gauche, à droite et le saut. Puisque nous ne voulons pas que notre personnage se déplace à gauche ou à droite, mais que nous avons seulement besoin de l'action Sauter, nous désactivons cette propriété et créons le mouvement Sauter en utilisant les événements.

![](/gdevelop5/tutorials/screenshot_20190524122246.png)

Nous avons maintenant terminé de créer notre Sprite de joueur. N'oubliez pas d'activer la fonction **Loop** pour les animations où plusieurs images ont été utilisées, c'est-à-dire pour l'animation Running dans notre cas. Si nous ne la mettons pas en boucle, l'animation sera jouée une fois et s'arrêtera à la dernière image.

## Étape 5 : Création d'une plateforme

Une plateforme est un objet avec lequel un personnage peut entrer en collision et/ou sur lequel il peut marcher. Pour notre jeu, la plateforme sera les obstacles que le Sprite du joueur doit éviter. Pour créer un objet Plate-forme, cliquez pour ajouter un nouvel objet dans l'onglet Objets et choisissez un type d'objet **Mosaïque**. Il s'agit d'une image qui se répète comme une mosaïque.

![](/gdevelop5/tutorials/tiled_sprite_for_endless_runner.png)

Nous obtenons une boîte de dialogue similaire à celle du Sprite Player que nous avons créé. Cliquez sur la zone "Selectionnez une image" pour choisir l'image de notre plateforme/obstacle. Une fois que vous avez fini de charger l'actif `Platform.png`, la boîte de dialogue ressemblera à ceci.

![](/gdevelop5/tutorials/screenshot_20190615205900.png)

Remarquez que j'ai également changé le nom de l'objet par défaut en "Platform". Changez votre largeur par défaut à *193* et votre hauteur par défaut à *40*, pour le moment. Maintenant, nous devons ajouter un **Comportement** pour cet objet, de la même manière que nous avons ajouté un comportement pour notre Sprite de joueur. Allez dans l'onglet Comportements, cliquez pour "Ajouter un comportement à l'objet" et choisissez le type de comportement **Platforme**.

![](/gdevelop5/tutorials/screenshot_20190524122730.png)

Cliquez sur **Appliquer**, une fois que vous avez terminé. Il est maintenant temps de placer nos objets créés dans l'espace **Scène**.

## Etape 6 : Ajout d'objets à la scène

Glissez et déposez les sprites **Platform** et **Player** de l'onglet Objets et placez-les dans votre scène.

![](/gdevelop5/tutorials/screenshot_20190523193203.png)

Voici à quoi ressemble l'espace Scène après que j'ai placé les deux objets. Notez que la bordure noire que vous pouvez voir est la taille de la **Fenêtre de jeu**. Seuls les éléments situés dans cet espace sont visibles par le joueur. Nous pouvons modifier la taille de la fenêtre en allant dans le **Gestionnaire de projet**-\>**Propriétés**, mais pour l'instant, laissons-la telle quelle.

Cliquez sur l'objet Platform dans l'espace de la scène et faites un **Clic droit**-\>**Copie** ou **Ctrl**+**C** (pour Windows) pour copier l'objet. Nous allons créer plusieurs plateformes pour remplir l'espace de la scène. Après avoir copié, faites **Clic droit**-\>**Coller** pour dupliquer l'objet dans la scène. Faites-le plusieurs fois pour remplir la scène. La scène ressemble maintenant à ceci.

![](/gdevelop5/tutorials/screenshot_20190523193924.png)

Nous devons créer quelques Obstacles/Plateformes supplémentaires vers la droite de l'espace de la scène pour une génération aléatoire plus douce des obstacles. Enfin, nous ajoutons une **Skybox** ou un fond pour notre jeu. Il s'agit d'un objet de type **Sprite**. Essayez d'ajouter cet objet par vous-même. L'objet utilisé ici est `background2.png`. La scène ressemble maintenant à ceci. Remarquez les obstacles supplémentaires créés. Pour placer l'image de fond **derrière** tous les autres objets, nous voulons que son **Z-Order** soit minimal. L'ordre Z peut être modifié dans l'onglet **Propriétés** à gauche.

![](/gdevelop5/tutorials/screenshot_20190523194718.png)

Maintenant vient la partie la plus intéressante. Il est maintenant temps de rendre notre jeu fonctionnel. Apprenez quelques trucs sur les [événements](http://wiki.compilgames.net/doku.php/fr/gdevelop5/events) avant de passer à l'étape suivante.

## Étape 7 : créer des événements/ Rendre le jeu fonctionnel

Les événements sont ce que nous utilisons pour créer les règles de n'importe quel jeu dans GDevelop. C'est ce qui rend GDevelop spécial par rapport aux moteurs de jeu traditionnels. Les événements dans GDevelop vous permettent de programmer visuellement votre jeu sans aucune connaissance ou expérience de programmation, ainsi les personnes de n'importe quel niveau seront capables de créer le jeu réel et de permettre aux joueurs d'interagir avec le jeu.

![](/gdevelop5/tutorials/screenshot_20190523232323.png)

![](/gdevelop5/tutorials/screenshot_20190523232911.png) Ceci étant dit, créons notre premier événement. Cliquez sur l'onglet **NewScene(Events)**. Cliquez ensuite sur l'icône affichée à gauche pour créer un **Evénement** vide.

Pour notre premier événement, nous voulons que notre sprite joueur saute lorsque la touche flèche **Haut** est pressée. Pour ce faire, nous devons ajouter une condition pour détecter si la touche Up est enfoncée ou non. Cliquez sur **Add a condition** et recherchez la catégorie "Keyboard". Choisissez la condition **Key pressed** et faites-lui vérifier la touche Up comme indiqué ci-dessous.

![](/gdevelop5/tutorials/screenshot_s20190523235134.png)

Cliquez sur **OK** pour confirmer et nous aurons notre première condition d'événement. Ensuite, nous devons "Ajouter une action" qui aura lieu si la condition est remplie. Nous voulons que notre personnage saute lorsque la condition spécifiée est remplie. Pour ajouter cette action, cherchez et cliquez sur **Comportement de la plate-forme**-\>**Contrôle**-\>**Simuler la pression sur la touche de saut**.

![](/gdevelop5/tutorials/screenshot_20190524000351.png)

Notez que l'objet doit être défini sur Player car nous voulons que le joueur effectue l'action. Maintenant, nous voulons également que l'animation de saut soit jouée lorsque le Sprite du joueur saute. Pour ce faire, nous ajoutons une autre action pour la même condition d'événement. Cliquez sur **Ajouter une action**-\>**Sprite**-\>**Animation et images**-\>**Changer l'animation** et définissez-la comme indiqué. Notez qu'au lieu d'utiliser des numéros d'identifiant, vous pouvez également utiliser le nom de l'animation. Pour faire référence aux animations en utilisant leur nom, vous devez utiliser l'option **Changer l'animation (par son nom)**. Le nom doit être entre guillemets.

![](/gdevelop5/tutorials/screenshot_20190524000821.png)

![](/gdevelop5/tutorials/screenshot_20190524001313.png) L'onglet Événements ressemblera à quelque chose comme ceci maintenant.

> Ajouter des **Commentaires** est un bon moyen de garder l'éditeur d'événements organisé. Pour ajouter un commentaire, cliquez sur l'icône affichée à gauche. Les commentaires sont utilisés pour décrire ce qui est vérifié et exécuté dans cet événement particulier pour le débogage plus tard.tip

![](/gdevelop5/tutorials/screenshot_20190524001533.png)

![](/gdevelop5/tutorials/screenshot_20190524003448.png) Il est maintenant temps de voir comment l'événement créé fonctionne. Cliquez sur le bouton `Play` pour **Prévisualiser** le projet. Une fenêtre de prévisualisation s'ouvre, dans laquelle nous pouvons tester les différentes fonctions de notre jeu. La fenêtre de prévisualisation nous montre exactement comment le jeu se présente et se comporte lorsqu'il tourne.

![](/gdevelop5/tutorials/bandicam20190524002201609.gif) Pour l'instant, nous voulons tester l'événement que nous venons de créer, c'est-à-dire faire sauter notre personnage et jouer l'animation de saut en sautant. Utilisez la touche de déplacement vers le haut pour tester l'action de saut.

Nous pouvons voir notre personnage sauter et l'animation a maintenant changé pour l'animation de saut spécifiée. Notez que le personnage reste dans l'état d'animation de saut même après être revenu au sol. Nous traiterons ce problème lorsque nous créerons d'autres événements.

## Faire bouger les obstacles

Pour le deuxième événement, nous allons maintenant faire en sorte que les obstacles/plates-formes se déplacent vers la gauche de l'écran. Pour ce faire, nous devons spécifier une force grâce à laquelle les obstacles se déplacent à une certaine vitesse. Tout d'abord, cliquez pour ajouter un nouvel événement comme vous l'avez fait pour notre premier événement. Il n'est pas nécessaire de spécifier une quelconque condition pour l'instant. Concentrons-nous sur les actions.

![](/gdevelop5/tutorials/screenshot_20190604123755.png)

![](/gdevelop5/tutorials/bandicam201905gg24124850768.gif) Pour notre première action, choisissez l'objet **Plateforme** puiscliquez sur l'action **Mouvement**-\>**Ajouter une Force(Angle)**. et attribuez-lui un angle **180** (en spécifiant la direction gauche) et une vitesse **250**. Vous pouvez tester l'action que nous venons de créer en utilisant le bouton Play pour voir un aperçu. Vous pouvez voir les obstacles se déplacer vers la gauche. Remarquez que lorsque le Sprite du joueur entre en contact avec la Plate-forme/Obstacle, il se déplace également (glisse) vers la gauche. Nous ne voulons pas que notre personnage bouge lorsqu'il **est sur le sol** de la plateforme. Notre prochain événement s'occupe de cela.

------------------------------------------------------------------------

Comme mentionné ci-dessus, nous devons résoudre le problème de glissement du Player Sprite. Pour ce faire, nous allons utiliser un nouvel événement. Cliquez pour ajouter un nouvel événement, et "Ajouter une condition", **Comportement de la plateforme**-\>**Options**-\>**Is on floor**. Choisissez l'objet **Player** car c'est ce que nous essayons de vérifier, c'est-à-dire si le personnage "st "sur le sol".

![](/gdevelop5/tutorials/screenshot_20190524130158.png)

Maintenant, nous devons ajouter une action correspondante. Ajoutez une action à cet événement, similaire à celle que nous avons ajoutée pour l'obstacle/plateforme pour le faire se déplacer vers la gauche. Cette fois, nous devons faire en sorte que notre personnage se déplace vers la droite lorsqu'il se trouve sur le sol de la plate-forme. Nous disons "se déplacer vers la droite" mais notre personnage ne se déplace pas vraiment. Il équilibre simplement le mouvement négatif de la plate-forme ou de l'obstacle afin que le personnage ne glisse pas. Essayez d'ajouter cette action vous-même.

> Introduction : Cliquez sur Ajouter une action. Trouvez **Actions communes à tous les objets**-\>**Mouvement**-\>**Ajouter une Force(Angle)**. Puis choisissez **Joueur** comme objet et attribuez-lui un angle **0**(spécifiant la direction de droite) et une vitesse **250**.tip

![](/gdevelop5/tutorials/screenshot_20190604124748.png)

![](/gdevelop5/tutorials/bandicam201fg90524131437905.gif) Maintenant vous pouvez lancer l'aperçu des événements que nous avons créés. Vous pouvez voir que le problème de glissement a été résolu et que la mécanique de base du jeu a été créée avec succès, c'est-à-dire que le personnage peut sauter pour éviter les obstacles et que les obstacles se déplacent constamment vers le personnage. Notez qu'à ce stade, les obstacles sont limités et le personnage se retrouve rapidement à court de plateformes sur lesquelles sauter. Nous allons travailler sur ce problème lors de notre prochaine étape.

------------------------------------------------------------------------

Nous devons également faire en sorte que le personnage joue l'animation **Run** lorsqu'il est au sol. Puisque nous avons déjà créé un événement pour vérifier la condition "Is on floor", nous pouvons simplement ajouter une autre action pour ce même événement. Cliquez sur **Ajouter une action**-\>**Sprites**-\>**Animation et images**-\>**Changer l'animation**. Indiquez ensuite l'objet et l'identifiant d'animation correct pour jouer cette animation particulière. Pour ce jeu, nous avons enregistré notre animation Run avec l'identifiant `2`. Vous pouvez également utiliser le nom de l'animation comme identifiant. Pour faire référence aux animations en utilisant leur nom, vous devez plutôt utiliser l'option **Changer l'animation (par son nom)**. Si vous utilisez un nom, n'oubliez pas de le mettre entre guillemets (") car il s'agit d'une chaîne de caractères.

![](/gdevelop5/tutorials/screenshot_20190524155500.png)

## Rendre le jeu infini

Créez un nouvel événement. Dans cet événement, nous allons rendre les plateformes **infinies**. Avant de continuer, retournez dans l'espace de la scène et analysez la position X de la **dernière** tuile de plateforme/obstacle.

![](/gdevelop5/tutorials/screenshot_20190524165044.png)

Comme vous pouvez le voir, la position X de la dernière tuile est *1550* pour moi. Ne vous inquiétez pas si c'est différent pour vous. Quelle que soit la valeur, nous l'utiliserons pour rendre les plateformes infinies. Maintenant, `Ajoutez une condition` pour ce nouvel évènement. Trouvez **Conditions communes à tous les objets**-\>**Position**-\>**Comparez la position X d'un objet**. Choisissez l'objet "Plateforme" avec le signe de modification **≤ (inférieur ou égal à)** et la valeur disons **-200**.

Nous vérifions et **comparons** la position X de la **première** tuile de la plateforme. La condition est que si la position X de la plateforme est ≤-200, alors l'action correspondante sera exécutée. Maintenant, vous vous demandez peut-être pourquoi la valeur __ -200__ ? Eh bien, notre espace de scène position X commence à partir de la valeur *0*. Nous devons détecter quand la tuile la plus à gauche de notre plateforme sort de l'espace de scène. Nous avons choisi -200 comme position X arbitraire, qui est hors de l'espace de la scène.

![](/gdevelop5/tutorials/screenshot_20190614211353.png)

Une fois que la condition est en place, nous allons **Ajouter une action**. Trouvez **Les conditions communes à tous les objets**-\>**Position**-\>**Changer la position X d'un objet**. Maintenant, nous utilisons la valeur de la position X de la dernière tuile que je vous ai demandé de mémoriser. Pour moi, c'était *1550*. Maintenant, nous choisissons "Platform" comme objet, le signe de modification est **= (égal)** et la valeur est **1550**. Cliquez sur **OK** pour confirmer et voilà notre événement terminé.

![](/gdevelop5/tutorials/bandicam20190614211720602_1_.gif) Ce que nous avons fait dans cet événement, c'est que nous avons mis en place une **Loop** pour nos tuiles Obstacle/Plateforme. Dès qu'une tuile sortait des limites, c'est-à-dire de l'espace de la scène, elle était **téléportée** à une position X (*1550* dans mon cas) vers la droite. Ainsi, les tuiles Obstacle continuent à tourner en boucle et le jeu tourne sans fin.

## États de jeu

Nous allons maintenant ajouter des **états** à notre jeu. Les états décrivent le statut de notre jeu. Il peut être considéré comme un drapeau, pour détecter quand le personnage est en action ou quand le personnage est tombé de la plate-forme. Cela est nécessaire pour décider d'un état de "Game Over" et donc de redémarrer le jeu. Nous pouvons enregistrer l'état en créant simplement une **variable de scène**. Il y aura 3 états pour notre jeu.

- Le premier état ou l'état initial est celui où le jeu n'a pas encore commencé et où l'utilisateur doit le démarrer. Nous allons nous référer à cet état en utilisant la valeur **0**.

&nbsp;

- Le deuxième état est celui où le personnage ou Player Sprite est en action. Nous allons nous référer à cet état en utilisant la valeur **1**.

&nbsp;

- Le troisième état est l'état "Game Over" lorsque le personnage tombe de la plate-forme. Nous allons nous référer à cet état en utilisant la valeur **2**.

![](/gdevelop5/tutorials/0endlessrunner_flow.jpg)

Tout d'abord, nous devons configurer une variable pour stocker l'état actuel du jeu. Créez un nouvel événement. **Ajoutez une condition**-\>**Scène**-\>**Au début de la scène**.

Ensuite, **Ajoutez une action**-\>**Variables**-\>**Valeur d'une variable de scène**. Donnez un nom à votre variable, **Etat** par exemple, et attribuez-lui la valeur **0**. Cela place le jeu dans l'état initial d'avant le jeu au début de la scène.

![](/gdevelop5/tutorials/screenshot_20190621003505.png)

Nous ne voulons pas que notre jeu commence immédiatement. Nous voulons qu'il démarre après que l'utilisateur ait appuyé sur une touche.

En d'autres termes, nous voulons que le jeu **démarre** lorsque la valeur de la variable de scène state est à **1**. Modifions nos événements.

> Introduction : dans l'événement où nous avons spécifié une force pour que la plate-forme se déplace, nous allons maintenant ajouter une condition. Cliquez sur **Ajouter une condition**-\>**Variables**-\>**Valeur d'une variable de scène**. Définissez-la pour vérifier si la valeur est égale à **1**.tip

![](/gdevelop5/tutorials/screenshot_20190621000230.png)

Voyez les modifications que j'ai apportées à nos événements : j'ai ajouté une nouvelle condition et créé quelques **sous-événements**. La condition d'un sous-événement n'est testée que si la condition de l'événement parent donne un résultat `vrai`. Dans notre cas, si le jeu est dans l'état **initial** (événement), ce n'est qu'alors que les sous-événements vérifieront les conditions respectives et effectueront les actions correspondantes.

Pour convertir un événement en sous-événement, vous devez faire glisser cet événement pour le placer sous un événement parent auquel il est associé. Vous remarquerez une indentation dans l'échelle événement-sous-événement qui confirme que les événements en indentation sont des "sous-événements" par rapport à l'événement parent.

Les sous-événements **fonctionnent** uniquement si la condition de l'événement est vraie. Si la condition de l'événement parent résulte en `faux`, les conditions des sous-événements ne seront pas vérifiées et donc, leurs actions correspondantes ne seront pas exécutées même si les conditions des sous-événements résultent en `vrai`.

> ![](/gdevelop5/tutorials/screenshot_20190621002408.png) Pour ajouter un nouveau sous-événement au complet, cliquez pour choisir l'événement pour lequel nous créons les sous-événements. Ensuite, cliquez sur l'icône affichée à gauche. Vous pouvez trouver cela dans le menu de navigation de GDevelop.

Maintenant, à moins que la valeur de la variable scène soit **1**, le jeu ne démarrera pas, c'est-à-dire que les plateformes ne bougeront pas et que le joueur ne pourra pas sauter.

Nous avons besoin que l'utilisateur démarre le jeu en appuyant sur une touche. Pour ce faire, ajoutez un nouvel événement. Nous avons besoin de deux conditions ici. Une pour vérifier la valeur de la variable scène et une autre pour détecter si la touche est pressée ou non. Ces deux conditions ont déjà été ajoutées sous une forme ou une autre dans les autres événements. Essayez de le faire vous-même ;-)

![](/gdevelop5/tutorials/screenshot_20190524233235.png)

>  Astuce : Pour la première condition, nous devons vérifier la valeur de l'état de la variable de scène. Cliquez sur **Ajouter une condition**→**Variables**→**Valeur d'une variable de scène**. Paramétrez-la pour vérifier si la valeur est égale à **0**. Pour la deuxième condition, **Ajoutez une condition**-\>**Clavier**-\>**Touche enfoncée**, puis paramétrez-la pour vérifier si la touche **Haut**. tip

Maintenant, nous ajoutons l'action pour changer l'état du jeu. Nous voulons changer la valeur de la variable de scène à 1. Cliquez sur **Ajouter une action**-\>**Variables**-\>**Valeur d'une variable de scène**. Puis donnez un nom à votre variable, **Etat** par exemple, et attribuez-lui la valeur **1**. Cela ressemblera à quelque chose comme ceci.

![](/gdevelop5/tutorials/screenshot_20190524234531.png)

Vous pouvez maintenant tester le fonctionnement du jeu. Vous remarquerez que le jeu ne démarre pas dès que vous cliquez sur le bouton Play. Vous devez appuyer sur la touche Haut pour lancer le jeu. Revoyez ce que nous avons fait ci-dessus si vous n'avez pas compris ce qui s'est passé :-P

Maintenant, nous devons travailler sur le troisième état, c'est-à-dire lorsque le jeu se termine parce que le personnage tombe de la plate-forme. Nous devons vérifier les positions X et Y de notre personnage, c'est-à-dire vérifier si le personnage est à l'intérieur de l'espace scénique. S'il se trouve à l'extérieur, il est évident qu'il est tombé de la plate-forme ou qu'il a été poussé hors de l'écran. Nous vérifions ces conditions et changeons l'état du jeu en état **Game Over**.

![](/gdevelop5/tutorials/screenshot_20190614213834.png)

Dans cet événement, nous utilisons le concept d'une condition et d'une sous-condition. Avant d'entrer plus avant dans la logique, mettons d'abord en place cette échelle condition-sous-condition. **Ajouter une condition**-\>**Avancé**-\>**Or**. C'est la condition principale que nous utilisons. Après avoir confirmé et établi cette condition, vous remarquerez que vous pouvez maintenant ajouter des **sous-conditions**. Essayez de le faire vous-même en regardant l'image ci-dessus.

>  Conseil : Trouvez les **conditions communes à tous les objets**-\>**Position**-\>**Comparez la position X d'un objet**. Choisissez l'objet "Player" avec le signe de modification **≤ (inférieur ou égal à)** et la valeur disons **-69**. De même, pour la sous-condition suivante, trouvez **Conditions communes à tous les objets**-\>**Position**-\>**Comparez la position Y d'un objet**. Choisissez l'objet "Joueur" avec le signe de modification **≥ (supérieur ou égal à)** et la valeur disons **-550**. tip

Maintenant, comprenons ce que nous avons fait ici. La condition que nous avons ajoutée spécifie une règle telle que si même une des sous-conditions est vraie, alors l'action associée à cet événement sera exécutée. Puisque le jeu se termine s'il tombe (position Y) **ou** est poussé en dehors de l'écran (position X), nous vérifions donc la position X et la position Y.

Maintenant nous voulons changer l'état du jeu quand cela se produit, donc nous ajoutons une action pour changer la valeur de la variable de scène en **2**, le troisième état requis.

![](/gdevelop5/tutorials/bandicam20190525005610196.gif) Vous pouvez maintenant tester le jeu. Vous remarquerez que si vous tombez ou êtes poussé, le mouvement des obstacles s'arrête. Cela montre que le jeu a atteint avec succès l'état **Game Over**. Dans notre prochain événement, nous allons travailler sur le **redémarrage** du jeu, lorsque l'utilisateur appuie sur une touche.

---

## Redémarrer le jeu

![](/gdevelop5/tutorials/screenshot_20190526175455.png) Nous voulons que le jeu redémarre lorsque l'utilisateur appuie sur un bouton après avoir atteint l'état **Game Over**. Pour ce faire, créons un nouvel événement. Nous voulons vérifier si l'état du jeu est **2**. Si c'est le cas, nous voulons que l'utilisateur appuie sur la touche **Entrée/Retour** pour redémarrer le jeu. Pour cela, nous ajoutons deux conditions, une pour vérifier la valeur de la variable d'état et une autre pour vérifier si la touche Entrée est enfoncée. Essayez d'ajouter les conditions vous-même ou consultez l'astuce si vous êtes bloqué.

>  Astuce : Pour la première condition, nous devons vérifier la valeur de la variable d'état de la scène. Cliquez sur **Ajouter une condition**→**Variables**→**Valeur d'une variable de scène**. Paramétrez-la pour vérifier si la valeur est égale à **2**. Pour la deuxième condition, **Ajoutez une condition**-\>**Clavier**-\>**Touche enfoncée**, puis paramétrez-la pour vérifier si la touche **Retour** est enfoncée. tip

Ensuite, nous devons ajouter une action pour redémarrer le jeu ou la **scène**. Pour ce faire, **Ajouter une action**-\> **Scène**-\> **Changer la scène**. Puis indiquez le nom de notre scène entre guillemets. Sélectionnez l'option **Stop any other paused scenes**. Cette option n'est pas nécessaire pour notre jeu puisqu'il ne contient qu'une seule scène, mais elle peut être bénéfique pour augmenter les performances des jeux ayant un grand nombre de scènes.

![](/gdevelop5/tutorials/screenshot_20190526174010.png)

Maintenant, après avoir atteint l'état **Game Over**, lorsque l'utilisateur appuie sur la touche **Entrée**, le jeu redémarre et passe à l'état **initial**, c'est-à-dire l'état où l'utilisateur doit appuyer sur le bouton Up pour démarrer le jeu.

Vous pouvez maintenant tester votre jeu et remarquer le changement d'état. Il ne reste plus qu'à ajouter un système de **score** et quelques **instructions textuelles** pour aider l'utilisateur à connaître les états du jeu.

------------------------------------------------------------------------

## Ajout d'un système de score

Un système de score est un élément nécessaire dans chaque jeu. L'ajouter à notre jeu est très facile car nous n'avons pas besoin d'ajouter de nouveaux événements. Nous allons modifier certains des événements que nous avons déjà créés pour les adapter à ce système. Nous voulons que le score commence à 0 à chaque fois que le jeu commence. Le score continue de s'actualiser jusqu'à ce que l'état Game Over soit atteint. Tout d'abord, créons une variable **objet** pour stocker cette valeur de score.

>  Vous pouvez également utiliser d'autres types de variables comme les **variables de scène** et les **variables globales** au lieu des variables d'objet que nous utilisons ici. La façon dont ces variables diffèrent est qu'elles ont des *scopes* différents pour le jeu. Vous pouvez en savoir plus sur les variables [ici](/gdevelop5/all-features/variables). tip

Allez dans l'onglet Objets du panneau de l'éditeur de scène. Choisissez l'objet de votre choix. Nous choisissons ici **Platform**. Cliquez sur les **trois points** à côté de l'onglet Objet Plateforme et choisissez **Modifier les variables de l'objet**. Une nouvelle boîte de dialogue s'ouvre dans laquelle nous pouvons ajouter et configurer des variables pour un objet. Cliquez sur le gros bouton Plus pour ajouter une nouvelle variable. Puis personnalisez le nom et la valeur de la variable comme indiqué ci-dessous.

![](/gdevelop5/tutorials/screenshot_20190526181228.png)

Comme vous pouvez le voir, nous avons fixé sa valeur par défaut à 0. Maintenant, nous devons créer une action pour mettre à jour le score. Trouvez l'événement montré ci-dessous que nous avions déjà créé auparavant.

![](/gdevelop5/tutorials/screenshot_20190621000502.png)

Nous allons ajouter cette action ici. Cliquez sur **Add an action**. Trouvez **Actions communes à tous les objets**-\>**Variables**-\>**Modifier une variable d'un objet**. Puis faites comme indiqué ci-dessous.

![](/gdevelop5/tutorials/screenshot_20190526204732.png)

Nous voulons modifier la variable de l'objet que nous venons de créer. En ajoutant cette action, nous demandons au jeu de mettre à jour la valeur en continu pendant que le personnage est en action.

Nous avons besoin d'un objet Text pour montrer ce changement de valeur. Allez dans l'éditeur de scène. Ajoutez un nouvel objet de type **Text**.

![](/gdevelop5/tutorials/screenshot_20190526205106.png)

Faites les modifications nécessaires comme indiqué ci-dessus. Vous pouvez le personnaliser comme vous le souhaitez. Une fois que vous avez terminé de modifier le texte, cliquez sur Appliquer. Ensuite, il suffit de faire glisser et de déposer l'objet texte dans l'espace de la scène. Ce sera quelque chose comme ceci.

![](/gdevelop5/tutorials/screenshot_20190526205123.png)

Revenons à l'événement que nous étions en train de modifier. Nous devons ajouter une autre action pour mettre à jour ce texte.

Une fois que nous sommes de retour à cet événement particulier, cliquez sur **Add an Action**-\>**Text Object**-\>**Modify the text**. Maintenant, regardez attentivement l'image ci-dessous. Maintenant, l'objet texte a une valeur de type String mais notre variable score stocke des valeurs numériques. Nous devons utiliser une fonction de la bibliothèque pour convertir cet Integer en String et ensuite mettre à jour le texte de l'objet Text.

![](/gdevelop5/tutorials/screenshot_20190526205906.png)

![](/gdevelop5/tutorials/bandicam20190526210601391.gif) Nous utilisons la fonction `VariableString(variable)` pour faire notre travail. Vous pouvez en apprendre davantage sur les fonctions des bibliothèques dans leurs tutoriels respectifs. Vous pouvez maintenant tester le jeu. Vous pouvez voir le score se mettre à jour pendant que le joueur est en action. Dès que l'état Game Over est atteint, le score cesse de s'actualiser.

L'événement que nous avons modifié ressemblera à ceci maintenant.

![](/gdevelop5/tutorials/screenshot_20190526210158.png)

------------------------------------------------------------------------

Maintenant nous allons ajouter d'autres objets texte nécessaires à notre jeu comme un texte **Game Over**, un texte **Score**, un texte **Press Enter to Restart** et **Press Up to Start**. Pour chacun d'entre eux, nous allons créer des objets **Texte** distincts. Comme pour l'étape précédente, ajoutez de nouveaux objets texte et modifiez le texte dans l'éditeur d'objets. Il suffit de les faire glisser et de les déposer dans votre espace de scène pour les afficher.

![](/gdevelop5/tutorials/screenshot_20190526211448.png)

Remarquez comment j'ai créé des objets texte séparés pour des textes séparés. Mais nous ne voulons pas que notre jeu affiche le texte `Game Over` au début. Le texte Game Over ne doit être visible qu'à l'état **Game Over**, c'est-à-dire lorsque la valeur de la variable d'état est **2**. De même, nous voulons que le texte Appuyer sur la touche Entrée pour redémarrer apparaisse également à ce stade, tandis que les autres textes doivent être masqués. À l'étape 0, le texte Appuyer sur le haut pour entrer doit être visible. Lorsque le joueur est en mouvement, nous voulons cacher les textes. Pour cela, nous devons agir sur la visibilité de ces objets texte.

Pour cette modification de visibilité, nous utilisons l'action **Action commune à tous les objets**-\> Action **Visibilité**. Après avoir ajouté toutes les actions à leurs endroits respectifs comme indiqué ci-dessus, la page de l'éditeur d'événements ressemblera à ceci.

![](/gdevelop5/tutorials/screenshot_20190526212127.png)

Ici, au début de l'événement de scène, que nous avons déjà fait, nous ajoutons deux nouvelles actions pour cacher les textes Game Over et Restart. Pour ajouter ces actions, cliquez sur **Add an action**-\> **Common action for all objects**-\> **Visibility**-\> Puis Hide ou Show en conséquence.

![](/gdevelop5/tutorials/screenshot_20190526212329.png)

Maintenant, nous voulons aussi cacher le texte Start, quand le jeu a déjà commencé. Pour cela, nous ajoutons une autre action à l'action déjà créée ci-dessus.

![](/gdevelop5/tutorials/screenshot_20190614213634.png)

Enfin, nous ajoutons deux événements pour **montrer** le texte **Game Over** et **Restart** lorsque le jeu se termine, c'est-à-dire lorsque l'état Game Over est atteint.

![](/gdevelop5/tutorials/bandicam20190gg526213134987.gif) Voilà, c'est fait ! Tu as appris avec succès comment créer un jeu Endless Runner. Créer des jeux avec GDevelop est très facile une fois que vous avez compris comment utiliser les fonctionnalités. Il m'a fallu environ trois jours pour écrire ce tutoriel en détail, alors qu'il ne m'a fallu qu'une heure pour créer ce jeu. Oui, c'est aussi simple que cela de créer des jeux avec GDevelop💓.

## Bonus : Rendre le jeu plus stimulant

Le jeu est-il trop facile à jouer ? Vous voulez que votre jeu soit un peu plus difficile ? Ne vous inquiétez pas. Travaillons-y ensemble.

Nous allons travailler sur la vitesse des plateformes/obstacles mobiles. Nous voulons qu'ils se déplacent plus rapidement à mesure que le score augmente.

Tout d'abord, nous voulons ajouter une nouvelle variable de scène pour stocker la vitesse initiale à laquelle les plates-formes se déplacent. Pour ajouter une variable de scène, allons à l'événement qui a la condition `Au début de la scène`. Comme nous l'avons fait précédemment, ajoutez une nouvelle variable. Cliquez sur Ajouter une action→Variables→Valeur d'une variable de scène. Ensuite, nommez votre variable quelque chose, **vitesse** par exemple et donnez-lui la valeur **250** qui est la vitesse initiale.

Maintenant, nous voulons modifier l'événement : où nous avons spécifié la valeur de la force avec laquelle les plateformes se déplacent. Au lieu de spécifier une valeur, nous allons utiliser la variable de scène **speed**. Pour utiliser la variable de scène ici, nous devons suivre cette syntaxe : `Variable(speed)`, où speed est la variable de scène spécifiée.

Faites la même chose pour l'action où nous avons spécifié la vitesse du sprite du joueur pour éviter qu'il ne glisse. Maintenant, nous pouvons travailler sur le changement de vitesse au fur et à mesure que le score augmente.

Maintenant, nous voulons vérifier la valeur de la variable objet `score`, et changer la valeur de la variable scène `speed` en conséquence. Ajoutez de nouveaux événements et spécifiez les conditions pour augmenter la vitesse des plateformes. Un exemple est présenté ci-dessous :

![](/gdevelop5/tutorials/screenshot_20190615230009.png)
