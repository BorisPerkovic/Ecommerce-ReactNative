import {StyleSheet, View, Image, Text} from 'react-native';
import React, {FunctionComponent} from 'react';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {ProductsStackParams} from './ProductsStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

const {iconRippleColor, productsImageBackgroundColor, black} =
  ECOMMERCE_THEME.colors;

type SingleProductNavigationType = StackNavigationProp<
  ProductsStackParams,
  'SingleProduct'
>;

interface ProductsProps {
  productId: number;
  image: string;
  price: number;
  title: string;
}

export const ProductsCard: FunctionComponent<ProductsProps> = ({
  productId,
  image,
  price,
  title,
}) => {
  const {navigate} = useNavigation<SingleProductNavigationType>();
  return (
    <View style={styles.rippleContainer}>
      <TouchableRipple
        borderless
        rippleColor={iconRippleColor}
        accessibilityRole="button"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{borderRadius: 10}}
        onPress={() => {
          navigate('SingleProduct', {productId: productId});
        }}>
        <View style={styles.container}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
      </TouchableRipple>

      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <Text>$ {price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rippleContainer: {
    width: '48%',
    height: 150,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 60,
  },
  container: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: productsImageBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
  title: {
    width: 150,
    fontSize: 12,
    color: black,
    fontWeight: '600',
    marginBottom: 2,
  },
});
