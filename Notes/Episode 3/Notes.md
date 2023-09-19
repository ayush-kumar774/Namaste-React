# Important Points

- npm start is equal to npm run start.
- For adding script we need to add the command and name/shortcut as key value pair inside scripts object in the package.json file.
- In JSX we follow camelCase for providing attribute.
- We need to use paranthesis in case we are writing multiple line JSX code.
- Everything in React is a component.
- A JavaScript function that return React Element (some piece of JSX code) is called functional component in JSX.

## Component Composition -> Putting component inside a component

```javascript
const HeadingComponent2 = () => (
      <div>
            <Title />
            <h1 id="heading">Namaste React from Functional Component 🚀</h1>
      </div>
); 
```