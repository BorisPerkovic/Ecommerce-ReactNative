import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {alertService} from '../alertService';
import config from '../../config';

export interface InitialState {
  user: {
    name: string;
    lastName: string;
    email: string;
  };
  location: {
    city: string;
    country: string;
    zipCode: string;
    address: string;
  };
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: InitialState = {
  user: {
    name: '',
    lastName: '',
    email: '',
  },
  location: {
    city: '',
    country: '',
    zipCode: '',
    address: '',
  },
  loading: 'idle',
};

export const createOrderThunk = createAsyncThunk(
  'order/createOrderThunk',
  async (orderItems: {
    users_id: number;
    country: string;
    city: string;
    address: string;
    zip: string;
    items: {};
    price: number;
  }) => {
    const response = await axios.post(config.ORDER, {
      users_id: orderItems.users_id,
      country: orderItems.country,
      city: orderItems.city,
      address: orderItems.address,
      zip: orderItems.zip,
      items: orderItems.items,
      price: orderItems.price,
    });
    return response.data;
  },
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addUserToOrder(state, {payload}) {
      state.user = payload;
    },
    addUserLocationToOrder(state, {payload}) {
      state.location = payload;
      state.loading = 'idle';
    },
    clearUserData(state) {
      state.location = {
        city: '',
        country: '',
        zipCode: '',
        address: '',
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createOrderThunk.pending, state => {
        state.loading = 'pending';
      })
      .addCase(createOrderThunk.fulfilled, state => {
        state.loading = 'succeeded';
      })
      .addCase(createOrderThunk.rejected, state => {
        state.loading = 'failed';
        alertService.alert(
          'warning',
          'Something went wrong. Please, try again later!',
        );
      });
  },
});

export const {addUserToOrder, addUserLocationToOrder, clearUserData} =
  orderSlice.actions;

export default orderSlice.reducer;
