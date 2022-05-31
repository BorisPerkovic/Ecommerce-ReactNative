import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

const {black} = ECOMMERCE_THEME.colors;

export const ProductsReview = () => {
  return (
    <View>
      <Text style={styles.title}>Ecommerce Shop &amp; Service</Text>
      <Text style={styles.text}>
        Ecommerce Shop on Rustaveli Ave 57{'\n'}This shop offers both products
        and services
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    color: black,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: black,
    fontWeight: '400',
    letterSpacing: 1,
    marginVertical: 5,
    lineHeight: 24,
    opacity: 0.6,
  },
});
