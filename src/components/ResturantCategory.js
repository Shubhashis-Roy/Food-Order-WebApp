import ItemList from "./ItemList";
import { useState } from "react";

// const RestaurantCategory = ({ data, showItems, setShowItems }) => {
const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    // setShowItems();
    setShowItems(!showItems);
  };

  return (
    <>
      <div className="w-full my-4 bg-gray-100 shadow-lg p-3">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span> {showItems ? "⏫" : "⏬"} </span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </>
  );
};

export default RestaurantCategory;
