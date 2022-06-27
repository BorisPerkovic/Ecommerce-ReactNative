import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../../../components/ECStatusBar';
import {ChangePasswordForm} from './ChangePasswordForm';
import {ECHeader} from '../../../components/Header/ECHeader';
import {useAppTheme} from '../../../theme';
import {useTranslation} from 'react-i18next';

export const EditProfileChangePassword = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  const {t} = useTranslation('account');
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle={t('changePassword')} />
      <ChangePasswordForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
