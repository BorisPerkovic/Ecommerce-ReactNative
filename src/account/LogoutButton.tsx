import React, {FunctionComponent} from 'react';
import {ECButton} from '../components/ECButton';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';
import {ecommerceButtonTheme} from '../theme/ecommerce/ecommerceButtonTheme';
import {logout} from './sign-in/signInSlice';
import {useDispatch} from 'react-redux';

const {white} = ECOMMERCE_THEME.colors;

const {logoutButton} = ecommerceButtonTheme;

export const LogoutButton: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();

  return (
    <ECButton
      labelText="Sign Out"
      disabled={false}
      buttonMode={logoutButton}
      labelColor={white}
      onPress={() => {
        dispatch(logout());
      }}>
      Sign Out
    </ECButton>
  );
};
