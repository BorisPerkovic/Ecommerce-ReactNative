import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {CartItem} from './CartItem';
import {CartNoItems} from './CartNoItems';
import CartOrderInfo from './CartOrderInfo';
import {getTotals} from './cartSlice';

export const Cartitems = () => {
  const cartItem = useSelector((state: RootState) => state.cart.cartItems);
  const cartTotal = useSelector(
    (state: RootState) => state.cart.cartTotalAmmount,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());

    return () => {};
  }, [dispatch, cartItem]);

  return (
    <View style={styles.container}>
      {cartItem.length > 0 ? (
        <ScrollView
          contentContainerStyle={styles.wrapper}
          bounces={false}
          showsVerticalScrollIndicator={false}>
          {cartItem.map(item => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                image={item.image}
                price={item.price * item.cartQuantity}
                quantity={item.cartQuantity}
                title={item.title}
              />
            );
          })}
          <CartOrderInfo cartTotal={cartTotal} />
        </ScrollView>
      ) : (
        <CartNoItems />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexGrow: 1,
  },
});
