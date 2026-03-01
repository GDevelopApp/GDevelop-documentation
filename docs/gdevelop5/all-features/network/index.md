---
title: Network
---
# Network

GDevelop provides network features that enable games to communicate with remote servers, API or websites.

# Send a request to a server/API/web page

Everything on the internet uses HTTP requests. When you visit a webpage, your browser sends a request to the web page address, and the website server sends a response with the content of the webpage.

Games and applications work similarly to send or get data to a server:

  * they send a request to a specific address (also called an endpoint). Optionally, the request can include parameters.
  * the server sends back a response. The set of all requests that are handled by a server is sometimes called an API.

In addition to the address and the parameters, HTTP requests can have a "verb" (called the HTTP **method**) associated as well. GDevelop supports the following methods: **GET**, **POST**, **PUT**, **DELETE**, **PATCH**, **HEAD**, and **OPTIONS**.

- **GET** — fetch data from the server (default).
- **POST** — send new data to the server.
- **PUT** / **PATCH** — update existing data on the server.
- **DELETE** — remove data on the server.

GDevelop provides the action **"Send a request to a web page"**. You enter the full URL of the API endpoint (for example `https://mygame.com/api/store-score`). You can also specify the body content of the request, the HTTP method, and an optional Content-Type header.

!!! note

    This action is **asynchronous**: the game continues running while the request is sent and the server's response arrives. The response variable and error variable are populated when the server replies — they will **not** have a value immediately on the next line of events. Use a condition that checks the variable (e.g., "Variable text is not empty") in a subsequent event to react to the response.

## How to handle the response and errors

When the server replies, the response body is stored as text in the **response variable** you specify. If the server returns JSON, use the action "Convert JSON to a scene variable" afterwards to parse it into a structure variable you can explore with child variables.

Use the optional **error variable** to detect problems:

- If the server returns an **HTTP status code ≥ 400** (e.g., 404, 500), the error variable is set to that status code as a string (e.g., `"404"`).
- If the request could not be sent at all (no internet connection, or CORS issue), the error variable is set to `"REQUEST_NOT_SENT"`.

Check the error variable in a condition to show an error message or retry the request.

!!! warning

    Web games must comply with **CORS (Cross-Origin Resource Sharing)**. If the server does not send the appropriate `Access-Control-Allow-Origin` header, the request will fail with `"REQUEST_NOT_SENT"`. This restriction does not apply to desktop/mobile builds.

## How to format the content

* For **GET** requests, parameters are usually appended to the URL as a query string, or placed in the body in the format:
`parameter1=value1&parameter2=value2&parameter3=value3`...

You can send data from a variable, for example:
`"score=" + VariableString(Score) + "&playerName=" + VariableString(Name)`

* For **POST** and **PUT** requests, it depends on what is expected by the server, but most of the time the server expects JSON formatted text. Set the **Content-Type** to `application/json` in this case.

You can either construct it yourself:
`"{\"score\": " + VariableString(Score) + " }"` (note the use of backslash before the quote `\"`, to allow the quote to be used inside a text) or use the expression to convert a variable structure to JSON: `ToJSON(VariableWithData)` (see more about this below).

The **Content-Type** defaults to `application/x-www-form-urlencoded` if left empty.

## Converting variables to JSON and back to variables

### Variable to JSON

JSON is a text format that can be used to describe the structure of data, containing number, strings, objects and arrays.
For example, an object containing the score and the name of a player would be: `{ "name":  John, "score": 45 }`.

Variables in GDevelop can contain number, strings or be a "structure" containing children which are also variables, containing number, strings or children.

> Children can be manipulated using the usual actions related to variables, by entering their name after a dot after the name of the parent variable (for example, if the variable containing the children is called Progress: `Progress.Level`, `Progress.Score`...).

!!! note

    Learn more about Structures on the page about [variables](/gdevelop5/all-features/variables).

Structures are useful as they can store all the data concerning something, that can then be sent to a server. To do this, you can convert the structure variable to JSON, using the expression called `ToJSON`. For example:

```
ToJSON(Progress)
```

If the Progress variable has a children "Level" with value 4 and "Score" with value 1500, the resulting JSON will be: `{"Level": 4, "Score": 1500}`.

You can use it as the content of a request sent to the server.

### JSON to variable

You can go the other way, and convert JSON back to a variable. This is useful when you've received the answer from the server, which is also usually formatted in JSON.

Use the action "**Convert JSON to a variable**" (or "Convert JSON to global variable", or "Convert JSON to object variable"). Specify the JSON to be converted (which will be itself stored in a variable) and the variable, where you need to store the resulting structure.

## Reference

All actions, conditions and expressions are listed in [the network reference page](/gdevelop5/all-features/network/reference/).