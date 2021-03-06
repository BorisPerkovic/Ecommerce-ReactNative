import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {alertService} from '../alertService';
import {SingleProduct} from '../products/single-product/singleProductsSlice';

export interface InitialState {
  favoritesItems: SingleProduct[];
}

const initialState: InitialState = {
  favoritesItems: [],
};

export const favortesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, {payload}) {
      state.favoritesItems.push(payload);
      alertService.alert('success', 'addedToFavorites', 'products');
      const setStorage = async () => {
        await AsyncStorage.setItem(
          'favoritesItems',
          JSON.stringify(state.favoritesItems),
        );
      };
      setStorage();
    },
    removeFromFavorites(state, {payload}) {
      const tempItems = state.favoritesItems.filter(
        item => item.id !== payload,
      );
      state.favoritesItems = tempItems;
      alertService.alert('danger', 'removeFromFavorites', 'products');

      const setStorage = async () => {
        await AsyncStorage.setItem(
          'favoritesItems',
          JSON.stringify(state.favoritesItems),
        );
      };
      setStorage();
    },
    removeAllFromFavorites(state) {
      state.favoritesItems = [];
      const setStorage = async () => {
        await AsyncStorage.removeItem('favoritesItems');
      };
      setStorage();
    },
  },
});

export const {addToFavorites, removeFromFavorites, removeAllFromFavorites} =
  favortesSlice.actions;

export default favortesSlice.reducer;
