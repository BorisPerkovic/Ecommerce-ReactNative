import React, {FunctionComponent} from 'react';
import {ECButton} from '../components/button/ECButton';
import {logout} from './sign-in/signInSlice';
import {useDispatch} from 'react-redux';
import {clearUserData} from '../order/ordersSlice';
import {useAppTheme} from '../theme';

export const LogoutButton: FunctionComponent<{}> = () => {
  const {
    buttons: {logoutButton},
  } = useAppTheme();
  const dispatch = useDispatch();

  return (
    <ECButton
      mode="outlined"
      variant={logoutButton}
      onPress={() => {
        dispatch(clearUserData());
        dispatch(logout());
      }}>
      Sign Out
    </ECButton>
  );
};
