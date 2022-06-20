import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {Header} from '../components/Header/home-page-header/Header';
import {useAppTheme} from '../theme';
import {ProductsItems} from './ProductsItems';
import {ProductsReview} from './ProductsReview';

export const ProductsScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Header />
      <ScrollView
        bounces={false}
        style={[styles.safeAreaView, {backgroundColor: backgroundColor}]}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.wrapper, {backgroundColor: backgroundColor}]}>
          <ProductsReview />
          <ProductsItems />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    flexDirection: 'column',
  },
  wrapper: {
    flex: 1,
    padding: 15,
  },
});
