import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { add, remove } from "./contactSlice";


export const GetContacts = createAsyncThunk(
  'contact/GetContacts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get(
        'https://6480c2b3f061e6ec4d49d6bb.mockapi.io/contacts'
      );

      if (response.status !== 200) {
        throw new Error('Server Error');
      }

      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const PostContacts = createAsyncThunk(
  'contact/PostContacts',
  async function (contact, { rejectWithValue, dispatch }) {
    try {
      const response = await axios.post(
        `https://6480c2b3f061e6ec4d49d6bb.mockapi.io/contacts`,
        {
          name: contact.name,
          phone: contact.phone,
        }
      );

      if (response.status !== 200) {
        throw new Error('Server Error');
      }

      const data = await response.data;
      dispatch(add(data));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const DeleteContacts = createAsyncThunk(
  'contact/DeleteContacts',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await axios.delete(
        `https://6480c2b3f061e6ec4d49d6bb.mockapi.io/contacts/${id}`
      );

      if (response.status !== 200) {
        throw new Error('Server Error');
      }

      dispatch(remove(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);