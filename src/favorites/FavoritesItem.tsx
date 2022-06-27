/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, Image} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../components/ECText';
import {FavoritesRemove} from './FavoritesRemove';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {SingleProductNavigationType} from '../products/ProductsCard';
import {useAppTheme} from '../theme/theme';
import {StaticRatings} from '../components/ratings/StaticRatings';

interface FavoritesItemProps {
  id: number;
  image: string;
  title: string;
  price: number;
  ratings: number;
}

export const FavoritesItem: FunctionComponent<FavoritesItemProps> = ({
  id,
  image,
  title,
  price,
  ratings,
}) => {
  const {
    colors: {cartImageBackgroundColor, iconRippleColor, primaryTextColor},
  } = useAppTheme();
  const {navigate} = useNavigation<SingleProductNavigationType>();

  return (
    <TouchableRipple
      borderless
      rippleColor={iconRippleColor}
      accessibilityRole="button"
      style={[
        styles.itemContainer,
        {backgroundColor: cartImageBackgroundColor},
      ]}
      onPress={() => {
        navigate('SingleProduct', {productId: id});
      }}>
      <View style={styles.contentWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.infoWrapper}>
          <View style={{alignItems: 'flex-start'}}>
            <ECText fontSize={16} textColor={primaryTextColor}>
              {title.slice(0, 15)}...
            </ECText>
            <ECText
              style={styles.textStyle}
              fontSize={14}
              textColor={primaryTextColor}>
              ${price}
            </ECText>
            <View style={styles.ratings}>
              <StaticRatings stars={+ratings.toFixed(1)} size={18} />
            </View>
          </View>
          <FavoritesRemove id={id} />
        </View>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: '93%',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 5,
  },
  contentWrapper: {
    flexDirection: 'row',
  },
  imageWrapper: {
    width: '25%',
    height: 100,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  image: {
    width: '100%',
    height: '90%',
    resizeMode: 'contain',
  },
  infoWrapper: {
    width: '65%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  ratings: {
    marginTop: 10,
  },
  textStyle: {
    fontWeight: '400',
    opacity: 0.6,
    marginTop: 5,
  },
});
