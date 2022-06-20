import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../../../components/ECStatusBar';
import {ChangePasswordForm} from './ChangePasswordForm';
import {ECHeader} from '../../../components/Header/ECHeader';
import {useAppTheme} from '../../../theme';

export const EditProfileChangePassword = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle="Change Password" />
      <ChangePasswordForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
