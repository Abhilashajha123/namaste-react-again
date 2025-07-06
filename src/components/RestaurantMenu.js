import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/customHooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null); // ✅ This is valid

  if (!resInfo) return <Shimmer />;

  const info = resInfo?.cards?.find(c => c?.card?.card?.info)?.card?.card?.info;
  if (!info) return <h2>Menu info not available</h2>;

  const { name, cuisines } = info;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold">{cuisines.join(", ")}</p>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card?.card?.title || index}
          data={category.card?.card}
          showItems={index === showIndex}
           setShowIndex={() => {
            console.log("Setting showIndex to:", index);
            setShowIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
