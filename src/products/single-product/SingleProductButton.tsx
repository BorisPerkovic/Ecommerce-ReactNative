import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECButton} from '../../components/button/ECButton';
import {SingleProduct} from './singleProductsSlice';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../cart/cartSlice';
import {useAppTheme} from '../../theme';
import {useTranslation} from 'react-i18next';

interface SingleProductButtonProps {
  product: SingleProduct;
}

export const SingleProductButton: FunctionComponent<
  SingleProductButtonProps
> = ({product}) => {
  const {
    buttons: {primaryButtonContained},
  } = useAppTheme();
  const dispatch = useDispatch();
  const {t} = useTranslation('products');

  const handleAddToCart = (item: SingleProduct) => {
    dispatch(addToCart(item));
  };

  return (
    <View style={styles.button}>
      <ECButton
        mode="contained"
        variant={primaryButtonContained}
        onPress={() => handleAddToCart(product)}>
        {t('addToCart')}
      </ECButton>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginVertical: 20,
    justifyContent: 'flex-end',
  },
});
