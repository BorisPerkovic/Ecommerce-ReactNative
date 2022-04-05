import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';
import {AccountNavigationItemDivider} from './AccountNavigationItemDivider';
import {GuestGreeting} from './GuestGreeting';

const {white} = ECOMMERCE_THEME.colors;

export const Greeting = () => {
  return (
    <View style={styles.container}>
      <GuestGreeting />
      <View style={styles.divider}>
        <AccountNavigationItemDivider color={white} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingTop: 35},
  divider: {marginTop: 20, marginBottom: 26},
});
