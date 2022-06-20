import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../../components/ECText';
import {SingleProduct} from './singleProductsSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../favorites/favoritesSlice';
import {StaticRatings} from '../../components/ratings/StaticRatings';
import {useAppTheme} from '../../theme';

interface SingleProductRatingProps {
  product: SingleProduct;
}

export const SingleProductRating: FunctionComponent<
  SingleProductRatingProps
> = ({product}) => {
  const {
    colors: {primaryTextColor},
  } = useAppTheme();
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritesItems,
  );

  const isFavorite = favorites.findIndex(item => item.id === product.id);
  const ratingNumber = product.rate.toFixed(1);

  const handleAddToFavorites = (item: SingleProduct) => {
    dispatch(addToFavorites(item));
  };

  const handleRemoveFromFavorites = (item: number) => {
    dispatch(removeFromFavorites(item));
  };

  return (
    <View style={styles.favoritesWrapper}>
      <View>
        <ECText fontSize={23} bold textColor={primaryTextColor}>
          ${product.price}
        </ECText>
        <StaticRatings
          stars={parseInt(ratingNumber, 10)}
          size={18}
          starStyle={styles.stars}
        />
      </View>
      <View style={[styles.favoritesIcon, {borderColor: primaryTextColor}]}>
        {isFavorite >= 0 ? (
          <TouchableOpacity
            activeOpacity={0}
            onPress={() => handleRemoveFromFavorites(product.id)}>
            <Ionicons name="heart" size={38} color={primaryTextColor} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0}
            onPress={() => handleAddToFavorites(product)}>
            <Ionicons name="heart-outline" size={38} color={primaryTextColor} />
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
    borderRadius: 10,
  },
  stars: {
    marginTop: 10,
  },
});
