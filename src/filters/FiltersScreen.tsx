import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../components/ECStatusBar';
import {FiltersHeader} from './FiltersHeader';
import {BrandFilter} from './BrandFilter';
import {ScrollView} from 'react-native-gesture-handler';
import {RamMemoryFilter} from './RamMemoryFilter';
import {InternalStorageFilter} from './InternalStorageFilter';
import {OperatingSystemFilter} from './OperatingSystemFilter';
import {ApplyFiltersButton} from './ApplyFiltersButton';
import {PriceSliderFilter} from './PriceSliderFilter';

export const FiltersScreen = () => {
  return (
    <View style={styles.container}>
      <MyStatusBar backColor="#004666" themeStyle="light-content" />
      <FiltersHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PriceSliderFilter />
        <BrandFilter />
        <RamMemoryFilter />
        <InternalStorageFilter />
        <OperatingSystemFilter />
      </ScrollView>
      <ApplyFiltersButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
