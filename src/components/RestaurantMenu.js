import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { NEW_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(NEW_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, areaName, sla, expectationNotifiers } =
    resInfo?.cards[2]?.card?.card?.info;

  const restitems =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  return (
    <div>
      <h2>{name}</h2>
      <div className="">
        <h3>4.0 (1K+ ratings)₹200 for two</h3>
        <h4>{cuisines.join(", ")} </h4>
        <p>
          <b>Outlet</b> {areaName}
        </p>
        <p>
          <b>
            {sla.minDeliveryTime}-{sla.maxDeliveryTime} mins
          </b>
        </p>
        <span>{expectationNotifiers[0].text}</span>
      </div>
      <h4>Recommended</h4>
      <ul>
        {restitems?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs. "}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
