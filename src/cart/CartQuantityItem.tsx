import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {FunctionComponent} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {ECText} from '../components/ECText';
import {useDispatch} from 'react-redux';
import {decreaseCart, increaseCart, removeFromCart} from './cartSlice';

interface CartQuantityItemProps {
  id: number;
  quantity: number;
}

export const CartQuantityItem: FunctionComponent<CartQuantityItemProps> = ({
  id,
  quantity,
}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.quantityWrapper}>
      <View style={styles.quantity}>
        <TouchableOpacity
          onPress={() => {
            dispatch(decreaseCart(id));
          }}>
          <EvilIcons name="minus" size={33} color="#ccc" />
        </TouchableOpacity>
        <ECText fontSize={20} textColor="black" style={{marginHorizontal: 15}}>
          {quantity}
        </ECText>
        <TouchableOpacity
          onPress={() => {
            dispatch(increaseCart(id));
          }}>
          <EvilIcons name="plus" size={33} color="#ccc" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch(removeFromCart(id));
        }}>
        <EvilIcons name="trash" size={33} color="#ccc" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  quantityWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantityIcons: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
});
