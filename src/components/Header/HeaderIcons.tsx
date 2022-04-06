import {StyleSheet} from 'react-native';
import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableRipple} from 'react-native-paper';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';

const {iconRippleColor, openDrawerIconColor, white} = ECOMMERCE_THEME.colors;

export const HeaderIconsShoopingBag = () => {
  const navigation = useNavigation();

  return (
    <TouchableRipple
      borderless
      rippleColor={iconRippleColor}
      accessibilityRole="button"
      style={{borderRadius: 10}}
      onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer());
      }}>
      <Entypo name="menu" style={styles.icon} />
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 18,
    color: white,
    backgroundColor: openDrawerIconColor,
    borderRadius: 10,
    padding: 12,
  },
});
