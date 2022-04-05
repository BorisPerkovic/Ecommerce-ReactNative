import {StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProductsStack} from '../products/ProductsStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header} from '../components/Header/Header';
import {Account} from '../account/Account';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

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
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
      }}
      drawerContent={() => <Account />}>
      <Drawer.Screen
        options={{
          drawerIcon: () => {
            return <Ionicons name="home" size={25} color={sideMenuTextColor} />;
          },
          unmountOnBlur: true,
        }}
        name="Home"
        component={ProductsStack}
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
