import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    username: '',
    userType: '',
  },

  reducers: {
    setUser: (state, action) => state = action.payload,
  },

});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;