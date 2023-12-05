import { useDispatch } from "react-redux";
import { CDN_URL } from "../utills/constants";
import { addItem } from "../utills/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch and action
    dispatch(addItem(item));
  };

  return (
    <>
      <div className="mt-2">
        {items.map((item) => (
          <div key={item.card.info.id} data-testid="foodItems">
            <div className="flex justify-between my-4 mb-8">
              <div>
                <span className="font-bold text-gray-700">
                  {item.card.info.name}
                </span>
                <br />
                {item.card.info.price ? (
                  <span>₹ {item.card.info.price / 100}</span>
                ) : (
                  <span>₹ {item.card.info.defaultPrice / 100}</span>
                )}

                <br />
                <p className="mt-3 text-sm text-gray-500 w-[600px]">
                  {item.card.info.description}
                </p>
              </div>
              {item.card.info.imageId ? (
                <div>
                  <div className="absolute">
                    <button
                      className=" py-2 px-4 mx-7 my-[65px] rounded-lg bg-slate-300 shadow-lg text-green-800 font-bold"
                      onClick={() => handleAddItem(item)}
                    >
                      Add+
                    </button>
                  </div>
                  <img
                    className="h-[90px] w-32 rounded-lg"
                    src={CDN_URL + item.card.info.imageId}
                    alt="Not available"
                  />
                </div>
              ) : (
                <p className="border-[1px] border-solid border-gray-500 pt-3 pl-3">
                  Next available at 9 am, tomorrow
                </p>
              )}
            </div>
            <hr className="my-4 border-t-1 border-gray-400" />
          </div>
        ))}
      </div>
      {/* {JSON.stringify([items[2].card.info.name])} */}
    </>
  );
};

export default ItemList;
