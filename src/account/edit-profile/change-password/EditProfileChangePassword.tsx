import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../../../components/ECStatusBar';
import {EditProfileChangePasswordHeader} from './EditProfileChangePasswordHeader';
import {ChangePasswordForm} from './ChangePasswordForm';

export const EditProfileChangePassword = () => {
  return (
    <View style={styles.container}>
      <MyStatusBar backColor="#004666" themeStyle="light-content" />
      <EditProfileChangePasswordHeader />
      <ChangePasswordForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
