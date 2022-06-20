import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {FavoritesItems} from './FavoritesItems';
import {ECHeader} from '../components/Header/ECHeader';
import {useAppTheme} from '../theme/theme';

export const Favorites: FunctionComponent<{}> = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <ECHeader screenTitle="My Favorites" />
      <FavoritesItems />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
