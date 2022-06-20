import {StyleSheet, View, ScrollView, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ProductsStackParams} from '../ProductsStack';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {singleProduct} from './singleProductsSlice';
import {IconButton} from 'react-native-paper';
import {SingleProductSkeleton} from './SingleProductSkeleton';
import {SingleProductDescription} from './SingleProductDescription';
import {SingleProductRating} from './SingleProductRating';
import {SingleProductButton} from './SingleProductButton';
import SingleProductNoItem from './SingleProductNoItem';
import config from '../../../config';
import {useAppTheme} from '../../theme';

export const ProductItem = () => {
  const {
    colors: {cartImageBackgroundColor, primaryTextColor},
  } = useAppTheme();
  const {params} = useRoute<RouteProp<ProductsStackParams, 'SingleProduct'>>();
  const product = useSelector((state: RootStateOrAny) => state.singleProduct);

  const dispatch = useDispatch();
  const {goBack} = useNavigation();

  useEffect(() => {
    dispatch(singleProduct(`${config.SINGLE_PRODUCT}${params.productId}`));
  }, [dispatch, params]);

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        {product.loading === 'pending' ? <SingleProductSkeleton /> : null}
        {product.loading === 'failed' ? <SingleProductNoItem /> : null}
        {product.loading === 'succeeded' ? (
          <>
            <View
              style={[
                styles.imageContainer,
                {backgroundColor: cartImageBackgroundColor},
              ]}>
              <View style={styles.backIcon}>
                <IconButton
                  icon="chevron-left"
                  color={primaryTextColor}
                  onPress={() => goBack()}
                  size={35}
                />
              </View>
              <Image
                source={{
                  uri: product.product.image,
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.description}>
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
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 10,
  },
  image: {
    width: '60%',
    height: 200,
    resizeMode: 'contain',
  },
  description: {
    flex: 1,
  },
  textWrapper: {
    flex: 1,
    alignContent: 'space-between',
    paddingHorizontal: 20,
  },
  divider: {
    height: 1,
    marginVertical: 10,
  },
});
