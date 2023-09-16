# Text manipulation

Provides expressions to manipulate strings (also called texts). 

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `FromCodePoint(number)` | Get character from code point ||
| | _🔢 Number_ | Code point |
| `NewLine()` | Insert a new line ||
| `StrAt(string, number)` | Get a character from a text ||
| | _string_ | Text |
| | _🔢 Number_ | Position of the character (the first letter is at position 0) |
| `StrFind(string, string)` | Search in a text (return the position of the result or -1 if not found) ||
| | _string_ | Text |
| | _string_ | Text to search for |
| `StrFindFrom(string, string, number)` | Search in a text, starting from a position (return the position of the result or -1 if not found) ||
| | _string_ | Text |
| | _string_ | Text to search for |
| | _🔢 Number_ | Position of the first character in the string to be considered in the search |
| `StrFindLast(string, string)` | Search the last occurrence in a string (return the position of the result, from the beginning of the string, or -1 if not found) ||
| | _string_ | Text |
| | _string_ | Text to search for |
| `StrFindLastFrom(string, string, number)` | Search in a text the last occurrence, starting from a position (return the position of the result, from the beginning of the string, or -1 if not found) ||
| | _string_ | Text |
| | _string_ | Text to search for |
| | _🔢 Number_ | Position of the last character in the string to be considered in the search |
| `StrLength(string)` | Length of a text ||
| | _string_ | Text |
| `StrRepeat(string, number)` | Repeat a text ||
| | _string_ | Text to repeat |
| | _🔢 Number_ | Repetition count |
| `SubStr(string, number, number)` | Get a portion of a text ||
| | _string_ | Text |
| | _🔢 Number_ | Start position of the portion (the first letter is at position 0) |
| | _🔢 Number_ | Length of the portion |
| `ToLowerCase(string)` | Lowercase a text ||
| | _string_ | Text |
| `ToUpperCase(string)` | Uppercase a text ||
| | _string_ | Text |

---
*This page is an auto-generated reference page about the **Text manipulation** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).