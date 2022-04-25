import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../../components/ECText';
import {SingleProductDTO} from './singleProductsSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../favorites/favoritesSlice';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';
import {StaticRatings} from '../../components/ratings/StaticRatings';

interface SingleProductRatingProps {
  product: SingleProductDTO;
}

const {singleProductTextColor, favoriteHeartBorderColor, favoriteHeartColor} =
  ECOMMERCE_THEME.colors;

export const SingleProductRating: FunctionComponent<
  SingleProductRatingProps
> = ({product}) => {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritesItems,
  );

  const isFavorite = favorites.findIndex(item => item.id === product.id);
  const ratingNumber = product.rating.rate.toFixed(1);

  const handleAddToFavorites = (item: SingleProductDTO) => {
    dispatch(addToFavorites(item));
  };

  const handleRemoveFromFavorites = (item: number) => {
    dispatch(removeFromFavorites(item));
  };

  return (
    <View style={styles.favoritesWrapper}>
      <View>
        <ECText fontSize={23} bold textColor={singleProductTextColor}>
          ${product.price}
        </ECText>
        <StaticRatings
          stars={parseInt(ratingNumber, 10)}
          size={18}
          starStyle={styles.stars}
        />
      </View>
      <View style={styles.favoritesIcon}>
        {isFavorite >= 0 ? (
          <TouchableOpacity
            activeOpacity={0}
            onPress={() => handleRemoveFromFavorites(product.id)}>
            <Ionicons name="heart" size={38} color={favoriteHeartColor} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0}
            onPress={() => handleAddToFavorites(product)}>
            <Ionicons
              name="heart-outline"
              size={38}
              color={favoriteHeartColor}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  favoritesWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  favoritesIcon: {
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: favoriteHeartBorderColor,
    borderRadius: 10,
  },
  stars: {
    marginTop: 10,
  },
});
