import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AccountNavigationItem} from './AccountNavigationItem';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Partners: FunctionComponent = () => {
  const navigation = useNavigation();

  return (
    <AccountNavigationItem
      primaryIcon={<FontAwesome name="handshake-o" size={25} color="#ffffff" />}
      onPress={() => {
        navigation.navigate('NetworkOverviewListScreen');
      }}>
      Partners
    </AccountNavigationItem>
  );
};
