import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {alertService} from '../alertService';
import config from '../../config';

interface SearchItems {
  products_id: number;
  products_price: number;
  products_title: string;
  products_image: string;
}

export interface InitialState {
  searchProducts: SearchItems[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: InitialState = {
  searchProducts: [],
  loading: 'idle',
};

export const searchProductsThunk = createAsyncThunk(
  'search/searchProductsThunk',
  async (param: string) => {
    const response = await axios.get(`${config.SEARCH}${param}`);
    return response.data;
  },
);

export const searchProductsSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(searchProductsThunk.pending, state => {
        state.loading = 'pending';
      })
      .addCase(searchProductsThunk.fulfilled, (state, action) => {
        state.searchProducts = action.payload;
        state.loading = 'succeeded';
      })
      .addCase(searchProductsThunk.rejected, state => {
        state.loading = 'failed';
        alertService.alert(
          'warning',
          'Something went wrong. Please, try again later!',
        );
      });
  },
});

export default searchProductsSlice.reducer;
