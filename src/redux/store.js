import { authSlice } from './Slice/authSlice';
import { counterSlice } from './Slice/contactSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contact: counterSlice.reducer,
  user: authSlice.reducer,
});

export const store = configureStore({
  // reducer: {
    reducer: rootReducer,
  // },
});
