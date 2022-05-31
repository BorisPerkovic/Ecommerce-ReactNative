import React from 'react';
import {FiltersSection} from './FiltersSection';
import {ChipFilter} from './ChipFilter';
import {brands} from './filters';
import {RootState} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import {addBrandToFilter} from './filtersSlice';

export const BrandFilter = () => {
  const brandFilters = useSelector((state: RootState) => state.filter.brand);
  const dispatch = useDispatch();
  return (
    <FiltersSection title="Brand">
      {brands.map(item => {
        const isSelected = brandFilters.includes(item);
        return (
          <ChipFilter
            isSelected={isSelected}
            title={item}
            key={item}
            onFilter={() => dispatch(addBrandToFilter(item))}
          />
        );
      })}
    </FiltersSection>
  );
};
