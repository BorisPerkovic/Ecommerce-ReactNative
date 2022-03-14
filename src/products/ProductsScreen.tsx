import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {ProductsItems} from './ProductsItems';
import {ProductsReview} from './ProductsReview';

export const ProductsScreen = () => {
  return (
    <ScrollView
      style={styles.safeAreaView}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#004666" />
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
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingBottom: 32,
    backgroundColor: '#fff',
    padding: 15,
  },
});
