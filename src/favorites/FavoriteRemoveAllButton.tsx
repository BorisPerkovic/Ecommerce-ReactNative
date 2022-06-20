import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ECButton} from '../components/button/ECButton';
import {useDispatch} from 'react-redux';
import {removeAllFromFavorites} from './favoritesSlice';
import {useAppTheme} from '../theme';

export const FavoriteRemoveAllButton = () => {
  const {
    colors: {backgroundColor},
    buttons: {primaryButtonContained},
  } = useAppTheme();
  const dispatch = useDispatch();
  return (
    <View style={[styles.button, {backgroundColor: backgroundColor}]}>
      <ECButton
        mode="outlined"
        variant={primaryButtonContained}
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
  },
});
