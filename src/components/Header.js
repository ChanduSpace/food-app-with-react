import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="header-menu-container">
        <ul className="header-menu">
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link className="text-decor" to="/">
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link className="text-decor" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="text-decor" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="text-decor" to="/cart">
              <h5>Cart-({cartItems.length} items)</h5>
            </Link>
          </li>

          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
