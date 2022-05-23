import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {alertService} from '../alertService';

interface ProductsState {
  products: [];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: ProductsState = {
  products: [],
  loading: 'idle',
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (url: string) => {
    const promise = await axios.get(url);

    return promise;
  },
);

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.loading = 'pending';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload.data;
        state.loading = 'succeeded';
      })
      .addCase(getProducts.rejected, state => {
        state.loading = 'failed';
        alertService.alert(
          'warning',
          'Something went wrong. Please, try again later!',
        );
      });
  },
});

export default productsSlice.reducer;
