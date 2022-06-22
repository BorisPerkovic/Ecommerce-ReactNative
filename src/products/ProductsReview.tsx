import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ECText} from '../components/ECText';

export const ProductsReview = () => {
  return (
    <View>
      <ECText fontSize={24} style={styles.title}>
        Ecommerce Shop &amp; Service
      </ECText>
      <ECText fontSize={14} style={styles.text}>
        Ecommerce Shop on Rustaveli Ave 57{'\n'}This shop offers both products
        and services
      </ECText>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 1,
    marginVertical: 5,
    lineHeight: 24,
    opacity: 0.7,
  },
});
