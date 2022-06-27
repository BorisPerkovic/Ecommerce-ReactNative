import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {FavoritesItems} from './FavoritesItems';
import {ECHeader} from '../components/Header/ECHeader';
import {useAppTheme} from '../theme/theme';
import {useTranslation} from 'react-i18next';

export const Favorites: FunctionComponent<{}> = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  const {t} = useTranslation('products');
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <ECHeader screenTitle={t('myFavorites')} />
      <FavoritesItems />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
