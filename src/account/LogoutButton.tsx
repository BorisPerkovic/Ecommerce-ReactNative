import React, {FunctionComponent} from 'react';
import {ECButton} from '../components/button/ECButton';
import {logout} from './sign-in/signInSlice';
import {useDispatch} from 'react-redux';
import {clearUserData} from '../order/ordersSlice';
import {useAppTheme} from '../theme';
import {useTranslation} from 'react-i18next';
import {Alert} from 'react-native';

export const LogoutButton: FunctionComponent<{}> = () => {
  const {
    buttons: {logoutButton},
  } = useAppTheme();
  const dispatch = useDispatch();
  const {t} = useTranslation('account');

  return (
    <ECButton
      mode="outlined"
      variant={logoutButton}
      onPress={() => {
        Alert.alert(t('logOut'), t('logOutMessage'), [
          {
            text: t('stay'),
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: t('signOut'),
            style: 'destructive',
            onPress: () => {
              dispatch(clearUserData());
              dispatch(logout());
            },
          },
        ]);
      }}>
      {t('signOut')}
    </ECButton>
  );
};
