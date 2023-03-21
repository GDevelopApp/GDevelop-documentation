---
title: L'objet Video
---
# L'objet Video

Un objet vidéo affiche une vidéo à l'écran. Ce qui est parfait pour l'intégration d'une cinématique dans un jeu.

!!! warning

    Les fichiers vidéo peuvent être très lourds, même pour de courtes vidéos, ce qui rend le jeu plus long à télécharger et à lancer. Veillez utiliser une compression correcte et limiter autant que possible la longueur de la vidéo.

!!! warning

    Avant de pouvoir lire une vidéo, vous devez vous assurer que le joueur a d'abord interagi avec le jeu (un simple clic / toucher sur l'écran permet d'autoriser la lecture des vidéos).

!!! warning
    
        
    Le fichier doit être de format **.mp4** avec les codecs suivant  :  

      * **H264** pour la vidéo 
      * **AAC** pour l'audio
    

Les vidéos peuvent être contrôlées à l'aide d'événements : minutage, état (lecture / pause), volume audio ...

## Ajouter une vidéo

Lorsque vous créez un nouvel objet, cliquez sur le bouton **Show Experimental Objects** (Afficher les objets expérimentaux) puis choisissez **Video**.

![](/gdevelop5/objects/video-object.png)

Une fois l'objet créé, l'éditeur des propriété s'affiche pour vous permettre de configurer le nouvel objet **Video**.

![](/gdevelop5/objects/video-object-editor.png)

## Sélectionner un fichier vidée

Cliquez sur le champ **Video resource** (Ressource vidéo), puis sur **Choose a new video file** (Choisir un nouveau fichier vidéo). Pour avoir une bonne compatibilité avec la plupart des navigateurs, suivez ces conseils pour le format vidéo :


!!! warning
    
        
    Le fichier doit être de format **.mp4** avec les codecs suivant  :  

      * **H264** pour la vidéo 
      * **AAC** pour l'audio
    

Vous pouvez aussi choisir entre :

  * **Loop the video** (Boucler la vidée) : cette option permet de lire la vidéo en boucle. Si vous la cochez, la vidéo recommencera au début lorsque elle arrive à sa fin, et ce jusqu’à ce que vous l’arrêtiez.
  * **Video opacity** (Opacité de la vidéo) : de 0 (invisible) à 255 (opaque — par défaut), cette option modifie la transparence de la vidéo sur la scène.
  * **Video volume** (Volume de la vidéo) : de 0 (silence) à 100 (volume maximum — par défaut), cette option configure le volume sonore de la vidéo.

## Les paramètres de la vidéo

!!! note

    Toutes les conditions et actions suivantes font référence aux conditions et actions de la catégorie **Video**.

Vous pourriez avoir besoin de sauvegarder une valeur correspondant à l'état d'une vidéo. Pour cela, il existe des fonctions pour la vidéo, que vous pouvez utiliser dans un champ d'expressions. Ces paramètres sont les suivants :

### Durée de la vidéo

La condition **Duration** (Durée) teste la longueur de la vidéo par rapport à la valeur entrée et du **Sign of the test** (Signe du test) utilisé.

### Fin de la vidéo

Il faut utiliser la condition **Is ended** (est terminée) pour exécuter une action lorsque la vidéo est terminée. Cette condition peut être utilisée pour passer de la vidéo au gameplay ou à quelque chose de similaire.

## Temps de la vidéo

Lorsqu'une vidéo est lue pendant le jeu, il peut arriver que le temps écoulé depuis le début de la vidéo doive être testé pour déclencher des actions telles que **Skip the video** (Sauter le reste de la vidéo) ou provoquer l'ouverture d'une boîte de dialogue du genre **Save the game** (Enregistrer le jeu). Ceci peut être réalisé en utilisant la condition de test **Current time** (Temps actuel).

Vous pouvez également passer à un endroit précis de la vidéo en utilisant l'action **Set time** (Définir le temps). Lorsque la condition correspondant à l'action est vraie, la vidéo sautera à l'endroit voulu en fonction du temps entré et du **Modification's sign** (Signe de la modification).

### Opacité de la vidéo

L'opacité est la mesure de la transparence de la vidéo. Si la condition **Opacity** renvoie 255, cela signifie que la vidéo n'est pas du tout transparente et si elle renvoie 0, elle est totalement transparente. L'opacité par défaut d'une vidéo est de 255.

Nous pouvons définir l'opacité d'une vidéo en utilisant l'action **Set opacité** (Définir l'opacité). Pour une opacité maximale, entrez 255, tandis que pour une transparence totale, entrez 0.

### Vitesse de lecture de la vidéo

La vitesse de lecture de la vidéo est le rapport entre la vitesse actuelle de la vidéo et la vitesse originale de la vidéo. Si la condition **Playback speed** (Vitesse de lecture) retourne une valeur supérieure à 1, la lecture de la vidéo est plus rapide que celle de la vidéo d'origine. Si la condition renvoie une valeur inférieure à 1, la lecture est plus lente que celle de la vidéo d'origine. La valeur par défaut pour la vitesse de lecture est 1.

Pour définir la vitesse de lecture d'une vidéo, utilisez l'action **Set playback speed** (Définir la vitesse de lecture). Pour lire la vidéo à un débit plus rapide que le débit par défaut, définissez une valeur supérieure à 1, puis à une cadence plus lente, définissez la vitesse de lecture sur une valeur inférieure à 1. Pour le paramètre par défaut, utilisez la valeur 1.

### Boucler une vidéo

Lorsqu'une vidéo tourne en boucle, elle recommence depuis le début après avoir atteint la fin. Pour savoir si une vidéo tourne en boucle ou non, utilisez la condition **is looped** (en boucle). Si la vidéo tourne en boucle, la ou les actions correspondantes seront exécutées.

Vous pouvez également mettre une vidéo en boucle dans GDevelop en utilisant l’action **Loop a video** (Faire boucler une vidéo) et en sélectionnant **Yes** pour **Activate loop** (Activer la boucle). Par défaut, une vidéo n'est pas en boucle.

### Couper le son d'une vidéo

Lorsqu'une vidéo est mise en sourdine, aucun son n'est audible dans le jeu. Pour vérifier si une vidéo est muette, utilisez la condition **is mute** (est muette). Si la vidéo est en mode muet, la ou les actions correspondantes seront exécutées.

Vous pouvez mettre une vidéo en sourdine à l'aide de l'action **Mute a video** (Rendre une vidéo muette) et sélectionner **Yes** pour **Activate mute** (Activer muet). Le son de la vidéo est désactivé par défaut.

### Mettre une vidéo en pause

Pour savoir si une vidéo est en pause, utilisez la condition **is pause** (est en pause). Si la vidéo est en pause, les actions correspondantes seront exécutées.

Vous pouvez mettre en pause une vidéo en utilisant l’action **Pause a video** (Mettre une vidéo en pause). Par défaut, la vidéo est en pause.

### Lecture d'une vidéo

Pour voir la vidéo, vous devez d'abord la lire. Pour vérifier si la vidéo est en cours de lecture, utilisez la condition **is played** (est jouée). Si la vidéo est en cours de lecture, la ou les actions correspondantes seront exécutées.

Pour démarrer une vidéo ou reprendre la vidéo après l'avoir mise en pause, vous pouvez utiliser l'action **Play a video** (Lire une vidéo). Par défaut, la vidéo est en pause et a besoin de cette action pour être lue.

### Volume d'une vidéo

Vous pouvez également régler le volume d'une vidéo à l'aide de GDevelop. Pour connaître le volume d'une vidéo, utilisez la condition **Volume**. Le volume maximal d'une vidéo est 100 et le volume minimal est 0 (muet).

Pour régler le volume d'une vidéo, utilisez la condition **Set volume** (Régler le volume). Vous pouvez définir un nombre compris entre 0 et 100. Le volume par défaut est défini à 100.

## Exemple

  * Video player: https://editor.gdevelop-app.com/?project=example://video-player