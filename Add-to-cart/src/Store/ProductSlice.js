import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const { head, image, character, type } = action.payload;
      const existingItem = state.find((item) => item.head === head);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ head, image, character, type, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      const { head } = action.payload;
      const existingItem = state.find((item) => item.head === head);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.splice(existingItem, 1);
      }
    },

    resetProduct: (state, action) => {
      const { head } = action.payload;
      const existingItem = state.find((item) => item.head === head);

      if (existingItem) {
        existingItem.quantity = 0;
      }
    },

    deleteProduct: (state, action) => {
      const { head } = action.payload;
      const existingItem = state.findIndex((item) => item.head === head);

      if (existingItem !== -1) {
        state.splice(existingItem, 1);
      }
    },
  },
});

export const {
  addProduct,
  removeProduct,
  deleteProduct,
  resetProduct,

} = ProductSlice.actions;

export default ProductSlice.reducer;
