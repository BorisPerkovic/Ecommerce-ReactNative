import React, {FunctionComponent} from 'react';
import {Divider} from '../components/Divider';
import {MyTransactionsNavigationItem} from './MyTransactionsNavigationItem';

export const UserAccount: FunctionComponent<{}> = () => {
  return (
    <>
      <MyTransactionsNavigationItem />
      <Divider color="#00628F" />
      {/* <MyReviewsNavigationItem />
      <Divider color="#00628F" />
      <AppReviewNavigationItem /> */}
    </>
  );
};
