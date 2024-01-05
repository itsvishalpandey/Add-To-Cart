import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const totalProduct = useSelector((state) => state.product.totalproducts);

  return (
    <>
      <header className="w-full shadow-lg bg-slate-400 sticky top-0 z-10 py-2">
        <div className="w-11/12 mx-auto flex justify-between py-2">
          <div className="text-xl font-bold">
            <Link to="">Games</Link>
          </div>
          <div>
            <NavLink
              to=""
              className={({ isActive }) =>
                `${
                  isActive ? "text-white" : "text-black"
                } px-4 py-2 hover:border hover:bg-white hover:rounded-3xl hover:text-black`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/series"
              className={({ isActive }) =>
                `${
                  isActive ? "text-white" : "text-black"
                } px-4 py-2 hover:border hover:bg-white hover:rounded-3xl hover:text-black`
              }
            >
              Series
            </NavLink>
          </div>
          <div>
            <Link
              to="/signin"
              className="px-4 py-2 hover:border hover:bg-white hover:rounded-3xl hover:text-black"
            >
              Sign in
            </Link>
            <Link
              to="/profile"
              className="px-4 py-2 hover:border hover:bg-white hover:rounded-3xl hover:text-black"
            >
              Profile
            </Link>
            <Link to="/wishlist" className="px-2">
              WishList{" "}
              <sup className="bg-white text-sm rounded-full">
                {totalProduct > 0 && totalProduct}
              </sup>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
