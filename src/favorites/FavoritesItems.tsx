import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {FavoritesNoItems} from './FavoritesNoItems';
import {RootState} from '../store';
import {FavoritesItem} from './FavoritesItem';

export const FavoritesItems = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritesItems,
  );

  return (
    <>
      {favorites.length > 0 ? (
        <View style={styles.container}>
          {favorites.map(item => {
            return (
              <FavoritesItem
                key={item.id}
                id={item.id}
                image={item.image}
                price={parseFloat(item.price)}
                title={item.title}
              />
            );
          })}
        </View>
      ) : (
        <FavoritesNoItems />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
