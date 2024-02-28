import { CDN_URL } from "../utils/constants";
import { RATING_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
    areaName,
  } = restaurantData?.info;

  return (
    <div className="restaurant-card">
      <img className="restaurant-img" src={CDN_URL + cloudinaryImageId} />
      <h3 className="line-clamp">{name}</h3>
      <div className="rating-and-logo">
        <img className="rating-logo" src={RATING_LOGO} />
        <h4>
          {avgRating} • {restaurantData.info.sla.slaString}
        </h4>
      </div>
      <h4 className="line-clamp light-font">{cuisines.join(", ")}</h4>
      <h4 className="line-clamp light-font">{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
