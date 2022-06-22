import {StyleSheet, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ECText} from '../components/ECText';
import {useAppTheme} from '../theme/theme';

export const CartNoItems = () => {
  const {
    colors: {backgroundColor, primaryTextColor},
  } = useAppTheme();
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <MaterialIcons
        name="remove-shopping-cart"
        size={50}
        color={primaryTextColor}
      />
      <ECText textColor={primaryTextColor} fontSize={25} textAlign="center">
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
  },
});
