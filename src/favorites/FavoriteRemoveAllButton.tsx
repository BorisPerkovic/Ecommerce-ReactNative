import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ECButton} from '../components/button/ECButton';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';
import {ecommerceButtonTheme} from '../theme/ecommerce/ecommerceButtonTheme';
import {useDispatch} from 'react-redux';
import {removeAllFromFavorites} from './favoritesSlice';

const {white} = ECOMMERCE_THEME.colors;

const {checkoutButton} = ecommerceButtonTheme;

export const FavoriteRemoveAllButton = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.button}>
      <ECButton
        mode="contained"
        variant={checkoutButton}
        onPress={() => {
          dispatch(removeAllFromFavorites());
        }}>
        Remove All From Favorites
      </ECButton>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: white,
  },
});
