---
title: GDevelop FAQ
---
# GDevelop FAQ

## What is the DNA of GD?

4ian: My idea with GDevelop, when I started it a while ago, was to let anyone create games—not just people with a heavy programming background.
For this I worked on making an editor that is accessible (with an interface that is not cluttered and is easy to learn) and for defining the rules of the game, a system based on visual events.

I initially worked on a more targeted software to create adventure games. But as the time was passing, I was always adding new features and wondered if I could make a game engine that was both general purpose for 2D games and with a gentle learning curve.
There were similar game creators at the time, but most either required coding for anything complex or were very limited.
Visual events in GDevelop are simple yet very quick to write—even compared to traditional programming.

The goal of GDevelop is to provide an engine that is easy to use and learn yet powerful enough for advanced indie or commercial games. Its concepts—events, objects, and behaviors—are inspired by programming languages and libraries. The engine and editor are built with high-performance, best-in-class open-source libraries. Finally, the engine is flexible enough to be extended with extensions, which can even be written using events in GDevelop itself, allowing the community to improve it over time.

## What was the first public version of GD?

GD "1.0.8504202 Beta" was released on 11 Aug 2008.
You can download it and try it!
[Original Link](http://www.compilgames.net/dl/gdbeta5.exe) | [Mirror #1](https://drive.google.com/open?id=1iqUsXVzJjavWhgGUzINrFowIfv3xt2zR)

## What was the first release of GD5 beta?

5.0.0-beta14 , 18 Jan 2018

## What was the last release of GD4 Stable?

GD 4.0.97, 3 Apr 2018

## When was the Discord opened?

The GDevelop Discord has been open since December 14, 2016.

## Why can't GDevelop export directly to mobile and desktop? Why use an online build service instead?
Building standalone executables for Windows, macOS, Linux, or mobile platforms like Android requires large SDKs to be downloaded and properly installed (for example, the Android SDK).
Things can easily break if misconfigured.
Instead, GDevelop can handle all the packaging automatically—using one-click exports powered by an online build service—so you don't need to install or configure anything.

It's still possible to export and compile manually using technologies like Electron or Cordova, but you must install these development tools and their dependencies.

## Is GDevelop trying to copy and be a free alternative to Construct (they look and feel very similar)?
No, GDevelop was started roughly at the same time as Construct 1. The ideas behind both softwares are similar - because Construct team and GDevelop authors naturally found similar concepts to work. In particular, behaviors and events have been “discovered” by both teams separately as a superior alternative to any other kind of visual programming.

Such concepts can then have been integrated into other game engines, or the other way, GDevelop or Construct can have been inspired by each other or by other game engines.

## Why are GDevelop and my games flagged by my antivirus?

There is no virus; the app is new and not yet signed by Microsoft.
If you want to be sure, you can go on Github and make your own review of the source code.
It's open source, meaning you can check all the code online.

## When 3D will be supported in GDevelop?

In 2025. Stay tuned to GDevelop's socials to know more.

## I saw an update being announced, but GDevelop isn't auto-updating.

When an update is published, we do not directly mark it as latest for the auto-updater, as we don't want to make everyone update in case the new version has an important issue.
Sometimes the auto-updater breaks, and you'll need to download the next version manually.
To download a new version that just got published, download it on [GDevelop's GitHub releases page](https://github.com/4ian/GDevelop/releases/).


## The text objects are blurry when scaled, how can I fix that?

Sadly, that is a known issue with the renderer and its way of scaling. Starting from beta110, there is a new text object called [Bitmap Text](/gdevelop5/objects/bitmap_text) that should solve the problem.

## Will there be a Raspberry PI build?

No, as the GDevelop team doesn't have the time/devices to test efficiently releases on raspberry pi, and it is too much trouble to support a full other platform more than the 3 main ones.
Don't worry though, you should be able to build it yourself with those commands:
```sh
sudo apt-get update
sudo apt-get install npm git
git clone https://github.com/4ian/GDevelop
cd GDevelop/newIDE/app
npm i
cd ../electron-app
npm i
npm run build -- -l AppImage --arm64
```

## Where can I find the latest nightly build?

You can find it here:

```
https://gdevelop-releases.s3.amazonaws.com/master/latest/GDevelop%205%20Setup%205.0.0-beta103.exe
```

You may need to replace the "beta103" with the latest released version of GDevelop.
For more details, [see this document](https://github.com/4ian/GDevelop/blob/master/newIDE/docs/Nightly-Builds-and-continuous-deployment.md).

## How can I make multiplayer?

You can do networking in GDevelop using the P2P, MQTT or Firebase extension.
Using those, you can communicate data over the internet from one game instance to the other. By sending data like player position and the general state of the game, you can make multiplayer.
- [P2P docs](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/p2p). 
- [MQTT docs](http://wiki.compilgames.net/doku.php/gdevelop5/extensions#mqtt_client_advanced)
- [Firebase docs](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/firebase)
- [P2P example](https://editor.gdevelop.io/?project=example://p2p-networking)
- [Firebase example](https://editor.gdevelop.io/?project=example://firebase-example) 


## How can I contribute to GDevelop?

Any kind of work that spreads the word about GDevelop or improves the user experience is a contribution. Some examples of valuable contributions:
- Help edit the documentation wiki
- Answer questions on the forum/discord
- Build example games
- Create tutorials and other GDevelop content
- Build extensions
- Test and search for bugs in new features in nightly builds
- Provide good bug reports
- Talk about GDevelop to big group of people/schools
- Help translate the project on Crowdin
- Create a good game and leave the "Made with GDevelop splash screen"
- And of course writing code for the engine itself
