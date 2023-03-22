# Wiki syntax

GDevelop's wiki is based on the framework [MkDocs](https://www.mkdocs.org/) that allows to write a whole documentation using only [markdown syntax](https://www.mkdocs.org/user-guide/writing-your-docs/#writing-with-markdown).

Note:

- MkDocs uses the [python markdown](https://python-markdown.github.io/) syntax that is slightly different from the markdown one. For instance it handles lists differently (see below).

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


### Center an image

An image is added with this syntax:

```md
![Image description](/path/to/image.png)
```

By default, the image will be aligned on the left.

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
