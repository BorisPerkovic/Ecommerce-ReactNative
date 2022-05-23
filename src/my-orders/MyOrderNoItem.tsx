/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ECText} from '../components/ECText';

export const MyOrderNoItem = () => {
  return (
    <View style={styles.container}>
      <ECText fontSize={35} bold textColor="black">
        No Orders Yet!
      </ECText>
      <ECText
        fontSize={20}
        textColor="black"
        textAlign="center"
        style={{marginTop: 10}}>
        Add some products to your cart and make some orders. Have Fun!
      </ECText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
