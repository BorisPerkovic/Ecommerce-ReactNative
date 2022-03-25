import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AccountNavigationItem} from './AccountNavigationItem';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const LanguageSettingsNavigationItem: FunctionComponent<{
  title: string;
}> = ({title}) => {
  const navigation = useNavigation();
  return (
    <AccountNavigationItem
      primaryIcon={
        <Ionicons name="ios-flag-outline" size={25} color="#ffffff" />
      }
      onPress={() => {
        navigation.navigate('LanguageSettings');
      }}>
      {title}
    </AccountNavigationItem>
  );
};