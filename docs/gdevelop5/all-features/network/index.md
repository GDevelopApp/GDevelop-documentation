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

In addition to the address and the parameters, HTTP requests can have a "verb" associated as well. Requests to get data or fetch a webpage are usually "GET" requests. Requests to post data are usually "POST" requests. Other commonly used methods are "PUT", "DELETE", and "PATCH".

GDevelop provides the action called **"Send a request to a web page"**. You specify the full URL of the endpoint (for example, `https://mygame.com/api/store-score`). You can also specify the body content of the request, the HTTP method, and optionally a content type.

!!! note

    This action is **asynchronous**: the game keeps running while the request is being sent and while the response is being received. The response variable is updated once the server replies — it will not be immediately available on the next event.

When the server sends the response, it is stored as a string in a scene variable you choose. If the server returns JSON, use the action **"Convert JSON to a scene variable"** afterwards to work with the response as a structure variable.

## Error handling

You can optionally specify a second variable to store any error that occurs:

- If the server responds with an HTTP status code of 400 or higher (such as 404 or 500), the error variable is set to that status code as a string (e.g., `"404"`).
- If the request could not be sent at all (for example, due to no internet connection or a CORS policy blocking the request), the error variable is set to `"REQUEST_NOT_SENT"`.

If no error occurs, the error variable is left unchanged.

!!! note

    **CORS and web games**: When your game is hosted on the web, browsers enforce Cross-Origin Resource Sharing (CORS) rules. Requests to a different domain will fail (error variable set to `"REQUEST_NOT_SENT"`) unless the server explicitly allows cross-origin requests. On desktop and mobile builds, CORS restrictions do not apply.

## How to format the content

* For **GET** requests, parameters are typically appended to the URL as a query string, or sent in the body in the format:
`parameter1=value1&parameter2=value2&parameter3=value3`...

You can build this from variables, for example:
`"score=" + VariableString(Score) + "&playerName=" + VariableString(Name)`

* For **POST**, **PUT**, and **PATCH** requests, it depends on what the server expects, but most of the time the server expects JSON formatted text. Set the **content type** parameter to `application/json` when sending JSON.

You can either construct the JSON yourself:
`"{\"score\": " + VariableString(Score) + " }"` (note the use of backslash before the quote `\"`, to allow the quote to be used inside a text) or use the expression to convert a variable structure to JSON: `ToJSON(VariableWithData)` (see more about this below).

## Converting variables to JSON and back to variables

### Variable to JSON

JSON is a text format that can be used to describe the structure of data, containing number, strings, objects and arrays.
For example, an object containing the score and the name of a player would be: `{ "name": "John", "score": 45 }`.

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