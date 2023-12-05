import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import { swiggy_api_URL } from "../utills/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import allResData from "../utills/mockData";
import useOnlineStatus from "../utills/useOnlineStatus";
import UserContext from "../utills/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fectData();
  }, []);

  const fectData = () => {
    try {
      const resData1 = allResData;

      setRestaurantList(resData1);
      setFilteredRestaurant(resData1);
    } catch (error) {
      console.log(error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>You r offline</h1>;

  const { loggInUser, setUserName } = useContext(UserContext);

  // Conditional Rendering

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ml-[66px]">
      <div className="filter flex">
        <div className="search p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border-2 rounded-l-lg border-gray-300 bg-white py-[7px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-2 py-[7px] bg-green-300 rounded-r-lg transition hover:bg-indigo-500"
            onClick={() => {
              const filterRes = restaurantList.filter((r) =>
                r?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filterRes);
            }}
          >
            Search
          </button>
        </div>

        <div className="p-4">
          <button
            className="px-2 py-[7px] bg-green-300 rounded-lg transition hover:bg-indigo-500"
            onClick={() => {
              const f = restaurantList.filter((r) => r.info.avgRating >= 4.2);
              // setRestaurantList(f);
              setFilteredRestaurant(f);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="p-4">
          <button
            className="px-2 py-[7px] bg-green-300 rounded-lg transition hover:bg-indigo-500"
            onClick={() => {
              const res = restaurantList.filter(
                (item) => item.info.veg === true
              );
              setFilteredRestaurant(res);
            }}
          >
            Pure Veg
          </button>
        </div>
        <div className="p-4">
          <input
            type="text"
            className="border-2 rounded-l-lg border-gray-300 bg-white py-[7px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={loggInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label> : UserName</label>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant?.info?.id}
            >
              {restaurant.info.veg ? (
                <RestaurantCardPromoted resData={restaurant?.info} />
              ) : (
                <RestaurantCard resData={restaurant?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
