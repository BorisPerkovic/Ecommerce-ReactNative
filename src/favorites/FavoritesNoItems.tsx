import {StyleSheet, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ECText} from '../components/ECText';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

const {black, white} = ECOMMERCE_THEME.colors;

export const FavoritesNoItems = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="heart-dislike" size={50} color={black} />
      <ECText textColor={black} bold fontSize={30}>
        You have favorite items.
      </ECText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
  },
});
