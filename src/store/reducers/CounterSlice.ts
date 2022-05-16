import { createSlice } from '@reduxjs/toolkit';
import { shopItem } from '../../model/shopItem';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: [] as shopItem[],
  },

  reducers: {
    add: (state: { count: shopItem[] }, action: { payload: shopItem }) => {
      state.count = [...state.count, action.payload];
    },

    increment: (state: { count: shopItem[] }, action: { payload: number }) => {
      // @ts-ignore
      state.count.find((el) => el.id === action.payload).count += 1;
    },

    decrement: (state: { count: shopItem[] }, action: { payload: number }) => {
      // @ts-ignore
      state.count.find((el) => el.id === action.payload).count -= 1;
    },
  },
});

export const {
  increment, decrement,
} = counterSlice.actions;

export default counterSlice.reducer;
