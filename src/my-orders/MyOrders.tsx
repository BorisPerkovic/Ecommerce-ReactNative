import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MyOrdersItems} from './MyOrdersItems';
import {useAppTheme} from '../theme';
import {ECHeader} from '../components/Header/ECHeader';
import {MyStatusBar} from '../components/ECStatusBar';

export const MyOrders = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle="My Orders" />
      <MyOrdersItems />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
