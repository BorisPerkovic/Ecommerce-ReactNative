/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ECText} from '../components/ECText';
import {useAppTheme} from '../theme';

export const MyOrderNoItem = () => {
  const {
    colors: {primaryTextColor},
  } = useAppTheme();
  return (
    <View style={styles.container}>
      <ECText fontSize={35} bold textColor={primaryTextColor}>
        No Orders Yet!
      </ECText>
      <ECText
        fontSize={20}
        textColor={primaryTextColor}
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
    paddingHorizontal: 20,
  },
});
