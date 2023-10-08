## 1. What is Emmet?

Emmet is a free add-on for your text editor. It allows you to type shortcuts that are then expanded into full pieces of code.

## 2. Difference between a Library and Framework?

- A framework provides a structure for developing software applications.
- A library is a collection of pre-written code for specific tasks.

## 3. What is CDN? Why do we use it?

CDN stands for "content delivery network." It delivers content based on user location, reducing latency.
Primary purpose: Reduce network communication delay.

## 4. Why is React known as React?

React "reacts" to user interactions. Developed by Facebook to improve UI development and efficiently update what the user sees.

## 5. What is cross-origin in the script tag?

Cross-origin refers to requests for resources from another domain. CORS (Cross-Origin Resource Sharing) manages such requests.

## 6. What is the difference between React and ReactDOM?

- React: Creates views.
- ReactDOM: Renders UI in the browser.

## 7. What is the difference between `react.development.js` and `react.production.js` files via CDN?

- `react.development.js`: Developer-friendly, readable, larger file.
- `react.production.js`: Minified code for efficiency, smaller file.

## 8. What are `async` and `defer`?

- `async`: Allows the script to run as soon as it's loaded, without blocking other elements.
- `defer`: Executes the script after the page has finished loading.

   - Async:
     - Browser starts downloading the file while parsing the HTML document.
     - Useful for multiple scripts with src attributes pointing at external JavaScript.

   - Defer:
     - Browser doesn't wait for the script, continues processing HTML.
     - Script execution deferred until after HTML is fully processed.

