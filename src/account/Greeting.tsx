import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {boolean} from 'yup';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';
import {AccountNavigationItemDivider} from './AccountNavigationItemDivider';
import {GuestGreeting} from './GuestGreeting';
import {UserGreeting} from './UserGreeting';

interface GreetingProps {
  loggedIn: boolean;
}

const {white} = ECOMMERCE_THEME.colors;

export const Greeting: FunctionComponent<GreetingProps> = ({loggedIn}) => {
  return (
    <View style={styles.container}>
      {loggedIn ? <UserGreeting /> : <GuestGreeting />}
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
