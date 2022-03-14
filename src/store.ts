import {configureStore} from '@reduxjs/toolkit';
import onboardingReducer from './onboarding/onboardingSlice';
import productsReducer from './products/productsSlice';
import singleProductReducer from './products/singleProductsSlice';
import {productsAPI} from './products/fetchProducts';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
    onboarding: onboardingReducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(productsAPI.middleware),
});
