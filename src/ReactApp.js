import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


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

const AppLayout = () => {
      return (
            <div className="app">
                  <Header />
                  <Body />
            </div>
      )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); // ! This is how we render components


