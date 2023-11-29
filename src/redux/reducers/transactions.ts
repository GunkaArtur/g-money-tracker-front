import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockTransactions } from "./mockData";

export interface Trans {
  id: string;
  from: string;
  to: string;
  value: number;
}

interface TransState {
  transactions: Trans[];
}

const initialState: TransState = {
  transactions: mockTransactions,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Trans>) => {
      state.transactions.push(action.payload);
    },
    removeTransaction: (state, action: PayloadAction<string>) => {
      state.transactions.filter((it) => it.id !== action.payload);
    },
    editTransaction: (state, action: PayloadAction<Trans>) => {
      state.transactions.map((it) => {
        if (it.id === action.payload.id) {
          return action.payload;
        }
        return it;
      });
    },
  },
});

export default transactionsSlice.reducer;
