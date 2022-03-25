import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import Inonicons from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';
import {AccountNavigationItem} from './AccountNavigationItem';

export const DataProtectionNavigationItem: FunctionComponent = () => {
  const navigation = useNavigation();

  return (
    <AccountNavigationItem
      primaryIcon={
        <Inonicons name="shield-checkmark-outline" size={25} color="#ffffff" />
      }
      onPress={() => {
        navigation.navigate('DataProtection');
      }}>
      <Text>About Ecommerce</Text>
    </AccountNavigationItem>
  );
};
