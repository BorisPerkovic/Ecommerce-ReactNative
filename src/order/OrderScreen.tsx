import {StyleSheet, View} from 'react-native';
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
    <View style={[styles.container, {backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle="Order" preventGoBack={true} />
      <View style={styles.wrapper}>
        <OrderItems />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexGrow: 1,
  },
});
