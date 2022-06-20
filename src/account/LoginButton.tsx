import React, {FunctionComponent} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/core';
import {ECButton} from '../components/button/ECButton';
import {useAppTheme} from '../theme';

export const LoginButton: FunctionComponent<{}> = () => {
  const {
    buttons: {loginButton},
  } = useAppTheme();
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
