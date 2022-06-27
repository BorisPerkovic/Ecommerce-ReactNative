import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProductsScreen} from '../products/ProductsScreen';
import {CartScreen} from '../cart/CartScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';
import {RootStateOrAny, useSelector} from 'react-redux';
import {Favorites} from '../favorites/Favorites';
import {MyStatusBar} from '../components/ECStatusBar';
import {useAppTheme} from '../theme';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  const cart = useSelector((state: RootStateOrAny) => state.cart.cartItems);
  const favorites = useSelector(
    (state: RootStateOrAny) => state.favorites.favoritesItems,
  );

  const {
    colors: {bottomTabsIconColor, backgroundColor, bottomTabsBorderColorl},
  } = useAppTheme();
  const {t} = useTranslation('products');
  return (
    <>
      <MyStatusBar />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused}) => {
            let iconName = 'Home';
            let rn = route.name;

            if (rn === t('home')) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === t('cart')) {
              iconName = focused ? 'cart' : 'cart-outline';
            } else {
              iconName = focused ? 'heart' : 'heart-outline';
            }

            return (
              <Ionicons name={iconName} size={28} color={bottomTabsIconColor} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: bottomTabsIconColor,
          inactiveTintColor: bottomTabsIconColor,
          style: {
            backgroundColor: backgroundColor,
            shadowColor: bottomTabsBorderColorl,
            shadowOffset: {width: 0, height: -5},
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 10,
            height: Platform.OS === 'android' ? 65 : 70,
            paddingTop: 5,
            paddingBottom: Platform.OS === 'android' ? 5 : 15,
          },
          labelStyle: {
            marginTop: -5,
            marginBottom: 5,
            fontSize: 14,
            fontFamily: 'Montserrat-Regular',
          },
        }}>
        <Tab.Screen name={t('home')} component={ProductsScreen} />
        <Tab.Screen
          name={t('favorites')}
          component={Favorites}
          options={{
            tabBarBadge: favorites.length,
            tabBarBadgeStyle: {marginLeft: 6},
          }}
        />
        <Tab.Screen
          name={t('cart')}
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
