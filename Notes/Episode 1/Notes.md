``` javascript
React.createElement()

React.createElement() return an object which is understandable by browser. It takes first parameter which is an element, second parameter is properties or attribute and third parameter takes children as input.
```

```javascript
const parent = React.createElement(
      "div",
      {
            id: "parent"
      },
      [
            React.createElement(
                  "div",
                  {
                        id: "child1"
                  },
                  [React.createElement("h1", {}, "I'm a nested H1 tag inside child 1 div :)"), React.createElement("h2", {}, "I am sibling inside child 1 div :)")]
            ),
            React.createElement(
                  "div",
                  {
                        id: "child2"
                  },
                  [React.createElement("h1", {}, "I'm a nested H1 tag inside child 2 div :)"), React.createElement("h2", {}, "I am sibling inside child 2 div  :)")]
            )
      ]
      
);
```
```javascript
Notes
-> React can be applied to specific part of HTML page or code.
-> Whatever is HTML code is written inside id - root, React.render will replace it and render Whatever is written inside render method.
```