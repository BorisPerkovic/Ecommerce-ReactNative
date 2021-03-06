import {StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Account} from '../account/Account';
import {BottomTabs} from './BottomTabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppTheme} from '../theme';

const Drawer = createDrawerNavigator();

export const Main = () => {
  const {
    colors: {sideMenuBackgroundColor, sideMenuTextColor},
  } = useAppTheme();

  const {top} = useSafeAreaInsets();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: sideMenuTextColor,
        inactiveTintColor: sideMenuTextColor,
      }}
      drawerStyle={[
        styles.drawerStyle,
        {backgroundColor: sideMenuBackgroundColor, paddingTop: top},
      ]}
      drawerContent={() => <Account />}>
      <Drawer.Screen name="Home" component={BottomTabs} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    width: '80%',
    height: '100%',
  },
});
