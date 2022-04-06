import {StyleSheet, View, Image} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../components/ECText';
import {FavoritesRemove} from './FavoritesRemove';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

const {black, cartImageBackgroundColor, white} = ECOMMERCE_THEME.colors;

interface FavoritesItemProps {
  id: number;
  image: string;
  title: string;
  price: number;
}

export const FavoritesItem: FunctionComponent<FavoritesItemProps> = ({
  id,
  image,
  title,
  price,
}) => {
  return (
    <View style={styles.itemContainer}>
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
          <View>
            <ECText fontSize={16} textColor={black}>
              {title.slice(0, 25)}...
            </ECText>
            <ECText style={styles.textStyle} fontSize={14} textColor={black}>
              ${price}
            </ECText>
          </View>
          <FavoritesRemove id={id} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 20,
    backgroundColor: white,
  },
  contentWrapper: {
    marginVertical: 15,
    flexDirection: 'row',
  },
  imageWrapper: {
    width: '30%',
    height: 100,
    padding: 14,
    backgroundColor: cartImageBackgroundColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 22,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  infoWrapper: {
    width: '60%',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  textStyle: {
    fontWeight: '400',
    opacity: 0.6,
    marginTop: 5,
  },
});
