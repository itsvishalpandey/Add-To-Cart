import React, { useEffect } from "react";
import CartPage from "./CartCard";
import { useGames } from "./GameApi";

function Cart() {
  const games = useGames();
  console.log(games);

  return (
    <>
      <div className="p-4 ">
        <div>
          <h1 className="text-2xl text-center font-bold py-2">
            All the characters
          </h1>
        </div>
        <div className="w-11/12 mx-auto flex flex-wrap gap-6 px-2 py-6">
          {games.map((character, index) => (
            <CartPage key={index} character={character} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Cart;
