import {StyleSheet, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ECText} from '../components/ECText';

export const CartNoItems = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="remove-shopping-cart" size={50} color="black" />
      <ECText textColor="#000000" bold fontSize={30}>
        You have no items in cart.
      </ECText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
