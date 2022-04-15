import React, {FunctionComponent} from 'react';
import {Divider} from '../components/Divider';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';
import {AppFeedbackNavigationItem} from './AppFeedbackNavigationItem';
import {MyReviewsNavigationItem} from './MyReviewsNavigationItem';
import {MyTransactionsNavigationItem} from './MyTransactionsNavigationItem';

const {sideMenuDividerColor} = ECOMMERCE_THEME.colors;

export const UserAccount: FunctionComponent<{}> = () => {
  return (
    <>
      <MyTransactionsNavigationItem />
      <Divider color={sideMenuDividerColor} />
      <MyReviewsNavigationItem />
      <Divider color={sideMenuDividerColor} />
      <AppFeedbackNavigationItem />
      <Divider color={sideMenuDividerColor} />
    </>
  );
};
