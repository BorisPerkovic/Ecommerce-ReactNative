import {StatusBar, StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import CartHeader from './CartHeader';
import {Cartitems} from './Cartitems';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

const {cartStatusBarColor} = ECOMMERCE_THEME.colors;

export const CartScreen: FunctionComponent<{}> = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor={cartStatusBarColor} barStyle="dark-content" />
      <CartHeader />
      <Cartitems />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
