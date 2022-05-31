import React from 'react';
import {FiltersSection} from './FiltersSection';
import {ChipFilter} from './ChipFilter';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {internal} from './filters';
import {addInternalToFilter} from './filtersSlice';

export const InternalStorageFilter = () => {
  const internalFilters = useSelector(
    (state: RootState) => state.filter.internal,
  );
  const dispatch = useDispatch();
  return (
    <FiltersSection title="Internal Storage">
      {internal.map(item => {
        const isSelected = internalFilters.includes(item);
        return (
          <ChipFilter
            isSelected={isSelected}
            title={item}
            key={item}
            onFilter={() => dispatch(addInternalToFilter(item))}
          />
        );
      })}
    </FiltersSection>
  );
};
