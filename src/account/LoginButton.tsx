import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/core';
import {ECButton} from '../components/button/ECButton';
import {ecommerceButtonTheme} from '../theme/ecommerce/ecommerceButtonTheme';

const {loginButton} = ecommerceButtonTheme;

export const LoginButton: FunctionComponent<{}> = () => {
  const {navigate} = useNavigation();

  return (
    <ECButton
      variant={loginButton}
      mode="contained"
      onPress={() => {
        navigate('Welcome');
      }}>
      Sign In
    </ECButton>
  );
};
