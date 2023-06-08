import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
  async function (contact, { rejectWithValue }) {
    try {
      const response = await axios.post(
        `https://6480c2b3f061e6ec4d49d6bb.mockapi.io/contacts`,
        contact
      );

      if (response.status !== 201) {
        throw new Error('Server Error');
      }

      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const DeleteContacts = createAsyncThunk(
  'contact/DeleteContacts',
  async function (id, { rejectWithValue }) {
    try {
      const response = await axios.delete(
        `https://6480c2b3f061e6ec4d49d6bb.mockapi.io/contacts/${id}`
      );

      if (response.status !== 200) {
        throw new Error('Server Error');
      }
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const Registration = createAsyncThunk(
  'auth/register',
  async function (dataUser, { rejectWithValue }) {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        dataUser
      );

      if (response.status !== 201) {
        throw new Error('Server Error');
      }

      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const LogIn = createAsyncThunk(
  'auth/login',
  async function (dataUser, { rejectWithValue }) {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/login',
        dataUser
      );

      if (response.status !== 200) {
        throw new Error('Server Error');
      }

      const data = await response.data;
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const LogOut = createAsyncThunk(
  'auth/logOut',
  async function (_, { rejectWithValue }) {
    try {
      await axios.post('https://connections-api.herokuapp.com/users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
