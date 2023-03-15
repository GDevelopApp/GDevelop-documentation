---
title: publishing-to-itch-io
---
FIXME **This page is not fully translated, yet. Please help completing the translation.**  
*(remove this paragraph once the translation is finished)*

##Publish your game to itch.io

Before we start, I would like to take the time to explain the reason why I recommend [Itch.io](https://itch.io)

Itch.io is the most "hobbyist friendly" among all online stores in all possible ways:

- it is completely free
- easy to prepare the content for upload and to be published on itch.io
- easy to update the uploaded files
- you can share a dev vlog
- you can set up a community forum or allow comments only or none
- no quality requirements, anything can be shared
- SEO friendly, anything you upload can be easily found on Google within days.
- you can share downloadable games for Windows, Linux, Mac, Android and also HTML5 games played in the browser
- you can make money without starting your own business and pay taxes, itch.io can collect the money, deal with refund requests and pay the required taxes on your behalf and you can request a payout any time.
- in case you do want to start your own business, itch.io can take care of the transaction for you and transfer each purchase directly to you, but then you need to take care of refunds and taxes
- you can set a fixed price for your content or share it freely and accept donation only or the most unique one, you can set only that you require payment but you can let the people decide how much they want to pay.
- revenue share is also flexible which makes itch.io the most unique, you can decide how much revenue share you want to pay to itch.io and yes you can set this value to 0 if you want and pay nothing yet itch.io still happy to host your content for free and hope if you are successful you are going to consider to pay something to them.
- no annoying ads on browser games

First let prepare our game for upload, in case of itch.io it is really simple, the only thing you need to do is get the folder containing your game and archive it into a ZIP file. Make sure the index.html file is in the root folder and not in a sub-folder inside. The folder we used to export our game into from GDevelop should be fine.

To archive your game folder, you are going to need an archiving tool. The one I'm using is called [7-Zip](http://www.7-zip.org) I have been using 7-Zip for ages, to be honest I can't even remember using anything else so this is what I recommend. After downloading and installing it, just right click on the folder containing your game and we should have 7-Zip in your list with the option to add to the archive. ![](/gdevelop5/7zip-add-to-archive.png)

After selecting the add to archive option, there are many different options we can tweak, but the only one we are interested in right now is the OK button on the bottom. This will create our ZIP archive, ready to upload to itch.io

If you don't have the quick option in your list, you can launch 7-Zip manually, browse the folder you want to archive, select it and then click the Add button on the top ![](/gdevelop5/7zip-add-button.png) It will bring up the same window as the quick option where you need to press OK.

Next, you need to create an account at itch.io that I won't explain in detail as the steps should be no different from other places you have registered before. Once you have an itch.io account, you want to login and you want to go to your Dashboard. Here you should find a Create new project button ![](/gdevelop5/itchio-create-new-project-button.png)

After clicking the button, you can setup your project, I go through only the most important options required to share your game.

- **Title:** this is the title of your game
- **Project URL:** this is the URL where your game can be found at itch.io, it normally takes the form of yourname.itch.io/your-game-title. The game title in the URL can be anything, it is up to you what you going to choose but it must be unique, can not be the same as other game titles in your library.
- **Classification:** here you can choose what kind of content you want to upload, a game or a book maybe. we obviously want to select game here
- **Kind of project:** here you can select what kind of project you want to upload, is it downloadable or a HTML or Flash game, in this case we want to choose the HTML. Later you can add downloadable files that can be purchased or downloaded for free
- **Pricing**: this is where you can set if your game needs to be purchased or you accept a donation or you don't want any payment. If you do want payment, you can set how much your game cost or how much donation you recommend
- **Uploads:** this is the section where you can actually upload your project and you want to click on the Upload files button

![](/gdevelop5/itchio-upload-files-button.png) Once you clicked the button, you want to browse and select the ZIP file we have created earlier and it is going to be uploaded to itch.io. Once the upload is done, you can choose from several options ![](/gdevelop5/ithio-upload-file-options.png)

You can choose if the file you have just uploaded is an executable, a book, source code or a mod. You can also set a platform, the price for each file you upload if you want, but the most important option for us "This file will be played in the browser". ![](/gdevelop5/itchio-play-in-browser-option.png) By ticking the box we mark our file to be played in the browser.

Finally, you want to click on the save and view page button ![](/gdevelop5/itchio-save-view-page-button.png)

After it should load a preview of the page of our game and if we did it right, our browser game should start playing. Now the only thing left to do, we need to set our project to be public so anyone can play it. In order to do that, click on the Edit game button on the top or go back to the Dashboard where our game should be listed now and click Edit in the list.

It will take us back to the project creation page with the option available on the bottom to set our project to be public ![](/gdevelop5/itchio-set-public.png)

Select the public option and click the Save button.

Now anyone should be able to find and play your browser game on itch.io. We can also share a link to the game and even embed the game in to your website if you have one.
