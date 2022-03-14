import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ProductsScreen} from './ProductsScreen';
//import {useFinishOnboarding} from './useFinishOnboarding';

export type ProductsStackParams = {
  OnboardingOverview: undefined;
  SingleProduct: {productId: number};
};

const Stack = createStackNavigator();

export const ProductsStack = () => {
  //useFinishOnboarding();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Products" component={ProductsScreen} />
    </Stack.Navigator>
  );
};
