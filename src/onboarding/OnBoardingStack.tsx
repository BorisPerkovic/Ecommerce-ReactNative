import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AppTrackingPermissionScreen} from './AppTrackingPermissionScreen';
import {OnboardingOverviewScreen} from './onboarding-overview/OnboardingOverviewScreen';
import {OnboardingFeaturesScreen} from './onboarding-overview/OnboardingFeaturesScreen';
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
      <Stack.Screen
        name="OnboardingFeatures"
        component={OnboardingFeaturesScreen}
      />
      <Stack.Screen
        name="OnboardingAppTrackingPermission"
        component={AppTrackingPermissionScreen}
      />
    </Stack.Navigator>
  );
};
