import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';
import {AccountNavigationItem} from './AccountNavigationItem';
import {useAppTheme} from '../theme';

export const MyReviewsNavigationItem: FunctionComponent = () => {
  const navigation = useNavigation();

  const {
    colors: {sideMenuTextColor},
  } = useAppTheme();

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
