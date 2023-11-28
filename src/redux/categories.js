import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    value: 0,
  },
  reducers: {
    addCategory: (state) => {
      state.value += 1;
    },
    removeCategory: (state) => {
      state.value -= 1;
    },
    editCategory: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCategory, removeCategory, editCategory } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
