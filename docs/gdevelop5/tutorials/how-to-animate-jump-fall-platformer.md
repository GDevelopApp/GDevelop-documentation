---
title: How to animate the jump and the fall of a character in a platform game
---
# How to animate the jump and the fall of a character in a platform game

If you use the platform engine for your character, it's easy to animate your character according to its state. 
For this, use the conditions of the platformer behavior:

![](/gdevelop5/tutorials/how-to-jump-fall-animation.png)

Note that we use **Trigger once**, to only change the animation when first entering into a new state.
This is useful because the character can be simultaneously falling *and* jumping.