import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log(props);
  console.log(props.restaurantData.name);
  const { restaurantData } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, deliveryTime } =
    restaurantData?.info;

  return (
    <div className="restaurant-card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h3 className="line-clamp">{name}</h3>
      <h4 className="line-clamp">{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{restaurantData.info.sla.deliveryTime + " minutes"}</h4>
    </div>
  );
};

export default RestaurantCard;
