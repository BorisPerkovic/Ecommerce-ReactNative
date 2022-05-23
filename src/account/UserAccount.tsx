import React, {FunctionComponent} from 'react';
import {Divider} from '../components/Divider';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';
import {AppFeedbackNavigationItem} from './AppFeedbackNavigationItem';
import {MyReviewsNavigationItem} from './MyReviewsNavigationItem';
import {MyOrdersNavigationItem} from './MyOrdersNavigationItem';

const {sideMenuDividerColor} = ECOMMERCE_THEME.colors;

export const UserAccount: FunctionComponent<{}> = () => {
  return (
    <>
      <MyOrdersNavigationItem />
      <Divider color={sideMenuDividerColor} />
      <MyReviewsNavigationItem />
      <Divider color={sideMenuDividerColor} />
      <AppFeedbackNavigationItem />
      <Divider color={sideMenuDividerColor} />
    </>
  );
};
