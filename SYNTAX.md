# Wiki syntax

GDevelop's wiki is based on the framework [MkDocs](https://www.mkdocs.org/) that allows to write a whole documentation using only [markdown syntax](https://www.mkdocs.org/user-guide/writing-your-docs/#writing-with-markdown).

Note:

- MkDocs uses the [python markdown](https://python-markdown.github.io/) syntax that is slightly different from the markdown one. For instance it handles lists differently (see below).
- Displaying images comes with features brought by Material for MkDocs. Check [the reference here](https://squidfunk.github.io/mkdocs-material/reference/images/).

## Tips and tricks

### Nested lists

You should use 4 spaces to mark an indent in a list.

For example, to display:

- Getting started
  - First step
  - Second step

You shall write:

```
- Getting started
    - First step
    - Second step
```

### Keep a white line before your lists

The list won't be formatted if there is no newline before the start of the list.

Bad format example:

```md
List of objects:
- Sprite
- Text
```

will be rendered as:

```
List of objects: - Sprite - Text
```

You can fix it with:

```md
List of objects:

- Sprite
- Text
```

### Display a video

A video is added with this syntax:

```md
![type:video](./video.mp4)
```

By default, it will take the same width as the article.

### Display an image

An image is added with this syntax:

```md
![Image description](/path/to/image.png)
```

#### Change image size

You can set the width of an image (the aspect ratio will be kept) with:

```md
![Image description](/path/to/image.png){ width=300 }
```

#### Center an image with no text on the side

By default, the image will be aligned on the left and there will be no text displayed on the left or on the right of the image.

To center it, do the following:

```md
![Image description](/path/to/image.png)
{ .align-center }
```

To have it aligned on the right, do the following:

```md
![Image description](/path/to/image.png)
{ .align-right }
```

#### Display text on the side

**This features is available only for images aligned on the left or on the right.**

To display text alongside an image, use this syntax:

```md
![Image description](/path/to/image.png){ align=left }
```
