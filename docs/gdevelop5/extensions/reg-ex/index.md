# Regular Expressions

<img src="https://resources.gdevelop-app.com/assets/Icons/regex.svg" class="extension-icon"></img>
Functions for using regular expressions to manipulate strings.

**Authors and contributors** to this community extension: [Add00](https://gd.games/Add00).

---

Adds function to use regular expressions with strings, such as  

- Find the position of pattern in a string 
- Find a pattern in a string
- Split a string by a pattern
- Check if a string matches a pattern
- Replace patterns in a string with another string

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Find all matches for a regex pattern**  
Builds an array containing all matches for a regex pattern.

**Find all matches with their groups for a regex pattern**  
Builds an array containing for each regex pattern match an array with the match followed by its regex groups.

**Find first match with groups for a regex pattern**  
Builds an array containing the first match for a regex pattern followed by the regex groups.

**Split a string into an array**  
Split a string by each part of it that matches a regex pattern and stores each part into an array.

## Conditions

**String matches regex pattern**  
Checks if a string matches a regex pattern.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `RegEx::Find(string, string, string)` | Finds a regex pattern in a string, and returns the index of the position of the match, or -1 if it doesn't match the pattern. ||
| | _string_ | Pattern |
| | _string_ | RegEx flags |
| | _string_ | String |
| `RegEx::Replace(string, string, string, string)` | Replaces a part of a string that matches a regex pattern with another string. ||
| | _string_ | The pattern to check for |
| | _string_ | RegEx flags |
| | _string_ | The string to search for pattern matches in |
| | _string_ | The string to replace the matching patterns with |

---

*This page is an auto-generated reference page about the **Regular Expressions** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).