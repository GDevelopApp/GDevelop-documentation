# Webpage URL tools (Web browser)

<img src="https://resources.gdevelop-app.com/assets/Icons/web.svg" class="extension-icon"></img>
Read/manipulate web game URLs: get/set attributes, query params, redirect, reload.

**Authors and contributors** to this experimental extension: [arthuro555](https://gd.games/arthuro555).

---

This extension allows to: 

- Get the URL of the game page
- Reload the page
- Redirect to another page
- Get a specific part of a URL
- Get an search query parameter of a URL
- Modify a specific property of a URL

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Redirect to another page**  
Loads another page in place of the current one.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): URL to redirect to

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `URLTools::Redirect`.

**Reload the web page**  
Reloads the current web page.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `URLTools::Reload`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `URLTools::ChangeURLAttribute(string, string, string)` | Updates a specific part of a URL. ||
| | _🔤 String_ | The URL to change |
| | _🔤 String_ | The attribute to update |
| | _🔤 String_ | The new value of this attribute |
| `URLTools::ChangeURLQueryStringParameter(string, string, string)` | Sets or replaces a query string parameter of a URL. ||
| | _🔤 String_ | The URL to change |
| | _🔤 String_ | The query string parameter to update |
| | _🔤 String_ | The new value of the query string parameter |
| `URLTools::CurrentURL()` | Gets the URL of the current game page. ||
| `URLTools::RemoveURLQueryStringParameter(string, string)` | Removes a query string parameter from an URL. ||
| | _🔤 String_ | The URL to change |
| | _🔤 String_ | The query string parameter to remove |
| `URLTools::URLAttribute(string, string)` | Get an attribute from a URL. ||
| | _🔤 String_ | The URL to get the attribute from |
| | _🔤 String_ | The attribute to get |
| `URLTools::URLQueryStringParameter(string, string)` | Gets a parameter of a URL query string. ||
| | _🔤 String_ | The URL to get a query string parameter from |
| | _🔤 String_ | The query string parameter to get |


---

*This page is an auto-generated reference page about the **Webpage URL tools (Web browser)** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).