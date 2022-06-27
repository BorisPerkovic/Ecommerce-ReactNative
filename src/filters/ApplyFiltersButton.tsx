import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ECButton} from '../components/button/ECButton';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {useNavigation} from '@react-navigation/native';
import {alertService} from '../alertService';
import {useAppTheme} from '../theme';
import {useTranslation} from 'react-i18next';

export const ApplyFiltersButton = () => {
  const {
    colors: {divideColor},
    buttons: {primaryButtonContained},
  } = useAppTheme();
  const {t} = useTranslation('products');
  const filterItems = useSelector((state: RootState) => state.filter);
  const {navigate} = useNavigation();

  const onFiltersHandler = () => {
    if (
      filterItems.startPrice !== 0 ||
      filterItems.endPrice !== 2500 ||
      filterItems.brand.length > 0 ||
      filterItems.ram.length > 0 ||
      filterItems.internal.length > 0 ||
      filterItems.system.length > 0
    ) {
      navigate('FiltersResults');
    } else {
      alertService.alert('warning', 'noSelectedFilters', 'products');
    }
  };

  return (
    <View style={[styles.button, {borderTopColor: divideColor}]}>
      <ECButton
        mode="outlined"
        variant={primaryButtonContained}
        onPress={onFiltersHandler}>
        {t('applyFilters')}
      </ECButton>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 20,
    paddingBottom: 25,
    borderTopWidth: 1,
  },
});
