import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import Items from "./Items";

const MenuItems = (props) => {
  const [show, setShow] = useState(false);

  const showItems = () => setShow(!show);
  return (
    <div className="res-items-container">
      <div className="type-container" onClick={showItems}>
        <div className="type-text">
          {props.itemInfo.card.card.title} (
          {props.itemInfo.card.card.itemCards.length})
        </div>
        <h2>🔽</h2>
      </div>

      {props.itemInfo.card.card.itemCards.map(
        (e) => show && <Items key={e.card.info.id} items={e.card.info} />
      )}
    </div>
  );
};

export default MenuItems;
