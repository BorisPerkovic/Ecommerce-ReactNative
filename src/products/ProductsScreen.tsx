import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {Header} from '../components/Header/Header';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';
import {ProductsItems} from './ProductsItems';
import {ProductsReview} from './ProductsReview';

const {white} = ECOMMERCE_THEME.colors;

export const ProductsScreen = () => {
  // NOTE: in case we want to have tab bar hidden/visible, code is below
  /*
    const navigation = useNavigation();
    let scroll = 0;

  const onScroll = (e: {nativeEvent: {contentOffset: {y: any}}}) => {
    let contentOffsetY = e.nativeEvent.contentOffset.y;
    let diff = contentOffsetY - scroll;
    if (diff > 0) {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
    scroll = contentOffsetY;
  }; */

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={styles.safeAreaView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <ProductsReview />
          <ProductsItems />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: white,
  },
  wrapper: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
  },
});
