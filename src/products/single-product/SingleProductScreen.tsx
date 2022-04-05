import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ProductItem} from './ProductItem';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';

const {white} = ECOMMERCE_THEME.colors;

export const SingleProductScreen = () => {
  return (
    <View style={styles.container}>
      <ProductItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});
