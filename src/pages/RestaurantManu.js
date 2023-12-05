import { useEffect, useState } from "react";
import { RestaurantManu_URL } from "../utills/constants";
import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import useRestrauntMenu from "../utills/useRestrauntMenu";
import RestaurantCategory from "../components/ResturantCategory";

const ResturantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const response = useRestrauntMenu(resId);
  const resData = response?.data?.cards[0].card?.card?.info;

  const resData2 =
    response?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

  if (resData === undefined || resData === null) return <Shimmer />;

  const category = resData2.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // console.log(category);

  const { name, cuisines, areaName, avgRating, totalRatingsString, city, veg } =
    resData;

  return (
    <>
      <div className="menu ml-[250px] ">
        <div className="flex space-x-[520px]">
          <div>
            <h2 className="font-bold text-xl font-sans">{name}</h2>

            <ul className="flex text-gray-600">
              {cuisines.map((item) => (
                <li key={item}>{item},</li>
              ))}
            </ul>
            <p className=" text-gray-600 ">
              {areaName}, {city}{" "}
            </p>
          </div>

          <div className="border-[1px] border-solid border-gray-400 rounded-lg">
            <p className="p-1 pl-5 text-green-900 font-bold"> 🌟 {avgRating}</p>
            <hr />
            <p className="p-1">{totalRatingsString}</p>
          </div>
        </div>
        <hr className="my-4 mr-[250px]" />

        <div className="flex space-x-10">
          <p className="font-bold"> ₹ {resData.costForTwo / 100} for two </p>
          <p className="font-bold"> {veg ? <p> 🥬 Pure Veg</p> : <p></p>} </p>
        </div>

        <hr className="mt-4 mr-[250px] " />

        <ul className="mr-[250px] ">
          {category.map((cat, index) => (
            <li>
              <RestaurantCategory
                key={cat.card.card.title}
                data={cat.card.card}
                showItems={index === showIndex ? true : false}
                setShowItems={() => setShowIndex(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ResturantMenu;
