import React, { useEffect, useState } from "react";
import CartPage from "./CartCard";
import { useGames } from "./GameApi";

function Cart() {
  const games = useGames();

  const [search, setSearch] = useState("");

  console.log(search);

  return (
    <>
      <div className="p-4 ">
        <form className="w-2/6 mx-auto  border border-black rounded flex my-4">
          <input
            className="w-full outline-none py-1 px-2 rounded-l"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search here"
          />
          <button className="px-4 py-1 bg-blue-300 rounded-r">Search</button>
        </form>

        <div className="w-11/12 mx-auto flex flex-wrap gap-6 px-2 py-6">
          {games
            .filter((character) =>
              search.toLowerCase() === ""
                ? character
                : character.gameSeries.toLowerCase().includes(search)
            )
            .map((character, index) => (
              <CartPage key={index} character={character} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Cart;
