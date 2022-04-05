import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';
import {ProductsItems} from './ProductsItems';
import {ProductsReview} from './ProductsReview';

const {white, productsStatusBarColor} = ECOMMERCE_THEME.colors;

export const ProductsScreen = () => {
  return (
    <ScrollView
      style={styles.safeAreaView}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <StatusBar backgroundColor={productsStatusBarColor} />
        <ProductsReview />
        <ProductsItems />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: white,
  },
  container: {
    flex: 1,
    paddingBottom: 32,
    backgroundColor: white,
    padding: 15,
  },
});
