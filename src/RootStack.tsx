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
import {WelcomeSignInScreen} from './account/welcome-signin/WelcomeSignInScreen';
import {SignInScreen} from './account/sign-in/SignInScreen';
import {OrderScreen} from './order/OrderScreen';
import {MyOrders} from './my-orders/MyOrders';
import {OrderSuccess} from './order/OrderSuccess';
import RegistrationScreen from './account/registration/RegistrationScreen';
import SearchScreen from './search/SearchScreen';

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
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="Order" component={OrderScreen} />
          <Stack.Screen name="MyOrders" component={MyOrders} />
          <Stack.Screen name="OrdersSucces" component={OrderSuccess} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
