import { createSlice } from "@reduxjs/toolkit";

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    value: 0,
  },
  reducers: {
    addTransaction: (state) => {
      state.value += 1;
    },
    removeTransaction: (state) => {
      state.value -= 1;
    },
    editTransaction: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTransaction, removeTransaction, editTransaction } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
