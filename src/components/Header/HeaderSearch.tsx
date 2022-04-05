import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';

const {searchBorderColor} = ECOMMERCE_THEME.colors;

export const HeaderSearch = () => {
  return <TextInput placeholder="Search..." style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    width: '65%',
    height: '82%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: searchBorderColor,
    paddingHorizontal: 10,
  },
});
