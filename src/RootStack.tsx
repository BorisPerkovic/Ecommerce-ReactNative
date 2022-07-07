import React from 'react';
import {Main} from './navigation/Main';
import {SingleProductScreen} from './products/single-product/SingleProductScreen';
import {WelcomeSignInScreen} from './account/welcome-signin/WelcomeSignInScreen';
import {SignInScreen} from './account/sign-in/SignInScreen';
import {OrderScreen} from './order/OrderScreen';
import {MyOrders} from './my-orders/MyOrders';
import {OrderSuccess} from './order/OrderSuccess';
import RegistrationScreen from './account/registration/RegistrationScreen';
import SearchScreen from './search/SearchScreen';
import {FiltersScreen} from './filters/FiltersScreen';
import {FiltersResultsScreen} from './filters/filter-results/FiltersResultsScreen';
import {EditProfileScreen} from './account/edit-profile/EditProfileScreen';
import {EditProfileChangeEmail} from './account/edit-profile/change-email/EditProfileChangeEmail';
import {ChangeEmailSuccess} from './account/edit-profile/change-email/ChangeEmailSuccess';
import {EditProfileChangePassword} from './account/edit-profile/change-password/EditProfileChangePassword';
import {ChangePasswordSuccess} from './account/edit-profile/change-password/ChangePasswordSucces';
import {EditProfileChangeTheme} from './account/edit-profile/change-theme/EditProfileChangeTheme';
import {FeedbackScreen} from './app-feedback/FeedbackScreen';
import {FeedbackSucces} from './app-feedback/FeedbackSucces';
import {EditProfileChangeLanguage} from './account/edit-profile/change-language/EditProfileCangeLanguage';
import {PartnersScreen} from './partners/PartnersScreen';
import {Terms} from './terms-and-conditions/TermsScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {RootState} from './store';
import {OnboardingOverviewScreen} from './onboarding/onboarding-overview/OnboardingOverviewScreen';
import {OnboardingReduxScreen} from './onboarding/OnboardinReduxScreen';
import {OnboardingHookFormScreen} from './onboarding/OnboardingHookFormScreen';
import {OnBoardingI18NextScreen} from './onboarding/OnBoardingI18NextScreen';

const Stack = createStackNavigator();

export const RootStack = () => {
  const onBoarding = useSelector(
    (state: RootState) => state.onboarding.isOnboardingScreen,
  );
  if (onBoarding) {
    return <OnboardingStack />;
  }
  return <AppStack />;
};

const OnboardingStack = () => {
  return (
    <Stack.Navigator
      mode="card"
      screenOptions={{
        headerShown: false,
        detachPreviousScreen: false,
        animationEnabled: false,
      }}>
      <Stack.Screen
        name="OnboardingOverview"
        component={OnboardingOverviewScreen}
      />
      <Stack.Screen name="OnboardingRedux" component={OnboardingReduxScreen} />
      <Stack.Screen
        name="OnboardingHookForm"
        component={OnboardingHookFormScreen}
      />
      <Stack.Screen
        name="Onboardingi18Next"
        component={OnBoardingI18NextScreen}
      />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator
      mode="card"
      screenOptions={{
        headerShown: false,
        detachPreviousScreen: false,
        animationEnabled: false,
      }}>
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="SingleProduct" component={SingleProductScreen} />
      <Stack.Screen name="Welcome" component={WelcomeSignInScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="MyOrders" component={MyOrders} />
      <Stack.Screen name="OrdersSucces" component={OrderSuccess} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Filters" component={FiltersScreen} />
      <Stack.Screen name="FiltersResults" component={FiltersResultsScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="ChangeEmail" component={EditProfileChangeEmail} />
      <Stack.Screen name="ChangeTheme" component={EditProfileChangeTheme} />
      <Stack.Screen
        name="ChangeLanguage"
        component={EditProfileChangeLanguage}
      />
      <Stack.Screen
        name="ChangePassword"
        component={EditProfileChangePassword}
      />
      <Stack.Screen name="ChangeEmailSuccess" component={ChangeEmailSuccess} />
      <Stack.Screen
        name="ChangePasswordSuccess"
        component={ChangePasswordSuccess}
      />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
      <Stack.Screen name="FeedbackSuccess" component={FeedbackSucces} />
      <Stack.Screen name="Partners" component={PartnersScreen} />
      <Stack.Screen name="Terms" component={Terms} />
    </Stack.Navigator>
  );
};
