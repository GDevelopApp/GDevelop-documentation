# Advanced HTTP

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Email/04e28ac117741933d15ac1cadb34e0d799c7a561352b1525a1b75c5bd1dbeabc_Email_email_envelope_letter_message_fast.svg" class="extension-icon"></img>
An extension to create HTTP requests with more advanced settings than the built-in "Network request" action, like specifying headers or bypassing CORS.

**Authors and contributors** to this community extension: [arthuro555](https://gd.games/arthuro555).

---

An extension to create HTTP requests with more advanced settings than the built-in "Network request" action, like specifying headers or bypassing CORS.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Copy a request template**  
Creates a new request template with all the attributes from an existing one.

**Create a new request template**  
Creates a template for your request. All requests must be made from a request template.

**Execute the request**  
Executes the request defined by a request template.

**Get response body (JSON)**  
Reads the body sent by the server, parses it as JSON and stores the resulting structure in a variable.

**Get response body (text)**  
Reads the body sent by the server, and store it as a string in a variable.

**Body as form data**  
Sets the body of an HTTP request to a form data representation of a structure variable.

**Body as JSON**  
Sets the body of an HTTP request to a JSON representation of a structure variable.

**Body**  
Change the body of the HTTP request. Contains data to send to the server, ususally in plain text, JSON or FormData format. This cannot be set for GET requests.

**HTTP Caching strategy**  
Defines to what extent the results of the request is can/must be cached. When cached, instead of sending a request to the server, the browser will avoid making a real request to the server and will use a previous response given by the server for the same request.  

The server also has a say in this via the Cache-Control header.

**Header**  
Change an HTTP header to be sent with the request.

**HTTP Method (Verb)**  
The HTTP method of the request. GET is the default and what you should use if you are unsure which to pick. A request to a REST API endpoint may have a different effect depending on the method - refer to the documentation of the API you are calling to learn about the appropriate method to use.

**URL**  
Change the request template's target URL.

**Enable CORS Bypass**  
CORS prevents most external websites from being queried with the browser's HTTP client, since the browser may be authenticated on that website and as such another website would be able to impersonate the player on that other website.  

When the CORS Bypass is enabled, the request will be made from a server that is not authenticated anywhere and as such is not blocked by CORS, and it will share the response with your game. Note that as such, authentication cookies are ignored! If you own the REST API you are requesting, add CORS headers to your server instead of using this CORS Bypass.

## Conditions

**CORS Bypass enabled**  
Checks whether or not CORS Bypass has been enabled for the request template.

**Body**  
Compare the body of the HTTP request. Contains data to send to the server, ususally in plain text, JSON or FormData format. This cannot be set for GET requests.

**HTTP Caching**  
Compare the HTTP method of the request. GET is the default and what you should use if you are unsure which to pick. A request to a REST API endpoint may have a different effect depending on the method - refer to the documentation of the API you are calling to learn about the appropriate method to use.

**Header**  
Compare an HTTP header to be sent with the request.

**HTTP Method (Verb)**  
Compare the HTTP method of the request. GET is the default and what you should use if you are unsure which to pick. A request to a REST API endpoint may have a different effect depending on the method - refer to the documentation of the API you are calling to learn about the appropriate method to use.

**URL**  
Compare the request template's target URL.

**Header**  
Compare one of the HTTP headers included in the server's response.

**Status code**  
Compare the status code of the HTTP request (e.g. 200 if succeeded, 404 if not found, etc).

**Success**  
Checks whether the server marked the response as a success (status code 1XX/2XX), not as a failure (status code 4XX/5XX).

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `AdvancedHTTP::RequestBody(string)` | Return the body of the HTTP request. Contains data to send to the server, ususally in plain text, JSON or FormData format. This cannot be set for GET requests. ||
| | _🔤 Name (String)_ | Request template name |
| `AdvancedHTTP::RequestCache(string)` | Return the HTTP method of the request. GET is the default and what you should use if you are unsure which to pick. A request to a REST API endpoint may have a different effect depending on the method - refer to the documentation of the API you are calling to learn about the appropriate method to use. ||
| | _🔤 Name (String)_ | Request template name |
| `AdvancedHTTP::RequestHeader(string, string)` | Return an HTTP header to be sent with the request. ||
| | _🔤 Name (String)_ | Request template name |
| | _🔤 Name (String)_ | HTTP header name |
| `AdvancedHTTP::RequestMethod(string)` | Return the HTTP method of the request. GET is the default and what you should use if you are unsure which to pick. A request to a REST API endpoint may have a different effect depending on the method - refer to the documentation of the API you are calling to learn about the appropriate method to use. ||
| | _🔤 Name (String)_ | Request template name |
| `AdvancedHTTP::RequestURL(string)` | Return the request template's target URL. ||
| | _🔤 Name (String)_ | Request template name |
| `AdvancedHTTP::ResponseHeader(scene variable, string)` | Return one of the HTTP headers included in the server's response. ||
| | _🗄️ Scene variable_ | Variable containing the response |
| | _🔤 Name (String)_ | Header |
| `AdvancedHTTP::ResponseStatusCode(scene variable)` | Return the status code of the HTTP request (e.g. 200 if succeeded, 404 if not found, etc). ||
| | _🗄️ Scene variable_ | Variable containing the response |
| `AdvancedHTTP::ResponseStatusText(scene variable)` | Gets the status text for a response. For example, for a response with the status code 404, the status text will be "Not Found". ||
| | _🗄️ Scene variable_ | Variable containing the response |


---

*This page is an auto-generated reference page about the **Advanced HTTP** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).