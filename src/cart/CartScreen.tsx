import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {Cartitems} from './Cartitems';
import {ECHeader} from '../components/Header/ECHeader';
import {useAppTheme} from '../theme';

export const CartScreen: FunctionComponent<{}> = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <ECHeader screenTitle="My Cart" />
      <Cartitems />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
