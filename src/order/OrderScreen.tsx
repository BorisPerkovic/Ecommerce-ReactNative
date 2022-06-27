import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../components/ECStatusBar';
import {OrderItems} from './OrderItems';
import {ECHeader} from '../components/Header/ECHeader';
import {useAppTheme} from '../theme';
import {useTranslation} from 'react-i18next';

export const OrderScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  const {t} = useTranslation('order');
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle={t('order')} preventGoBack={true} />
      <View style={styles.wrapper}>
        <OrderItems />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexGrow: 1,
  },
});
