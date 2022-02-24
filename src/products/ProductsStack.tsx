import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ProductsScreen} from './ProductsScreen';
//import {useFinishOnboarding} from './useFinishOnboarding';

const Stack = createNativeStackNavigator();

export const ProductsStack = () => {
  //useFinishOnboarding();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnboardingOverview" component={ProductsScreen} />
    </Stack.Navigator>
  );
};
