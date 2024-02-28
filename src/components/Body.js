import RestaurantCard from "./RestaurantCard";
import restaurantArray from "../utils/mockData";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-container">Search</div>
      <div className="restaurant-container">
        {restaurantArray.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
