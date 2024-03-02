import { CDN_URL } from "../utils/constants";

const MenuItems = (props) => {
  console.log(props);
  const { name, price, imageId, description, defaultPrice } =
    props.itemInfo.card.info;

  return (
    <div className="res-items-container">
      <div className="item-info">
        <img src="https://www.clipartmax.com/png/full/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png" />
        <h4>{name}</h4>
        <h5>Rs.{(price || defaultPrice) / 100}</h5>
        <p className="description">{description}</p>
      </div>
      <div className="item-img-container">
        <img
          src={CDN_URL + imageId}
          onError={(event) => (event.target.style.display = "none")}
        />
      </div>
    </div>
  );
};

export default MenuItems;
