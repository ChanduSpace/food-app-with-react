import { CDN_URL } from "../utils/constants";
import { NON_VEG_IMG } from "../utils/constants";
import { VEG_IMG } from "../utils/constants";

const Items = (props) => {
  return (
    <div className="items">
      <div className="item-info">
        {props.items.itemAttribute.vegClassifier === "VEG" ? (
          <img src={VEG_IMG} />
        ) : (
          <img src={NON_VEG_IMG} />
        )}
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
