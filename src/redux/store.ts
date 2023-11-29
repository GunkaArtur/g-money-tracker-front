import { combineReducers, configureStore } from "@reduxjs/toolkit";
import transactionsSlice from "./reducers/transactions";
import categoriesSlice from "./reducers/categories";

const rootReducer = combineReducers({
  transactions: transactionsSlice,
  categories: categoriesSlice,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
