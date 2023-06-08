import { GetContacts, DeleteContacts, PostContacts } from '../operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const counterSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    filters: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [GetContacts.pending]: state => {
      state.contacts.isLoading = true;
    },
    [GetContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
    },
    [GetContacts.rejected]: (state, action) => {
      state.contacts.error = action.payload;
    },
    [DeleteContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
    [DeleteContacts.rejected]: (state, action) => {
      state.contacts.error = action.payload;
    },
    [PostContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items.push(action.payload);
    },
    [PostContacts.rejected]: (state, action) => {
      state.contacts.error = action.payload;
    },
  
  },
});

export const { add, remove, filters } = counterSlice.actions;

export default counterSlice.reducer;
