import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {FavoritesNoItems} from './FavoritesNoItems';
import {RootState} from '../store';
import {FavoritesItem} from './FavoritesItem';
import {FavoriteRemoveAllButton} from './FavoriteRemoveAllButton';

export const FavoritesItems = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritesItems,
  );

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <>
          <View>
            {favorites.map(item => {
              return (
                <FavoritesItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  title={item.title}
                  ratings={item.rate}
                />
              );
            })}
          </View>
          <FavoriteRemoveAllButton />
        </>
      ) : (
        <FavoritesNoItems />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
