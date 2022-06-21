import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text} from 'react-native';
import {AccountNavigationItem} from './AccountNavigationItem';
import {useAppTheme} from '../theme';

export const AppFeedbackNavigationItem: FunctionComponent = () => {
  const navigation = useNavigation();

  const {
    colors: {sideMenuTextColor},
  } = useAppTheme();

  return (
    <AccountNavigationItem
      primaryIcon={
        <AntDesign name="like2" size={25} color={sideMenuTextColor} />
      }
      onPress={() => {
        navigation.navigate('Feedback');
      }}>
      <Text>App Feedback</Text>
    </AccountNavigationItem>
  );
};
