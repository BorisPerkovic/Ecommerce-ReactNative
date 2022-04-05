import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {DataProtectionNavigationItem} from './DataProtectionNavigationItem';
import {LanguageSettingsNavigationItem} from './LanguageSettingsNavigationItem';
import {CallSupportNavigationItem} from './CallSupportNavigationItem';
import {LoginButton} from './LoginButton';
import {Partners} from './Partners';
import {Divider} from '../components/Divider';
import {MyTransactionsNavigationItem} from './MyTransactionsNavigationItem';
import {MyReviewsNavigationItem} from './MyReviewsNavigationItem';
import {AppFeedbackNavigationItem} from './AppFeedbackNavigationItem';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

const {sideMenuDividerColor} = ECOMMERCE_THEME.colors;

export const GuestAccount: FunctionComponent<{}> = () => {
  return (
    <>
      <MyTransactionsNavigationItem />
      <Divider color={sideMenuDividerColor} />
      <MyReviewsNavigationItem />
      <Divider color={sideMenuDividerColor} />
      <AppFeedbackNavigationItem />
      <Divider color={sideMenuDividerColor} />
      <DataProtectionNavigationItem />
      <Divider color={sideMenuDividerColor} />
      <LanguageSettingsNavigationItem title="Country Settings" />
      <Divider color={sideMenuDividerColor} />
      <Partners />
      <Divider color={sideMenuDividerColor} />
      <CallSupportNavigationItem>Call Support</CallSupportNavigationItem>
      <Divider color={sideMenuDividerColor} />
      <View style={styles.buttonContainer}>
        <LoginButton />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {paddingVertical: 40},
});
