import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../../../components/ECStatusBar';
import {EditProfileChangeEmailHeader} from './EditProfileChangeEmailHeader';
import {ChangeEMailForm} from './ChangeEMailForm';

export const EditProfileChangeEmail = () => {
  return (
    <View style={styles.container}>
      <MyStatusBar backColor="#004666" themeStyle="light-content" />
      <EditProfileChangeEmailHeader />
      <ChangeEMailForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
