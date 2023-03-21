---
title: How to align text
---
# How to align text

Text objects can contain a single line, or multiple lines, of text. By default, text is aligned to the left. If you add more than one line of text to your text object, the new line(s) will begin on the left edge.

There are different ways to set alignment. Which method you use depends on whether your text object has one or more lines of text...

## Aligning a single line of text

To align a single line of text, you need to set its position relative to the thing you're aligning it with. This will often be the scene itself, but can also be another object (like a button).

!!! tip

    If your text doesn't change, you can set its position once (with a condition like **At the beginning of the scene** or **Trigger once**). But if your text gets updated and changes length (like a score), you'll need to set its position in an event that's run often (perhaps every frame).

### Aligning text to the scene window

To center your text in the scene window, use the **Center X position** action with a value of `SceneWindowWidth() / 2`. This will place the center of your text object at the middle of your scene's width.

![](/gdevelop5/tutorials/aligning-text/pasted/20220825-133207.png)
![](/gdevelop5/tutorials/aligning-text/pasted/20220825-135738.png)

Or to right-align your text, use the **X position** action with a value of `SceneWindowWidth() - OBJECT.Width()`. This will place your text object so that its right edge sits on the right side of your scene.

![](/gdevelop5/tutorials/aligning-text/pasted/20220825-133518.png)
![](/gdevelop5/tutorials/aligning-text/pasted/20220825-135850.png)

### Aligning text to other objects

The process for aligning text to other objects is similar. Consider placing a text object on a button. Use the **Center position** action with X and Y values `OBJECT.CenterX()` and `OBJECT.CenterY()` respectively to position the center of your text object over the center of your button object.

![](/gdevelop5/tutorials/aligning-text/pasted/20220825-134322.png)
![](/gdevelop5/tutorials/aligning-text/pasted/20220825-140056.png)

## Aligning a multi-line text object

Multi-line text objects can also be positioned as described above, but that only affects the text object as a whole. It doesn't affect the text _within_ the object - that's still left-aligned by default.

To change this, GDevelop comes with an **Alignment** action. Simply set it to `left`, `center` or `right` to change the alignment of your multi-line text.

![](/gdevelop5/tutorials/aligning-text/pasted/20220825-135130.png)
![](/gdevelop5/tutorials/aligning-text/pasted/20220825-140254.png)

!!! note

    The **Alignment** action does not affect single-line text objects.