import { configureStore } from "@reduxjs/toolkit";
import { transactionsSlice } from "./transactions";
import { categoriesSlice } from "./categories";

export default configureStore({
  reducer: {
    transactions: transactionsSlice,
    categories: categoriesSlice,
  },
});
