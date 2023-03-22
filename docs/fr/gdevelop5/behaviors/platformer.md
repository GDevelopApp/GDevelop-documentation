---
title: platformer
---
FIXME **This page is not fully translated, yet. Please help completing the translation.**

*(remove this paragraph once the translation is finished)*

## Platformer and Platform object behavior

The platformer behavior allow you to setup platformer character control and platforms, literally with a click of a button.

### Add behavior to object

To add behavior to an object, first open the object properties by right clicking on the object and select Edit object from the list. Then select behaviors and click the add behavior button.

## Platform behavior

![select-platform-behavior.png](/gdevelop5/behaviors/select-platform-behavior.png) By selecting the platform behavior from the list, you can turn your object in to a platform that a Platform character can walk on.

After selecting, you should see immediately the Platform behavior options:

![platform-behavior-options.png](/gdevelop5/behaviors/platform-behavior-options.png)

### Platform type

By clicking on the platform type, we can choose from 3 different platform types

![platform-type-button.png](/gdevelop5/behaviors/platform-type-button.png)

* **Platform:** this is the default option, by choosing this our object going to become a traditional platform which the character can collide with and walk on. * **Jumpthru platform:** by choosing this option, the character can collide with the platform and walk on it but can be jump thru from below. * **Ladder:** as it name suggest, this option turns our object in to a ladder, the character can not collide with it and can not walk on it, but able to climb up and down when overlapped.

### Grab the ledge

The ledge of our platform can be grabbed by default which means when the character jump close enough to the edge of the platform, the ledge can be grabbed. In case you don't need this functionality make sure this option is unticked or in case you need it, make sure the box is ticked ![ledges-canbe-grabbed-option.png](/gdevelop5/behaviors/ledges-canbe-grabbed-option.png)

We can also change the offset of the grab on the Y axis ![grab-offset-option.png](/gdevelop5/behaviors/grab-offset-option.png) This option allow us to change the position of the grab to fit the animation of our character.

## Platformer character behavior

![select-platformer-character-behavior.png](/gdevelop5/behaviors/select-platformer-character-behavior.png)

By selecting the Platformer character from the list, we can turn our object in to a Platformer character After selecting, you should see immediately the Platformer character options ![platformer-character-behavior-options.png](/gdevelop5/behaviors/platformer-character-behavior-options.png)

You may need to scroll to see all the options.

### Controls

The Platformer character behaviour comes with default keys set to control the character which is arrow keys and the shift key. In case you plan to change this and you don't want to use the default controls, you need to turn the default controls off by unticking the box in the options. ![](/gdevelop5/behaviors/platformer-defaultcontrols-box.png)

### Grab the ledge

Just like with the platforms we have the option also for the platformer character to allow it to grab the ledge of the platforms. But, it is disabled by default, to enable it just tick the box in the options ![](/gdevelop5/behaviors/platformer-character-grabledge-box.png)

In case you enable this option, the character can grab the ledge of the platforms that also have this option enabled.

Just like with the platforms we can set the grab offset on the Y axis also for the character. But what we can also set here is the grab tolerance on the X axis. ![](/gdevelop5/behaviors/platformer-character-grab-tolerancex.png)

By changing this value, we can set how close the character need to be to the platform to be able to grab it.

### Slope max angle

![](/gdevelop5/behaviors/platformer-character-maximum-slope.png) By changing this value we can set the maximum angle of a slope where the player can still move up. It is 0 by default which means the character can move only on flat surface by default.

### Speed and Gravity

![](/gdevelop5/behaviors/platformer-character-speed-options.png) We can also change how fast our character accelerate, decelerate, move, fall and jump by changing the corresponding values. I believe these options are self explaining so I don't think it is require any explanation. If you want to slow the character down you can decrease these values and if you want to speed up you can increase these values.

All the options here can also be changed using events at any time during the game.

### Examples

List of examples coming soon

- custom controls
