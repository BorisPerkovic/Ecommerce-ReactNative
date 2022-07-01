/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {ProductsCard} from '../products/ProductsCard';
import {ECText} from '../components/ECText';
import {useTranslation} from 'react-i18next';
import ActivityIndicator from 'react-native-paper/src/components/ActivityIndicator';
import {useAppTheme} from '../theme';

const SearchItems = () => {
  const {
    colors: {primaryTextColor},
  } = useAppTheme();
  const {t} = useTranslation('products');
  const products = useSelector(
    (state: RootState) => state.search.searchProducts,
  );
  const isLoading = useSelector((state: RootState) => state.search.loading);

  if (isLoading === 'succeeded' && products.length === 0) {
    return (
      <ECText fontSize={18} textAlign="center" style={{padding: 20}}>
        {/* {t('itemsAppear')} */} No items that match your search term!
      </ECText>
    );
  }

  return (
    <View style={styles.container}>
      {isLoading === 'idle' ? (
        <ECText fontSize={18} textAlign="center" style={{padding: 20}}>
          {t('itemsAppear')}
        </ECText>
      ) : null}
      {isLoading === 'pending' ? (
        <ActivityIndicator size={'large'} color={primaryTextColor} />
      ) : null}
      {isLoading === 'succeeded' && products.length > 0 ? (
        <View style={styles.containerContent}>
          <FlatList
            showsVerticalScrollIndicator={false}
            bounces={false}
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
      ) : null}
    </View>
  );
};

export default SearchItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  containerContent: {
    paddingBottom: 10,
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
