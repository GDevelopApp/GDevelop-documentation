---
title: Publish your game to Windows, macOS and Linux manually using Electron and Electron Builder
---
# Publish your game to Windows, macOS and Linux manually using Electron and Electron Builder

From GDevelop you can publish your games to Windows, macOS and Linux. In order to export our game, click File on the top and select the Export option. You can then choose the **Publish on Stores** method, followed by the **Desktop** tab, which will allow you to publish to **[Windows, macOS and Linux](/gdevelop5/publishing/windows-macos-linux)** in one-click.

If you want more control or have special needs, you can instead choose to **Build Manually**, followed by the **Desktop** tab. This option exports your game as an Electron project. [Electron](https://electronjs.org/) is a technology allowing HTML5 games and apps to be packaged as executables and access to the underlying system native features. [Electron Builder](https://www.electron.build/) can be used to automate the packaging and distribution.

![](/gdevelop5/publishing/manual-build-desktop-locate.gif)

## Build

First, choose a folder where the game will be exported. It is recommended to choose an empty folder, at least for the first time, to avoid losing any file that could be overwritten by the export.

You can then click on Export. The game will be exported to an Electron project.

![](/gdevelop5/publishing/manual-build-desktop-export.gif)

You can then use [Electron Builder](https://www.electron.build/) to package your game as a Windows, macOS or Linux app.

## Export to other platforms (Android, Web, Facebook Messenger...)

See the [other export options](/gdevelop5/publishing) to learn how to publish your game on other platforms!

## Steps to Build the Project Manually

### Pre-requisite: Download and Install Yarn

![](/gdevelop5/publishing/untitlewweewrwered-1.jpg)
Before building the project, you _must_ have a package installer on your machine. For this tutorial we will be using **Yarn**. Download the latest build of Yarn [here](https://yarnpkg.com/en/docs/install). You can install Yarn using any method provided on that page.

### Building the Package

- Start up Command Prompt (**CMD**).
- Use the Change directory command (**cd**) to the directory of the folder of your exported game (or navigate to that folder using Explorer and press Shift + Right Click -> Open Command Prompt/Powershell for Windows)
- In the Command Prompt, write:

```sh
yarn && yarn build
```

!!! note

    If you are using an older version of GDevelop, you might need to use this instead:
    `yarn add -D electron-builder && yarn electron-builder`

**Note:** If your custom icon doesn’t show up, just rename buildResources to “build”.

These steps will create a sub-folder named `dist`. The executable installer is in this sub-directory. The `win-unpacked` sub-folder contains the executable game files which you can archive and distribute.

### Additional options

#### Usage:

You can pass additional options to electron-builder.

- The `-w` option let you build for windows
- The `-l` option let you build for linux
- The `-m` option let you build for mac

Those options all accept an additional packaging format. You can find those on the [electron-builder homepage](https://electron.build/):
![](/gdevelop5/publishing/windows-macos-linux-with-electron/pasted/20210219-123031.png)

You may combine them (for example `-wl` for windows and linux) but then they will both share the same packaging format.

#### Examples:

```sh
# Build for windows only:
yarn build -w
# Build a windows portable executable:
yarn build -w portable
# Build for windows and linux:
yarn build -wl
# Build portable builds for windows and linux
yarn build -w portable -l AppImage
# Build for all platforms:
yarn build -wlm
```

!!! danger

    Some operating systems may fail to build for other operating systems.