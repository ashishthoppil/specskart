import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'productList',
  initialState: {
    products: []
  },

  reducers: {
    setProduct: (state, action) => {
        state.products.push(action.payload);
    },
  },

});

export const { setProduct } = productsSlice.actions;
export default productsSlice.reducer;