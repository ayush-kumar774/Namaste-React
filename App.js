{/* <div id="parent">
      <div id="child">
            <h1>I'm a nested H1 tag :)</h1>
            <h2>I am sibling </h2>
      </div>
      <div id="child2">
            <h1>I'm a nested H1 tag :)</h1>
            <h2>I am sibling </h2>
      </div>
</div> */}

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
// Alternate of this is JSX.

console.log(parent);

// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!!");

// console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);