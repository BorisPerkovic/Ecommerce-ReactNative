import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {OnboardingStack} from './onboarding/OnBoardingStack';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import {setIsOnboardingSeen} from './onboarding/onboardingSlice';
import {Loading} from './components/Loading';
import {Main} from './navigation/Main';
import {SingleProductScreen} from './products/single-product/SingleProductScreen';
import {WelcomeSignInScreen} from './account/registration/WelcomeSignInScreen';

const Stack = createStackNavigator();

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
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAppLaunched !== null && !isAppLaunched ? (
        <Stack.Screen name="Onboarding" component={OnboardingStack} />
      ) : (
        <>
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="SingleProduct" component={SingleProductScreen} />
          <Stack.Screen name="Welcome" component={WelcomeSignInScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
