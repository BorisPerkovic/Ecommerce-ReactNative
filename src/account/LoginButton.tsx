import React, {FunctionComponent} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/core';
import {ECButton} from '../components/button/ECButton';
import {ecommerceButtonTheme} from '../theme/ecommerce/ecommerceButtonTheme';

const {loginButton} = ecommerceButtonTheme;

export const LoginButton: FunctionComponent<{}> = () => {
  const navigation = useNavigation();

  return (
    <ECButton
      variant={loginButton}
      mode="contained"
      onPress={() => {
        navigation.navigate('Welcome');
        navigation.dispatch(DrawerActions.closeDrawer);
      }}>
      Sign In
    </ECButton>
  );
};
