import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';
import {AccountNavigationItem} from './AccountNavigationItem';

export const MyTransactionsNavigationItem: FunctionComponent = () => {
  const navigation = useNavigation();

  return (
    <AccountNavigationItem
      primaryIcon={<Ionicons name="card-outline" size={25} color="#ffffff" />}
      onPress={() => {
        navigation.navigate('DataProtection');
      }}>
      <Text>My Transactions</Text>
    </AccountNavigationItem>
  );
};
