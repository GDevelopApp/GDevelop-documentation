# Unicode

<img src="https://resources.gdevelop-app.com/assets/Icons/dice-d10.svg" class="extension-icon"></img>
Provides conversion tools for Ascii and Unicode characters.

**Authors and contributors** to this community extension: [Ahnaf30e](https://gd.games/Ahnaf30e).

---

Adds expressions to convert text to a binary representation and back.
The `UnicodeConversion::ReverseUnicode(string, range, base)` string expression can be used for basic obfuscation of data.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `UnicodeConversion::ReverseUnicode(string, number, number)` | Reverses the unicode of a string with a base. ||
| | _string_ | String to reverse |
| | _🔢 Number_ | Base of the reverse (Default: 2) |
| | _🔢 Number_ | Range of unicode characters (Put 16 here to support the most characters if you put 2 in the base) |
| `UnicodeConversion::TextToUnicode(string, number, string)` | Converts a string into unicode representation with a base. ||
| | _string_ | The string to convert to unicode |
| | _🔢 Number_ | Base |
| | _string_ | Seperator text (Optional) |
| `UnicodeConversion::UnicodeToText(string, number, string)` | Converts a unicode representation into String with a base. ||
| | _string_ | The unicode to convert to String |
| | _🔢 Number_ | Base |
| | _string_ | Seperator text (Optional) |

---

*This page is an auto-generated reference page about the **Unicode** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).