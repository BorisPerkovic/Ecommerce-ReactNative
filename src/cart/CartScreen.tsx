import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {Cartitems} from './Cartitems';
import {ECHeader} from '../components/Header/ECHeader';
import {useAppTheme} from '../theme';
import {useTranslation} from 'react-i18next';

export const CartScreen: FunctionComponent<{}> = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  const {t} = useTranslation('products');
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <ECHeader screenTitle={t('myCart')} />
      <Cartitems />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
