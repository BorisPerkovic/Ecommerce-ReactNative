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

export const GuestAccount: FunctionComponent<{}> = () => {
  return (
    <>
      <MyTransactionsNavigationItem />
      <Divider color="#00628F" />
      <MyReviewsNavigationItem />
      <Divider color="#00628F" />
      <AppFeedbackNavigationItem />
      <Divider color="#00628F" />
      <DataProtectionNavigationItem />
      <Divider color="#00628F" />
      <LanguageSettingsNavigationItem title="Country Settings" />
      <Divider color="#00628F" />
      <Partners />
      <Divider color="#00628F" />
      <CallSupportNavigationItem>Call Support</CallSupportNavigationItem>
      <Divider color="#00628F" />
      <View style={styles.buttonContainer}>
        <LoginButton />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {paddingVertical: 40},
});
