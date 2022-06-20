import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AccountNavigationItem} from './AccountNavigationItem';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useAppTheme} from '../theme';

export const Partners: FunctionComponent = () => {
  const navigation = useNavigation();

  const {
    colors: {sideMenuTextColor},
  } = useAppTheme();

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
