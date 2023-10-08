import React from "react";
import ReactDOM from "react-dom/client";


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

// const parent = React.createElement(
//       "div",
//       {
//             id: "parent"
//       },
//       [
//             React.createElement(
//                   "div",
//                   {
//                         id: "child1"
//                   },
//                   [React.createElement("h1", {}, "Learning React 🚀"), React.createElement("h2", {}, "I am sibling inside child 1 div :)")]
//             ),
//             React.createElement(
//                   "div",
//                   {
//                         id: "child2"
//                   },
//                   [React.createElement("h1", {}, "I'm a nested H1 tag inside child 2 div :)"), React.createElement("h2", {}, "I am sibling inside child 2 div  :)")]
//             )
//       ]

// );

// ? Alternate of this is JSX.

// console.log(parent);

//  const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!!");

//  console.log(heading); //object

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(parent); // this will replace if anything is there inside the root element


// ============= Episode 3 (Laying the foundation) ================

// React Element
// React.createElement ==> ReactElement - JS Object ==> HTMLElement(render)


const heading = React.createElement("h1", { id: "heading" }, "Namaste React 🚀");

// * JSX - JSX is not HTML in JS, it is HTML like syntax
// * It is transpiled before it reaches the JS Engine // PARCEL --> Babel
// * JSX ==> Babel transpile it to React.createElement ==> ReactElement - JS Object ==> HTMLElement(render)

const Title = () => (<h1 id="heading" tabIndex={5}> Namaste React using JSX 🚀 </h1>);

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(heading);

// console.log(jsxHeading);

// if (heading == jsxHeading) {
//       console.log("These both headings are same");
// }
// else {
//       console.log("Not same")
// }


/*
      ! React Component
      * Class Based Component -> OLD
      * Functional Component -> NEW 
*/
// ! React Functional Component

// const HeadingComponent = () => {
//       return <h1 id="heading">Namaste React from Functional Component</h1>;
// }

const number = 1000 ;

// * Component Composition
const HeadingComponent2 = () => (
      <div id="container">
           {/* <h1 id="heading">{"Number is " + number} </h1>  */}
            {/* <Title /> */}
            {/* <Title> </Title> */}
            {Title()}
            <h1 id="heading">Namaste React from Functional Component 🚀</h1>
      </div>
); // ! no need to write return statement.

// root.render(jsxHeading);
root.render(<HeadingComponent2 />); // ! This is how we render components


