import { useDispatch } from "react-redux";
import { CDN_URL, NO_IMG } from "../utils/constants";
import { NON_VEG_IMG } from "../utils/constants";
import { VEG_IMG, NO_IMG } from "../utils/constants";
import cartSlice, { addItem } from "../utils/cartSlice";

const Items = (props) => {
  const dispatch = useDispatch();
  const handleAddItem = (items) => {
    dispatch(addItem(items));
  };

  const imgLink = props.items.hasOwnProperty("imageId")
    ? CDN_URL + props.items.imageId
    : NO_IMG;
  return (
    <div className="items">
      <div className="item-info">
        {props?.items?.itemAttribute?.vegClassifier === "VEG" ? (
          <img src={VEG_IMG} />
        ) : (
          <img src={NON_VEG_IMG} />
        )}
        <h4>{props.items.name}</h4>
        <h5>Rs.{(props.items.price || props.items.defaultPrice) / 100}</h5>
        <p className="description">{props.items.description}</p>
      </div>
      <div className="item-img-container">
        <button className="add-btn" onClick={() => handleAddItem(props?.items)}>
          ADD
        </button>
        <img src={imgLink} />
      </div>
    </div>
  );
};
export default Items;
