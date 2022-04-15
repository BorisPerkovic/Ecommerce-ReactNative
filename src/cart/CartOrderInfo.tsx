/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../components/ECText';
import {ECButton} from '../components/ECButton';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';
import {ecommerceButtonTheme} from '../theme/ecommerce/ecommerceButtonTheme';

const {black, orderInfoTextColor, white} = ECOMMERCE_THEME.colors;

const {checkoutButton} = ecommerceButtonTheme;
interface CartOrderInfoProps {
  cartTotal: number;
}

const CartOrderInfo: FunctionComponent<CartOrderInfoProps> = ({cartTotal}) => {
  return (
    <View style={styles.orderInfoContainer}>
      <ECText
        textAlign="left"
        textColor={black}
        fontSize={23}
        style={{marginVertical: 20}}>
        Order Info
      </ECText>
      <View style={styles.total}>
        <ECText
          style={styles.textStyle}
          textColor={orderInfoTextColor}
          fontSize={16}>
          Subtotal
        </ECText>
        <ECText
          style={styles.textStyle}
          textColor={orderInfoTextColor}
          bold
          fontSize={16}>
          ${cartTotal.toFixed(2)}
        </ECText>
      </View>
      <View style={styles.total}>
        <ECText
          style={styles.textStyle}
          textColor={orderInfoTextColor}
          fontSize={16}>
          Shipping Cost
        </ECText>
        <ECText
          style={styles.textStyle}
          textColor={orderInfoTextColor}
          bold
          fontSize={16}>
          +$10.00
        </ECText>
      </View>
      <View style={[styles.total, {marginVertical: 10}]}>
        <ECText
          style={styles.textStyle}
          textColor={orderInfoTextColor}
          fontSize={16}>
          Total
        </ECText>
        <ECText textColor={orderInfoTextColor} bold fontSize={20}>
          ${`${(cartTotal + 10).toFixed(2)}`}
        </ECText>
      </View>
      <View style={styles.button}>
        <ECButton
          labelText={`Checkout (${(cartTotal + 10).toFixed(2)})`}
          buttonMode={checkoutButton}
          labelColor={white}
          onPress={() => console.log('clicked')}
        />
      </View>
    </View>
  );
};

export default CartOrderInfo;

const styles = StyleSheet.create({
  orderInfoContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
    backgroundColor: white,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
  },
  textStyle: {
    fontWeight: '400',
    opacity: 0.6,
  },
});