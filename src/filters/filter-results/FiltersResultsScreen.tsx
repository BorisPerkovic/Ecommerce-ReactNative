import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../../components/ECStatusBar';
import {FilterResultsItems} from './FilterResultsItems';
import {ECHeader} from '../../components/Header/ECHeader';
import {useAppTheme} from '../../theme';

export const FiltersResultsScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle="Filters Results" />
      <FilterResultsItems />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
