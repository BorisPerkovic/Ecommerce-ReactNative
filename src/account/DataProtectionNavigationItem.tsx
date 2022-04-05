import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import Inonicons from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';
import {AccountNavigationItem} from './AccountNavigationItem';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

const {sideMenuTextColor} = ECOMMERCE_THEME.colors;

export const DataProtectionNavigationItem: FunctionComponent = () => {
  const navigation = useNavigation();

  return (
    <AccountNavigationItem
      primaryIcon={
        <Inonicons
          name="shield-checkmark-outline"
          size={25}
          color={sideMenuTextColor}
        />
      }
      onPress={() => {
        navigation.navigate('DataProtection');
      }}>
      <Text>About Ecommerce</Text>
    </AccountNavigationItem>
  );
};
