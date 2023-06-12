# Contributing

Thank you for investing your time in contributing to GDevelop's documentation! Any contribution you make will be reflected on wiki.gdevelop.io ✨.

In this guide you will get an overview of the contribution workflow.

## Make a contribution

To make a contribution, you shall follow those steps:

1. [Fork this repository](https://docs.github.com/fr/get-started/quickstart/fork-a-repo)
2. [Install the project](#installation)
3. [Find an issue that you can resolve](https://github.com/GDevelopApp/GDevelop-documentation/issues)
4. [Open a Pull Request](https://docs.github.com/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)
5. Once your Pull Request is merged, the documentation will be automatically be updated with your changes (a few minutes for changes to take effect)

## Installation

### Prerequisites

First install:

- [Poetry](https://python-poetry.org/docs/#installation)

### Project installation

Run:

```sh
poetry install
```

### Run the project

```sh
mkdocs serve
# Or, for faster reload after changes:
mkdocs serve --dirtyreload
```

This will run the documentation on <http://localhost:8000>.

### Build

Once you have the documentation running locally, you can start to contribute to the documentation.

GDevelop's documentation is based on [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) and uses different [plugins](https://www.mkdocs.org/dev-guide/plugins/).

### Add a python package

If you need to add a python package, add it with poetry:

```sh
poetry add package
```

And then update the `requirements.txt` file (used by vercel to deploy the documentation) with:

```sh
poetry export -f requirements.txt --output requirements.txt
```
