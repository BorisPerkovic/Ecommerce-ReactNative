import {AccountNavigationItem} from './AccountNavigationItem';
import React, {FunctionComponent} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const CallSupportNavigationItem: FunctionComponent = props => {
  const {children} = props;
  return (
    <AccountNavigationItem
      primaryIcon={<SimpleLineIcons name="phone" size={25} color="#ffffff" />}
      onPress={() => {
        console.log('Phone Clicked');
      }}>
      {children}
    </AccountNavigationItem>
  );
};
