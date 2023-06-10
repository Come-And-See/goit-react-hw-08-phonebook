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
    const persistedToken = state.user.token;

    if (persistedToken === null) {
      // throw new Error('Server Error');
      return rejectWithValue();
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
