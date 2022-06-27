import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AccountNavigationItem} from './AccountNavigationItem';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useAppTheme} from '../theme';
import {useTranslation} from 'react-i18next';

export const Partners: FunctionComponent = () => {
  const navigation = useNavigation();

  const {
    colors: {sideMenuTextColor},
  } = useAppTheme();
  const {t} = useTranslation('account');

  return (
    <AccountNavigationItem
      primaryIcon={
        <FontAwesome name="handshake-o" size={25} color={sideMenuTextColor} />
      }
      onPress={() => {
        navigation.navigate('Partners');
      }}>
      {t('partners')}
    </AccountNavigationItem>
  );
};
