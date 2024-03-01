import { CDN_URL } from "../utils/constants";

const MenuItems = (props) => {
  console.log(props);
  const { name, price, imageId, description } = props.itemInfo.card.info;

  return (
    <div className="res-items-container">
      <div className="item-info">
        <img
          src="https://www.clipartmax.com/png/full/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png"
          alt="no-img"
        />
        <h4>{name}</h4>
        <h5>Rs.{price / 100}</h5>
        <p className="description">{description}</p>
      </div>
      <div className="item-img-container">
        <img src={CDN_URL + imageId} />
      </div>
    </div>
  );
};

export default MenuItems;
