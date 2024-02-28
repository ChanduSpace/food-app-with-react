import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="header-menu-container">
        <ul className="header-menu">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
