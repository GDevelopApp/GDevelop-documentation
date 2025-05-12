---
title: Submit an asset pack
---

# Submit an asset pack

Publish on the GDevelop's Assets Store, with royalty free/public domain assets or with your own game art you would sell.

GDevelop creators can add assets to their projects without having to worry about editing. This means that submitted art, has to follow a number of technical constraints that is handle with ease by importing into it into the engine, and once properly integrated, they can be exported at once in a format that the Asset Store will support.

!!! note

    Learn more about the splitselling process on the [selling assets page](/gdevelop5/community/sell-asset-pack-store).

## Determine your asset pack

### Get a title

Avoir un bon titre, les acheteurs cherchent par mots clés, choissisez un titre unique qui représente votre pack.

### Get a thumbnail & previews files

A pack with an attractive thumbnail makes it more visible. Additional images can help them figuring out if a pack suit their needs. Contrasted colors can be used. The thumbnail should reflect the pack's. Thumbnails that put assets in context are preferred to grids of assets.

- Get a thumbnail:
    - Must be 16:9, `1280x720` or `1920x1080`.
    - File format in `.png`.
    - Must be named: `thumbnail.png`.

- Get previews:
    - They can be from 1 to 9.
    - Must be named `preview1.png`, `preview2.png`, ..., `preview9.png`.
    - Must be 16:9, `1280x720` or `1920x1080`.
    - File format in `.png` or `.gif`.



### The pricing

(This step can be skip for free packs)

A paid pack can have two pricing in the same time, depending of the use of the buyer.

- Single Commercial: The price for one commercial game only.
- Unlimited Commercial: The price for unlimited commercial games, an unlimited number of projects and platforms.

Usually the Unlimited Commercial is more expensive from 20% to 30%.
The price are in Euro or USD.

### Choose a category

Your packs must to fullfil minimum one of the 9 mains categories:

- Full Game Asset Packs
- Prefabs (Ready-to-use Objects)
- UI/Interface
- Visual Effects
- Backgrounds
- Characters
- Props
- Sounds and musics
- Ready-made games

---

## Declare your pack

A pack need a declaration file: `pack.json` located at the root of the pack folder.
It contains the pack's name, description, the price and the categories.

!!! note

     - Value: 123 = 1.23€ (Euro)
     - Categories: Remove words that don't correspond to your pack.

pack.json

```
{
  "longDescription": "Write the description of your pack here. You can add a new line like this:\nThis is a new line.",
  "shortDescription": "Write a short inline description of your pack.",
  "tag": "The name of your pack",
  "sellerId": "LEAVE EMPTY",
  "sellerStripeAccountId": "LEAVE EMPTY",
  "prices": [
    {
      "value": 123,
      "usageType": "commercial",
      "currency": "USD"
    },
    {
      "value": 123,
      "usageType": "unlimited",
      "currency": "USD"
    }
  ],
   "categories": ["full-game-pack", "character", "props", "background", "visual-effect", "interface", "prefab", "sounds"]
}
```


## Package using GDevelop

To get a 100% valid file for the asset store you can add your resource as object into GDevelop, then export a `.gdo` file that will contains the whole object as your set them into the engine.

You can create an asset pack with GDevelop editor following these steps:

- Create an empty scene
- Create objects that use the your art
- Right click on **Scene Objects** and choose **Export as a pack**

![](export-gdo.png)

The exported GDO file contains all the objects configuration and the images files that they use.

### The audio files

The audio files aren't supported yet in .gdo. You can put them in a folder next to the GDO file. Then compress the whole thing to send the .zip or .rar for application to the form.


## Package manually


In a nutshell: these are the basic rules to submit video game asset images. Make sure that your files respect the following guidelines:

- Each image frame, has to be a png transparency file
- Every animation frame has to be the same pixel size as the other animation states
- Tiles and GUI images have to be properly aligned

!!! note

        - Sprite sheets **are not supported**! Each animation frame must **be a separate image**.

        - GDevelop does not support image the origin point for different animations yet.


### Static images

Static images don't need any configuration with GDevelop editor. You can put them in a folder next to the GDO file. You Still have to make sure to follow the [naming best practices](#follow-naming-best-practices).

### Sprites with animations or states

Images that represent a same object at different states should be in the same [Sprite](/gdevelop5/objects/sprite) object as animations.

!!! tip

    Frames of all animations of an object can be imported at once by selecting several files. The editor will detect animation names automatically.

Each state (called **Animation** in the editor) can be animated or not.

Some instances of states:

- Empty or Filled
- Close or Open
- Locked or Unlocked
- On or Off

If your pack contains color variations of the same, it's recommended to create an object for each one.

Collections of images like playing cards should be merged into one object that contains an animation for each card.

### Tiled images

Images that can be used as a pattern should be [Tiled sprites](/gdevelop5/objects/tiled_sprite).

### 9-patches

[Panel Sprite ("9-patch")](/gdevelop5/objects/panel_sprite) is an object where its image is split into 9 pieces or slices and each slice is scaled separately.

Corners should be fit as precisely as possible. This allows to use smaller objects size (where the center reaches 0 pixel).

### Tile maps

[Tile map](/gdevelop5/objects/tilemap) are not supported by the asset store.

### UI assets

Some instances of UI objects that can be included in an asset pack:

- [Button](/gdevelop5/objects/button)
- [Multi-touch joystick](/gdevelop5/objects/multitouch-joystick)
- [Slider](/gdevelop5/objects/slider)
- [Toggle switch](/gdevelop5/objects/toggle-switch)
- [Resource bar](/gdevelop5/objects/resource-bar)

### Organize assets into folders

In the editor, objects can be organized into folder. The asset store will display the same folders and use them as tags to let users search for assets.

Folders name should not be too specific because it's the purpose of object names. For example, objects "BlueCar" and "RedCar" should be in a folder named "Vehicle" and not "Car" because it allows users to browse every vehicle in the asset store. They can already find cars as the search also use object names.

Some examples of folders names

- Character
- Animal
- Plant
- Vehicle
- Building
- Collectable
- Rock
- Ground
- Wall
- Furniture
- Prop
- Weapon
- Food

!!! note

    When a pack contains a lot of objects, more specific folders can be used.

## Package 3D models

3D models don't need any configuration with GDevelop editor. You send them in an archive directly. You Still have to make sure to follow the [naming best practices](#follow-naming-best-practices).

Supported 3D file formats are:

- .glb
- .blend
- .gltf
- .obj
- .fbx
- .x3d
- .vrml

**Animation names** should be meaningful such as `run`, `jump`, `idle`, etc.

**Dimensions** of 3d models must be consistent across a pack. For instance, props should fit characters hands.

**The point of origin** is important, it will be used as the position and rotation center of object in GDevelop.

**Textures** are supported only in format types that are contained, such as `.glb`, `.blend`, `.fbx`.

!!! note

    There's no need to add images preview for the models, the asset store will automatically generate them.

## Package audio

Put your .aac or .wav files (prefer .aac) directly in a folder, with the name to be displayed: `Laser effect.aac`, `Background music.aac`.

!!! warning

        🚨 Careful about the size! Players are sensitive to the size of a game download (especially on mobile and on the web). **Try to keep music file sizes around 1 to 2 MB.  In rare cases, these can be 4 or 5 MB, but not larger.** Consider downgrading the quality a bit to keep the music files around these sizes.
    Sound effects are usually even smaller. If a sound file is larger than 200 or 300 KB, consider downgrading the quality.

`TAGS.md` files will work like for images. Sub folders are also used for tags as described for images.

A great tool to convert audio files to AAC format is [fre:ac](https://www.freac.org/). fre:ac is free, open-source, and cross-platform. It can process batches of files, with many options on how they are named and put into folders.

- Choose the encoder called "Fraunhofer FDK AAC Encoder".
- Select "File format > AAC"
- Select "Quality > Set Quality > 3"

This will create high-quality audio files, but using a variable bit rate that won't exceed 96 kbps (assuming stereo input).

![](freac-aac.jpg)

![](freac-quality.jpg)

!!! tip

        **How to submit my sounds and music when they are ready?**

    Zip the folder containing them and send them to the GDevelop team on Github by opening an [issue here](https://github.com/4ian/GDevelop/issues/new?assignees=&labels=%F0%9F%93%A6+Asset+Store+submission&template=--asset-store-submission.md&title=).

## Package fonts

Put the fonts in to a `Font` folders.
Formats supported are:

- .ttf
- .otf

## Follow naming best practices

Object (or file) names must be descriptive. They are used by the search engine of the asset store.

Instances of good names:

- Tall Palm Tree
- Desert Background
- Yellow Sport Car

Generic names to avoid:

- Building 5
- Player
- Item 37
- Robert (a proper noun)

If your file names are already set, you don't need to change them unless they are only numbers.

!!! note

    In this last case, you can rename several files at once by selecting them in the file explorer and using a shortcuts (F2 to rename on Windows, Enter on macOS...). The file explorer will automatically add a number suffix to them.

## License

Put a license.txt file in your folder. Make sure to put your name in this license file too (or the name of the original author).
The importer will be adapted to understand the license file.

!!! danger

    Free asset packs with unclear licenses won't be accepted. In this case, you should get in touch with the author for clarifications and ask if they allow redistribution of their assets. The license must:

    - Allow to Use the assets for free and for any purpose
    - Allow modifications or derived work
    - State if attribution is required or not

## Something unclear?

Ask a question on [this Trello board](https://trello.com/c/s8RctC9M/2-asset-rules-and-regulations) card. If the rules here are too complicated or are giving you too much work, you can suggest a new rule and we'll see if we can adapt the importer so that it can understand your asset structure.
The goal is to make objects more or less automatically!

## How to send my assets when they are ready?

Zip the folder containing them and send them to the GDevelop team on Github by opening an [issue here](https://github.com/4ian/GDevelop/issues/new?assignees=&labels=%F0%9F%93%A6+Asset+Store+submission&template=--asset-store-submission.md&title=).




If you're an artist and wish to submit your assets to the store, use **[this form to sell premium assets on GDevelop's store](https://forms.gle/rqQajpDWEF3Em8HS6)**.