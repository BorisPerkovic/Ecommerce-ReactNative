import React from 'react';
import RangeSlider from '@jesster2k10/react-native-range-slider';
import {FiltersSection} from './FiltersSection';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {StyleSheet, View} from 'react-native';
import {useDebouncedCallback} from 'use-debounce';
import {addPriceToFilter} from './filtersSlice';

export const PriceSliderFilter = () => {
  const filtersPrice = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const debounced = useDebouncedCallback((min: number, max: number) => {
    dispatch(addPriceToFilter({startPrice: min, endPrice: max}));
  }, 200);

  return (
    <FiltersSection title="Price Range">
      <View style={styles.wrapper}>
        <RangeSlider
          type="range"
          min={0}
          max={2500}
          selectedMinimum={filtersPrice.startPrice}
          selectedMaximum={filtersPrice.endPrice}
          tintColor="#004666"
          handleColor="#004666"
          handlePressedColor="#f368e0"
          tintColorBetweenHandles="#f2f2f2"
          minLabelFontSize={17}
          maxLabelFontSize={17}
          suffix="$"
          onChange={(min, max) => debounced(min, max)}
          style={styles.slider}
        />
      </View>
    </FiltersSection>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
  slider: {
    width: 320,
    alignSelf: 'center',
  },
});
