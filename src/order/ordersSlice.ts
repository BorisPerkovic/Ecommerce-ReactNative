import {createSlice} from '@reduxjs/toolkit';

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
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addUserToOrder(state, {payload}) {
      state.user = payload;
    },
    addUserLocationToOrder(state, {payload}) {
      state.location = payload;
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
});

export const {addUserToOrder, addUserLocationToOrder, clearUserData} =
  orderSlice.actions;

export default orderSlice.reducer;
