import {StatusBar, StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import CartItem from './CartItem';
import CartOrderInfo from './CartOrderInfo';
import CartHeader from './CartHeader';

export const CartScreen: FunctionComponent<{}> = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <CartHeader />
      <CartItem />
      <CartOrderInfo />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
