import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {MyOrdersItems} from './MyOrdersItems';
import {MyOrdersHeader} from './MyOrdersHeader';
import {MyStatusBar} from '../components/ECStatusBar';

export const MyOrders = () => {
  return (
    <View style={styles.container}>
      <MyStatusBar backColor="#004666" themeStyle="light-content" />
      <ScrollView contentContainerStyle={styles.wrapper}>
        <MyOrdersHeader />
        <MyOrdersItems />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
});
