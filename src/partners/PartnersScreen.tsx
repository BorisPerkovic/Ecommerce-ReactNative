import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useAppTheme} from '../theme';
import {MyStatusBar} from '../components/ECStatusBar';
import {ECHeader} from '../components/Header/ECHeader';
import {PartnersItems} from './PartnersItems';
import {useTranslation} from 'react-i18next';

export const PartnersScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  const {t} = useTranslation('products');
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle={t('technologies')} />
      <PartnersItems />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
