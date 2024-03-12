import { useSelector } from "react-redux";
import { CDN_URL, NO_IMG } from "../utils/constants";
import { NON_VEG_IMG } from "../utils/constants";
import { VEG_IMG, NO_IMG } from "../utils/constants";
import Items from "./Items";
import store from "../utils/store";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="cart-item-container">
      <h1>Cart</h1>
      {cartItems.map((items) => (
        <Items items={items} />
      ))}
    </div>
  );
};
export default Cart;
