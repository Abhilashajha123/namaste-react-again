import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";

const Body = () => {
  // State Variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const [filteredrestaurant, setFilteredrestaurant] = useState([]);

  // useEffect

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredrestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Function of filterd By TOP Rating

  const onlinestatus = useOnlineStatus();

  if (onlinestatus === false) {
    return (
      <div>
        <h1>Please check your internet connectivity</h1>
      </div>
    );
  }

  const filteredList = () => {
    const filteredResturant = listOfRestaurant.filter(
      (res) => res.info.avgRating >= 4
    );
    setListOfRestaurant(filteredResturant);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filtered the restaurant card
              //search text

              console.log(searchTxt);

              const filteredTrstaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
              );
              setFilteredrestaurant(filteredTrstaurant);
            }}
          >
            search
          </button>
        </div>
        <button className="filter-btn" onClick={filteredList}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredrestaurant.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
