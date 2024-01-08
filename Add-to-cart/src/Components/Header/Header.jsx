import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const totalProduct = useSelector((state) => state.product.totalproducts);

  const authToken = localStorage.getItem("authToken");

  return (
    <>
      <header className="w-full shadow-lg bg-slate-400 sticky top-0 py-2 z-10">
        <div className="w-11/12 mx-auto flex justify-between items-center py-2">
          <div className="text-xl font-bold">
            <Link to="/home">Games</Link>
          </div>
          <div className="space-x-4">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `${
                  isActive ? "text-white" : "text-black"
                } px-4 py-2 mx-1 hover:bg-white hover:rounded-3xl hover:text-black`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/series"
              className={({ isActive }) =>
                `${
                  isActive ? "text-white" : "text-black"
                } px-4 py-2 mx-1 hover:bg-white hover:rounded-3xl hover:text-black`
              }
            >
              Series
            </NavLink>
          </div>
          <div className="flex">
            <div>
              {!authToken && (
                <Link
                  to="/signin"
                  className="px-4 py-2 hover:border hover:bg-white hover:rounded-3xl hover:text-black"
                >
                  Sign in
                </Link>
              )}
              {authToken && (
                <Link
                  to="/profile"
                  className="px-4 py-2 hover:border hover:bg-white hover:rounded-3xl hover:text-black"
                >
                  Profile
                </Link>
              )}
            </div>
            <Link to="/wishlist" className="ml-4 flex">
              <FaShoppingCart className="text-2xl" />
              {totalProduct > 0 && <sup>{totalProduct}</sup>}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
