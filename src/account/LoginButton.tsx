import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/core';
import {ECButton} from '../components/ECButton';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

const {loginButtonBackgroundColor, loginButtonTextColor} =
  ECOMMERCE_THEME.colors;

export const LoginButton: FunctionComponent<{}> = () => {
  const {navigate} = useNavigation();

  return (
    <ECButton
      buttonMode="contained"
      contentColor={loginButtonBackgroundColor}
      labelColor={loginButtonTextColor}
      onPress={() => {
        navigate('WelcomeSignInScreen');
      }}>
      Sign In
    </ECButton>
  );
};
