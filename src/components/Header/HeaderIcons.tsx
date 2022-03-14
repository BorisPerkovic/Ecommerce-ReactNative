import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const HeaderIconsShoopingBag = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity>
      <Entypo
        name="menu"
        style={styles.icon}
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}
      />
    </TouchableOpacity>
  );
};

export const HeaderIconsShoopingCart = () => {
  return (
    <TouchableOpacity>
      <MaterialCommunityIcons name="cart" style={styles.icon} />
    </TouchableOpacity>
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
