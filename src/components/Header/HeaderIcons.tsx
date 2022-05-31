/* eslint-disable react-native/no-inline-styles */
import {StyleSheet} from 'react-native';
import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableRipple} from 'react-native-paper';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

const {iconRippleColor, openDrawerIconColor} = ECOMMERCE_THEME.colors;

export const HeaderIconsMenu = () => {
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
      <Ionicons name="menu" style={styles.icon} size={25} color={'#004666'} />
    </TouchableRipple>
  );
};

export const HeaderIconsFilter = () => {
  const navigation = useNavigation();
  const filters = useSelector((state: RootState) => state.filter);

  const isFilterEmpty =
    filters.startPrice !== 0 ||
    filters.endPrice !== 2500 ||
    filters.brand.length > 0 ||
    filters.ram.length > 0 ||
    filters.internal.length > 0 ||
    filters.system.length > 0;

  return (
    <TouchableRipple
      borderless
      rippleColor={iconRippleColor}
      accessibilityRole="button"
      style={{borderRadius: 10}}
      onPress={() => {
        navigation.navigate('Filters');
      }}>
      <MaterialCommunityIcons
        name={isFilterEmpty ? 'filter-check-outline' : 'filter-outline'}
        style={styles.icon}
        size={25}
        color={'#004666'}
      />
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: openDrawerIconColor,
    padding: 7,
  },
});
