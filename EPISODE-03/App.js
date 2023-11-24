import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
 <h1 id="title" className="c1">
    Namaste React Title
  </h1>
);
const title2 = (
  <h1 id="title2" className="c1">
     Namaste React Title2
   </h1>
 );
const HeadingComponent = ()=> (
  <div className="container">
    <Title/>
    <Title></Title>
    {Title()}
    {1000+2000}
    {title2}
    <h1 id="heading" className="head">
      Namaste React Functional component
    </h1>


    {<Title></Title>}
    {Title()}

  </div>
);
const div1 = (
  <div id="div1" className="c1">
     {HeadingComponent()}
   </div>
 );
// console.log(HeadingComponent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
// root.render(div1);