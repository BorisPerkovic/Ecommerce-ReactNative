import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {Header} from '../components/Header/Header';
import {ProductsItems} from './ProductsItems';
import {ProductsReview} from './ProductsReview';

export const ProductsScreen = () => {
  return (
    <ScrollView
      style={styles.safeAreaView}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Header />
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
  },
  container: {
    flex: 1,
    paddingBottom: 32,
    backgroundColor: '#fff',
    padding: 15,
  },
});
