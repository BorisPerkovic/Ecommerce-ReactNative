import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';
import {AccountNavigationItem} from './AccountNavigationItem';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

const {sideMenuTextColor} = ECOMMERCE_THEME.colors;

export const MyTransactionsNavigationItem: FunctionComponent = () => {
  const navigation = useNavigation();

  return (
    <AccountNavigationItem
      primaryIcon={
        <Ionicons name="card-outline" size={25} color={sideMenuTextColor} />
      }
      onPress={() => {
        navigation.navigate('MyOrders');
      }}>
      <Text>My Transactions</Text>
    </AccountNavigationItem>
  );
};
