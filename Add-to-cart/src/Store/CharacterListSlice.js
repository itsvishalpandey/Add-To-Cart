import { createSlice } from "@reduxjs/toolkit";

const CharacterListSlice = createSlice({
  name: "character",
  initialState: {
    totalCharacter: [],
    series: [],
  },
  reducers: {
    allCharacter: (state, action) => {
      state.totalCharacter = action.payload;
    },
    categoryWiseCharacter: (state, action) => {
      state.series = action.payload;
    },
  },
});

export const { allCharacter, categoryWiseCharacter } =
  CharacterListSlice.actions;

export default CharacterListSlice.reducer;
