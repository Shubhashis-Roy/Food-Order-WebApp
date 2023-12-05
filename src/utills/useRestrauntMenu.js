import { useEffect, useState } from "react";
import { RestaurantManu_URL } from "../utills/constants";

const useRestrauntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RestaurantManu_URL + resId);
    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useRestrauntMenu;
