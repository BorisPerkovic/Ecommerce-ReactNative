import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {alertService} from '../../alertService';

export interface SingleProductDTO {
  id: number;
  products_id: number;
  products_title: string;
  products_price: string;
  products_category: string;
  en: string;
  de: string;
  it: string;
  es: string;
  products_image: string;
  products_rate: string;
}

export interface SingleProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  en: string;
  de: string;
  it: string;
  es: string;
  image: string;
  rate: number;
  cartQuantity: number;
}

interface SingleProductsState {
  product: SingleProduct;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: SingleProductsState = {
  product: {
    id: 0,
    title: '',
    price: 0,
    category: '',
    en: '',
    de: '',
    it: '',
    es: '',
    image: '',
    rate: 0,
    cartQuantity: 0,
  },
  loading: 'idle',
};

export const singleProduct = createAsyncThunk(
  'product/singleProduct',
  async (url: string) => {
    const promise = await axios.get<SingleProductDTO>(url);
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
        state.product = {
          id: +action.payload.data.products_id,
          title: action.payload.data.products_title,
          price: +action.payload.data.products_price,
          category: action.payload.data.products_category,
          en: action.payload.data.en,
          de: action.payload.data.de,
          it: action.payload.data.it,
          es: action.payload.data.es,
          image: action.payload.data.products_image,
          rate: +action.payload.data.products_rate,
          cartQuantity: 0,
        };
      })
      .addCase(singleProduct.rejected, state => {
        state.loading = 'failed';
        alertService.alert('warning', 'wentWrong', 'account');
      });
  },
});

export default singleProductSlice.reducer;
