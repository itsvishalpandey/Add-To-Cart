import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { totalProduct } from "../../Store/ProductSlice";

function Header() {
  return (
    <>
      <header className="w-full bg-blue-200 sticky top-0">
        <div className="w-11/12 mx-auto flex justify-between py-2">
          <div className="text-xl font-bold">
            <Link to="">Games</Link>
          </div>
          <div>
            <NavLink
              to=""
              className={({ isActive }) =>
                `${isActive ? "text-green-600" : "text-black"} px-4`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/series"
              className={({ isActive }) =>
                `${isActive ? "text-green-600" : "text-black"} px-4`
              }
            >
              Series
            </NavLink>
          </div>
          <div>
            <Link to="/wishlist">WishList</Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
