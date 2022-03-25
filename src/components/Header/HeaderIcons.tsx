import {StyleSheet} from 'react-native';
import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableRipple} from 'react-native-paper';

export const HeaderIconsShoopingBag = () => {
  const navigation = useNavigation();

  return (
    <TouchableRipple
      borderless
      rippleColor="rgba(0, 0, 0, .32)"
      accessibilityRole="button"
      style={{borderRadius: 10}}
      onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer());
      }}>
      <Entypo name="menu" style={styles.icon} />
    </TouchableRipple>
  );
};

export const HeaderIconsShoopingCart = () => {
  const navigation = useNavigation();
  return (
    <TouchableRipple
      borderless
      rippleColor="rgba(0, 0, 0, .32)"
      accessibilityRole="button"
      style={{borderRadius: 10}}
      onPress={() => {
        navigation.navigate('Cart');
      }}>
      <MaterialCommunityIcons name="cart" style={styles.icon} />
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#004666',
    borderRadius: 10,
    padding: 12,
  },
});
