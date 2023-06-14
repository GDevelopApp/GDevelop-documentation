---
title: Publishing your Game to Kongregate
---
# Publishing your Game to Kongregate

## What is Kongregate?

!!! note

    Kongregate no longer accepts game submissions ![](/gdevelop5/kongregated_vanthill.png) [Kongregate](https://www.kongregate.com) is a mobile, PC, and Console publisher and web gaming portal. The website features over 110,000 online games and 30+ mobile games available to the public. On the web portal, users can upload HTML 5/JavaScript, Shockwave, Java or Unity games. It is a great home for your game and can connect you with a thriving community of active and engaged gamers!

## Kongregate FAQ

  - **Who can submit a game?**

Games can only be uploaded by their legal owner, and all uploaders must agree to Kongregate's Game License Uploading terms.

  - **Earn money without giving up the farm**

Kongregate shares up to 50% of advertising revenue with developers and sponsors monthly contests where you can earn thousands more. You retain the full rights to your game by uploading it onto Kongregate, and you may request that it be removed at any time.

  - **APIs improved experience & payouts**

API integration enables your players to appear on our leaderboards, earn badges, and enjoy card challenges.

You can know more about Kongregate [here](https://kong.zendesk.com/hc/en-us/categories/200356879-I-m-a-Developer)

## Building the Package

[See here for a guide on exporting your game as an HTML5 package.](/gdevelop5/publishing/html5_game_in_a_local_folder)

## Making the Package Ready to Publish

Our aim is to make the game playable in the web browser in the form of a HTML5 game. In order to upload the files to the web, we must archive it in a `.zip` file. **Firstly**, open the folder and move the `index.html` file out of there. We need that file separately. Make sure there is no remaining `index.html` file inside that folder. Now we need to archive the folder data.

To archive your game folder, you are going to need an archiving tool. There are several free options available. We will be using [7-Zip](http://www.7-zip.org) in this tutorial. Make sure you have downloaded and installed 7Zip using the link given.

Now, to archive the folder contents, select all the files inside the folder and then **Right click**. We should have 7-Zip in our list with an option to `Add to archive`. You will see a dialog box where you can tweak many options. For now, only change the **Archive Format** to `zip`. Click **OK** at the bottom to start the archiving process. Soon after the process is finished, you will find a `.zip` file according to the option chosen, which is one of the files we will be uploading to Kongregate.

![](/gdevelop5/screenshot_20190606155708.png) To get ready to upload, we need **two** files. The first file is the `index.html` file that we had moved out of the folder and the second file is the `.zip` archive.

> Folder contents need to be at the **root** level of the `.zip` file and cannot contain `index.html` file (we moved it outside the folder, remember?)tip

## Uploading the Game

[![](/gdevelop5/kongregate-reg-btn-vertical.png)](https://www.kongregate.com/session/new) Head over to the Kongregate website and **Register** yourself if you haven't already. It should be a very easy process. You need to be a registered user for uploading your games on Kongregate.

Kongregate supports three types of game packages: `HTML5`, `Unity Web` and `iFrame`. The archive we just created is an **HTML5** package so we are going to go with that option.

![](/gdevelop5/screenshot_20190606125936_copy.png) After you have registered yourself, we can now upload and publish our game. To upload a game, head over to **Dev** section and Click **Upload Your Game**.

![](/gdevelop5/4c375dd-2016-07-21_16-23-18.png)

In the game upload page, you'll need to input basic information, like the `game title`, `description`, `instructions`, `category`, etc.

Below that are a few specialized sections:

  - **Collaborators**: You can designate up to 3 additional Kongregate usernames to be "collaborators". These users will have access to the unpublished version of the game, will be able to make free purchases for testing, and will show up in the game details as a collaborator.

&nbsp;

  - **API Callback URL**: If your game is going to be utilizing one of our server APIs that requires a callback URL, this is where you will enter it.

&nbsp;

  - **Bug Reports**: We can add a "report a bug" button next to your game and send them via email to you. If you select this you will have the option to specify the target email address.

![](/gdevelop5/7d244ad-2016-07-21_16-12-58.png)

On the following page you will first select the type of game upload:

  - **Flash/HTML5/WebGL**: In these cases, you'll upload your files directly to our server and Kongregate will take care of hosting them.
  - **Unity Web Player**: This is a special case in which we will host a .unity3d file and optionally also a WebGL version for players using NPAPI-disabled browsers. By the end of 2016 nearly all browsers will be NPAPI-disabled, so we don't recommend this option if you can help it.
  - **iFrame**: In this case, you'll give us a URL to point to and you will be able to host and serve the game files on your own server.

![](/gdevelop5/e268f86-2016-07-21_16-27-31.png)

Select the `Flash/HTML5/WebGL` type since our game is a HTML5 package. Select the `I would like to upload additional files for this game` option. For the **first** file, choose the `index.html` file and for the **second**, choose the archived `.zip` file we had created in the previous step.

Below that you'll be able to submit some art, request access to our Virtual Goods Payments API, and confirm a few basic assertions.

![](/gdevelop5/efe5dce-2016-07-21_16-42-01.png)

Finally, you'll have the option to specify some **Statistics**(Any event in your game can be submitted to Kongregate as a score) for your game and add some **Tags** that help users locate your game based on interests. You can learn more about Statistics [here](https://docs.kongregate.com/docs/concepts-statistics). Let's leave it empty for now. Add one or more tags that you find suitable for your game.

![](/gdevelop5/faec1be-2016-07-21_16-46-34.png)

Before publishing, make sure you have followed the guidelines listed on this [Submission Checklist](https://docs.kongregate.com/docs/submission-checklist-1), provided by *Kongregate*, to maximize the chances of your game being approved.

After you have filled all the necessary information and have chosen the files to be uploaded, click on **Upload** as a final step to publish your game.
