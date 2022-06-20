import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SignInForm} from './SignInForm';
import {ECHeader} from '../../components/Header/ECHeader';
import {MyStatusBar} from '../../components/ECStatusBar';
import {useAppTheme} from '../../theme';

export const SignInScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle="Sign In" />
      <SignInForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
