import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingStack} from './onboarding/OnBoardingStack';
import {ProductsStack} from './products/ProductsStack';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
import {setIsOnboardingSeen} from './onboarding/onboardingSlice';
import {Loading} from './components/Loading';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  const isAppLaunched = useSelector(
    (state: RootStateOrAny) => state.onboarding.isOnboardingScreen,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem('appIsLaunched')
      .then(value => {
        if (value !== null) {
          dispatch(setIsOnboardingSeen(true));
        } else {
          dispatch(setIsOnboardingSeen(false));
        }
      })
      .finally(() => SplashScreen.hide());
  }, [dispatch]);

  if (isAppLaunched === null) {
    return <Loading />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      {isAppLaunched !== null && !isAppLaunched ? (
        <Stack.Screen name="Onboarding" component={OnboardingStack} />
      ) : (
        <Stack.Screen name="Products" component={ProductsStack} />
      )}
    </Stack.Navigator>
  );
};
