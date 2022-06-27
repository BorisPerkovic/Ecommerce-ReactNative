import {StyleSheet, View} from 'react-native';
import React from 'react';
import {RegistrationItems} from './RegistrationItems';
import {ECHeader} from '../../components/Header/ECHeader';
import {MyStatusBar} from '../../components/ECStatusBar';
import {useAppTheme} from '../../theme';
import {useTranslation} from 'react-i18next';

const RegistrationScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  const {t} = useTranslation('account');
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle={t('registration')} preventGoBack={true} />
      <View style={styles.wrapper}>
        <RegistrationItems />
      </View>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexGrow: 1,
  },
});
