# Input Validation

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Education and Learning/Education and Learning_education_book_library_search.svg" class="extension-icon"></img>
Validate and sanitize strings: check format, length, trim, and normalize.

**Authors and contributors** to this experimental extension: [arthuro555](https://gd.games/arthuro555), [Add00](https://gd.games/Add00).

---

Provides conditions to check if a string is a valid phone number, url, email, number, contains only letters. Also provides expressions to manipulate strings (count number of lines, remove new lines, remove non alphanumerical characters).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Conditions

**Check if a string has only latin alphabet letters**  
Check if the string has only latin alphabet letters.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Letters

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `InputValidation::IsOnlyLetters`.

**Check if a string is a valid email**  
Check if the string is a valid email.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Email

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `InputValidation::IsValidEmail`.

**Check if a string represents a number**  
Check if the string represents a number (potentially with a minus sign and potentially with a decimal point).

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Number

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `InputValidation::IsValidNumber`.

**Check if a string is a valid phone number**  
Check if the string is a valid phone number.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Phone number

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `InputValidation::IsValidPhoneNumber`.

**Check if a string is a valid URL**  
Check if the string is a valid URL.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): URL

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `InputValidation::IsValidUrl`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `InputValidation::CountNewLines(string)` | Count the number of lines in a string. ||
| | _🔤 String_ | The text to count lines from |
| `InputValidation::RemoveFirstLine(string)` | Returns the string without the first line. ||
| | _🔤 String_ | String to remove the first line from |
| `InputValidation::RemoveNewLines(string)` | Replaces every new line character with a space. ||
| | _🔤 String_ | The text to remove new lines from |
| `InputValidation::ToAlphanumerical(string)` | Remove any non-numerical and non A-Z characters. ||
| | _🔤 String_ | The text to sanitize |


---

*This page is an auto-generated reference page about the **Input Validation** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).