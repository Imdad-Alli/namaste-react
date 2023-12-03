import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const[loginBtn, setLoginBtn]=useState("Login");
  const onlineStatus = useOnlineStatus();

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
            <li>onlineStatus{onlineStatus?"🟢":"🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">ContactUs</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
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