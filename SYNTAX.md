# Wiki syntax

GDevelop's wiki is based on the framework [MkDocs](https://www.mkdocs.org/) that allows to write a whole documentation using only [markdown syntax](https://www.mkdocs.org/user-guide/writing-your-docs/#writing-with-markdown).

## Tricks and tips

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