import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';
import {AccountNavigationItem} from './AccountNavigationItem';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

const {sideMenuTextColor} = ECOMMERCE_THEME.colors;

export const MyReviewsNavigationItem: FunctionComponent = () => {
  const navigation = useNavigation();

  return (
    <AccountNavigationItem
      primaryIcon={
        <Ionicons name="star-outline" size={25} color={sideMenuTextColor} />
      }
      onPress={() => {
        navigation.navigate('DataProtection');
      }}>
      <Text>My Reviews</Text>
    </AccountNavigationItem>
  );
};
