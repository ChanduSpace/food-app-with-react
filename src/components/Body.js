import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    console.log(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setRestaurantList(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return (
    <div className="body-container">
      <div className="search-container">
        <button
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4.2
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
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
