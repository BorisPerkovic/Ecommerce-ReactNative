import React, {FunctionComponent} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';
import {AccountNavigationItem} from './AccountNavigationItem';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

const {sideMenuTextColor} = ECOMMERCE_THEME.colors;

export const MyOrdersNavigationItem: FunctionComponent = () => {
  const navigation = useNavigation();

  return (
    <AccountNavigationItem
      primaryIcon={
        <Ionicons name="card-outline" size={25} color={sideMenuTextColor} />
      }
      onPress={() => {
        navigation.dispatch(DrawerActions.closeDrawer());
        navigation.navigate('MyOrders');
      }}>
      <Text>My Orders</Text>
    </AccountNavigationItem>
  );
};
