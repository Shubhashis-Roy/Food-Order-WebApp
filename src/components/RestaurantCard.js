import { CDN_URL } from "../utills/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    areaName,
    totalRatingsString,
    sla,
  } = resData;

  return (
    <>
      <div
        data-testid="resCart"
        className="m-4 p-4 w-[250px] bg-gray-200 hover:bg-gray-400 rounded-lg hover:scale-110 transition"
      >
        <img className=" rounded-lg " src={CDN_URL + cloudinaryImageId} />
        <h3 className=" font-bold text-[19px] py-1 ">
          {name.length > 22 ? `${name.substring(0, 21)}...` : name}
        </h3>
        <div className="flex space-x-[70px]">
          <h4> 🌟 {avgRating}</h4>
          <h4>{totalRatingsString} Rating</h4>
        </div>
        <div style={{ color: "#333333" }}>
          <h4 className="py-1">{cuisines.join(", ").substring(0, 28)}...</h4>
          <h4>{areaName}</h4>
          <h4 className="py-1">Delivery Time : {sla.slaString}</h4>
        </div>
      </div>
    </>
  );
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="py-1 px-2 rounded-lg text-white bg-slate-950 absolute">
          {" "}
          Pure Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
