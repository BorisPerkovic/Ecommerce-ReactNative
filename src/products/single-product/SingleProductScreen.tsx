import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ProductItem} from './ProductItem';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';
import {MyStatusBar} from '../../components/ECStatusBar';

const {white} = ECOMMERCE_THEME.colors;

export const SingleProductScreen = () => {
  return (
    <View style={styles.container}>
      <MyStatusBar backColor="#004666" themeStyle="light-content" />
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
