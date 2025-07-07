import RestaurantCard ,{ResturantCardHighRating} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  // State Variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const [filteredrestaurant, setFilteredrestaurant] = useState([]);

  const { loggedInuser, setUserName } = useContext(UserContext);
 

  const RestaurantCardWithHighRating = ResturantCardHighRating(RestaurantCard);

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
      (res) => res.info.avgRating >= 3
    );
    setListOfRestaurant(filteredResturant);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border-2"
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-200 m-4 rounded-lg"
            onClick={() => {
              const filteredTrstaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
              );
              setFilteredrestaurant(filteredTrstaurant);
            }}
          >
            search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
            <button className="px-4 py-2 bg-gray-100" onClick={filteredList}>
              Top Rated Restaurants
            </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <label>Username : </label>
          <input type="text" className="border-2 ml-1 p-2"
          value={loggedInuser}
          onChange={(e)=>setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredrestaurant.map((restaurant) => (
          <Link 
           key={restaurant.info.id}
          to={"/restaurants/" + restaurant.info.id}>

          {/**if the restaurant rated is more than 4.3 it marks as less preference 
          
           restaurant.info.id > 1000 ? <RestaurantCardWithHighRating resData={restaurant}/> : <RestaurantCard key={restaurant.info.id} resData={restaurant} />*/
          
          }
          {

           restaurant.info.cuisines.length > 1?  <RestaurantCardWithHighRating  resData={restaurant}/> :  <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          }
          
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
