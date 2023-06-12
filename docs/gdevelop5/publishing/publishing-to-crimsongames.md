---
title: Publish your game to crimsongames.io
---
# Publish your game to crimsongames.io

## What is crimsongames.io?

![](/gdevelop5/publishing/crimsongames-icon-512.png) [crimsongames.io](https://www.crimsongames.io) is a website for independent digital creators with a focus on indie video games. It’s a platform that enables anyone to play and publish the content they've created.

------------------------------------------------------------------------

## Why crimsongames.io?

- It is completely **free**
- Easy to **prepare the content** for upload
- Easy to **update** the uploaded files
- No quality requirements, anything can be shared
- **SEO friendly**, anything you upload can be easily found in Search Engines.
- We can share HTML5 games played in the browser.
- **No annoying Ads** on Browser games

## Building the Package

[See here for a guide on exporting your game as an HTML5 package.](/gdevelop5/publishing/html5_game_in_a_local_folder)

## Creating a Zip Archive of your Export

First let prepare our game for upload, in case of crimsongames.io it is really simple, the only thing you need to do is get the folder containing your game and archive it into a ZIP file. Make sure the index.html file is in the root folder and not in a sub-folder inside. The folder we used to export our game into from GDevelop should be fine.

To archive your game folder, you are going to need an archiving tool. The one I'm using is called [7-Zip](http://www.7-zip.org) I have been using 7-Zip for ages, to be honest, I can't even remember using anything else so this is what I recommend. After downloading and installing it, just go inside your exported game folder and select all the files then right click and we should have 7-Zip in your list with the option to add to the archive. ![](/gdevelop5/publishing/alanna-zip-game.png)

    This will create our ZIP archive, ready to upload to crimsongames.io. \<note important\>Make sure you name the .zip file to game.zip.

## Uploading your project to crimsongames.io

Next, you need to [create an account at crimsongames.io](https://www.crimsongames.io/signup) that I won't explain in detail as the steps should be no different from other places you have registered before.

Once you have an crimsongames.io account, you want to login and you want to go to your Dashboard. Here you should find a Add game button in the left sidebar.

![](/gdevelop5/publishing/crimsongames-add-game.png)

## Add new game - Fill the required fields

Once your game is added you will be able to see the game data such as API keys and game id.

* **Title:** this is the title of your game.
* **Short description:** this is the short description of your game.
* **Description:** this is the description of your game some HTML is allowed.
* **Game category:** this is the category of your game.
* **Game thumbnail:**this is the thumbnail or icon of your game. (thumbnail must be a (PNG or JPG) (max: 512x512px))
* **Game image for showcase:**this is a screenshot of your game. (Image must be a (PNG or JPG) (max:1920x1080px))

After you fill in all the required data click the button **Add game** ![](/gdevelop5/publishing/crimsongames-add-game-save.png)

## Now it's time to upload the game

![](/gdevelop5/publishing/crimsongames-game-added.png)

    You successfully added the game data, now it's time to upload the game that we prepared before. Before continuing, a tip \<note tip\>As you can see two API keys appear in the rows of your game, those API keys are used in case you want to integrate Leaderboards in your game, more detailed info is going to be written below.

In crimsongames.io we can set our game in three kinds of hosting types:

* **Image:** is the default setting to only display the image of your game.
* **Self-hosted game:**means that you have the game hosted outside Crimson Games.
* **Hosted by Us game:** means that we host your files on our servers. If you choose Hosted by Us, the .zip you upload must be named: game.zip otherwise the upload will fail.

![](/gdevelop5/publishing/crimsongames-hosting-type.png) Once you decide which kind of game you want just click on the Save Changes button, note that each section has its own Save changes button, this is important because the information referent of each block is saved separately.

## Extra settings

In this section of your uploaded game you can set some extra information like aspect ratio, external URLs and the integration of leaderboards of your game. ![](/gdevelop5/publishing/crimsongames-extra-settings.png) Remember to click Save changes.

## Finally publish

The last thing you need to do is set your game to be public, by default when you first created the game the status is Draft that means only you can see the game when you browse the game URL, which grants you a good way to add the game and test it before setting the game public. As you can see in the below image a View game button is near the game title, just click the **View Game** button to see your game page in crimsongames.io.

If you think that everything is good, then change the game status from draft to public.

**Draft — Only those who can edit the project can view the game**

**Public — Anyone can view the game**

![](/gdevelop5/publishing/crimsongames-public.png)

## Leaderboards in GDevelop 5

Detailed documentation can be found in the sidebar of the dashboard. ![](/gdevelop5/publishing/crimsongames-gdevelop.png) Plus, there is a specific URL [here](https://www.crimsongames.io/public-doc-api) you can see all the functions and references to integrate leaderboards in your games.
