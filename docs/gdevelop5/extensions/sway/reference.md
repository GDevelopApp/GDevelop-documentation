# Sway

<img src="https://resources.gdevelop-app.com/assets/Icons/swap-horizontal-variant.svg" class="extension-icon"></img>
A behavior to make objects (like grass) sway randomly.

**Authors and contributors** to this community extension: [Bubble](https://gd.games/Bubble).

---

Use the Sway behavior to make multiple instances of an object sway at different times. For example, this can give a grass object an animated look that is always changing and is different to the other grass objects.


![Imgur](https://i.imgur.com/dOyTgbN.gifv)


Please note:
This behavior uses *For each object* events so be aware of slow downs that may occur from many instances of Sway objects.
The behavior works best if both the *Center* and *Origin* points are at the base of the object.

Sway works by:
- angling (pivoting) the object to the left and right while also changing its Y scale up and down
- the angle and Y scale tween durations will take a random amount of time from a range of values
- it's this random tween duration that creates the unique movement pattern for each instance of the object.

How to use:
- set left and right angles (degrees) for the object to sway to
- for equal sway on each side set the left angle to the negative number of the right angle
- eg. set left angle to -5 and right angle to 5

- set a minimum and maximum Y scale amount for the object to stretch and shrink to
- set to 1 for no change, more than 1 for stretching and less than 1 for shrinking

- set a range for the angle and Y scale tween times (seconds)
- the tweens will take a random amount of time between the minimum and maximum values


[Read more...](https://liluo.io/bubble/swayexamples)

---

!!! tip

    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

*This page is an auto-generated reference page about the **Sway** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).