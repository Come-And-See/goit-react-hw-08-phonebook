import { FetchUser, LogIn, LogOut, Registration } from '../operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [Registration.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [Registration.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [LogIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [LogIn.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [LogOut.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [LogOut.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [FetchUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
