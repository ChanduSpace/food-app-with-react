import MenuItems from "./MenuItems";
import { useState, useEffect } from "react";
import { ITEM_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {
  const [resMenuInfo, setResMenuInfo] = useState(null);
  const [recommendedMenu, setRecommendedMenu] = useState([]);
  const { resId } = useParams();

  const [allMenu, setAllMenu] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(ITEM_MENU_URL + resId);
    const recomMenuJson = await data.json();

    setResMenuInfo(recomMenuJson.data);
    setRecommendedMenu(
      recomMenuJson.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]
        ?.card?.card?.itemCards
    );

    setAllMenu(recomMenuJson.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
  };

  if (resMenuInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    areaName,
    costForTwoMessage,
    totalRatings,
    avgRating,
    id,
  } = resMenuInfo.cards[0].card.card.info;

  const { slaString } = resMenuInfo.cards[0].card.card.info.sla;

  const onlyAllMenu = allMenu.cards.filter(
    (e) =>
      e.card.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="restaurant-page-container">
      <div className="res-info-container">
        <div className="res-info">
          <h2>{name}</h2>
          <p>{cuisines}</p>
          <p>{areaName}</p>
          <h3>
            {slaString} • {costForTwoMessage}
          </h3>
        </div>
        <div className="res-rating">
          <h3>{avgRating}</h3>
          <h6>{totalRatings / 1000}k ratings</h6>
        </div>
      </div>

      <div className="items-container">
        {onlyAllMenu.map((item) => (
          <MenuItems key={item?.card?.card?.title} itemInfo={item} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
