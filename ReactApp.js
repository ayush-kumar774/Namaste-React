import React from "react";
import ReactDOM from "react-dom/client";


/*

* Header
* - Logo
* - Nav Items

* Body
* - Search bar (input)
* - RestrauntContainer
*   - RestrauntCard
*           - Img
*           - Name of Restraunt, Star Rating, Cuisines, Delivery Time
*
* Footer
* - Copyright
* - Link
* - Address
* - Contact

*/


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


// const heading = React.createElement("h1", { id: "heading" }, "Namaste React 🚀");

// * JSX - JSX is not HTML in JS, it is HTML like syntax
// * It is transpiled before it reaches the JS Engine // PARCEL --> Babel
// * JSX ==> Babel transpile it to React.createElement ==> ReactElement - JS Object ==> HTMLElement(render)

// const Title = () => (<h1 id="heading" tabIndex={5}> Namaste React using JSX 🚀 </h1>);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(heading);

// console.log(jsxHeading);

// if (heading == jsxHeading) {
//       console.log("These both headings are same");
// }
// else {
//       console.log("Not same")
// }


// const value = "Heading 3";
// const TitleJSXFunctionalComponent = () => {
//       return (
//             <div className="title">
//                   <h1>Heading 1</h1>
//                   <h2>Heading 2</h2>
//                   <h3>{value}</h3>
//             </div>
//       );
// };

/*
      ! React Component
      * Class Based Component -> OLD
      * Functional Component -> NEW 
*/
// ! React Functional Component

// const HeadingComponent = () => {
//       return <h1 id="heading">Namaste React from Functional Component</h1>;
// }

// const number = 1000;

// * Component Composition
// const HeadingComponent2 = () => (
//       <div id="container">
//             {/* <h1 id="heading">{"Number is " + number} </h1>  */}
//             {/* <Title /> */}
//             {/* <Title> </Title> */}
//             {Title()}
//             <h1 id="heading">Namaste React from Functional Component 🚀</h1>
//       </div>
// ); // ! no need to write return statement.


// const Header = () => {
//       return (
//             <div className="header">
//                   <div className="logo">
//                         <img src="path_to_your_logo.png" alt="Logo" />
//                   </div>
//                   <div className="search">
//                         <input type="text" placeholder="Search..." />
//                         <button>Search</button>
//                   </div>
//                   <div className="user">
//                         <img src="path_to_your_user_icon.png" alt="User" />
//                   </div>
//             </div>
//       );
// };

// ! Episode 4 

const Header = () => {
      return(
            <div className="header">
                  <div className="logo-container">
                        <img className="logo" src="https://www.logodesign.net/logo/pizza-man-charactor-with-knife-and-fork-5382ld.png" />
                  </div>
                  <div className="nav-items">
                        <ul>
                              <li>Home</li>
                              <li>About Us</li>
                              <li>Contact Us</li>
                              <li>Cart</li>
                        </ul>
                  </div>
            </div>
      )
}

const styleCard = {
      backgroundColor : "red",
};

const RestaurantCard = () => {
      return (
            <div className="res-card" style={{styleCard}}>
                  <img 
                        className="res-logo"
                        alt="res-logo"
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nw2xeql0jokm2rqnkzfs"
                  />
                  <h3>Meghana Foods</h3>
                  <h4>Biryani, Andhra, South Indian, North Indian, Asian</h4>
                  <h4>4.4 Stars</h4>
                  <h4>18 mins</h4>
            </div>
      )
}

const Body = () => {
      return (
            <div className="body">
                  <div className="Search">Search</div>
                  <div className="res-container">
                        <RestaurantCard Meghana Foods/>
                        <RestaurantCard KFC/>
                        <RestaurantCard Burger King/>
                        <RestaurantCard McDonald/>
                        <RestaurantCard Bakingo/>
                        <RestaurantCard Cheesecake Co/>
                        <RestaurantCard Big Bowl/>
                        <RestaurantCard Great Indian Khichdi/>
                        <RestaurantCard Navratri Specials/>
                        <RestaurantCard Leon Burger/>
                        <RestaurantCard Asha Tiffins/>
                        <RestaurantCard Pizza Hut/>
                  </div>
            </div>
      )
}
const AppLayout = () => {
      return (
            <div className="app">
                  <Header />
                  <Body />
            </div>
      )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<AppLayout />); // ! This is how we render components


