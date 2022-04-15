import React, {FunctionComponent} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {Greeting} from './Greeting';
import {GuestAccount} from './GuestAccount';
import {LoginButton} from './LoginButton';
import {LogoutButton} from './LogoutButton';
import {UserAccount} from './UserAccount';

export const Account: FunctionComponent<{}> = () => {
  const isLoggedIn = useSelector((state: RootState) => state.signIn.isLoggedIn);

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <Greeting />
      <View style={styles.accountItemsContainer}>
        {isLoggedIn ? <UserAccount /> : null}
        <GuestAccount />
      </View>
      <View style={styles.buttonContainer}>
        {isLoggedIn ? <LogoutButton /> : <LoginButton />}
      </View>
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
  buttonContainer: {
    paddingVertical: 40,
  },
});
