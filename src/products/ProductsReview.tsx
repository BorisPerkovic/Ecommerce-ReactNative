import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import {ECText} from '../components/ECText';
import {useTranslation} from 'react-i18next';

const deviceHeight = Dimensions.get('screen').height;

export const ProductsReview = () => {
  const {t} = useTranslation('products');
  return (
    <View>
      <ECText fontSize={deviceHeight < 700 ? 20 : 23} style={styles.title}>
        {t('ecommerceShopServiceTitle')}
      </ECText>
      <ECText fontSize={deviceHeight < 700 ? 12 : 14} style={styles.text}>
        {t('ecommerceShopServiceSubtitle')}
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
    fontWeight: '400',
    letterSpacing: 1,
    marginVertical: 5,
    lineHeight: 24,
    opacity: 0.7,
  },
});
