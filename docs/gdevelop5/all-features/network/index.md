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

In addition to the address and the parameters, HTTP requests can have a "verb" associated as well.  Requests to get data or fetch a webpage are usually "GET" requests. Requests to post data are usually "POST" requests.

GDevelop provides the action called "Send a request to a web page". You can specify the host and the path to the API/web page to be called (for example, if your "endpoint" is `https://mygame.com/api/store-score`, the host is `https://mygame.com` and the path is `/api/store-score` (don't forget the slash /)). You can also specify the content of the request (the parameter that will be received by the server).

When the server sends the response, it is saved in a variable so that you can read what was sent.

## How to format the content

  * For GET requests, parameters have to be sent in the content in the format of a "query string":
`parameter1=value1&parameter2=value2&parameter3=value3`...

You can send data from a variable, for example:
`"score=" + VariableString(Score) + "&playerName=" + VariableString(Name)`

  * For POST requests, it depends on what is expected by the server, but most of the time the server expects JSON formatted text.

You can either construct it yourself:
`"{\"score\": " + VariableString(Score) + " }"` (note the use of backslash before the quote `\"`, to allow the quote to be used inside a text) or use the expression to convert a variable structure to JSON: `ToJSON(VariableWithData)` (see more about this below).

## Converting variables to JSON and back to variables

### Variable to JSON

JSON is a text format that can be used to describe the structure of data, containing number, strings, objects and arrays.
For example, an object containing the score and the name of a player would be: `{ "name":  John, "score": 45 }`.

Variables in GDevelop can contain number, strings or be a "structure" containing children which are also variables, containing number, strings or children.

> Children can be manipulated using the usual actions related to variables, by entering their name after a dot after the name of the parent variable (for example, if the variable containing the children is called Progress: `Progress.Level`, `Progress.Score`...).

!!! note

    Learn more about Structures on the page about [variables](/gdevelop5/all-features/variables).

Structures are useful as they can store all the data concerning something, that can then be sent to a server. To do this, you can convert the structure variable to JSON, using the expression called `ToJSON`. For example:

```javascript
ToJSON(Progress)
```

If the Progress variable has a children "Level" with value 4 and "Score" with value 1500, the resulting JSON will be: `{"Level": 4, "Score": 1500}`.

You can use it as the content of a request sent to the server.

### JSON to variable

You can go the other way, and convert JSON back to a variable. This is useful when you've received the answer from the server, which is also usually formatted in JSON.

Use the action "**Convert JSON to a variable**" (or "Convert JSON to global variable", or "Convert JSON to object variable"). Specify the JSON to be converted (which will be itself stored in a variable) and the variable, where you need to store the resulting structure.

## Reference

All actions, conditions and expressions are listed in [the network reference page](/gdevelop5/all-features/network/reference/).