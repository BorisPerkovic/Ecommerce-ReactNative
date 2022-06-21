import React, {FunctionComponent} from 'react';
import {Divider} from '../components/Divider';
import {AppFeedbackNavigationItem} from './AppFeedbackNavigationItem';
import {MyOrdersNavigationItem} from './MyOrdersNavigationItem';
import {useAppTheme} from '../theme';

export const UserAccount: FunctionComponent<{}> = () => {
  const {
    colors: {sideMenuDividerColor},
  } = useAppTheme();
  return (
    <>
      <MyOrdersNavigationItem />
      <Divider color={sideMenuDividerColor} />
      <AppFeedbackNavigationItem />
      <Divider color={sideMenuDividerColor} />
    </>
  );
};
