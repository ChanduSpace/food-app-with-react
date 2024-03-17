import { useDispatch, useSelector } from "react-redux";
import { CDN_URL, NO_IMG } from "../utils/constants";
import { NON_VEG_IMG } from "../utils/constants";
import { VEG_IMG, NO_IMG } from "../utils/constants";
import Items from "./Items";
import store from "../utils/store";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearAll = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-item-container">
      <h1>Cart</h1>
      <button onClick={() => handleClearAll()}>Clear Cart</button>
      {cartItems.map((items) => (
        <Items items={items} />
      ))}
    </div>
  );
};
export default Cart;
