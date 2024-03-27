import SeachIcon from "../../assets/icons/searchIcon.svg";
import avatar from "../../assets/icons/avatar.svg";
import Searchbar from "../Searchbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const [click, setclick] = useState(false);

  return (
    <header className="h-[70px] bg-white border-b-black w-full">
      <div className="flex h-[70px] items-center md:ps-11  md:pe-7 justify-between">
        <details className="md:hidden w-[40px] rounded-xl dropdown">
          <summary
            className="m-1 btn"
            onClick={() => {
              setclick(!click);
            }}
          >
            {!click ? <span>&#9776;</span> : <span>&times;</span>}
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li className="hover:shadow hover:bg-primary hover:text-white rounded-xl">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="hover:shadow hover:bg-primary hover:text-white rounded-xl">
              <Link to="/products">Products</Link>
            </li>
            <li className="hover:shadow hover:bg-primary hover:text-white rounded-xl">
              <Link to="/orders">Orders</Link>
            </li>
            <li className="hover:shadow hover:bg-primary hover:text-white rounded-xl">
              <Link to="/users">Users</Link>
            </li>
            <li className="hover:shadow hover:bg-primary hover:text-white rounded-xl">
              <Link to="/coupons">Coupons</Link>
            </li>
          </ul>
        </details>

        {/* input with search icon */}
        <Searchbar placeholder={"Search"} />

        {/* user Name and avatar */}
        <div className="flex items-center gap-3">
          <img
            className="h-[44px] w-[44px] rounded-full bg-gray-100"
            src={avatar}
            alt=""
          />

          <div className="flex flex-col justify-center">
            <h1 className="font-bold font-lato text-[14px] ">
              {user && user.full_name}
            </h1>
            <p className="text-[12px] font-lato font-semibold text-brown ">
              {user.role}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
