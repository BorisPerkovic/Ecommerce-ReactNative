import {StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Account} from '../account/Account';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';
import {BottomTabs} from './BottomTabs';

const Drawer = createDrawerNavigator();

const {sideMenuBackgroundColor, sideMenuTextColor} = ECOMMERCE_THEME.colors;

export const Main = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: sideMenuTextColor,
        inactiveTintColor: sideMenuTextColor,
      }}
      drawerStyle={styles.drawerStyle}
      drawerContent={() => <Account />}>
      <Drawer.Screen
        options={{
          drawerIcon: () => {
            return <Ionicons name="home" size={25} color={sideMenuTextColor} />;
          },
          unmountOnBlur: true,
        }}
        name="Home"
        component={BottomTabs}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: sideMenuBackgroundColor,
    width: '80%',
    height: '100%',
  },
});
