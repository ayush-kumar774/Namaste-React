# 1. What is Emmet?
## Emmet is a free add-on for your text editor. It allows you to type shortcuts that are then expanded into full pieces of code.

# 2. Difference between a Library and Framework? 
A framework is a set of pre-written code that provides a structure for developing software applications. A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.
#

# 3. What is CDN? Why do we use it?
CDN stands for "content delivery network." A content delivery network is a system of servers that deliver content to users based on their geographic location. 
The primary purpose of a content delivery network (CDN) is to reduce latency, or reduce the delay in communication created by a network's design.
#

# 4. Why is React known as React?
It is called React because it reacts. It was developed by Facebook to improve the user interface development and more effectively change (REACT to) what the user sees when they're doing things like mouse clicking, submitting and typing.
#

# 5. What is cross-origin in the script tag?
The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
Web pages often make requests to load resources on other servers. Here is where CORS comes in.

A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

CORS is used to manage cross-origin requests.

CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.
#

# 5. What is difference between React and ReactDOM?
React library is responsible for creating views and ReactDOMM library is responsible to actullay render UI in the browser.

# 6. What is diffenence between react.development.js and react.production.js files via CDN?
react.development.js - More developer friendly, readable, will take more size.
react.production.js - Minified code that is not developer friendly as it focused on decreasing in file size, code efficiency.


# 7. What are async and defer?
Async allows your script to run as soon as it's loaded, without blocking other elements on the page. Defer means your script will only execute after the page has finished loading.
Async: The browser can start downloading the file while parsing the HTML document. This means that if you have multiple scripts with src attributes pointing at external JavaScript
Defer: The defer attribute tells the browsser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM.
