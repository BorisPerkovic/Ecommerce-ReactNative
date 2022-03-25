import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AccountNavigationItemDivider} from './AccountNavigationItemDivider';
import {GuestGreeting} from './GuestGreeting';

export const Greeting = () => {
  return (
    <View style={styles.container}>
      <GuestGreeting />
      <View style={styles.divider}>
        <AccountNavigationItemDivider />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingTop: 35},
  divider: {marginTop: 20, marginBottom: 26},
});
