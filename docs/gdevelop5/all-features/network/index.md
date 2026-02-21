---
title: Network
---
# Network

GDevelop provides network features that enable games to communicate with remote servers, APIs or websites.

# Send a request to a server/API/web page

Everything on the internet uses HTTP requests. When you visit a webpage, your browser sends a request to the web page address, and the website server sends a response with the content of the webpage.

Games and applications work similarly to send or get data to a server:

  * they send a request to a specific address (also called an endpoint). Optionally, the request can include parameters.
  * the server sends back a response. The set of all requests that are handled by a server is sometimes called an API.

In addition to the address and the parameters, HTTP requests have a "method" (or "verb") associated with them:

| Method | Typical use |
|--------|-------------|
| GET | Fetch data from a server (e.g. download a leaderboard) |
| POST | Send data to create something on the server (e.g. submit a score) |
| PUT | Replace an existing resource on the server |
| DELETE | Remove a resource on the server |
| PATCH | Partially update a resource on the server |

GDevelop provides the action **"Send a request to a web page"**. You specify the full URL of the endpoint (for example `https://mygame.com/api/store-score`), the request body (for POST/PUT/PATCH), the HTTP method, and two variables:

* **Response variable** — filled with the server's response text once the request completes.
* **Error variable** — filled with the HTTP status code if the server returns an error (status ≥ 400), or with the special value `"REQUEST_NOT_SENT"` if the request could not be sent at all (for example due to a network failure or a CORS restriction).

!!! note

    This action is **asynchronous**: the response and error variables are not filled immediately. They are only set after the server has replied, which can take a fraction of a second or longer. Use the action inside an [async event](/gdevelop5/events/async) or check the variables on a later frame.

## How to format the content

* For **GET** requests, parameters are passed as part of the URL (a "query string"). Leave the body empty and append parameters to the URL:
`"https://api.example.com/scores?game=MyGame&limit=10"`

  Alternatively, pass the query string as the body:
  `"score=" + VariableString(Score) + "&playerName=" + VariableString(Name)`

* For **POST**, **PUT**, and **PATCH** requests, the body format depends on what the server expects. Most modern APIs use JSON. Set the **Content type** parameter to `application/json` and format the body accordingly.

  You can either construct the JSON yourself:
  `"{\"score\": " + VariableString(Score) + ", \"name\": \"" + VariableString(Name) + "\"}"` (note the backslashes before quotes: `\"` lets you embed a quote character inside a text string)

  Or use the expression that converts a variable structure to JSON: `ToJSON(VariableWithData)` (see below).

## Handling errors

After a request completes, check the **error variable** before reading the response:

* If the error variable is **empty**, the request succeeded — read the response variable.
* If it contains an HTTP status code (e.g. `"404"`, `"500"`), the server returned an error.
* If it contains `"REQUEST_NOT_SENT"`, the request never reached the server. Common causes include: no internet connection, an invalid URL, or the server blocking the request due to CORS restrictions (common when testing in the browser).

A typical pattern in events:

1. Add the **"Send a request to a web page"** action (choose an async event block if possible).
2. Store the result in `ResponseVar` and the error in `ErrorVar`.
3. After the action, use a condition to compare `VariableString(ErrorVar)` to `""` to branch between success and failure paths.

## Converting variables to JSON and back to variables

### Variable to JSON

JSON is a text format used to describe structured data, containing numbers, strings, objects and arrays.
For example, an object containing the score and the name of a player would be: `{ "name": "John", "score": 45 }`.

Variables in GDevelop can contain numbers, strings or be a "structure" containing children which are also variables.

!!! note

    Learn more about Structures on the page about [variables](/gdevelop5/all-features/variables).

Structures are useful as they can store all the data related to something, which can then be sent to a server. Convert a structure variable to JSON using the expression `ToJSON`. For example:

```
ToJSON(Progress)
```

If the `Progress` variable has a child `"Level"` with value `4` and `"Score"` with value `1500`, the resulting JSON will be: `{"Level": 4, "Score": 1500}`.

Use this as the body of a POST/PUT request and set the **Content type** parameter to `application/json`.

### JSON to variable

You can go the other way and convert JSON back to a variable. This is useful when you've received the answer from the server, which is also usually formatted in JSON.

Use the action **"Convert JSON to a variable"** (or "Convert JSON to global variable", or "Convert JSON to object variable"). Specify the JSON text (stored in the response variable) and the variable where you want to store the resulting structure. You can then read individual fields using the dot notation, e.g. `VariableString(Data.playerName)`.

## Open a URL in the browser

The **"Open a URL"** action opens a link in the user's default browser (or a new tab when the game is running on the web). This is useful for external links such as a game's website, a social media page, or a support URL.

## Reference

All actions, conditions and expressions are listed in [the network reference page](/gdevelop5/all-features/network/reference/).