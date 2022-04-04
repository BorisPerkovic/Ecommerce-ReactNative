import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../components/ECText';
import {ECButton} from '../components/ECButton';

interface CartOrderInfoProps {
  cartTotal: number;
}

const CartOrderInfo: FunctionComponent<CartOrderInfoProps> = ({cartTotal}) => {
  return (
    <View style={styles.orderInfoContainer}>
      <ECText
        textAlign="left"
        textColor="black"
        fontSize={23}
        style={{marginVertical: 20}}>
        Order Info
      </ECText>
      <View style={styles.total}>
        <ECText textColor="#ccc" fontSize={16}>
          Subtotal
        </ECText>
        <ECText textColor="#ccc" bold fontSize={16}>
          ${cartTotal.toFixed(2)}
        </ECText>
      </View>
      <View style={styles.total}>
        <ECText textColor="#ccc" fontSize={16}>
          Shipping Cost
        </ECText>
        <ECText textColor="#ccc" bold fontSize={16}>
          +$10.00
        </ECText>
      </View>
      <View style={[styles.total, {marginVertical: 10}]}>
        <ECText textColor="#ccc" fontSize={16}>
          Total
        </ECText>
        <ECText textColor="#ccc" bold fontSize={20}>
          ${`${(cartTotal + 10).toFixed(2)}`}
        </ECText>
      </View>
      <View style={styles.button}>
        <ECButton
          buttonMode="contained"
          contentColor="#004666"
          onPress={() => console.log('clicked')}>
          Checkout (${`${(cartTotal + 10).toFixed(2)}`})
        </ECButton>
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
    backgroundColor: '#ffffff',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
  },
});
