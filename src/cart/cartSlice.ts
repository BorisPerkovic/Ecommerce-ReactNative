import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {alertService} from '../alertService';
import {SingleProductDTO} from '../products/single-product/singleProductsSlice';

export interface InitialState {
  cartItems: SingleProductDTO[];
  cartTotalQuantity: number;
  cartTotalAmmount: number;
}

const initialState: InitialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, {payload}) {
      const itemIndex = state.cartItems.findIndex(
        item => item.id === payload.id,
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        alertService.alert(
          'info',
          `${payload.title}\nincrease product quantity`,
        );
      } else {
        const tempProduct = {...payload, cartQuantity: 1};
        state.cartItems.push(tempProduct);
        alertService.alert('success', `${payload.title}\nadded to cart`);
      }

      const setStorage = async () => {
        await AsyncStorage.setItem(
          'cartItems',
          JSON.stringify(state.cartItems),
        );
      };
      setStorage();
    },
    removeFromCart(state, {payload}) {
      const itemIndex = state.cartItems.findIndex(item => item.id === payload);
      alertService.alert(
        'danger',
        `${state.cartItems[itemIndex].title}\nproduct removed from cart`,
      );
      const nextCartItems = state.cartItems.filter(item => item.id !== payload);
      state.cartItems = nextCartItems;

      const setStorage = async () => {
        await AsyncStorage.setItem(
          'cartItems',
          JSON.stringify(state.cartItems),
        );
      };
      setStorage();
    },
    decreaseCart(state, {payload}) {
      const itemIndex = state.cartItems.findIndex(item => item.id === payload);
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else {
        const nextCartItems = state.cartItems.filter(
          item => item.id !== payload,
        );
        alertService.alert(
          'danger',
          `${state.cartItems[itemIndex].title}\nproduct removed from cart`,
        );
        state.cartItems = nextCartItems;
      }

      const setStorage = async () => {
        await AsyncStorage.setItem(
          'cartItems',
          JSON.stringify(state.cartItems),
        );
      };
      setStorage();
    },
    increaseCart(state, {payload}) {
      const itemIndex = state.cartItems.findIndex(item => item.id === payload);
      state.cartItems[itemIndex].cartQuantity += 1;

      const setStorage = async () => {
        await AsyncStorage.setItem(
          'cartItems',
          JSON.stringify(state.cartItems),
        );
      };
      setStorage();
    },
    getTotals(state) {
      let {total, quantity} = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const {price, cartQuantity} = cartItem;
          const itemTotal = parseFloat(price) * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        },
      );

      state.cartTotalAmmount = total;
      state.cartTotalQuantity = quantity;
    },
    clearCart(state) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      state.cartTotalAmmount = 0;
      const setStorage = async () => {
        await AsyncStorage.setItem(
          'cartItems',
          JSON.stringify(state.cartItems),
        );
      };
      setStorage();
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  increaseCart,
  getTotals,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
