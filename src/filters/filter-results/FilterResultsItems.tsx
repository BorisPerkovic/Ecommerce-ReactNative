import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {filterProductsThunk} from '../filtersSlice';
import {ProductsCard} from '../../products/ProductsCard';
import {FilterNoResults} from './FilterNoResults';
import ActivityIndicator from 'react-native-paper/src/components/ActivityIndicator';

export const FilterResultsItems = () => {
  const filterItems = useSelector((state: RootState) => state.filter);
  const filterItemsResults = useSelector(
    (state: RootState) => state.filter.filteredItems,
  );
  const isLoading = useSelector((state: RootState) => state.filter.loading);
  const dispatch = useDispatch();
  const items = {
    startPrice: filterItems.startPrice,
    endPrice: filterItems.endPrice,
    brand: filterItems.brand,
    ram: filterItems.ram,
    internal: filterItems.internal,
    system: filterItems.system,
  };

  useEffect(() => {
    dispatch(filterProductsThunk(items));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading === 'succeeded' && filterItemsResults.length === 0) {
    return <FilterNoResults />;
  }

  return (
    <>
      {isLoading === 'pending' ? (
        <View style={styles.loader}>
          <ActivityIndicator size={'large'} color="#004666" />
        </View>
      ) : null}
      {isLoading === 'succeeded' ? (
        <View style={styles.container}>
          <FlatList
            scrollEnabled={true}
            data={filterItemsResults}
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
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
