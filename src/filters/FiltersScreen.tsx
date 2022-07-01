import {StyleSheet} from 'react-native';
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
import {useAppTheme} from '../theme';
import {SharedElement} from 'react-navigation-shared-element';

export const FiltersScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  return (
    <SharedElement id="Filters" style={[styles.container, {backgroundColor}]}>
      <MyStatusBar />
      <FiltersHeader />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <PriceSliderFilter />
        <BrandFilter />
        <RamMemoryFilter />
        <InternalStorageFilter />
        <OperatingSystemFilter />
      </ScrollView>

      <ApplyFiltersButton />
    </SharedElement>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
});
