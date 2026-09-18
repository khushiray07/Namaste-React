import React from "react";
import ReactDOM from "react-dom/client";


const elem = <span> React Element </span>

 const title = (
<h1 className ="head"  tabIndex="5">
  {elem}
   Namaste React using Jsx!</h1>

 );


const HeadingComponent = () => (
  <div id = "container">
    {title}
    <h1 className = "heading">Hello World from Heading Component!</h1>
    </div>
    );

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HeadingComponent />); 