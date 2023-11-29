import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Trans } from "~/redux/reducers/transactions";
import { mockCategories } from "./mockData";

interface Cat {
  id: string;
  name: string;
  value: number;
}

interface CatState {
  categories: Cat[];
  count: number;
}

const initialState: CatState = {
  categories: mockCategories,
  count: 0,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    removeCategory: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
    editCategory: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
  extraReducers: {
    ["transactions/addTransaction"]: (
      state: CatState,
      action: PayloadAction<Trans>,
    ) => {
      state.categories = state.categories.map((cat) => {
        if (cat.name === action.payload.to) {
          return {
            ...cat,
            value: cat.value + action.payload.value,
          };
        }
        return cat;
      });
    },
  },
});

export default categoriesSlice.reducer;
