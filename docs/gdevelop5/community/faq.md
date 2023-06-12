---
title: GDevelop FAQ
---
# GDevelop FAQ

## What is the DNA of GD ?

4ian : My idea with GDevelop, when I started it a while ago (~10 years ago :) ) was to make anyone able to create games - so that not only people with a heavy programming background could create their own games.
For this I worked on making an editor that is accessible (with an interface not cluttered and easy to learn) and for making the rules of the game, a system based on visual events.

I initially worked on a more targeted software to create adventure games. But as the time was passing, I was always adding new features and wondered if I could make a game engine that was both general purpose for 2D games and with a gentle learning curve.
There were existing similar game creators at this time, but most were either requiring you to code to make anything complex or were very limited.
Visual events as done in GDevelop are the best thing I found. They are simple yet super quick to write - even compared to traditional programming.

The goal with GDevelop is to have an engine that is both easy to use, with an intuitive interface and concepts that are fast to learn, and still capable to create very advanced, indie or commercial games. This can be achieved as GDevelop concepts are based on solid foundations (events, objects, behaviors), that are inspired by programming languages or libraries. The game engine and the editor are built with performant, best in class open-source libraries. Finally, the whole engine is flexible enough to be augmented with extensions, that can even be written using events in GDevelop itself - so that GDevelop is being improved by its community itself!

## What is the first public version of GD ?

GD “1.0.8504202 Beta” in 11 Aug 2008
You can download it and try it !
[Original Link](http://www.compilgames.net/dl/gdbeta5.exe) | [Mirror #1](https://drive.google.com/open?id=1iqUsXVzJjavWhgGUzINrFowIfv3xt2zR)

## What is the first release of GD5 beta ?

5.0.0-beta14 , 18 Jan 2018

## What is the last release of GD4 Stable ?

GD 4.0.97, 3 Apr 2018

## When was the Discord opened?

The GDevelop discord is open since December 14, 2016

## Why is GDevelop can not export directly to mobile and desktop and why use an online build service instead?

Building games as stand-alone executables for Windows, macOS, Linux or for a mobile platform like Android need large, heavyweight SDKs to be downloaded and properly installed (for example, the Android SDK).
Things can break easily in case of misconfiguration.
Instead, GDevelop can do all the packaging automatically - without having to install, configure or do anything - using the one click exports (that are powered by an online build service).

Note that it’s perfectly possible to export and do manual compilation using technologies like Electron or Cordova - but this requires to install these development tools and others.

## Is GDevelop trying to copy and be a free alternative to Construct (they look and feel very similar)?

No, GDevelop was started roughly at the same time as Construct 1. The ideas behind both softwares are similar - because Construct team and GDevelop authors naturally found similar concepts to work. In particular, behaviors and events have been “discovered” by both teams separately as a superior alternative to any other kind of visual programming.

Such concepts can then have been integrated into other game engines, or the other way, GDevelop or Construct can have been inspired by each other or by other game engines.

## Why are GDevelop and my games flagged by my antivirus?

There is no virus, it's because the app is new and not yet signed by Microsoft.
If you want to be sure, you can go on Github and make your own review of the source code.
It's open source, meaning you can check all the code online.

## When 3D will be supported in GDevelop?

GDevelop is a 2D-centric engine, we strive to provide a fast and easy to use engine for everyone.
There are many things left to do in 2D, exploring the totally different world of 3D is not yet planned.
If you're looking for a 3D game engine here's a list: <https://en.wikipedia.org/wiki/List_of_game_engines>

## I saw an update being announced, but GDevelop isn't auto-updating.

When an update is published, we do not directly mark it as latest for the auto-updater, as we don't want to make everyone update in case the new version has an important issue.
Note that it sometimes happen that the auto-updater breaks, you'll need to manually download the next version in that case.
To download a new version that just got published, download it on GDevelop's GitHub releases page:
<https://github.com/4ian/GDevelop/releases/>

## The text objects are blurry when scaled, how can I fix that?

Sadly, that is a known issue with the renderer and its way of scaling. Fortunately, from beta110, there is an new text objects called [Bitmap Text](/gdevelop5/objects/bitmap_text) should will solve the problem

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
<https://gdevelop-releases.s3.amazonaws.com/master/latest/GDevelop%205%20Setup%205.0.0-beta103.exe>
You may need to replace the "beta103" with the latest released version of GDevelop.
For more details, see this document: <https://github.com/4ian/GDevelop/blob/master/newIDE/docs/Nightly-Builds-and-continuous-deployment.md>

## How can I make multiplayer?

You can do networking in GDevelop using the P2P, MQTT or Firebase extension.
Using those, you can communicate data over the internet from one game instance to the other. By sending data like player position and the general state of the game, you can make multiplayer.
P2P docs: <http://wiki.compilgames.net/doku.php/gdevelop5/all-features/p2p>
MQTT docs: <http://wiki.compilgames.net/doku.php/gdevelop5/extensions#mqtt_client_advanced>
Firebase docs: <http://wiki.compilgames.net/doku.php/gdevelop5/all-features/firebase>
P2P example: <https://editor.gdevelop.io/?project=example://p2p-networking>
Firebase example: <https://editor.gdevelop.io/?project=example://firebase-example>

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