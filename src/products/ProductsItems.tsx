import {StyleSheet, View, FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProductsCard} from './ProductsCard';
import {useDispatch, useSelector, RootStateOrAny} from 'react-redux';
import {SkeletonMapped} from './ProductsSkeleton';
import {Categories} from './Categories';
import {getProducts} from './productsSlice';

export const ProductsItems = () => {
  const [url, setUrl] = useState('https://fakestoreapi.com/products');

  const productsStatus = useSelector((state: RootStateOrAny) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(url));
  }, [dispatch, url]);

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
                productId={+itemData.item.id}
                image={itemData.item.image}
                price={itemData.item.price}
                title={itemData.item.title}
              />
            )}
            keyExtractor={item => item.id.toString()}
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
  productsText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
    letterSpacing: 1,
    marginTop: 20,
  },
});
