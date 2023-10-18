// import React from "react";



//  ? reate a nested header element using React.createElement(h1, h2, h3 inside a div with class "title")

// const title = React.createElement(
//       "div",
//       { className: "title" },
//       React.createElement("h1", { id: "heading1" }, "Heading 1"),
//       React.createElement("h2", { id: "heading2" }, "Heading 2"),
//       React.createElement("h3", { id: "heading3" }, "Heading 3")
// );
//  root.render(title);

// ? create the same element using JSX

// const TitleJSX = () => (
//       <div className="title">
//             <h1 id="heading1"> Heading One </h1>
//             <h2 id="heading2"> Heading Two </h2>
//             <h3 id="heading3"> Heading Three </h3>
//       </div>
// )

//  ? create a functional component of the same with JSX

const value = "Heading 3";
// const TitleJSXFunctionalComponent = () => {
//       return (
//             <div className="title">
//                   <h1>Heading 1</h1>
//                   <h2>Heading 2</h2>
//                   <h3>{value}</h3>
//             </div>
//       );
// };

// ?  Pass attributes into the tag in JSX

// const TitleJSXFunctionalComponent = (props) => {
//       return (
//             <div className="title">
//                   <h1>{props.heading1}</h1>
//                   <h2>{props.heading1}</h2>
//                   <h3>{props.heading1}</h3>
//             </div>
//       );
// };

// root.render(
//       <TitleJSXFunctionalComponent 
//         heading1="Heading 1" 
//         heading2="Heading 2" 
//         heading3={value} 
//       />
//     );
    
// ? {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX



// root.render(<TitleJSX />);


