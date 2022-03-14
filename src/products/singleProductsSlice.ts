import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface SingleProductsState {
  product: {};
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  errorMessage?: string;
}

const initialState: SingleProductsState = {
  product: {},
  loading: 'idle',
  errorMessage: '',
};

export const singleProduct = createAsyncThunk(
  'product/singleProduct',
  async (url: string) => {
    const promise = await axios.get(url);
    return promise;
  },
);

export const singleProductSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(singleProduct.pending, state => {
        state.loading = 'pending';
      })
      .addCase(singleProduct.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.product = action.payload.data;
        state.errorMessage = '';
      })
      .addCase(singleProduct.rejected, (state, action) => {
        state.loading = 'failed';
        state.errorMessage = action.error.message;
      });
  },
});

export default singleProductSlice.reducer;
