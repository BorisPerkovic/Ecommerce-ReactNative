import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text} from 'react-native';
import {AccountNavigationItem} from './AccountNavigationItem';
import {useAppTheme} from '../theme';
import {useTranslation} from 'react-i18next';

export const AppFeedbackNavigationItem: FunctionComponent = () => {
  const navigation = useNavigation();

  const {
    colors: {sideMenuTextColor},
  } = useAppTheme();
  const {t} = useTranslation('account');

  return (
    <AccountNavigationItem
      primaryIcon={
        <AntDesign name="like2" size={25} color={sideMenuTextColor} />
      }
      onPress={() => {
        navigation.navigate('Feedback');
      }}>
      <Text>{t('appFeedback')}</Text>
    </AccountNavigationItem>
  );
};
