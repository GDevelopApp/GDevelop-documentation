# Regular Expressions

<img src="https://resources.gdevelop-app.com/assets/Icons/regex.svg" class="extension-icon"></img>
Regular expression operations: test, match, replace, and extract from strings.

**Authors and contributors** to this experimental extension: [Add00](https://gd.games/Add00).

---

Conditions, actions and expressions to use regular expressions with strings, such as:  

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

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Pattern
    - Parameter 2 (🔤 String): RegEx flags
    - Parameter 3: 🔤 String
    - Parameter 4 (🔤 String): The name of the variable to store the result in

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RegEx::GetAllMatches`.

**Find all matches with their groups for a regex pattern**  
Builds an array containing for each regex pattern match an array with the match followed by its regex groups.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Pattern
    - Parameter 2 (🔤 String): RegEx flags
    - Parameter 3: 🔤 String
    - Parameter 4 (🔤 String): The name of the variable to store the result in

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RegEx::GetAllMatchesAndGroups`.

**Find first match with groups for a regex pattern**  
Builds an array containing the first match for a regex pattern followed by the regex groups.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Pattern
    - Parameter 2 (🔤 String): Flags
    - Parameter 3: 🔤 String
    - Parameter 4 (🔤 String): Variable name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RegEx::GetFirstMatchAndGroups`.

**Split a string into an array**  
Split a string by each part of it that matches a regex pattern and stores each part into an array.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): The pattern to split by
    - Parameter 2 (🔤 String): RegEx flags
    - Parameter 3 (🔤 String): The string to split by the pattern
    - Parameter 4 (🔤 String): The name of the variable to store the result in

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RegEx::Split`.


## Conditions

**String matches regex pattern**  
Checks if a string matches a regex pattern.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): The pattern to check for
    - Parameter 2 (🔤 String): RegEx flags
    - Parameter 3 (🔤 String): The string to check for a pattern

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `RegEx::HasPattern`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `RegEx::Find(string, string, string)` | Finds a regex pattern in a string, and returns the index of the position of the match, or -1 if it doesn't match the pattern. ||
| | _🔤 String_ | Pattern |
| | _🔤 String_ | RegEx flags |
| | _🔤 String_ | String |
| `RegEx::Replace(string, string, string, string)` | Replaces a part of a string that matches a regex pattern with another string. ||
| | _🔤 String_ | The pattern to check for |
| | _🔤 String_ | RegEx flags |
| | _🔤 String_ | The string to search for pattern matches in |
| | _🔤 String_ | The string to replace the matching patterns with |


---

*This page is an auto-generated reference page about the **Regular Expressions** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).