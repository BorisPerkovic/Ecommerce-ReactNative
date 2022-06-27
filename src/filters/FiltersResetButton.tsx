import React from 'react';
import {ECText} from '../components/ECText';
import {useDispatch} from 'react-redux';
import {resetAllFilters} from './filtersSlice';
import {useAppTheme} from '../theme';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const FiltersResetButton = () => {
  const {
    colors: {primaryTextColor},
  } = useAppTheme();
  const {t} = useTranslation('products');
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(resetAllFilters());
      }}>
      <ECText
        textColor={primaryTextColor}
        fontSize={13}
        textAlign="center"
        bold>
        {t('resetAll')}
      </ECText>
    </TouchableOpacity>
  );
};
