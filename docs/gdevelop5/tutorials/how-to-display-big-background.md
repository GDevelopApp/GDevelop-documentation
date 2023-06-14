---
title: How to display a big background in your game
---
# How to display a big background in your game

Really big images can reduce the performance of a game, as they are costly to transfer and store in the graphics card memory. They are also weighting more in your game package, making the download and loading longer for players.

  * As possible, try to stick to smaller images. Avoid anything larger than 1024x1024 or 2048x2048. If possible, repeat the image, using a [Tiled Sprite](/gdevelop5/objects/tiled_sprite) object. Tiled Sprite can be as large as necessary without any impact on performances.

  * If you still want to display a very large, high resolution image, it's in this case a good idea to split it into multiple, smaller images, and display an object for every image. You can also use a Sprite, and have a different image in each animation. Then, put multiple instances of the object on the scene and change the animation of each instance to recompose the original image.