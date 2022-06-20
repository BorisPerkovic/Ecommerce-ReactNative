/* eslint-disable react-native/no-inline-styles */
import {Alert, StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../components/ECText';
import {ECButton} from '../components/button/ECButton';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {useNavigation} from '@react-navigation/native';
import {useAppTheme} from '../theme';
interface CartOrderInfoProps {
  cartTotal: number;
}

const CartOrderInfo: FunctionComponent<CartOrderInfoProps> = ({cartTotal}) => {
  const {
    colors: {primaryTextColor},
    buttons: {primaryButtonContained},
  } = useAppTheme();
  const {navigate} = useNavigation();
  const isLogged = useSelector((state: RootState) => state.signIn.isLoggedIn);
  return (
    <View style={styles.orderInfoContainer}>
      <ECText
        textAlign="left"
        textColor={primaryTextColor}
        fontSize={23}
        style={{marginVertical: 20}}>
        Order Info
      </ECText>
      <View style={styles.total}>
        <ECText
          style={styles.textStyle}
          textColor={primaryTextColor}
          fontSize={16}>
          Subtotal
        </ECText>
        <ECText
          style={styles.textStyle}
          textColor={primaryTextColor}
          bold
          fontSize={16}>
          ${cartTotal.toFixed(2)}
        </ECText>
      </View>
      <View style={styles.total}>
        <ECText
          style={styles.textStyle}
          textColor={primaryTextColor}
          fontSize={16}>
          Shipping Cost
        </ECText>
        <ECText
          style={styles.textStyle}
          textColor={primaryTextColor}
          bold
          fontSize={16}>
          +$10.00
        </ECText>
      </View>
      <View style={[styles.total, {marginVertical: 10}]}>
        <ECText
          style={styles.textStyle}
          textColor={primaryTextColor}
          fontSize={16}>
          Total
        </ECText>
        <ECText textColor={primaryTextColor} bold fontSize={20}>
          ${`${(cartTotal + 10).toFixed(2)}`}
        </ECText>
      </View>
      <View>
        <ECButton
          mode="outlined"
          variant={primaryButtonContained}
          onPress={() => {
            isLogged
              ? navigate('Order')
              : Alert.alert(
                  'Log In',
                  'You need to be logged in to proceed order',
                );
          }}>{`Checkout (${(cartTotal + 10).toFixed(2)})`}</ECButton>
      </View>
    </View>
  );
};

export default CartOrderInfo;

const styles = StyleSheet.create({
  orderInfoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: '400',
    opacity: 0.6,
  },
});
