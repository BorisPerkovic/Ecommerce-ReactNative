import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AccountNavigationItem} from './AccountNavigationItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppTheme} from '../theme';

export const LanguageSettingsNavigationItem: FunctionComponent<{
  title: string;
}> = ({title}) => {
  const navigation = useNavigation();

  const {
    colors: {sideMenuTextColor},
  } = useAppTheme();

  return (
    <AccountNavigationItem
      primaryIcon={
        <Ionicons name="ios-flag-outline" size={25} color={sideMenuTextColor} />
      }
      onPress={() => {
        navigation.navigate('ChangeLanguage');
      }}>
      {title}
    </AccountNavigationItem>
  );
};
