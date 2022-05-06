import {StyleSheet, View, ScrollView} from 'react-native';
import React, {FunctionComponent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {ECText} from '../components/ECText';
import {Divider} from '../components/Divider';
import {ECButton} from '../components/ECButton';
import {ecommerceButtonTheme} from '../theme/ecommerce/ecommerceButtonTheme';
import {clearCart} from '../cart/cartSlice';
import {useNavigation} from '@react-navigation/native';
import {addToMyOrders} from '../my-orders/myOrdersSlice';
import {format} from 'date-fns';

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
  const orderItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalPrice = useSelector(
    (state: RootState) => state.cart.cartTotalAmmount,
  );
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

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
                Price: {(parseFloat(item.price) * item.cartQuantity).toFixed(2)}
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
          buttonMode={primaryButtonContained}
          labelColor="#ffffff"
          labelText="Back"
          onPress={() => {
            setPosition(position - 1);
          }}
        />
      </View>
      <View style={styles.buttons}>
        <ECButton
          buttonMode={primaryButtonContained}
          labelColor="#ffffff"
          labelText="Proceed"
          onPress={() => {
            const date = new Date();
            const timeStamp = format(date, 'dd.MM.yyyy HH:mm');

            dispatch(
              addToMyOrders({
                user: userOrder.user,
                date: timeStamp,
                orderItems: orderItems,
                totalPrice: totalPrice,
              }),
            );
            dispatch(clearCart());
            navigate('OrdersSucces');
          }}
        />
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
