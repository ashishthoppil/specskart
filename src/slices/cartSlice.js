import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: []
  },

  reducers: {
    addToCart: (state, action) => {
        state.products.push(action.payload);
    },
    removeFromCart: (state, action) => {
        const updatedState = state.products.filter((product) => product.name !== action.payload);
        state.products = [...updatedState];
    }
  },

});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;