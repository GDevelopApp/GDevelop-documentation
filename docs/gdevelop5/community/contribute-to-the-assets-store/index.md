---
title: Submit an Asset Pack
---

# Submit an Asset Pack

Publish on the GDevelop's asset store, you can publish royalty-free, public domain assets, or even [sell your own game art](/gdevelop5/community/sell-asset-pack-store).

GDevelop streamlines the integration of assets into game projects, eliminating the need for manual editing the assets. To ensure seamless compatibility with the asset store, submitted art must adhere to specific technical requirements. These constraints are easily managed within the engine: simply create objects with your art, configure the objects appropriately, and GDevelop will handle the necessary processing to export your assets in a `.gdo` file format ready for the asset store.

Before integrating your art into a pack, you'll need to think its fundamental elements, such as a thumbnail, the title, a description, and other key details. Let's explore each of these components that determine an asset pack.

## Determine your Asset Pack

### Get a Thumbnail & Previews Files

A pack with an attractive thumbnail makes it more visible. Additional images can help them figuring out if a pack suit their needs. Contrasted colors can be used. The thumbnail should reflect the pack's. Thumbnails that put assets in context are preferred to grids of assets.

- Get a thumbnail:
  - Must be 16:9, `1280x720` or `1920x1080`
  - File format in `.png`
  - Must be named: `thumbnail.png`

- Get previews (This step can be skipped for free packs.):
  - They can be from 1 to 9
  - Must be named `preview1.png`, `preview2.png`, ..., `preview9.png`
  - Must be 16:9, `1280x720` or `1920x1080`
  - File format in `.png` or `.gif`

  These files must be in a new `previewImages` folder.

### Get a Title

Having a good title is important, buyers search using keywords, choose a unique and short title that represents your pack.
A good asset pack title is concise, descriptive, and engaging, clearly indicating the pack's primary content and making it easily discoverable and memorable for users.

### Get a dDescription

A good asset pack description clearly and concisely communicates the contents and value of the pack to potential users by highlighting included items, intended use cases, and any relevant details.

### The Pricing

(This step can be skipped for free packs.)

A paid pack can have two pricing in the same time, depending of the use of the buyer.

- **Single Commercial**: The price for one commercial game only.
- **Unlimited Commercial**: The price for unlimited commercial games, an unlimited number of projects and platforms.

Usually the Unlimited Commercial is more expensive from 20% to 30%.
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

### Organize Assets into Folders

A pack is organized into folders. Each folders names will be used by the asset store as tags to let users search for assets.
Folders name should not be too specific because it's the purpose of object names. For example, objects `BlueCar` and `RedCar` should be in a folder named `Vehicle` and not `Car` because it allows users to browse every vehicle in the asset store. They can already find cars as the search also use object names.

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

    When a pack contains a lot of objects, more specific folders and sub-folders can be used.

### Follow Naming Best Practices

The objects names must be descriptive. They are used by the search engine of the asset store.

Instances of good names:

- Tall Palm Tree
- Desert Background
- Yellow Sport Car

Generic names to avoid:

- Building 5
- Player
- Item 37
- Robert (a proper noun)

## Package Using GDevelop

To ensure a fully valid file for the asset store, add your resources as objects within GDevelop.
Then, export a `.gdo` file, which will contain the complete object configuration, and the folders structure you built as you've set it up in the engine.

To export a a `.gdo` file from the GDevelop editor following these steps:

- Create an empty scene.
- Create objects that use your art.
- Right click on **Scene Objects** and choose **Export as a pack**.

![](export-gdo.png)

### Fit Art with an Object

Your files must all match an object type, please [follow the object page](gdevelop5/objects/) which details each type and will help you to integrate your files correctly.

### Fonts

Put the fonts in to a `Font` folders.
Formats supported are:

- .ttf
- .otf

### Package Audio

Put your audio files `.aac`, `.wav`, `.mp3` (prefer `.aac`) directly in a `Audio` folder, with the name to be displayed: `Laser effect.aac`, `Background music.aac`.

!!! warning

        🚨 Careful about the size! Players are sensitive to the size of a game download (especially on mobile and on the web). **Try to keep music file sizes around 1 to 2 MB.  In rare cases, these can be 4 or 5 MB, but not larger.** Consider downgrading the quality a bit to keep the music files around these sizes.
    Sound effects are usually even smaller. If a sound file is larger than 200 or 300 KB, consider downgrading the quality.

### Other Objects

If you are in doubt, ask to the GDevelop team or the community if your files can be supported by an objects, or fit a [custom objects (prefab)](gdevelop5/objects/custom-objects-prefab-template/).

## Package Manually

You can create an pack by packaging yourself the files without the game engine editor. It can be achieve by following these [technical speficications](./technical-speficication.md).

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

When you're ready to submit your asset pack (free or paid), compress the folder containing the `.gdo` or the other folders of your pack, then send it to the GDevelop by filling the application form with the button below:

[Send my asset pack on the GDevelop's store](https://forms.gle/F1qU2V3MwZ91zqRn9){ .md-button .md-button--primary }
