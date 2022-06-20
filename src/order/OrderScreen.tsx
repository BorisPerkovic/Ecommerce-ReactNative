import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../components/ECStatusBar';
import {OrderItems} from './OrderItems';
import {ECHeader} from '../components/Header/ECHeader';
import {useAppTheme} from '../theme';

export const OrderScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.container, {backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle="Order" preventGoBack={true} />
      <OrderItems />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
