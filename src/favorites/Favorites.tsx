import {ScrollView, StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import {FavoritesHeader} from './FavoritesHeader';
import {FavoritesItems} from './FavoritesItems';

export const Favorites: FunctionComponent<{}> = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FavoritesHeader />
      <FavoritesItems />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
