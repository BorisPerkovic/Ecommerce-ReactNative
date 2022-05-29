import {StyleSheet, View} from 'react-native';
import React from 'react';
import {HeaderIconsFilter, HeaderIconsMenu} from './HeaderIcons';
import {HeaderSearch} from './HeaderSearch';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';

const {white} = ECOMMERCE_THEME.colors;

export const Header = () => {
  return (
    <View style={styles.container}>
      <HeaderIconsMenu />
      <HeaderSearch />
      <HeaderIconsFilter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingTop: 20,
  },
});
