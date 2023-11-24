import React from "react";
import ReactDOM from "react-dom/client";



const header1 = React.createElement(
    "div",
     {},
     [
        React.createElement("h1",{className:"title"},"This is h1"),
        React.createElement("h2",{className:"title"},"This is h2"),
        React.createElement("h3",{className:"title"},"This is h3"),
     ]
);

const header2 = (
    <div>
        <h1 className="title">This is h1</h1>
        <h2 className="title">This is h2</h2>
        <h3 className="title">This is h3</h3>
    </div>
)

const HeaderComponent1 = ()=>(
    <div>
        <h1 className="title">This is h1</h1>
        <h2 className="title">This is h2</h2>
        <h3 className="title">This is h3</h3>
    </div>
)
const HeaderComponent2 = ()=>(
    <div>
        <HeaderComponent1/>
        <HeaderComponent1></HeaderComponent1>
        {HeaderComponent1()}
        <h1 className="title">This is h1</h1>
        <h2 className="title">This is h2</h2>
        <h3 className="title">This is h3</h3>
    </div>
)

const HeaderComponent = ()=>(
    <div id="navbar">
        <h1>LOGO</h1>

        <div>
            <label for="searchInput">Search:</label>
            <input type="text" id="searchInput" name="search" placeholder="Type your search"/>
        </div>

        <h1>User</h1>

    </div>

);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);