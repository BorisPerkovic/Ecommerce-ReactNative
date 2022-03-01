import {StyleSheet, View, FlatList, Text} from 'react-native';
import React from 'react';
import {ProductsCard} from './ProductsCard';
import {useProductsQuery} from './fetchProducts';
import {SkeletonMapped} from './ProductsSkeleton';

export const ProductsItems = () => {
  const {data, error, isLoading, isSuccess, isFetching} = useProductsQuery();
  return (
    <>
      <Text style={styles.productsText}>Products</Text>
      {isLoading && <SkeletonMapped />}
      {error && <Text>Something went wrong!</Text>}
      {isSuccess && !isFetching && (
        <View style={styles.containerContent}>
          <FlatList
            scrollEnabled={true}
            data={data}
            renderItem={itemData => (
              <ProductsCard
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
      )}
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
