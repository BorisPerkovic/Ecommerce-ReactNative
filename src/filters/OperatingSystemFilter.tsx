import React from 'react';
import {FiltersSection} from './FiltersSection';
import {ChipFilter} from './ChipFilter';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {system} from './filters';
import {addSystemFilter} from './filtersSlice';
import {useTranslation} from 'react-i18next';

export const OperatingSystemFilter = () => {
  const {t} = useTranslation('products');
  const systemFilters = useSelector((state: RootState) => state.filter.system);
  const dispatch = useDispatch();
  return (
    <FiltersSection title={t('operatingSystem')}>
      {system.map(item => {
        const isSelected = systemFilters.includes(item);
        return (
          <ChipFilter
            isSelected={isSelected}
            title={item}
            key={item}
            onFilter={() => dispatch(addSystemFilter(item))}
          />
        );
      })}
    </FiltersSection>
  );
};
