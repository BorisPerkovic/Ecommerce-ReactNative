import React, {FunctionComponent} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Greeting} from './Greeting';
import {GuestAccount} from './GuestAccount';
/*import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
 import { Greeting } from './Greeting';
import { UserAccount } from './UserAccount';
import { AccountFooter } from './AccountFooter';
import { useAppTheme } from 'theme'; */

export const Account: FunctionComponent<{}> = () => {
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <Greeting />
      {/* <View style={styles.accountItemsContainer}>
          {loggedIn ? <UserAccount /> : <GuestAccount />}
        </View> */}
      {/* <AccountFooter /> */}
      <GuestAccount />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
  },
  scrollContainer: {
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  accountItemsContainer: {flex: 1},
});
