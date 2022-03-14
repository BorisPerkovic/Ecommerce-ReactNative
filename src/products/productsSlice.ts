import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface ProductsState {
  products: [];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  errorMessage?: string;
}

const initialState: ProductsState = {
  products: [],
  loading: 'idle',
  errorMessage: '',
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
        state.loading = 'succeeded';
        state.products = action.payload.data;
        state.errorMessage = '';
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = 'failed';
        state.errorMessage = action.error.message;
      });
  },
});

export default productsSlice.reducer;
