---
title: Submit an Asset Pack
---

# Submit an Asset Pack

Publish on GDevelop's asset store, you can publish royalty-free, public domain assets, or even [sell your own game art](/gdevelop5/community/sell-asset-pack-store).

GDevelop streamlines the integration of assets into game projects, eliminating the need for manually editing the assets. To ensure seamless compatibility with the asset store, submitted art must adhere to specific technical requirements. These constraints are easily managed within the engine: simply create objects with your art, configure the objects appropriately, and GDevelop will handle the necessary processing to export your assets in a `.gdo` file format ready for the asset store.

Before integrating your art into a pack, you'll need to consider its fundamental elements, such as a thumbnail, title, description, and other key details. Let's explore each of these components that define an asset pack.

## Get your Pack Ready

### Get a Thumbnail & Previews Files

A pack with an attractive thumbnail makes it more visible. Additional images can help them decide if a pack suits their needs. Use contrasting colors to make your thumbnail stand out. The thumbnail should accurately represent the contents of the pack. Thumbnails that show assets in context are preferred over simple grids of assets.

- Thumbnail requirements:

  - Size: 16:9 ratio. Example: `1280x720` or `1920x1080`
  - File:  `.png`
  - Name: `thumbnail.png`

- Previews of your assets: extra images that display your pack to convince the user to purchase it.  If you contribute a Free Asset Pack, preview assets are not mandatory:

  - They can be from 1 to 9
  - Must be named `preview1.png`, `preview2.png`, ..., `preview9.png`
  - Must be 16:9, `1280x720` or `1920x1080`
  - File format in `.png` or `.gif`

  All preview images must be submitted inside a folder named `previewImages`.

### Name your Pack

Having a good title is important, buyers search using keywords. Choose a unique and short title that represents your pack.
A good asset pack title is concise, descriptive, and engaging, clearly indicating the pack's primary content and making it easily discoverable and memorable for users.

### Get a Description

A good asset pack description clearly and concisely communicates the contents and value of the pack to potential users by highlighting included items, intended use cases, and any relevant details.

### Define a Price

(This step can be skipped for free packs.)

A paid pack can have two different prices, to fit the needs of the buyer.

- **Single Commercial**: The price for one commercial game only.
- **Unlimited Commercial**: The price for unlimited commercial games, an unlimited number of projects and platforms.

Usually the Unlimited Commercial price is 20% to 30% more expensive.
You can mention the prices in Euro (€) or USD ($).

### Choose a Category

Your pack must comply with at least one of these main categories:

- Full Game Asset Packs
- Prefabs (Ready-to-use Objects)
- UI/Interface
- Visual Effects
- Backgrounds
- Characters
- Props
- Sounds and musics
- Ready-made games

### File organization for submission

A pack is organized into folders. Each folders name will be used by the asset store as tags to let users search for assets.
Folders name should not be too specific because it's the purpose of object names. For example, objects `BlueCar` and `RedCar` should be in a folder named `Vehicle` and not `Car` because it allows users to browse every vehicle in the asset store. They can already find cars as the search also use object names.

Some examples of folder names

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

    When a pack contains a lot of objects, more specific folders and sub-folders can be used.

### Follow Naming Best Practices

The object names must be descriptive. They are used by the search engine of the asset store.

Examples of good names:

- Tall Palm Tree
- Desert Background
- Yellow Sport Car

Generic names to avoid:

- Building 5
- Player
- Item 37
- Robert (a proper noun)

## Package your Art

There are two ways you can package your Asset Pack to submit it to the GDevelop Store:

- **Recommended: Through the engine:** Set your objects in the engine and export the `.gdo` file that was automatically generated.  This file will include the complete object configuration and folder structure as set up in the engine.

- **Manual packaging:** If you have a large number of assets, you can create a pack by manually organizing the files without using the game engine editor, following [the provided technical specifications](./technical-speficication.md).

To export a `.gdo` file from the GDevelop editor, follow these steps:

- Create an empty scene.
- Create objects that use your art.
- Right click on **Scene Objects** and choose **Export as a pack**.

![](export-gdo.png)

### Fit Art with an Object

Your files must all match an object type, please [follow the object page](/gdevelop5/objects/) which details each type and will help you to integrate your files correctly.

### Fonts

Put the fonts into a `Font` folder.
Formats supported are:

- .ttf
- .otf

### Package Audio

Put your audio files `.aac`, `.wav`, `.mp3` (prefer `.aac`) directly into an `Audio` folder, with the name to be displayed: `Laser effect.aac`, `Background music.aac`.

!!! warning

        🚨 Careful about the size! Players are sensitive to the size of a game download (especially on mobile and on the web). **Try to keep music file sizes around 1 to 2 MB.  In rare cases, these can be 4 or 5 MB, but not larger.** Consider downgrading the quality a bit to keep the music files around these sizes.
    Sound effects are usually even smaller. If a sound file is larger than 200 or 300 KB, consider downgrading the quality.

### Other Objects

If you are in doubt, ask to the GDevelop team or the community if your files can be supported by an objects, or fit a [custom objects (prefab)](gdevelop5/objects/custom-objects-prefab-template/).

### Limitations

GDevelop have several limitation for now, as they are:

!!! note

    - Sprite sheets **are not supported yet**! Each animation frame must **be a separate image**.
    - Each animation image must have the same pixel size as the other animation states.
    - GDevelop does not support image the origin point for different animations yet.
    - Audio files are not yet supported within the `.gdo` format. Please place your audio files in an `Audio` folder located in the same directory as your `.gdo` file. Subsequently, compress both the `.gdo` file and the Audio folder into a `.zip` or `.rar` archive for submission via the application form.

## Something Unclear?

Ask a question on [this Trello board](https://trello.com/c/s8RctC9M/2-asset-rules-and-regulations) card. If the rules here are too complicated or are giving you too much work, you can suggest a new rule and we'll see if we can adapt the importer so that it can understand your asset structure.
The goal is to make objects more or less automatically!

## Submitting the Asset Pack

When you're ready to submit your asset pack (free or paid), compress the folder containing the `.gdo` or the other folders of your pack, then send it to GDevelop by filling the application form with the button below:

[Send my asset pack on the GDevelop's store](https://forms.gle/F1qU2V3MwZ91zqRn9){ .md-button .md-button--primary }
