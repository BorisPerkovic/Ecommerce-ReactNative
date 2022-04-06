import {StyleSheet, View} from 'react-native';
import React from 'react';
import {HeaderIconsShoopingBag} from './HeaderIcons';
import {HeaderSearch} from './HeaderSearch';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';

const {white} = ECOMMERCE_THEME.colors;

export const Header = () => {
  return (
    <View style={styles.container}>
      <HeaderIconsShoopingBag />
      <HeaderSearch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingTop: 20,
    width: '100%',
  },
});
