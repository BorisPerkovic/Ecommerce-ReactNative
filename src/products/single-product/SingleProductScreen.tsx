import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ProductItem} from './ProductItem';
import {MyStatusBar} from '../../components/ECStatusBar';
import {useAppTheme} from '../../theme';

export const SingleProductScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <MyStatusBar />
      <ProductItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
