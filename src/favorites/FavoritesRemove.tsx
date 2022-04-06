import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../components/ECText';
import {useDispatch} from 'react-redux';
import {removeFromFavorites} from './favoritesSlice';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

const {black} = ECOMMERCE_THEME.colors;

interface FavoritesRemoveProps {
  id: number;
}

export const FavoritesRemove: FunctionComponent<FavoritesRemoveProps> = ({
  id,
}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.quantityWrapper}>
      <View style={styles.quantity}>
        <TouchableOpacity
          onPress={() => {
            dispatch(removeFromFavorites(id));
          }}>
          <ECText fontSize={17} textColor={black}>
            Remove
          </ECText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quantityWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
