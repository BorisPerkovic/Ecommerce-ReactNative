import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {FunctionComponent} from 'react';
import {useDispatch} from 'react-redux';
import {removeFromFavorites} from './favoritesSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppTheme} from '../theme';

interface FavoritesRemoveProps {
  id: number;
}

export const FavoritesRemove: FunctionComponent<FavoritesRemoveProps> = ({
  id,
}) => {
  const {
    colors: {primaryTextColor},
  } = useAppTheme();
  const dispatch = useDispatch();

  return (
    <View style={styles.quantityWrapper}>
      <TouchableOpacity
        style={[styles.quantity, {borderColor: primaryTextColor}]}
        onPress={() => {
          dispatch(removeFromFavorites(id));
        }}>
        <Ionicons name="trash" size={20} color={primaryTextColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  quantityWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  quantity: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});
