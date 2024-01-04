import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Store/ProductSlice";

function CartCard({ character }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(addProduct(character));
  };

  return (
    <>
      <div className=" mx-auto rounded shadow-2xl">
        <div className="w-60 h-52">
          <img
            src={character.image}
            alt={character.image}
            className="h-full w-full object-cover rounded-t "
          />
        </div>

        <div className="p-4">
          <h3>Character: {character.character}</h3>
          <p className="text-sm text-gray-500">
            Series: {character.gameSeries}
          </p>
          <p className="text-sm text-gray-500">Type: {character.type}</p>
          <div className="text-center mt-4">
            <button
              className="w-full bg-blue-400 py-2 rounded"
              onClick={handleIncrement}
            >
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCard;
