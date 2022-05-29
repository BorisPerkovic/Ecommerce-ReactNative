import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../components/ECStatusBar';
import {OrderHeader} from './OrderHeader';
import {OrderItems} from './OrderItems';

export const OrderScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <MyStatusBar backColor="#004666" themeStyle="light-content" />
      <OrderHeader />
      <OrderItems />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
});
