---
title: Extension tiers
---
# Extension tiers

There exists multiple tiers of extensions for extensions on the extensions store. Those tier allow you to get an insight into the quality of an extension before downloading it. There currently exists two tiers: **Community** and **Reviewed**.

## Community extensions

Community extensions are extensions that have been added without a review.

#### What is guaranteed

All extensions, even community ones, have to stick to a few standards:

  - Extensions must pass automated tests for the [extensions best practices](/gdevelop5/extensions/best-practices). While not ensuring a 100% respect of those rules, the automated tests help ensure that they are mostly respected.
  - The extension should work, a reviewer will briefly test the extension and make sure it doesn't immediately crash your game.
  - The extension code is checked for malicious code by a reviewer: You won't infect yourself or your players with a virus by using an extension.

#### What is not guaranteed

Community extensions are not reviewed in depth and therefore may still have multiple kinds of issues:

  - They may not be 100% functional: while reviewers briefly test the extension, it is not checked whether there are edge cases where the extension can break.
  - They may not have good code quality: the code is only checked for viruses by reviewers. If you need to change the extension and have trouble reading and understanding the events, that may be difficult.
  - They may not be coded well: the extension could cause major slowdowns, cause side effects like messing with your variables by accident, etc
  - The extension may have breaking changes in an update: reviewers do not check whether braking changes are properly marked as such, or if they could be avoided altogether, which makes updating such an extension risky: it could break your project.
  - The extension may never get updated to integrate bug fixes or features that you wish for: Extensions are MIT licensed and thereby provided as-is, without any kind of warranty.

## Reviewed extensions

Reviewed extensions are extensions that have been added only after careful examination and cooperation between the extension creator and the reviewers (various extensions creators from the GDevelop community) to ensure that it is a production-ready high-quality extension.

#### What is guaranteed

Reviewed extensions have to stick to our highest standards:

  - Extensions must respect the [extensions best practices](/gdevelop5/extensions/best-practices). Reviewers will check every corner of the extension to ensure they are respected.
  - The extension should fully work, reviewers will check the code to make sure that there is no edge cases where the extension may break, and thoroughly test the extension.
  - The extension code is checked for malicious code by a reviewer. You won't infect yourself or your players with a virus by using an extension.
  - The extension code quality is high: If you ever need to look at the events, they should be concise, understandable, commented, and grouped. This makes it easy to grasp the code and modify or reuse it if needed.
  - The extension is optimized for performance: Reviewers will identify performance bottlenecks and remove them to ensure that the extension is fast enough for a professional project.
  - The extension API is fairly stable: Reviewers will check carefully that the actions, conditions and expressions are made in a way that future updates won't need to change or remove them, by making them as good as possible from the start. This ensures a good experience while using the extension, and that you almost never will have to update your project to make it work with an extension update that had breaking changes
  - Updates follow semantic versioning: When an update is published, you will know just from looking at the version number if you will need to make changes to your project, if it adds new features, or if it is a bug fix. This is great for defining the priority of updating an extension quickly, and knowing in advance how much time one should account for when updating.

#### What is not guaranteed

Reviewed extensions are scrutinized in depth, and therefore should only have one kind of issue:

  - The extension may never get updated to integrate bug fixes or features that you wish for: Extensions are MIT licensed and thereby provided as-is, without any kind of warranty.
      - It is more likely though that you will be able to get it updated, since the creator of the extension was invested into that extension enough to follow through the whole review process, and the reviewers will also be invested in the extension and able to update it if the creator is unable to do so themselves. The high quality of code should also make it a breeze to update the extension yourself if you really cannot find anyone to do it for you.