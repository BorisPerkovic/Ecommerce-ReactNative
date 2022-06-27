import React, {FunctionComponent} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/core';
import {ECButton} from '../components/button/ECButton';
import {useAppTheme} from '../theme';
import {useTranslation} from 'react-i18next';

export const LoginButton: FunctionComponent<{}> = () => {
  const {
    buttons: {loginButton},
  } = useAppTheme();
  const navigation = useNavigation();
  const {t} = useTranslation('account');

  return (
    <ECButton
      variant={loginButton}
      mode="contained"
      onPress={() => {
        navigation.navigate('Welcome');
        navigation.dispatch(DrawerActions.closeDrawer);
      }}>
      {t('signIn')}
    </ECButton>
  );
};
