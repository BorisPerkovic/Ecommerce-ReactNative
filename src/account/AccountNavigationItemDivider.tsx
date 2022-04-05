import {Divider} from '../components/Divider';
import React, {FunctionComponent} from 'react';

interface AccountNavigationItemDividerProps {
  color: string;
}

export const AccountNavigationItemDivider: FunctionComponent<
  AccountNavigationItemDividerProps
> = ({color}) => {
  return <Divider color={color} />;
};
