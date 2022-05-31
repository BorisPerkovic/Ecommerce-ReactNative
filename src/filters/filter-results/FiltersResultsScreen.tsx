import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../../components/ECStatusBar';
import {FiltersResultsHeader} from './FiltersResultsHeader';
import {FilterResultsItems} from './FilterResultsItems';

export const FiltersResultsScreen = () => {
  return (
    <View style={styles.container}>
      <MyStatusBar backColor="#004666" themeStyle="light-content" />
      <FiltersResultsHeader />
      <FilterResultsItems />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
