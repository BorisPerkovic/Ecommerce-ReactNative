import {StyleSheet, View, ScrollView, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ProductsStackParams} from '../ProductsStack';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {singleProduct} from './singleProductsSlice';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableRipple} from 'react-native-paper';
import {SingleProductSkeleton} from './SingleProductSkeleton';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';
import {SingleProductDescription} from './SingleProductDescription';
import {SingleProductRating} from './SingleProductRating';
import {SingleProductButton} from './SingleProductButton';
import SingleProductNoItem from './SingleProductNoItem';

const {
  singleProductImageBackgroundColor,
  iconRippleColor,
  singleProductBackIconColor,
  black,
} = ECOMMERCE_THEME.colors;

export const ProductItem = () => {
  const {params} = useRoute<RouteProp<ProductsStackParams, 'SingleProduct'>>();
  const product = useSelector((state: RootStateOrAny) => state.singleProduct);

  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  useEffect(() => {
    dispatch(
      singleProduct(`https://fakestoreapi.com/products/${params.productId}`),
    );
  }, [dispatch, params]);

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        {product.loading === 'pending' ? <SingleProductSkeleton /> : null}
        {product.loading === 'failed' ? <SingleProductNoItem /> : null}
        {product.loading === 'succeeded' ? (
          <>
            <View style={styles.imageContainer}>
              <TouchableRipple
                borderless
                style={styles.backIcon}
                rippleColor={iconRippleColor}
                accessibilityRole="button"
                onPress={() => navigate('Home')}>
                <Entypo
                  name="chevron-left"
                  size={30}
                  color={singleProductBackIconColor}
                />
              </TouchableRipple>
              <Image
                source={{
                  uri: product.product.image,
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.someContent}>
              <View style={styles.textWrapper}>
                <SingleProductDescription
                  title={product.product.title}
                  description={product.product.description}
                />
                <View style={styles.divider} />
                <SingleProductRating product={product.product} />
              </View>
              <SingleProductButton product={product.product} />
            </View>
          </>
        ) : null}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  backIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    padding: 5,
    borderRadius: 50,
  },
  imageContainer: {
    width: '100%',
    height: (Dimensions.get('screen').height / 100) * 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: singleProductImageBackgroundColor,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 10,
  },
  image: {
    width: '60%',
    height: 200,
    resizeMode: 'contain',
  },
  someContent: {
    flex: 1,
  },
  textWrapper: {
    flex: 1,
    alignContent: 'space-between',
    paddingHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: black,
    marginVertical: 10,
  },
});
