import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECButton} from '../../components/ECButton';
import {SingleProductDTO} from './singleProductsSlice';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../cart/cartSlice';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';

interface SingleProductButtonProps {
  product: SingleProductDTO;
}

const {singleProductButtonBakgroundColor, singleProductButtonTextColor} =
  ECOMMERCE_THEME.colors;

export const SingleProductButton: FunctionComponent<
  SingleProductButtonProps
> = ({product}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item: SingleProductDTO) => {
    dispatch(addToCart(item));
  };

  return (
    <View style={styles.button}>
      <ECButton
        buttonMode="contained"
        contentColor={singleProductButtonBakgroundColor}
        labelColor={singleProductButtonTextColor}
        onPress={() => handleAddToCart(product)}>
        Add To Cart
      </ECButton>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'flex-end',
  },
});
