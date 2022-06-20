import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import Inonicons from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';
import {AccountNavigationItem} from './AccountNavigationItem';
import {useAppTheme} from '../theme';

export const DataProtectionNavigationItem: FunctionComponent = () => {
  const navigation = useNavigation();

  const {
    colors: {sideMenuTextColor},
  } = useAppTheme();

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
