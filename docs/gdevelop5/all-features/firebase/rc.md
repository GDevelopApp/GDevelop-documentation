---
title: Firebase Remote Configuration
---
# Firebase Remote Configuration

!!! tip

    Before using any Firebase feature, remember to [set it up correctly with the Quick Start guide](/gdevelop5/all-features/firebase/quickstart).

Firebase RC (short for Remote Configuration) let you make [variables](/gdevelop5/all-features/variables) that can be changed from the firebase dashboard without having to update the game.
You can also modify them for a specific group of people.
For example, you could change the price of something in a shop for active users remotely while doing a promotion.
You can also use this to enable and disable experimental features remotely in case they are too unstable and need to disable them,
without having to publish a full emergency update.
!!! note

    Specifying groups of people may require authentication and analytics to let Firebase differentiate the player groups

## Preparing

This article will explain how to use RC by taking a little example game and showing how to add RC to it.
This is what we begin with:
![](/gdevelop5/all-features/firebase/rc1.png)
![](/gdevelop5/all-features/firebase/rc2.png)

This is a basic clicker. You can get and spend money. Now, we can begin to add RC to tweak it dynamically.

## Adding defaults

First of all, we should set some defaults.
Those defaults should contain the default value of each of the configurable variables.
They are used when there is no network to update the variables value, or while they are not yet finished loading.

!!! warning

    While you don't have to go through this step,
    it is very recommended to do go through it as not doing so could break the game
    for users with an unstable or nonexistent internet connection, or when the game is
    launched the first time and no configuration has been fetched yet.

We can do that by creating a structure containing the defaults:
![](/gdevelop5/all-features/firebase/rc3.png)
And then setting it as the default:
![](/gdevelop5/all-features/firebase/rc4.png)
As you see, we use 2 variables in this example: one to decide how much money you win and one for how much you lose when clicking the buttons.

## Setting up Firebase

Now we need to also set up Firebase. Go on the apps dashboard and then on Remote Configuration:
![](/gdevelop5/all-features/firebase/rc5.png)
Now you can set some variables. Set the ones you have assigned a default to:

![](/gdevelop5/all-features/firebase/fb2.png)

!!! danger

    Don't forget to save the changes!

    ![](/gdevelop5/all-features/firebase/fb3.png)

## Adding Synchronisation

This extension let you manage the synchronisation of the remote configuration however you want.
The best way is to use the "force sync" action on an event that will happen regularly.
For that you can use a timer or do it at the beginning of a scene that is often switched to.

!!! danger

    While you probably want to synchronize the configuration often, do not synchronize it too quickly too often!
    Else, Firebase will time you out to prevent to be DDoS by all the requests done.

!!! note

    You could also use the "set auto update interval" action, but it is not much reliable according to some tests.

We can for example use the button presses here as they will happen often but not too much:
![](/gdevelop5/all-features/firebase/rc8.png)

## Replace the static values with the configuration

Now we just have to replace the previously static values with the values from the Remote Configuration:
![](/gdevelop5/all-features/firebase/rc9.png)

### Adapt the rest of the game to modularity

Don't forget that some things that may have been static are now dynamic and some actions have to be added to support that modularity.
In our example, there was a static text showing how much money you lose by buying "potions". Now you can update that text to show the correct value:
![](/gdevelop5/all-features/firebase/rc10.png)

## Use the Firebase console to modify the values

You should now be done setting it up.
You only need to change values in the Firebase console to see it update in real time (or more precisely whenever the game syncs the Remote Configuration) in your game.

## Reference

All actions, conditions and expressions are listed in [the Firebase reference page](/gdevelop5/all-features/firebase/reference/).