---
title: Manually package the assets
---

https://web.archive.org/web/20231129030022/https://wiki.gdevelop.io/gdevelop5/community/contribute-to-the-assets-store/#the-title-description-and-price

!!! warning

    This page is not yet complete.

If you have too many files, you can manually package an asset pack without the game engine editor.

Here is an example for an imaginary `French food` asset pack:

```
French food
│
├── pack.json                                 << Asset pack metadata
│
├── previewImages                             << Sub folder with public resources
│   ├── IGNORED.md
│   ├── thumbnail.png                         << png only
│   ├── preview1.png                          << png only
│   └── preview2.png                          << png only
│
├── previewSounds                             << Sub folder with public resources
│   ├── IGNORED.md
│   ├── preview1.aac                          << aac, wav, ogg or mp3
│   └── preview2.wav                          << aac, wav, ogg or mp3
│
│
├── Character
│   ├── Enemy 1_Attack Bottom_METADATA.png
│   ├── Enemy 1_Attack Bottom_1.png
│   ├── Enemy 1_Attack Bottom_2.png
│   ├── Enemy 1_Attack Bottom_3.png
│   ├── Enemy 1_Attack Bottom_4.png
│   ├── Enemy 1_Attack Top_METADATA.png
│   ├── Enemy 1_Attack Top_1.png
│   ├── Enemy 1_Attack Top_2.png
│   ├── Enemy 1_Attack Top_3.png
│   ├── Enemy 1_Attack Top_4.png
│   ├── Enemy 2_Attack Bottom_METADATA.png
│   ├── Enemy 2_Attack Bottom_1.png
│   ├── Enemy 2_Attack Bottom_2.png
│   ├── Enemy 2_Attack Bottom_3.png
│   ├── Enemy 2_Attack Bottom_4.png
│   ├── Enemy 2_Attack Top_METADATA.png
│   ├── Enemy 2_Attack Top_1.png
│   ├── Enemy 2_Attack Top_2.png
│   ├── Enemy 2_Attack Top_3.png
│   └── Enemy 2_Attack Top_4.png

│
├── Props
│    ├── 9patch_French Table_all_128.png
│    ├── 9patch_French Table_center.png
│    ├── 9patch_French Table_east.png
│    ├── 9patch_French Table_north.png
│    ├── 9patch_French Table_northeast.png
│    ├── 9patch_French Table_northwest.png
│    ├── 9patch_French Table_south.png
│    ├── 9patch_French Table_southeast.png
│    ├── 9patch_French Table_southwest.png
│    ├── 9patch_French Table_west.png
│    ├── quiche_resting_1.png
│    └── quiche_resting_2.png
│
├── Audio
│   └── cooking.aac
│
├── Font
│   └── bonne maman.ttf
│
└── Splash                            << Sub folder with a partial asset
    ├── IGNORED_FOR_IMAGE_ASSETS.md
    ├── SauceSplashing.asset.json
    ├── SauceSplashing.png
    └── SauceSplashing.preview.png

```

`TAGS.md` files can be used in folders to add additional tags that could describes the assets if the words aren't already in the folder name or the asset name.

### Sprite

You can put them in a folder of your choice. You Still have to make sure to follow the [naming best practices](/gdevelop5/community/contribute-to-the-assets-store#follow-naming-best-practices).

#### Static sprite

For unanimated [Sprites](/gdevelop5/objects/sprite), a single image with the name of the object is enough.

`Chair.png`

#### Sprites with animations or states

For animated sprites require multiple animated frames, which have to be named properly. While writing your file names, it is important that you follow a specific naming structure:

`BaseName_AnimationState_frame#.png`

### Tiled Sprite

### Panel Sprite

### 3D Box

### 3D models

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

### Tile map

[Tile map](/gdevelop5/objects/tilemap) are not yet supported for manual packaging. It must be integrated and configured in GDevelop then exported as `.gdo` by a right-click on the object.

### Fonts

Put the fonts in to a `Font` folders.
Formats supported are:

- .ttf
- .otf

### Audio, sound, music

Put your audio files `.aac`, `.wav`, `.mp3` (prefer `.aac`) directly in a `Audio` folder, with the name to be displayed: `Laser effect.aac`, `Background music.aac`.

!!! warning

        🚨 Careful about the size! Players are sensitive to the size of a game download (especially on mobile and on the web). **Try to keep music file sizes around 1 to 2 MB.  In rare cases, these can be 4 or 5 MB, but not larger.** Consider downgrading the quality a bit to keep the music files around these sizes.
    Sound effects are usually even smaller. If a sound file is larger than 200 or 300 KB, consider downgrading the quality.

A great tool to convert audio files to AAC format is [fre:ac](https://www.freac.org/). fre:ac is free, open-source, and cross-platform. It can process batches of files, with many options on how they are named and put into folders.

- Choose the encoder called "Fraunhofer FDK AAC Encoder".
- Select "File format > AAC"
- Select "Quality > Set Quality > 3"

This will create high-quality audio files, but using a variable bit rate that won't exceed 96 kbps (assuming stereo input).

![](freac-aac.jpg)

![](freac-quality.jpg)

### Spine

[Spine](/gdevelop5/objects/spine) are not yet supported for manual packaging. It must be integrated and configured in GDevelop then exported as `.gdo` by a right-click on the object.

### Custom objects

[Custom object (prefab)](/gdevelop5/objects/custom-objects-prefab-template/) with and without variant(s) are not yet supported for manual packaging. It must be integrated and configured in GDevelop then exported as `.gdo` by a right-click on the object.

### 2D & 3D Particules emitter

3D and [2D particle emitter](/gdevelop5/objects/particles_emitter/) with and without variant(s) are not yet supported for manual packaging. It must be integrated and configured in GDevelop then exported as `.gdo` by a right-click on the object.

---

---

---

---

---

## License

Put a license.txt file in your folder. Make sure to put your name in this license file too (or the name of the original author).
The importer will be adapted to understand the license file.

!!! danger

    Free asset packs with unclear licenses won't be accepted. In this case, you should get in touch with the author for clarifications and ask if they allow redistribution of their assets. The license must:

    - Allow to Use the assets for free and for any purpose
    - Allow modifications or derived work
    - State if attribution is required or not
