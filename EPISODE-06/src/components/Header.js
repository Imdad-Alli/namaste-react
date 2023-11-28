import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  // let loginBtn ="Login";
  const[loginBtn, setLoginBtn]=useState("Login");
  
    return (
      <div id="navbar">
        <div id="logo-container">
          <img
            id="logo"
            src={LOGO_URL}
          />
        </div>
        <div id="navIteams">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>ContactUs</li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{
              loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login");
            }}>{loginBtn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;