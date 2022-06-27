import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SignInForm} from './SignInForm';
import {ECHeader} from '../../components/Header/ECHeader';
import {MyStatusBar} from '../../components/ECStatusBar';
import {useAppTheme} from '../../theme';
import {useTranslation} from 'react-i18next';

export const SignInScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  const {t} = useTranslation('account');
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle={t('signIn')} />
      <SignInForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
