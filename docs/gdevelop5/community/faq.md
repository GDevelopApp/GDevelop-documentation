---
title: GDevelop Community FAQ
---
# GDevelop Community FAQ

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

## I saw an update being announced, but GDevelop isn't auto-updating.

When an update is published, we do not directly mark it as latest for the auto-updater, as we don't want to make everyone update in case the new version has an important issue.
Sometimes the auto-updater breaks, and you'll need to download the next version manually.
To download a new version that just got published, download it on [GDevelop's GitHub releases page](https://github.com/4ian/GDevelop/releases/).

## The text objects are blurry when scaled, how can I fix that?

Sadly, that is a known issue with the renderer and its way of scaling. You can use [Bitmap Text](/gdevelop5/objects/bitmap_text) to solve the issue, especially for pixel-art games.

## Where can I find the latest nightly build?

[See this document](https://github.com/4ian/GDevelop/blob/master/newIDE/docs/Nightly-Builds-and-continuous-deployment.md).

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
