import React, {FunctionComponent} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';
import {AccountNavigationItem} from './AccountNavigationItem';
import {useAppTheme} from '../theme';
import {useTranslation} from 'react-i18next';

export const MyOrdersNavigationItem: FunctionComponent = () => {
  const navigation = useNavigation();

  const {
    colors: {sideMenuTextColor},
  } = useAppTheme();
  const {t} = useTranslation('account');
  return (
    <AccountNavigationItem
      primaryIcon={
        <Ionicons name="card-outline" size={25} color={sideMenuTextColor} />
      }
      onPress={() => {
        navigation.dispatch(DrawerActions.closeDrawer());
        navigation.navigate('MyOrders');
      }}>
      <Text>{t('myOrders')}</Text>
    </AccountNavigationItem>
  );
};
