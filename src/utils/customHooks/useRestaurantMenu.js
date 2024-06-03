import { useEffect, useState } from "react";
import { NEW_API } from "../constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  //FETCH RESTAURANT MENU

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(NEW_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
