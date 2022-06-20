import {StyleSheet} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {ECText} from '../components/ECText';
import {useDispatch} from 'react-redux';
import {resetAllFilters} from './filtersSlice';
import {useAppTheme} from '../theme';

export const FiltersResetButton = () => {
  const {
    colors: {primaryTextColor, backgroundColor},
  } = useAppTheme();
  const dispatch = useDispatch();
  return (
    <TouchableRipple
      borderless
      style={[
        styles.resetButton,
        {backgroundColor, borderColor: primaryTextColor},
      ]}
      accessibilityRole="button"
      onPress={() => {
        dispatch(resetAllFilters());
      }}>
      <ECText textColor={primaryTextColor} fontSize={16} textAlign="center">
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
  },
});
