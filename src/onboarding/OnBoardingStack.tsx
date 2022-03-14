import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {OnboardingPaymantScreen} from './onboarding-overview/OnboardingPaymantScreen';
import {OnboardingOverviewScreen} from './onboarding-overview/OnboardingOverviewScreen';
import {OnboardingShopScreen} from './onboarding-overview/OnboardingShopScreen';

const Stack = createStackNavigator();

export const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="OnboardingOverview"
        component={OnboardingOverviewScreen}
      />
      <Stack.Screen name="OnboardingShop" component={OnboardingShopScreen} />
      <Stack.Screen
        name="OnboardingPaymant"
        component={OnboardingPaymantScreen}
      />
    </Stack.Navigator>
  );
};
