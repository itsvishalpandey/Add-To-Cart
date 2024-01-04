import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    totalproducts: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const { head, image, character, type } = action.payload;
      const existingItem = state.items.find((item) => item.head === head);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ head, image, character, type, quantity: 1 });
      }

      state.totalproducts = state.items.length;
    },
    removeProduct: (state, action) => {
      const { head } = action.payload;
      const existingItem = state.items.find((item) => item.head === head);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items.splice(existingItem, 1);
      }
    },

    resetProduct: (state, action) => {
      const { head } = action.payload;
      const existingItem = state.items.find((item) => item.head === head);

      if (existingItem) {
        existingItem.quantity = 1;
      }
    },

    deleteProduct: (state, action) => {
      const { head } = action.payload;
      const existingItem = state.items.findIndex((item) => item.head === head);

      if (existingItem !== -1) {
        state.items.splice(existingItem, 1);
      }
    },
  },
});

export const { addProduct, removeProduct, deleteProduct, resetProduct } =
  ProductSlice.actions;

export default ProductSlice.reducer;
