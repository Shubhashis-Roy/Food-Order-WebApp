import { useContext, useEffect, useState } from "react";
// import LOGO_URL from "../utills/img/icon.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";
import UserContext from "../utills/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  // Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-300 shadow-lg mb-5 ">
      <div className="logo-container">
        <Link to={"/"}>
          <img
            className=" w-[170px] "
            src="https://i.pinimg.com/originals/34/0c/6a/340c6add7519212185a08d4205eb1965.png"
          />
        </Link>
      </div>
      <div className="flex items-center ">
        <ul className="flex">
          <li className="px-2">online Status: {onlineStatus ? "🟢" : "🔴"} </li>
          <li className="px-2">
            <Link to={"/"}> Home </Link>
          </li>
          <li className="px-2">
            <Link to={"/about"}> About Us </Link>
          </li>
          <li className="px-2">
            <Link to={"/Contact"}> Contact Us </Link>
          </li>
          <li className="px-2">
            <Link to={"/grocery"}> Grocery </Link>
          </li>
          <li className="px-3 font-bold cursor-pointer">
            <Link to={"/cart"}>Cart ({cartItems.length})</Link>
          </li>
          <button
            className="pr-3"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-3 font-bold"> {data.loggInUser} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
