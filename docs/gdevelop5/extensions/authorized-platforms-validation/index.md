# Platforms Validation

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/0d42bc9711bc135b0dfb0084a37469540468e243a560339b99e399bd77f48010_check-decagram.svg" class="extension-icon"></img>
Checks if the game is currently executed on an allowed platform (for web).

**Authors and contributors** to this experimental extension: [Oxey405](https://gd.games/Oxey405).

---

# About

**Checks if your web game is being played on a platform your intended to publish on.**
Some web game platforms may steal your game to publish it on their own without your knowledge or consent!
This extension is here to check if the game is being played from a platform you intended!
You can for example prevents users from playing your game on a platform that republished it without your consent. 

# How to use
An authorized platform is a domain name of a website where the game is supposed to run, for example : gd.games.
1. You can get the current domain where the game is being played by using getReferrer()
2. You can add an authorized platform domain name (it's recommended to do this at the beginning of the scene)
3. You can then check if the game is running on an authorized platform and make the game react accordingly

# Example
[Download an example here](https://oxey405.com/projects/execution-context).

[Read more...](https://oxey405.com/projects/execution-context/index.html)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Add a valid platform**  
Adds a new valid platform (domain name where the game is expected to be played, for example, gd.games).

??? quote "See parameters & details"

    - Parameter 1 (string): Domain name (e.g : gd.games)

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AuthorizedPlatformsValidation::AddExecution`.


## Conditions

**Is the game running on an authorized platform**  
Checks if the game is executed on an authorized platform (preferably, run this only once at beginning of the game).

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AuthorizedPlatformsValidation::CheckExecution`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `AuthorizedPlatformsValidation::CurrentRefferer()` | Get the referrer's location (the domain of the website that hosts your game). ||


---

*This page is an auto-generated reference page about the **Platforms Validation** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).