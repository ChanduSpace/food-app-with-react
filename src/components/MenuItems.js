import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import Items from "./Items";

const MenuItems = (props) => {
  return (
    <div className="res-items-container">
      <div className="type-container">
        <div className="type-text">
          {props.itemInfo.card.card.title} (
          {props.itemInfo.card.card.itemCards.length})
        </div>
        <h2>🔽</h2>
      </div>

      {props.itemInfo.card.card.itemCards.map((e) => (
        <Items key={e.card.info.id} items={e.card.info} />
      ))}
    </div>
  );
};

export default MenuItems;
