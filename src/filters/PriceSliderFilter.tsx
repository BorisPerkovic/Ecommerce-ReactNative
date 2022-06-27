import React from 'react';
import {RangeSlider} from '@sharcoux/slider';
import {FiltersSection} from './FiltersSection';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {Platform, StyleSheet, View} from 'react-native';
import {useDebouncedCallback} from 'use-debounce';
import {addPriceToFilter} from './filtersSlice';
import {useAppTheme} from '../theme';
import {ECText} from '../components/ECText';
import {useTranslation} from 'react-i18next';

export const PriceSliderFilter = () => {
  const {
    colors: {priceRangeStrokeColor, priceRangeTextColor, primaryTextColor},
  } = useAppTheme();
  const {t} = useTranslation('products');
  const filtersPrice = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const debounced = useDebouncedCallback(range => {
    dispatch(
      addPriceToFilter({
        startPrice: +range[0].toFixed(0),
        endPrice: +range[1].toFixed(0),
      }),
    );
  }, 200);

  return (
    <FiltersSection title={t('priceRange')}>
      <View style={styles.wrapper}>
        <View style={styles.sliderValues}>
          <ECText fontSize={15} textColor={primaryTextColor}>
            ${filtersPrice.startPrice}
          </ECText>
          <ECText fontSize={15} textColor={primaryTextColor}>
            ${filtersPrice.endPrice}
          </ECText>
        </View>
        <RangeSlider
          range={[filtersPrice.startPrice, filtersPrice.endPrice]}
          minimumValue={0}
          maximumValue={2500}
          crossingAllowed={false}
          outboundColor={priceRangeTextColor}
          inboundColor={priceRangeStrokeColor}
          thumbTintColor={priceRangeTextColor}
          trackHeight={7}
          thumbSize={18}
          onSlidingComplete={(range: [number, number]) => debounced(range)}
          style={styles.slider}
        />
      </View>
    </FiltersSection>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderValues: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Platform.OS === 'android' ? '100%' : '95%',
  },
  slider: {
    width: Platform.OS === 'android' ? '100%' : '95%',
  },
});
