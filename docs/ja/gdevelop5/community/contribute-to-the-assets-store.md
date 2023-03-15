---
title: contribute-to-the-assets-store
---
FIXME **This page is not fully translated, yet. Please help completing the translation.**  
*(remove this paragraph once the translation is finished)*

# アセットストアへの貢献

GDevelop's documentation is powered by the community and everyone is encouraged to contribute. In particular, you can help building the assets store with royalty free/public domain resources that can be used by everyone for any kind of project.

This page provides a few guidelines to help maintain the quality of the assets store.

The main idea is that assets are grouped into folders and sub folders. Images, audio and fonts should have a name that is the plain English name that will be displayed to the user. By giving specific names to images, they will be used to create a single object.

!!! note

    Note that tilesheets **are not supported**! Each image of an object must **be in a separate file** (using the rules to name the files below). It's also recommended that all images of a single object have the same size (with transparent margins), because for now we can't specify the origin of an image. 

## For images (to make sprite, tiled sprite or panel sprite objects):

Each image will be used to create an object. For sprites, more than one image can be used to create a single object, by following the rules described below.

- By default, an image will be used to create a **Sprite** object.

1.  The **name of the file**, without the extension, will be used for the object name.

!!! note

    For example, an image called "Spaceship.png" will create a Sprite object called "Spaceship", with this image as the first animation.

1.  If the object is **animated**, use different image files with the **same base name**, and add an underscore followed by the image index: `Spaceship_1.png`, `Spaceship_2.png`, `Spaceship_3.png`.

&nbsp;

1.  If the object has **multiple animations**, you can add the name of the animation between the *base name* and the index.

&nbsp;

      Spaceship_flying_1.png
      Spaceship_flying_2.png
      Spaceship_flying_3.png
      Spaceship_1.png
      Spaceship_idle.png
      Spaceship_damaged_1.png
      Spaceship_damaged_2.png

!!! note

    Will create an object with three animations: Flying (3 images), Idle (1 image), Damaged (2 images)

1.  To specify the **speed of the animations and if they are looping**, create a file with the **same base name** suffixed by `_METADATA.json`.

&nbsp;

    For example: `Spaceship_METADATA.json`.

    Inside, put this JSON:

        {
            "timeBetweenFrames": 0.2,
            "loop": false
        }

For example:

![](https://user-images.githubusercontent.com/1280130/103412855-78836300-4b77-11eb-99ec-ac8287372ece.png)

- If you have **multiple animations** and **each must have a different speed**, you can create one .json file per animation, using this name: `basename_animationname_METADATA.json`.

For example:

    Spaceship_Idle_METADATA.json
    Spaceship_Flying_METADATA.json
    Spaceship_Destroyed_METADATA.json
    ...

- If you want to create a **Tiled sprite** (for backgrounds or repeating patterns):

1.  Prefix the *base name* by `tiled_`. For example: `tiled_Grass Background.png`

- If your image is a **9 patch**, that can be stretched with the center and the border repeated:

1.  Slice your image in 9 different images, and name them: `9patch_base name_gravity.png` with gravity being: `southwest`, `southeast`, `south`, `northwest`, `northeast`, `north`, `west` and `east`.

For example:

    9patch_Orange leaves_center.png
    9patch_Orange leaves_east.png
    9patch_Orange leaves_north.png
    9patch_Orange leaves_northeast.png
    9patch_Orange leaves_northwest.png
    9patch_Orange leaves_south.png
    9patch_Orange leaves_southeast.png
    9patch_Orange leaves_southwest.png
    9patch_Orange leaves_west.png

## Organizing the assets with tags

Put all your images in a folder. In this folder, create a file called `TAGS.md`. In this file, put the tags of the assets, separated by a comma. Put at least a tag `top-down`, `side view` or `interface`.

For example:

    side view, pirate, ship, sea

You can put your images in different sub folders. Each sub folder will be used as a tag name. Some folders names like "PNG", "SVG", etc... will be ignored (so don't change the whole structure of your assets, we'll ignore anything that does not make sense).

Note that you can also put assets in a folder called `Unimplemented` or `TODO`, and these folders will be entirely ignored.

## For audio

Put your .aac or .wav files (prefer .aac) directly in a folder, with the name to be displayed: `Laser effect.aac`, `Background music.aac`.

!!! note

    🚨 Careful about the size! Players are sensitive to the size of a game download (especially on mobile and on the web). **Try to keep music file sizes around 1 to 2 MB. In rare cases, these can be 4 or 5 MB, but not larger.** Consider downgrading the quality a bit to keep the music files around these sizes. Sound effects are usually even smaller. If a sound file is larger than 200 or 300 KB, consider downgrading the quality.

`TAGS.md` files will work like for images. Sub folders are also used for tags as described for images.

A great tool to convert audio files to AAC format is \[fre:ac\](<https://www.freac.org/>). fre:ac is free, opensource, and cross-platform. It can process batches of files, with many options on how they are named and put into folders.

- Choose the encoder called "Fraunhofer FDK AAC Encoder".
- Select "File format \> AAC"
- Select "Quality \> Set Quality \> 3"

This will create high-quality audio files, but using a variable bit rate that won't exceed 96 kbps (assuming stereo input).

!\[Screenshot 2021-03-11 112608\](<https://user-images.githubusercontent.com/8879811/110835883-9bf41980-825c-11eb-93c8-ef795b0379a2.jpg>)

!\[Screenshot 2021-03-11 112527\](<https://user-images.githubusercontent.com/8879811/110835884-9c8cb000-825c-11eb-9b8d-f22228a71329.jpg>)

## For fonts

Like images and audio, put your fonts in folders. `.ttf` and `.otf` files are supported.

`TAGS.md` files will work like for images. Sub folders are also used for tags as described for images.

## (⚠️ Advanced!) To make an object from scratch, for example particle emitters

!!! note

    These assets from scratch are a bit cumbersome to author right now. Here is an example folder that shows how the particle emitter objects from Wishforge Games are done: \[Particles.zip\](<https://github.com/4ian/GDevelop/files/5757421/Particles.zip>)

Create an file with extension `.asset.json`, for example: `My Particle Effect.asset.json`. The format of this asset is:

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

Leave almost everything empty. Create your object in GDevelop, then copy it in the clipboard. Paste the content in a file, and then copy just the "content.object" key:

For example:

![](https://user-images.githubusercontent.com/1280130/103413204-d5334d80-4b78-11eb-8248-aecc67d17cba.png)

Paste it inside the `.asset.json` file you created, replacing `...JSON CONTENT OF AN OBJECT...`: ![](https://user-images.githubusercontent.com/1280130/103413230-f300b280-4b78-11eb-9c3b-718bdf58ba66.png)

Finally, if your object uses image resources, make sure to add them in the `resources` array: ![](https://user-images.githubusercontent.com/1280130/103413269-1e839d00-4b79-11eb-91a6-39bc80696a98.png)

Put all images with the name that you put in the `resources` array next to your `.asset.json` file.

Finally, add:

- a file with the same name but with the extension `.preview.png` that will be shown in the assets store - an empty filed called `IGNORED_FOR_IMAGE_ASSETS.md` so that the importer will ignore the images and won't try to create objects automatically :)

For example:

![](https://user-images.githubusercontent.com/1280130/103413361-74f0db80-4b79-11eb-94c2-7cf535bb9118.png)

## I have too many assets and this will take me a long time to organize everything! How can I do?

That's the reason why we're making an asset store: there are lots of assets available or that could be made available, but most are hidden on different websites, and not ready to use. By taking the time to prepare them for GDevelop, we're making a **high quality** asset store of objects ready to use. This implies taking a bit of time to prepare these assets - which should hopefully be not too much considering that we use a naming convention with filenames.

!!! note

    In particular, you should be able to quickly rename a bunch of files by opening the folder in the Windows/Linux/macOS file explorer, ensuring you have a preview of each file and then with your keyboard and some shortcuts (F2 to rename on Windows, Enter on macOS...) rename quickly each file with a proper name.

In the case where it's too painful/long to do because you have **tons** of objects (for example, you have separated a spritesheet of 200 RPG objects), it's ok to select all the files and rename them to something like `Generic RPG object (1).png`, `Generic RPG object (2).png`, etc...

!!! note

    Be sure **not** to use an underscore to separate the name from the number, otherwise the asset importer will consider that it's a single object with multiple animations. In other words, **don't name the files** like `Generic RPG object_1.png`, etc...

Finally, be sure to put a `TAGS.md` file with enough tags for people to be able to search for these assets. 👍

## License

Put a license.txt file in your folder. The importing will recognize it and apply to all files in the folder. Make sure to put your name in this license file too (or the name of the original author). The importer will be adapted to understand the license file.

!!! note

    We won't allow the addition of any assets with an unclear license. Get in touch with the author if the license is unclear or if you worried that the author would not allow redistribution of their original assets. All assets must have a license allowing their usage for free for any purpose, allow modifications/derived work and may optionally ask for attribution.

## Something unclear?

Ask a question on [this Trello board](https://trello.com/c/s8RctC9M/2-asset-rules-and-regulations) card. If the rules here are too complicated or are giving you too much work, you can suggest a new rule and we'll see if we can adapt the importer so that it can understand your asset structure. The goal is to make objects more or less automatically!

## How to send my assets when they are ready?

Zip the folder containing them and send them to @4ian or @Bouh, either by opening an [issue here](https://github.com/4ian/GDevelop/issues/new/choose) or by tagging `@florianrival` or `@bouh2` on a card on the [GDevelop Assets Trello board](https://trello.com/b/xoOCKFOf/gdevelop-assets). It's a good idea to get in touch with people on the Trello board to have them review your assets first.
