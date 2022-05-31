import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {alertService} from '../alertService';
import config from '../../config';

interface FilteredResultItems {
  products_id: number;
  products_image: string;
  products_title: string;
  products_price: number;
}

export interface InitialState {
  startPrice: number;
  endPrice: number;
  brand: string[];
  ram: string[];
  internal: string[];
  system: string[];
  filteredItems: FilteredResultItems[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: InitialState = {
  startPrice: 0,
  endPrice: 2500,
  brand: [],
  ram: [],
  internal: [],
  system: [],
  filteredItems: [],
  loading: 'idle',
};

export const filterProductsThunk = createAsyncThunk(
  'filter/filterProductsThunk',
  async (items: {
    brand: string[];
    ram: string[];
    internal: string[];
    system: string[];
  }) => {
    const response = await axios.post(config.FILTERS_PRODUCTS, items);
    return response.data;
  },
);

export const filterProductsSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addPriceToFilter(state, {payload}) {
      state.startPrice = payload.startPrice;
      state.endPrice = payload.endPrice;
    },
    addBrandToFilter(state, {payload}) {
      if (state.brand.includes(payload)) {
        const removeItem = state.brand.filter(item => item !== payload);
        state.brand = removeItem;
      } else {
        state.brand.push(payload);
      }
    },
    addRamFilter(state, {payload}) {
      if (state.ram.includes(payload)) {
        const removeItem = state.ram.filter(item => item !== payload);
        state.ram = removeItem;
      } else {
        state.ram.push(payload);
      }
    },
    addInternalToFilter(state, {payload}) {
      if (state.internal.includes(payload)) {
        const removeItem = state.internal.filter(item => item !== payload);
        state.internal = removeItem;
      } else {
        state.internal.push(payload);
      }
    },
    addSystemFilter(state, {payload}) {
      if (state.system.includes(payload)) {
        const removeItem = state.system.filter(item => item !== payload);
        state.system = removeItem;
      } else {
        state.system.push(payload);
      }
    },
    resetAllFilters(state) {
      state.startPrice = 0;
      state.endPrice = 2500;
      state.brand = [];
      state.ram = [];
      state.internal = [];
      state.system = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(filterProductsThunk.pending, state => {
        state.loading = 'pending';
      })
      .addCase(filterProductsThunk.fulfilled, (state, action) => {
        state.filteredItems = action.payload;
        state.loading = 'succeeded';
      })
      .addCase(filterProductsThunk.rejected, state => {
        state.loading = 'failed';
        alertService.alert(
          'warning',
          'Something went wrong. Please, try again later!',
        );
      });
  },
});

export const {
  addPriceToFilter,
  addBrandToFilter,
  addInternalToFilter,
  addRamFilter,
  addSystemFilter,
  resetAllFilters,
} = filterProductsSlice.actions;

export default filterProductsSlice.reducer;
