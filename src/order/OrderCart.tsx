/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, View, ScrollView} from 'react-native';
import React, {FunctionComponent, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {ECText} from '../components/ECText';
import {Divider} from '../components/Divider';
import {ECButton} from '../components/button/ECButton';
import {ecommerceButtonTheme} from '../theme/ecommerce/ecommerceButtonTheme';
import {clearCart} from '../cart/cartSlice';
import {useNavigation} from '@react-navigation/native';
import {createOrderThunk} from './ordersSlice';

interface OrderCartprops {
  position: number;
  setPosition: (num: number) => void;
}

const {primaryButtonContained} = ecommerceButtonTheme;

export const OrderCart: FunctionComponent<OrderCartprops> = ({
  position,
  setPosition,
}) => {
  const userOrder = useSelector((state: RootState) => state.order);
  const loggedUser = useSelector((state: RootState) => state.signIn.loggedUser);
  const isLoading = useSelector((state: RootState) => state.order.loading);
  const orderItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalPrice = useSelector(
    (state: RootState) => state.cart.cartTotalAmmount,
  );
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  useEffect(() => {
    if (isLoading === 'succeeded') {
      dispatch(clearCart());
      navigate('OrdersSucces');
    }
  }, [isLoading, dispatch]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ECText fontSize={16} textColor={'#004666'} style={styles.text}>
        {userOrder.user.name}
      </ECText>
      <ECText fontSize={16} textColor={'#004666'} style={styles.text}>
        {userOrder.user.lastName}
      </ECText>
      <ECText fontSize={16} textColor={'#004666'} style={styles.text}>
        {userOrder.user.email}
      </ECText>
      <ECText fontSize={16} textColor={'#004666'} style={styles.text}>
        {userOrder.location.city}
      </ECText>
      <ECText fontSize={16} textColor={'#004666'} style={styles.text}>
        {userOrder.location.country}
      </ECText>
      <ECText fontSize={16} textColor={'#004666'} style={styles.text}>
        {userOrder.location.zipCode}
      </ECText>
      <ECText fontSize={16} textColor={'#004666'} style={styles.text}>
        {userOrder.location.address}
      </ECText>
      <Divider />
      {orderItems.map(item => {
        return (
          <View key={item.id}>
            <ECText
              fontSize={16}
              textColor={'#004666'}
              style={styles.orderItem}>
              {item.title}
            </ECText>
            <View style={styles.orderItems}>
              <ECText fontSize={16} textColor={'#004666'} style={styles.text}>
                Quantity: {item.cartQuantity}
              </ECText>
              <ECText fontSize={16} textColor={'#004666'} style={styles.text}>
                Price: {(item.price * item.cartQuantity).toFixed(2)}
              </ECText>
            </View>
          </View>
        );
      })}
      <Divider />
      <ECText fontSize={16} textColor={'#004666'} style={styles.text}>
        Total Price: {totalPrice}$
      </ECText>
      <Divider />
      <View style={styles.buttons}>
        <ECButton
          mode="outlined"
          variant={primaryButtonContained}
          onPress={() => {
            setPosition(position - 1);
          }}>
          Back
        </ECButton>
      </View>
      <View style={styles.buttons}>
        <ECButton
          mode="outlined"
          variant={primaryButtonContained}
          loading={isLoading === 'pending'}
          onPress={() => {
            const itemsToOrder: {
              title: string;
              price: number;
              cartQuantity: number;
            }[] = [];
            orderItems.map(item => {
              const newItems = {
                title: item.title,
                price: item.price,
                cartQuantity: item.cartQuantity,
              };
              itemsToOrder.push(newItems);
            });

            dispatch(
              createOrderThunk({
                users_id: +loggedUser.id,
                country: userOrder.location.country,
                city: userOrder.location.city,
                zip: userOrder.location.zipCode,
                address: userOrder.location.address,
                items: itemsToOrder,
                price: totalPrice,
              }),
            );
          }}>
          Proceed
        </ECButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 5,
  },
  orderItem: {
    marginTop: 5,
  },
  orderItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
  },
});
