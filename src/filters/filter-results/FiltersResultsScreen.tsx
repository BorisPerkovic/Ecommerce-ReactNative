import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../../components/ECStatusBar';
import {FilterResultsItems} from './FilterResultsItems';
import {ECHeader} from '../../components/Header/ECHeader';
import {useAppTheme} from '../../theme';
import {useTranslation} from 'react-i18next';

export const FiltersResultsScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  const {t} = useTranslation('products');
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle={t('filtersResults')} />
      <FilterResultsItems />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
