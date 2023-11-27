import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default Header;