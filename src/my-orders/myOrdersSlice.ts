import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {alertService} from '../alertService';
import config from '../../config';

interface OrderItems {
  id: number;
  price: number;
  items: string;
  orderNumber: number;
  created: string;
}

export interface InitialState {
  myOrders: OrderItems[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: InitialState = {
  myOrders: [],
  loading: 'idle',
};

export const myOrdersThunk = createAsyncThunk(
  'myOrders/myOrdersThunk',
  async (data: {id: number}) => {
    const response = await axios.post(config.MY_ORDERS, {
      users_id: data.id,
    });
    return response.data;
  },
);

export const myOrdersSlice = createSlice({
  name: 'myOrders',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(myOrdersThunk.pending, state => {
        state.loading = 'pending';
      })
      .addCase(myOrdersThunk.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.myOrders = action.payload;
      })
      .addCase(myOrdersThunk.rejected, state => {
        state.loading = 'failed';
        alertService.alert(
          'warning',
          'Something went wrong. Please, try again later!',
        );
      });
  },
});

export default myOrdersSlice.reducer;
