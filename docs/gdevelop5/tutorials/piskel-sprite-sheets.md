---
title: How to Import a Sprite Sheet using Piskel
---
# How to Import a Sprite Sheet using Piskel

When working with art assets, there may be times when an asset file has numerous sprites on a single image. This can mean there will be a need to manually slice the file up into multiple images, or isolate each frame of the animation separately.

However, GDevelop has the Piskel sprite editor built in to the editor, which can help avoid this manual effort. Piskel natively supports importing sprite sheets and can simplify this process.
!!! tip

        This process will split the sprite sheet into separate images automatically. It _will not_ keep the sprite sheet as a single image

### Requirements

To complete this method, the following requirements must be met:

  * The sprite sheet file must be in jpg, gif, or png format.
  * The sprite sheet must be for a _single_ animation.
  * The sprite sheet must have the sprites evenly spread apart.

## Step 1 - Create the Sprite Object and Animation

1. Within the lower right of the Object List, click **Add a new object**. A new window will display.
1. Click **Sprite** from the list of object types. The new sprite window will display.
1. Within the **Object name** field, give the sprite a name.
1. Click **ADD AN ANIMATION**. The first empty frame and more buttons will appear.
1. It is also recommended to give the animation a name within the **Optional animation name** field.

## Step 2 - Import the File into Piskel

1. Click **EDIT WITH PISKEL**. The Piskel editor will display.
1. Within the right panel, click the **Import** button. The panel will pop out with various import options.
1. Under the **IMPORT FROM PICTURE** section, click the **Browse Images** button.
1. Browse to the sprite sheet file.
1. Click the desired file.
1. Click **Open**. The **Import and Merge** window will display.

!!! note

    Make sure that the image is not too big, otherwise performance issues could occur.

## Step 3 - Complete the Sprite sheet Properties.

1. Within the **Import and Merge** window, select **Import as Sprite sheet**.
1. The frame size must be defined to match the size of each sprite. Most sprite sheets will have this be an even number.
1. Adjust the frame size to properly match the size of each animation frame. Example:
      - This example sprite sheet imports as 512 pixels wide x 96 pixels high.
      - There are four frames, and the sheet is set up to have even distance. This means the frame size needs to be adjusted to 1/4th 512 pixels wide, or 128 pixels.
      - After adjusting the frame size, the boxes evenly split up each frame of animation.

![](/gdevelop5/tutorials/piksel-sprite-sheets/pasted/20200330-024341.png)

## Import the Sprite sheet

1. Click the **Import** button.
1. A confirmation will display stating this will replace the current animation. Click **OK**.
1. The animation will be imported into split files, and a preview of the animation will play on the upper right.
1. Make any further needed adjustments needed.
1. Click **Save**. The animation will be created for the sprite object.
1. Repeat as needed for each additional animation and sprite sheet.
![](/gdevelop5/tutorials/piksel-sprite-sheets/pasted/20200330-025608.png)
