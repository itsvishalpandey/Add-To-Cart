import React from "react";
import { useDispatch } from "react-redux";
import {
  addProduct,
  removeProduct,
  deleteProduct,
  resetProduct,
} from "../../Store/ProductSlice";

function CartCard({ character }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(addProduct(character));
  };
  const handleDecrement = () => {
    dispatch(removeProduct(character));
  };
  const handleReset = () => {
    dispatch(resetProduct(character));
  };
  const handleDelete = () => {
    dispatch(deleteProduct(character));
  };

  return (
    <>
      <div className="w-5/12 mx-auto shadow-2xl flex">
        <div className="w-1/2">
          <img
            src={character.image}
            alt={character.image}
            className="h-full w-full object-cover"
          />
        </div>

        <div className=" w-1/2 py-4 px-8">
          <div className="my-2">
            <h1 className="text-2xl my-2">Character: {character.character}</h1>
            <p className="text-md text-gray-500 py-2">
              Series: {character.gameSeries}
            </p>
            <p className="text-md text-gray-500 py-2">Type: {character.type}</p>
          </div>

          <div className="my-2">
            Quantity:
            <button
              className=" px-2 border-2 border-black mx-2"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="mx-4">{character.quantity}</span>
            <button
              className="px-2 border-2 border-black mx-2"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>

          <div className="text-center mt-10">
            <button
              className="w-full bg-blue-400 py-2 rounded"
              onClick={handleReset}
            >
              Reset Cart
            </button>
          </div>

          <div className="text-center mt-6">
            <button
              className="w-full bg-red-400 py-2 rounded"
              onClick={handleDelete}
            >
              Delete Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCard;
