import {StyleSheet} from 'react-native';
import React from 'react';
import {ProductItem} from './ProductItem';
import {MyStatusBar} from '../../components/ECStatusBar';
import {useAppTheme} from '../../theme';
import {ScrollView} from 'react-native-gesture-handler';

export const SingleProductScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  return (
    <>
      <MyStatusBar />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.container,
          {backgroundColor: backgroundColor},
        ]}>
        <ProductItem />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
