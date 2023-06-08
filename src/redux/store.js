import { counterSlice } from './contact/contactSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contact: counterSlice.reducer,
  },
});
