import React from 'react';
import {FiltersSection} from './FiltersSection';
import {ChipFilter} from './ChipFilter';
import {ram} from './filters';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {addRamFilter} from './filtersSlice';
import {useTranslation} from 'react-i18next';

export const RamMemoryFilter = () => {
  const {t} = useTranslation('products');
  const ramFilters = useSelector((state: RootState) => state.filter.ram);
  const dispatch = useDispatch();
  return (
    <FiltersSection title={t('ramMemory')}>
      {ram.map(item => {
        const isSelected = ramFilters.includes(item);
        return (
          <ChipFilter
            isSelected={isSelected}
            title={item}
            key={item}
            onFilter={() => dispatch(addRamFilter(item))}
          />
        );
      })}
    </FiltersSection>
  );
};
