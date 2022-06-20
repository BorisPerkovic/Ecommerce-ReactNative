import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppTheme} from '../theme';
import {AccountNavigationItemDivider} from './AccountNavigationItemDivider';
import {GuestGreeting} from './GuestGreeting';
import {UserGreeting} from './UserGreeting';

interface GreetingProps {
  loggedIn: boolean;
}

export const Greeting: FunctionComponent<GreetingProps> = ({loggedIn}) => {
  const {
    colors: {sideMenuDividerColor},
  } = useAppTheme();
  return (
    <View style={styles.container}>
      {loggedIn ? <UserGreeting /> : <GuestGreeting />}
      <View style={styles.divider}>
        <AccountNavigationItemDivider color={sideMenuDividerColor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingTop: 35},
  divider: {marginTop: 20, marginBottom: 26},
});
