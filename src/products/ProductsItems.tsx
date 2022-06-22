import {StyleSheet, View, FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProductsCard} from './ProductsCard';
import {useDispatch, useSelector, RootStateOrAny} from 'react-redux';
import {SkeletonMapped} from './ProductsSkeleton';
import {Categories} from './Categories';
import {getProducts} from './productsSlice';
import config from '../../config';
import SplashScreen from 'react-native-splash-screen';
import {alertService} from '../alertService';

export const ProductsItems = () => {
  const [url, setUrl] = useState(config.BASE_URL);

  const productsStatus = useSelector((state: RootStateOrAny) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(url));
  }, [dispatch, url]);

  if (productsStatus.loading === 'succeeded') {
    SplashScreen.hide();
  } else if (productsStatus.loading === 'failed') {
    SplashScreen.hide();
    alertService.alert(
      'warning',
      'Something went wrong. Please, try again later!',
    );
  }

  return (
    <>
      <Categories setUrl={setUrl} />
      {productsStatus.loading === 'pending' ? <SkeletonMapped /> : null}
      {productsStatus.loading === 'failed' ? (
        <Text>Something went wrong!</Text>
      ) : null}
      {productsStatus.loading === 'succeeded' ? (
        <View style={styles.containerContent}>
          <FlatList
            scrollEnabled={true}
            data={productsStatus.products}
            renderItem={itemData => (
              <ProductsCard
                productId={+itemData.item.products_id}
                image={itemData.item.products_image}
                price={itemData.item.products_price}
                title={itemData.item.products_title}
              />
            )}
            keyExtractor={item => item.products_id.toString()}
            maxToRenderPerBatch={30}
            numColumns={2}
          />
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  containerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
