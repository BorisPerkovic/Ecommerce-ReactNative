import {AccountNavigationItem} from './AccountNavigationItem';
import React, {FunctionComponent} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

const {sideMenuTextColor} = ECOMMERCE_THEME.colors;

export const CallSupportNavigationItem: FunctionComponent = props => {
  const {children} = props;
  return (
    <AccountNavigationItem
      primaryIcon={
        <SimpleLineIcons name="phone" size={25} color={sideMenuTextColor} />
      }
      onPress={() => {
        console.log('Phone Clicked');
      }}>
      {children}
    </AccountNavigationItem>
  );
};
