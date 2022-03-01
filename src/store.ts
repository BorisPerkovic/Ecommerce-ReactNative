import {configureStore} from '@reduxjs/toolkit';
import onboardingReducer from './onboarding/onboardingSlice';
import {productsAPI} from './products/fetchProducts';

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(productsAPI.middleware),
});
