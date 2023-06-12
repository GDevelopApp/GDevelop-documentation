---
title: Contributing to the assets store
---
# Contributing to the assets store

You can contribute to GDevelop's Assets Store with royalty free/public domain resources that can be used by everyone for any kind of project, or submit your own game art.
Assets have to be submitted into category and sub-category folders. Images, audio and fonts should be named in plain English as the final user will read them.

GDevelop creators can add assets to the project without having to worry about editing. This means that submitted art, has to follow a number of technical constraints:

## For images (animated sprites, tiled sprites or GUI):

In a nutshell: these are the basic rules to submit video game asset images. Make sure that your files respect the following guidelines:

* Each image frame, has to be a png transparency file
* Every animation frame has to be the same pixel size as the other animation states
* Tiles and GUI images have to be properly aligned

!!! note

        Sprite sheets **are not supported**! Each animation frame must **be a separate image**.
    GDevelop does not support image the origin point for different animations yet.

GDevelop's most common sizes for animation assets are:

* Mobile: 720x1280
* Desktop: 1280x720
* Desktop full HD: 1920x1080

If you're looking for "an easy way" to prepare your assets for the Asset Store, [Entropy](https://gd.games/Entropy) has created a solution to upload, name, and [license](https://wiki.gdevelop.io/gdevelop5/community/sell-asset-pack-store/) your Assets. Go to [this GitHub page](https://github.com/Entr0py404/GDev-Asset-Store-Tool/releases/tag/v1.4) to download the Windows app, and [watch his Twitch](https://www.twitch.tv/videos/1641376379?t=00h02m50s) to see how to use the tool.

### Naming assets

For unanimated sprites, a single image with the name of the object is enough. On the contrary, animated sprites require multiple animated frames, which have to be named properly.
While writing your file names, it is important that you follow a specific naming structure:

```text
BaseName_AnimationState_frame#.png
```

For a character called "Red Hero", with 4 frames of a Running animation

![](/gdevelop5/community/anim1.png)

```text
RedHero_Run_1.png
RedHero_Run_2.png
RedHero_Run_3.png
RedHero_Run_4.png
```

If the same character is caring a prop, the naming should appear on the Animation State. Not on the Character name.

![](/gdevelop5/community/anim2.png)

```text
RedHero_RunJewel_1.png
RedHero_RunJewel_2.png
RedHero_RunJewel_3.png
RedHero_RunJewel_4.png
```

!!! note

        **A note on animation states:**
    If the **animated** object only has one animation state, there is no need to specify if the animation is "Walk, Idle, Climb, Death..." on the name. An animation index will do: `Jewel_1.png`, `Jewel_2.png`, `Jewel_3.png`.

- If you want to create a **[Tiled sprite](/gdevelop5/objects/tiled_sprite)** (for backgrounds or repeating patterns):
    - Prefix the *base name* by `tiled_`. For example: `tiled_Grass Background.png`

- If you want to add a **[9-Patch (Panel Sprite)](/gdevelop5/objects/panel_sprite)** object that can be stretched with the center and the border repeated:
    - In an image software slice your image in 9 different images, and name them: `9patch_BaseName_gravity.png` with gravity being: `southwest`, `southeast`, `south`, `northwest`, `northeast`, `north`, `west` and `east`.

All these files will be used by our server to generate a unique texture used in the 9-Patch object.

For example:

```text
9patch_Grass_center.png
9patch_Grass_east.png
9patch_Grass_north.png
9patch_Grass_northeast.png
9patch_Grass_northwest.png
9patch_Grass_south.png
9patch_Grass_southeast.png
9patch_Grass_southwest.png
9patch_Grass_west.png
```

### Assets with specific time duration

To specify FPS and looping for an animation, you'll need to add a METADATA file to your folder by creating a .json file (a text file) and pasting this structure:

```json
{
  "timeBetweenFrames": 0.2,
  "loop": false
}
```

If you are not sure about the number that "time between frames" will represent,[this article](http://www.stopmotionworks.com/stopwatch.htm) explains it:
![](/gdevelop5/community/fps.png)

!!! tip

    Save the .json file as the **METADATA** of your object with the following structure: `BaseName_METADATA.json`

- If you have **multiple animation status** and **each must have a different speed**, create a .json file **per animation state**, using this name: `BaseName_AnimationState_METADATA.json`.

For example:

```text
Spaceship_Idle_METADATA.json
Spaceship_Flying_METADATA.json
Spaceship_Destroyed_METADATA.json
...
```

Your file should look something like this:

![](https://user-images.githubusercontent.com/1280130/103412855-78836300-4b77-11eb-99ec-ac8287372ece.png)

## Adding tags to your assets

Tags allow creators to search your assets. These tags can be things like "side view", "pixel art" and so on.
We recommend you to use Asset Store's existing tags.

Put all your images in a single folder, and inside that folder create a file called `TAGS.md`. In this file, put the tags of the assets, separated by a comma. All tags must be singular, not plural.
Start the file by one of these tags (depending on the type of pack): `top-down`, `side view` or `interface`.

For example:

```text
side view, pirate, ship, sea
```

!!! tip

    Folder names will be read as tags. Make sure to use plain English for each folder.

You can put your images in different sub folders. Each sub folder will be used as a tag name. Some folders names like "PNG", "SVG", etc... will be ignored (so don't change the whole structure of your assets, we'll ignore anything that does not make sense).

Note that you can also put assets in a folder called `Unimplemented` or `TODO`, and these folders will be entirely ignored.

!!! tip

        **How to submit my images when they are ready?**

    Zip the folder containing them and send them to the GDevelop team on Github by opening an [issue here](https://github.com/4ian/GDevelop/issues/new?assignees=&labels=%F0%9F%93%A6+Asset+Store+submission&template=--asset-store-submission.md&title=).

## For audio

Put your .aac or .wav files (prefer .aac) directly in a folder, with the name to be displayed: `Laser effect.aac`, `Background music.aac`.

!!! warning

        🚨 Careful about the size! Players are sensitive to the size of a game download (especially on mobile and on the web). **Try to keep music file sizes around 1 to 2 MB.  In rare cases, these can be 4 or 5 MB, but not larger.** Consider downgrading the quality a bit to keep the music files around these sizes.
    Sound effects are usually even smaller. If a sound file is larger than 200 or 300 KB, consider downgrading the quality.

`TAGS.md` files will work like for images. Sub folders are also used for tags as described for images.

A great tool to convert audio files to AAC format is [fre:ac](https://www.freac.org/).  fre:ac is free, open-source, and cross-platform.  It can process batches of files, with many options on how they are named and put into folders.

- Choose the encoder called "Fraunhofer FDK AAC Encoder".
- Select "File format > AAC"
- Select "Quality > Set Quality > 3"

This will create high-quality audio files, but using a variable bit rate that won't exceed 96 kbps (assuming stereo input).

![Screenshot 2021-03-11 112608](https://user-images.githubusercontent.com/8879811/110835883-9bf41980-825c-11eb-93c8-ef795b0379a2.jpg)

![Screenshot 2021-03-11 112527](https://user-images.githubusercontent.com/8879811/110835884-9c8cb000-825c-11eb-9b8d-f22228a71329.jpg)

!!! tip

        **How to submit my sounds and music when they are ready?**

    Zip the folder containing them and send them to the GDevelop team on Github by opening an [issue here](https://github.com/4ian/GDevelop/issues/new?assignees=&labels=%F0%9F%93%A6+Asset+Store+submission&template=--asset-store-submission.md&title=).

## For fonts

Like images and audio, put your fonts in folders. `.ttf` and `.otf` files are supported.

`TAGS.md` files will work like for images. Sub folders are also used for tags as described for images.

## (⚠️ Advanced!) To make an object from scratch, for example particle emitters

!!! note

    These assets from scratch are a bit cumbersome to author right now. Here is an example folder that shows how the particle emitter objects from Wishforge Games are done: [Particles.zip](https://github.com/4ian/GDevelop/files/5757421/Particles.zip)

Create a file with extension `.asset.json`, for example: `My Particle Effect.asset.json`. The format of this asset is:

```json
{
  "id": "",
  "name": "",
  "authors": [""],
  "license": "",
  "shortDescription": "",
  "description": "Enter a description. Leave the rest empty, it will be autogenerated",
  "previewImageUrls": [],
  "tags": [],
  "objectAssets": [
    {
      "object": { ...JSON CONTENT OF AN OBJECT...  },
      "resources": [ ],
      "customization": []
    }
  ],
  "gdevelopVersion": "",
  "version": ""
}
```

Leave almost everything empty. Create your object in GDevelop, then copy it in the clipboard. Paste the content in a file, and then copy just the "content.object" key:

For example:

![](https://user-images.githubusercontent.com/1280130/103413204-d5334d80-4b78-11eb-8248-aecc67d17cba.png)

Paste it inside the `.asset.json` file you created, replacing `...JSON CONTENT OF AN OBJECT...`:
![](https://user-images.githubusercontent.com/1280130/103413230-f300b280-4b78-11eb-9c3b-718bdf58ba66.png)

Finally, if your object uses image resources, make sure to add them in the `resources` array:
![](https://user-images.githubusercontent.com/1280130/103413269-1e839d00-4b79-11eb-91a6-39bc80696a98.png)

Put all images with the name that you put in the `resources` array next to your `.asset.json` file.

Finally, add:

- a file with the same name but with the extension `.preview.png` that will be shown in the assets store
- an empty filed called `IGNORED_FOR_IMAGE_ASSETS.md` so that the importer will ignore the images and won't try to create objects automatically :)

For example:

![](https://user-images.githubusercontent.com/1280130/103413361-74f0db80-4b79-11eb-94c2-7cf535bb9118.png)

!!! tip

        **How to submit my fonts when they are ready?**

    Zip the folder containing them and send them to the GDevelop team on Github by opening an [issue here](https://github.com/4ian/GDevelop/issues/new?assignees=&labels=%F0%9F%93%A6+Asset+Store+submission&template=--asset-store-submission.md&title=).

## I have too many assets and this will take me a long time to organize everything! How can I do?

That's the reason why we're making an asset store: there are lots of assets available or that could be made available, but most are hidden on different websites, and not ready to use.
By taking the time to prepare them for GDevelop, we're making a **high quality** asset store of objects ready to use. This implies taking a bit of time to prepare these assets - which should hopefully be not too much considering that we use a naming convention with filenames.

!!! note

    In particular, you should be able to quickly rename a bunch of files by opening the folder in the Windows/Linux/macOS file explorer, ensuring you have a preview of each file and then with your keyboard and some shortcuts (F2 to rename on Windows, Enter on macOS...) rename quickly each file with a proper name.

In the case where it's too painful/long to do because you have **tons** of objects (for example, you have separated a spritesheet of 200 RPG objects), it's ok to select all the files and rename them to something like `Generic RPG object (1).png`, `Generic RPG object (2).png`, etc...

!!! note

    Be sure **not** to use an underscore to separate the name from the number, otherwise the asset importer will consider that it's a single object with multiple animations. In other words, **don't name the files** like `Generic RPG object_1.png`, etc...

Finally, be sure to put a `TAGS.md` file with enough tags for people to be able to search for these assets.  👍

## License

Put a license.txt file in your folder. The importing will recognize it and apply to all files in the folder.
Make sure to put your name in this license file too (or the name of the original author).
The importer will be adapted to understand the license file.

!!! danger

    We won't allow the addition of any assets with an unclear license. Get in touch with the author if the license is unclear or if you worried that the author would not allow redistribution of their original assets. All assets must have a license allowing their usage for free for any purpose, allow modifications/derived work and may optionally ask for attribution.

## Something unclear?

Ask a question on [this Trello board](https://trello.com/c/s8RctC9M/2-asset-rules-and-regulations) card. If the rules here are too complicated or are giving you too much work, you can suggest a new rule and we'll see if we can adapt the importer so that it can understand your asset structure.
The goal is to make objects more or less automatically!

## How to send my assets when they are ready?

Zip the folder containing them and send them to the GDevelop team on Github by opening an [issue here](https://github.com/4ian/GDevelop/issues/new/choose).
