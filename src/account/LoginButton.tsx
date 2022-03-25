import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/core';
import {ECButton} from '../components/ECButton';

export const LoginButton: FunctionComponent<{}> = () => {
  const {navigate} = useNavigation();

  return (
    <ECButton
      buttonMode="contained"
      contentColor="#000000"
      onPress={() => {
        navigate('WelcomeSignInScreen');
      }}>
      Sign In
    </ECButton>
  );
};
