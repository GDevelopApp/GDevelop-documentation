# Network Reference

Actions to send web requests, communicate with external "APIs" and other network related tasks. Also contains an action to open a URL on the device browser. [Read more explanations about it.](/gdevelop5/all-features/network)

## Actions

**Enable (or disable) metrics collection**
Enable, or disable, the sending of anonymous data used to compute the number of sessions and other metrics from your game players.  
Be sure to only send metrics if in accordance with the terms of service of your game and if they player gave their consent, depending on how your game/company handles this.

??? quote "See parameters"

    - Parameter 1 (❓ Yes or No): Enable the metrics?

    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Open a URL (web page) or a file**
This action launches the specified file or URL, in a browser (or in a new tab if the game is using the Web platform and is launched inside a browser).

??? quote "See parameters"

    - Parameter 0 (string): URL (or filename)

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Send a request to a web page**
Send an asynchronous request to the specified web page.  

Please note that for the web games, the game must be hosted on the same host as specified below, except if the server is configured to answer to all requests (cross-domain requests).

??? quote "See parameters"

    - Parameter 0 (string): URL (API or web-page address)
      Example: "https://example.com/user/123". Using *https* is highly recommended.
    - Parameter 1 (string): Request body content
    - Parameter 2 (🔤 String): Request method
      If empty, "GET" will be used. (one of: "GET", "POST", "PUT", "HEAD", "DELETE", "PATCH", "OPTIONS")
    - Parameter 3 (string): Content type
      If empty, "application/x-www-form-urlencoded" will be used.
    - Parameter 4 (🗄️ Scene variable): Variable where to store the response
      The response of the server will be stored, as a string, in this variable. If the server returns *JSON*, you may want to use the action "Convert JSON to a scene variable" afterwards, to explore the results with a *structure variable*.
    - Parameter 5 (🗄️ Scene variable): Variable where to store the error message
      Optional, only used if an error occurs. This will contain the ["status code"](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) if the server returns a status >= 400. If the request was not sent at all (e.g. no internet or CORS issues), the variable will be set to "REQUEST_NOT_SENT".





---

The Network extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Network** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).