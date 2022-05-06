import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

export interface InitialState {
  myOrders: [];
}

const initialState: InitialState = {
  myOrders: [],
};

export const myOrdersSlice = createSlice({
  name: 'myOrders',
  initialState,
  reducers: {
    addToMyOrders(state, {payload}) {
      const finalOrder = {
        user: payload.user,
        date: payload.date,
        items: payload.orderItems,
        totalPrice: payload.totalPrice,
      };
      state.myOrders.push(finalOrder);
      const setStorage = async () => {
        await AsyncStorage.setItem('orders', JSON.stringify(state.myOrders));
      };
      setStorage();
    },
  },
});

export const {addToMyOrders} = myOrdersSlice.actions;

export default myOrdersSlice.reducer;
