import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {FunctionComponent} from 'react';
import {useDispatch} from 'react-redux';
import {removeFromFavorites} from './favoritesSlice';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StaticRatings} from '../components/ratings/StaticRatings';

const {favoritesTrashColor, favoritesTrashBorderColor} = ECOMMERCE_THEME.colors;

interface FavoritesRemoveProps {
  id: number;
  ratings: number;
}

export const FavoritesRemove: FunctionComponent<FavoritesRemoveProps> = ({
  id,
  ratings,
}) => {
  const dispatch = useDispatch();

  const ratingNumber = ratings.toFixed(1);

  return (
    <View style={styles.quantityWrapper}>
      <StaticRatings
        stars={parseInt(ratingNumber, 10)}
        size={18}
        /* starStyle={styles.stars} */
      />
      <TouchableOpacity
        style={styles.quantity}
        onPress={() => {
          dispatch(removeFromFavorites(id));
        }}>
        <Ionicons name="trash" size={20} color={favoritesTrashColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  quantityWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 5,
  },
  quantity: {
    padding: 10,
    borderWidth: 1,
    borderColor: favoritesTrashBorderColor,
    borderRadius: 10,
  },
});
