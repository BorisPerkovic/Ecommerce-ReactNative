import {StyleSheet, View} from 'react-native';
import React from 'react';
import {HeaderIconsFilter, HeaderIconsMenu} from './HeaderIcons';
import {HeaderSearch} from './HeaderSearch';

export const Header = () => {
  return (
    <View style={styles.topBar}>
      <HeaderIconsMenu />
      <HeaderSearch />
      <HeaderIconsFilter />
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    borderWidth: 1,
    borderColor: '#004666',
    borderRadius: 16,
    height: 47,
    margin: 20,
  },
});
