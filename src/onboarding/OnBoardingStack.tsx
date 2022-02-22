import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {OnboardingPaymantScreen} from './onboarding-overview/OnboardingPaymantScreen';
import {OnboardingOverviewScreen} from './onboarding-overview/OnboardingOverviewScreen';
import {OnboardingShopScreen} from './onboarding-overview/OnboardingShopScreen';
//import {useFinishOnboarding} from './useFinishOnboarding';

const Stack = createNativeStackNavigator();

export const OnboardingStack = () => {
  //useFinishOnboarding();

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
