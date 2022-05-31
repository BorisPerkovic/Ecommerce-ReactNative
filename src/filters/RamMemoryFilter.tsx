import React from 'react';
import {FiltersSection} from './FiltersSection';
import {ChipFilter} from './ChipFilter';
import {ram} from './filters';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {addRamFilter} from './filtersSlice';

export const RamMemoryFilter = () => {
  const ramFilters = useSelector((state: RootState) => state.filter.ram);
  const dispatch = useDispatch();
  return (
    <FiltersSection title="RAM Memory">
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
