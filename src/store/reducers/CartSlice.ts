import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    addInCart: (state, action) => {
      // @ts-ignore
      state.itemsInCart.push(action.payload);
    },
  },
});

export const { addInCart } = cartSlice.actions;
export default cartSlice.reducer;
