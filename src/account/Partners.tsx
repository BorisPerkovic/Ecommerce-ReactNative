import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AccountNavigationItem} from './AccountNavigationItem';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

const {sideMenuTextColor} = ECOMMERCE_THEME.colors;

export const Partners: FunctionComponent = () => {
  const navigation = useNavigation();

  return (
    <AccountNavigationItem
      primaryIcon={
        <FontAwesome name="handshake-o" size={25} color={sideMenuTextColor} />
      }
      onPress={() => {
        navigation.navigate('NetworkOverviewListScreen');
      }}>
      Partners
    </AccountNavigationItem>
  );
};
