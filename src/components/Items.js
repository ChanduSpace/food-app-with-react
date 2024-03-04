import { CDN_URL } from "../utils/constants";

const Items = (props) => {
  return (
    <div className="items">
      <div className="item-info">
        <img src="https://www.clipartmax.com/png/full/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png" />
        <h4>{props.items.name}</h4>
        <h5>Rs.{(props.items.price || props.items.defaultPrice) / 100}</h5>
        <p className="description">{props.items.description}</p>
      </div>
      <div className="item-img-container">
        <img
          src={CDN_URL + props.items.imageId}
          onError={(event) => (event.target.style.display = "none")}
        />
      </div>
    </div>
  );
};
export default Items;
