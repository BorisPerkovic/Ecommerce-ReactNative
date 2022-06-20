/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {ProductsCard} from '../products/ProductsCard';
import {ProductsSkeleton} from '../products/ProductsSkeleton';
import {ECText} from '../components/ECText';

const SearchItems = () => {
  const products = useSelector(
    (state: RootState) => state.search.searchProducts,
  );
  const isLoading = useSelector((state: RootState) => state.search.loading);

  return (
    <View style={styles.container}>
      {isLoading === 'pending' ? <ProductsSkeleton /> : null}
      {isLoading === 'succeeded' && products.length > 0 ? (
        <View style={styles.containerContent}>
          <FlatList
            scrollEnabled={true}
            data={products}
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
      ) : (
        <ECText fontSize={18} textAlign="center" style={{padding: 20}}>
          Your items will appear here if products met your search term
        </ECText>
      )}
    </View>
  );
};

export default SearchItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productsText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    letterSpacing: 1,
    marginTop: 20,
  },
});
