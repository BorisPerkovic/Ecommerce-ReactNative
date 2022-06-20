import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../../../components/ECStatusBar';
import {ChangeEMailForm} from './ChangeEMailForm';
import {ECHeader} from '../../../components/Header/ECHeader';
import {useAppTheme} from '../../../theme';

export const EditProfileChangeEmail = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle="Change E-mail" />
      <ChangeEMailForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
