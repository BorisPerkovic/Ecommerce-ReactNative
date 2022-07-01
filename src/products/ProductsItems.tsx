import {StyleSheet, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProductsCard} from './ProductsCard';
import {useDispatch, useSelector, RootStateOrAny} from 'react-redux';
import {SkeletonMapped} from './ProductsSkeleton';
import {Categories} from './Categories';
import {getProducts} from './productsSlice';
import config from '../../config';
import SplashScreen from 'react-native-splash-screen';
import {ECText} from '../components/ECText';

export const ProductsItems = () => {
  const [url, setUrl] = useState(config.BASE_URL);

  const productsStatus = useSelector((state: RootStateOrAny) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(getProducts(url));
    }

    return () => {
      mounted = false;
    };
  }, [dispatch, url]);

  if (productsStatus.loading === 'succeeded') {
    SplashScreen.hide();
  } else if (productsStatus.loading === 'failed') {
    SplashScreen.hide();
  }

  return (
    <>
      <Categories setUrl={setUrl} />
      {productsStatus.loading === 'pending' ? <SkeletonMapped /> : null}
      {productsStatus.loading === 'failed' ? (
        <ECText fontSize={15} textAlign="center">
          Something Went Wrong!
        </ECText>
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
            keyExtractor={item => item.products_id}
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
