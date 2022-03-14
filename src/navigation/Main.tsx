import {StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProductsStack} from '../products/ProductsStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header} from '../components/Header/Header';

const Drawer = createDrawerNavigator();

export const Main = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
      }}
      drawerStyle={styles.drawerStyle}
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: () => {
            return <Ionicons name="home" size={25} color="#fff" />;
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
    backgroundColor: '#004666',
    width: '80%',
    height: '100%',
  },
});
