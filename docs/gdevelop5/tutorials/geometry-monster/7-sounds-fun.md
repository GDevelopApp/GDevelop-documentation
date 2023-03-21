---
title: 7-sounds-fun
---
⬅️ **[Previous part: 6. Collision detection](/gdevelop5/tutorials/geometry-monster/6-collision-detection)** ➡️ **[Next part: 8. Tracking the score](/gdevelop5/tutorials/geometry-monster/8-tracking-score)**

# 7. Sounds fun

[Collision detection](/gdevelop5/tutorials/geometry-monster/6-collision-detection) on its own was short and sweet, but when Monster and the shape collides, nothing happens beside the shape being destroyed. We can take the advantage of that condition and add something extra - **sound**.

![](/gdevelop5/tutorials/geometry-monster/101.png)

Let's select the "Monster", and search for "Audio" in "Other actions".

![](/gdevelop5/tutorials/geometry-monster/102.png)

Click on it to see the dropdown and go for "Play a sound". In the right panel, click "Choose a new audio file".

![](/gdevelop5/tutorials/geometry-monster/103.png)

It will open a popup where you'll be able to choose and load an audio file that will be played when the shape will be collected by the Monster. For us, it's called `monster.wav`.

![](/gdevelop5/tutorials/geometry-monster/104.png)

If you selected it correctly, you should see the name of the sound file that will be used.

![](/gdevelop5/tutorials/geometry-monster/105.png)

!!! note

    Make sure the "Repeat the sound" is set to "No" as we want this to be played only once when the Monster collects the shape. The default volume is `100`.

Now when we have the sound covered, we can start thinking about [tracking the score](/gdevelop5/tutorials/geometry-monster/8-tracking-score).

⬅️ **[Previous part: 6. Collision detection](/gdevelop5/tutorials/geometry-monster/6-collision-detection)** ➡️ **[Next part: 8. Tracking the score](/gdevelop5/tutorials/geometry-monster/8-tracking-score)**
