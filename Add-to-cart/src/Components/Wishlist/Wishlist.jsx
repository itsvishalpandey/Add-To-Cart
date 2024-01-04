import React from "react";
import WishlistCard from "./WishlistCard";
import { useSelector } from "react-redux";

function Wishlist() {
  const characters = useSelector((state) => state.product);

  return (
    <>
      <div className="p-4 ">
        <div>
          <h1 className="text-2xl text-center font-bold py-2">Cart</h1>
        </div>
        <div className="w-11/12 mx-auto flex flex-wrap gap-8 px-2 py-6">
          {characters.map((character, index) => (
            <WishlistCard key={index} character={character} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
