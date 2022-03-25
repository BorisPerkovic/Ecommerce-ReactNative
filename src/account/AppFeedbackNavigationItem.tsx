import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text} from 'react-native';
import {AccountNavigationItem} from './AccountNavigationItem';

export const AppFeedbackNavigationItem: FunctionComponent = () => {
  const navigation = useNavigation();

  return (
    <AccountNavigationItem
      primaryIcon={<AntDesign name="like2" size={25} color="#ffffff" />}
      onPress={() => {
        navigation.navigate('DataProtection');
      }}>
      <Text>App Feedback</Text>
    </AccountNavigationItem>
  );
};
