import {StyleSheet, View} from 'react-native';
import React from 'react';
import {HeaderIconsShoopingBag, HeaderIconsShoopingCart} from './HeaderIcons';
import {HeaderSearch} from './HeaderSearch';

export const Header = () => {
  return (
    <View style={styles.container}>
      <HeaderIconsShoopingBag />
      <HeaderSearch />
      <HeaderIconsShoopingCart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});
