import React, {FunctionComponent} from 'react';
import {ECButton} from '../components/button/ECButton';
import {ecommerceButtonTheme} from '../theme/ecommerce/ecommerceButtonTheme';
import {logout} from './sign-in/signInSlice';
import {useDispatch} from 'react-redux';
import {clearUserData} from '../order/ordersSlice';

const {logoutButton} = ecommerceButtonTheme;

export const LogoutButton: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();

  return (
    <ECButton
      mode="contained"
      variant={logoutButton}
      onPress={() => {
        dispatch(clearUserData());
        dispatch(logout());
      }}>
      Sign Out
    </ECButton>
  );
};
