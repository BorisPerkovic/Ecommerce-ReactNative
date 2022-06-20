import {AccountNavigationItem} from './AccountNavigationItem';
import React, {FunctionComponent} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useAppTheme} from '../theme';

export const CallSupportNavigationItem: FunctionComponent = props => {
  const {children} = props;

  const {
    colors: {sideMenuTextColor},
  } = useAppTheme();
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
