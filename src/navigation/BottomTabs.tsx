import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProductsScreen} from '../products/ProductsScreen';
import {CartScreen} from '../cart/CartScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Platform, StatusBar} from 'react-native';
import {RootStateOrAny, useSelector} from 'react-redux';
import {Favorites} from '../favorites/Favorites';
import {MyStatusBar} from '../components/ECStatusBar';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  const cart = useSelector((state: RootStateOrAny) => state.cart.cartItems);
  const favorites = useSelector(
    (state: RootStateOrAny) => state.favorites.favoritesItems,
  );

  return (
    <>
      <MyStatusBar backColor="#004666" themeStyle={'light-content'} />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color}) => {
            let iconName = 'Home';
            let rn = route.name;

            if (rn === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else {
              iconName = focused ? 'heart' : 'heart-outline';
            }

            return <Ionicons name={iconName} size={28} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#004666',
          inactiveTintColor: '#004666',
          style: {
            marginTop: 2,
            elevation: 4,
            shadowRadius: 2,
            shadowColor: 'rgba(32,32,35,0.2)',
            shadowOffset: {width: 0, height: -3},
            shadowOpacity: 14,
            height: Platform.OS === 'android' ? 65 : 70,
            paddingBottom: Platform.OS === 'android' ? 5 : 15,
          },
          labelStyle: {
            marginTop: -5,
            marginBottom: 5,
            fontSize: 14,
          },
        }}>
        <Tab.Screen name="Home" component={ProductsScreen} />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarBadge: favorites.length,
            tabBarBadgeStyle: {marginLeft: 6},
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarBadge: cart.length,
            tabBarBadgeStyle: {marginLeft: 6},
          }}
        />
      </Tab.Navigator>
    </>
  );
};
