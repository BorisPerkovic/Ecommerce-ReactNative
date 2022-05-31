import {StyleSheet} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';
import {ECText} from '../components/ECText';
import {useDispatch} from 'react-redux';
import {resetAllFilters} from './filtersSlice';

const {iconRippleColor} = ECOMMERCE_THEME.colors;

export const FiltersResetButton = () => {
  const dispatch = useDispatch();
  return (
    <TouchableRipple
      borderless
      style={styles.resetButton}
      rippleColor={iconRippleColor}
      accessibilityRole="button"
      onPress={() => {
        dispatch(resetAllFilters());
      }}>
      <ECText textColor="#004666" fontSize={16} textAlign="center">
        Reset All
      </ECText>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  resetButton: {
    padding: 7,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#004666',
    backgroundColor: 'white',
  },
});
