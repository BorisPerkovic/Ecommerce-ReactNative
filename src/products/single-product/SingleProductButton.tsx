import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECButton} from '../../components/button/ECButton';
import {SingleProductDTO} from './singleProductsSlice';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../cart/cartSlice';
import {useAppTheme} from '../../theme';

interface SingleProductButtonProps {
  product: SingleProductDTO;
}

export const SingleProductButton: FunctionComponent<
  SingleProductButtonProps
> = ({product}) => {
  const {
    buttons: {primaryButtonContained},
  } = useAppTheme();
  const dispatch = useDispatch();

  const handleAddToCart = (item: SingleProductDTO) => {
    dispatch(addToCart(item));
  };

  return (
    <View style={styles.button}>
      <ECButton
        mode="contained"
        variant={primaryButtonContained}
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
    paddingBottom: 20,
    marginVertical: 20,
    justifyContent: 'flex-end',
  },
});
