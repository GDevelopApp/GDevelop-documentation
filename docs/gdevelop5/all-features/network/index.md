---
title: Network
---
# Network

GDevelop provides network features that enable games to communicate with remote servers, APIs or websites.

## Send a request to a server/API/web page

Everything on the internet uses HTTP requests. When you visit a webpage, your browser sends a request to the web page address, and the website server sends a response with the content of the webpage.

Games and applications work similarly to send or get data to a server:

  * they send a request to a specific address (also called an endpoint). Optionally, the request can include parameters.
  * the server sends back a response. The set of all requests that are handled by a server is sometimes called an API.

In addition to the address and the parameters, HTTP requests have a "method" (also called "verb") associated with them. Common methods include:

  * **GET** — retrieve data from the server (most common for reading information).
  * **POST** — send data to the server (for example, to store a score or create a record).
  * **PUT** / **PATCH** — update existing data on the server.
  * **DELETE** — remove data from the server.

Use the action **"Send a request to a web page"** and specify the full URL of the API endpoint (for example `https://mygame.com/api/store-score`), the request body content, and the method.

The action is optionally **asynchronous**: if you check "Wait for the action to end" in the editor, the following actions (and sub-events) will only be executed once the HTTP request response is received. The rest of the events will run and the game will continue to run as usual in the meantime.

When the server responds, the result is saved in two variables you provide:

  * **Response variable** — contains the text response from the server (often JSON).
  * **Error variable** — set to the HTTP status code (e.g. `"404"`, `"500"`) if the server returns an error (status ≥ 400), or to `"REQUEST_NOT_SENT"` if the request could not be sent at all (no internet, CORS issue, etc.). If there is no error, this variable is not changed.

!!! warning

    For **web games**, the browser enforces CORS (Cross-Origin Resource Sharing) rules. This means requests to a different domain than where your game is hosted will be blocked unless the server explicitly allows them with the appropriate `Access-Control-Allow-Origin` response header. Requests to your own server or servers configured for cross-origin access will work fine.

### How to format the request body

* For **GET** requests, the body is typically empty. Instead, pass parameters in the URL itself as a query string:
  `https://mygame.com/api/scores?score=100&player=Alice`

* For **POST** (and other methods), the body format depends on what the server expects. Most modern APIs expect **JSON**. You can either build the JSON string manually or convert a variable using `ToJSON(MyVariable)`.

  Example manual JSON body:
  `"{\"score\": " + ToString(Variable(Score)) + ", \"player\": \"" + Variable(Name) + "\"}"`

  (Note the use of `\"` to include quotes inside a string.)

* You can also set the **content type** header to tell the server how the body is formatted — for example `"application/json"` for JSON data. If left empty, `application/x-www-form-urlencoded` is used by default.

## Converting variables to JSON and back to variables

### Variable to JSON

JSON is a text format that can be used to describe the structure of data, containing numbers, strings, objects and arrays.
For example, an object containing the score and the name of a player would be: `{ "name": "John", "score": 45 }`.

Variables in GDevelop can contain numbers, strings or be a "structure" containing children which are also variables, containing numbers, strings or children.

!!! note

    Learn more about Structures on the page about [variables](/gdevelop5/all-features/variables).

Structures are useful as they can store all the data related to something, which can then be sent to a server. To do this, convert the structure variable to JSON using the expression `ToJSON`. For example:

```
ToJSON(Progress)
```

If the Progress variable has a child "Level" with value 4 and "Score" with value 1500, the resulting JSON will be: `{"Level": 4, "Score": 1500}`.

You can use it as the body of a POST request sent to the server.

### JSON to variable

You can go the other way, and convert JSON back to a variable. This is useful when you've received the answer from the server, which is also usually formatted in JSON.

Use the action **"Convert JSON to a variable"** (or "Convert JSON to global variable", or "Convert JSON to object variable"). Specify the JSON to be converted (stored in the response variable) and the variable where you need to store the resulting structure.

## Open a URL in the browser

Use the action **"Open a URL (web page) or a file"** to open a URL in the player's default browser (or in a new tab if the game is running inside a browser). This is useful for linking to a game website, social media page, or external documentation.

## Reference

All actions, conditions and expressions are listed in [the network reference page](/gdevelop5/all-features/network/reference/).
