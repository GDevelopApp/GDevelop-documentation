# Unique Identifiers

<img src="https://resources.gdevelop-app.com/assets/Icons/identifier.svg" class="extension-icon"></img>
A collection of UID generation expressions.

**Authors and contributors** to this community extension: [arthuro555](https://gd.games/arthuro555).

---

Adds UUID (Universally Unique Identifiers) generation expressions via multiple patterns:
- UUIDv4: Creates a long random string of characters following the UUIDv4 standard. If available on the system/browser, will use a cryptographic random number generator, otherwise uses the same pseudorandom number generator as the `Random()` expression. Chances of collisions are extremely low, but not non-existent. As the return value is a string, it may not be the most performant pattern. It can not be predicted in most cases.
- Incremented integer: Returns use an integer that will be incremented after each call. Very performant and no risk of collisions. The UID will be predictable, so it may be vulnerable to some cryptographic attacks if used for private unique tokens, like password reset verification UID. Note that if you store IDs and then restart the game, there may be duplicates, since it'll reset the counter.

---

!!! tip

    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

*This page is an auto-generated reference page about the **Unique Identifiers** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).