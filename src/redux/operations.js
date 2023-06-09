import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const GetContacts = createAsyncThunk(
  'contact/GetContacts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get('/contacts');

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
      const response = await axios.post(`/contacts`, contact);

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
      const response = await axios.delete(`/contacts/${id}`);

      if (response.status !== 200) {
        throw new Error('Server Error');
      }
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const Registration = createAsyncThunk(
  'auth/register',
  async function (dataUser, { rejectWithValue }) {
    try {
      const response = await axios.post('/users/signup', dataUser);

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
      const response = await axios.post('/users/login', dataUser);

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
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const FetchUser = createAsyncThunk(
  'auth/FetchUser',
  async function (_, { getState, rejectWithValue }) {
    const state = getState();
    console.log('state:', state);

    const persistedToken = state.user.token;
    console.log('persistedToken:', persistedToken);

    if (persistedToken === null) {
      // throw new Error('Server Error');
      return;
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      // return rejectWithValue(error.message);
    }
  }
);
