import {StyleSheet, View, Image} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../components/ECText';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {ProductsStackParams} from './ProductsStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {useAppTheme} from '../theme';

export type SingleProductNavigationType = StackNavigationProp<
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
  const {
    colors: {iconRippleColor, cartImageBackgroundColor},
  } = useAppTheme();
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
        <View
          style={[
            styles.container,
            {backgroundColor: cartImageBackgroundColor},
          ]}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
      </TouchableRipple>

      <ECText fontSize={13} style={styles.title} numberOfLines={1}>
        {title}
      </ECText>
      <ECText fontSize={14} bold>
        $ {price}
      </ECText>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: '70%',
    height: '60%',
    resizeMode: 'contain',
  },
  title: {
    width: 150,
    fontSize: 12,
    fontWeight: '600',
    marginVertical: 2,
  },
});
