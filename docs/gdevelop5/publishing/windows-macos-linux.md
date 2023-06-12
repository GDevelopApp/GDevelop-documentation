---
title: Publish your game to Windows, macOS and Linux
---
# Publish your game to Windows, macOS and Linux

GDevelop can publish games to Windows, macOS, and even Linux!

## Make sure that your game is ready for packaging!

It is important to verify that your game is ready to be exported as an executable:

* In the game properties (accessible from the [Project Manager](/gdevelop5/interface)), make sure to enter a valid _package name_. A package name is an identifier like this : `com.yourname.gamename`. It's like the address of a website but reversed. You can choose any package name provided that:
    * It is not used by another game or application on iOS or Android.
    * It is written with only letters, numbers and dots. Only put one dot between words (for example, `com..mygame` or `..mygame` are not valid), and limit this identifier to 2-5 words maximum.
* In the game properties, enter a valid version number (like 1.0.0, 1.0.1...)
* Check that you've set up icons.

## Launch export

In the File menu, choose Export. Choose then **Publish your game**, followed by **Desktop**.

![](/gdevelop5/publishing/publish-desktop-locate.gif)

### Create an account if you don't have one

To use the packaging, you need a [GDevelop account](/gdevelop5/interface/profile). If you don't have one, click on "Create my account", enter your email and choose a password.

### Choose the platforms and launch the export

Choose the platforms for which you want to export the game. For Windows, you can choose if you want a single executable file or a zip file:

![](/gdevelop5/publishing/publish-desktop-options2.png)

Once you are ready, click on **Package**.

Now, wait for the game to be built. It can take a few minutes depending on the platforms you've chosen.
There are a few steps, during which the game is exported, compressed, uploaded to the online build service and built.

When finished, you will see a download button for each platform that was selected for your game. Use the download buttons to receive the files that you can distribute to play to your game.

![](/gdevelop5/publishing/publish-desktop-export.gif)

### Play the game

* On Windows, double click on the executable file with the name of your game to launch it.
* On macOS, extract the archive and double click on the app to launch it.
* On Linux, [install the AppImage](https://appimage.org/) to run the game

!!! note

    When launching the game on Windows and macOS, you might get a notice about security. Choose to run the game anyway. On macOS, you may need to open *Security and Privacy* tab in *System Preferences*.