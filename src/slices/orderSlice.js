import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: []
  },

  reducers: {
    addOrder: (state, action) => {
        state.orders.push(action.payload);
    },
  },

});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;