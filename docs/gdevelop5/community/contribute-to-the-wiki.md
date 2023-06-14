---
title: Contributing to the documentation
---

# Contributing to the documentation

GDevelop's documentation is powered by the community and everyone is encouraged to contribute.

To submit a change to any existing page within the Wiki, complete the following:

1. Browse to the wiki page that will be edited.
2. On the upper right of the page, click the **Edit this page** button.
    - It will appear as a paper and pencil icon. ![image](edit_dark.png#only-dark)![image](edit_light.png#only-light)
3. Click **Fork this repository**. This only needs to be done once.
4. Make changes using the online text editor provided by GitHub. Make sure to follow the guidelines listed below.
5. Within the **Propose Changes** section, add a short description of the changes.
6. Click the **Propose Changes** button.
7. Click **Create pull request**.
8. Click **Create pull request**.

Now it's up to the documentation team to review and approve the change.
Thank you for your contribution to improve the documentation of GDevelop!

# Documentation Standards and Best Practices

The rest of this page provides a few guidelines to help maintain the quality of the documentation.

## Be consistent

Look at the existing documentation and follow the established patterns. Don't try to reinvent the wheel in terms of how the content is structured, formatted, and written.

## Be concise

Use simple language, short sentences, and fewer words. If you're not sure if your writing is too wordy, use a tool like [Hemingway](http://www.hemingwayapp.com/) or [Grammarly](https://www.grammarly.com/) to check it.

## Be professional

Write with a friendly tone, but don't go overboard. If you're too casual, readers may find the writing difficult to read or trust.

For example, don't write this:

> So a Text object is as the name implies something that you can use to display a text on the screen. GDevelop even allows you to change the font, the size and tons of effects! And you can also use events to make some changes on properties.

Instead, write this:

> Text objects display text on screen. You can customize text properties (for example, size and color) upon creation. You can also modify text object properties during gameplay using events.

## Create separate pages of concepts, tasks, and reference documentation

There are three types of documentation:

  - **Concept** - Explains what something is.
  - **Task** - Explains how to do something.
  - **Reference** - Provides a list of facts without (much) explanation.

Generally speaking, it's best not to blend different types of documentation on a single page. You shouldn't, for instance, provide a detailed explanation of [what expressions are](/gdevelop5/all-features/expressions) (concept) on the same page that you provide [a list of all the expressions](/gdevelop5/all-features/expressions-reference) (reference).

When different types of documentation are on different pages, the documentation is more modular, which makes it easier to read, browse, and maintain.

## Write clear, action-oriented headings

Readers tend to scan pages, so clear headings are essential. Readers also tend to care about accomplishing a specific task, so headings should focus on an action.

For example, don't write this:

> Admob

Instead, write this:

> Integrating ads using Google Admob

This advice applies to all of a page's headings.

## Use Markdown

Markdown is a syntax for formatting text on the web. It's simple, easy to learn, and lets us move the content between different publishing platforms (if that's ever necessary).

!!! tip

    Don't use features specific to the wiki software, such as the `WRAP` tag.

## When I refer to a button, objects, behavior, etc...

If you're directly quoting something that appears in the app, whether it be a button, tab name, condition/action/etc, you want to bold it. This indicates you are exactly quoting how it is named, especially from a numbered list of instructions.

![](/gdevelop5/community/list_instruction_wiki.png)

## When in doubt on structure or writing methods, follow the Style guide

For questions on syntax around text formatting (bold, creating lists, etc), refer to the [Wiki syntax](https://github.com/GDevelopApp/GDevelop-documentation/blob/main/SYNTAX.md).

If you're not sure how to write something or the best way to show steps, refer to the [Google developer documentation style guide](https://developers.google.com/style). This should only be used for documentation style best practices, and syntax should instead follow the link above. This is a big guide, so you're not expected to memorize it, but it works great as a reference.
