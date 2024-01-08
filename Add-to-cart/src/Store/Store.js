import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import CharacterListSlice from "./CharacterListSlice";

const store = configureStore({
  reducer: {
    product: ProductSlice,
    character: CharacterListSlice,
  },
});

export default store;
