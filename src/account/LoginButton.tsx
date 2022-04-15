import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/core';
import {ECButton} from '../components/ECButton';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';
import {ecommerceButtonTheme} from '../theme/ecommerce/ecommerceButtonTheme';

const {loginButtonTextColor} = ECOMMERCE_THEME.colors;

const {loginButton} = ecommerceButtonTheme;

export const LoginButton: FunctionComponent<{}> = () => {
  const {navigate} = useNavigation();

  return (
    <ECButton
      labelText="Sign In"
      disabled={false}
      buttonMode={loginButton}
      labelColor={loginButtonTextColor}
      onPress={() => {
        navigate('Welcome');
      }}>
      Sign In
    </ECButton>
  );
};
