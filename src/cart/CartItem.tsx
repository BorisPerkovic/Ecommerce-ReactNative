import {StyleSheet, View, Image} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../components/ECText';
import {CartQuantityItem} from './CartQuantityItem';
import {useAppTheme} from '../theme';

interface CartItemProps {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

export const CartItem: FunctionComponent<CartItemProps> = ({
  id,
  image,
  title,
  price,
  quantity,
}) => {
  const {
    colors: {primaryTextColor, cartImageBackgroundColor},
  } = useAppTheme();
  return (
    <View
      style={[
        styles.itemContainer,
        {backgroundColor: cartImageBackgroundColor},
      ]}>
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
            <ECText fontSize={16} textColor={primaryTextColor}>
              {title.slice(0, 25)}...
            </ECText>
            <ECText
              style={styles.textStyle}
              fontSize={14}
              textColor={primaryTextColor}>
              ${price}
            </ECText>
          </View>
          <CartQuantityItem quantity={quantity} id={id} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  contentWrapper: {
    marginVertical: 8,
    flexDirection: 'row',
  },
  imageWrapper: {
    width: '30%',
    height: 100,
    padding: 14,
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
