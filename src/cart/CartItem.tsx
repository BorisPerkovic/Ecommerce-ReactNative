import {StyleSheet, View, Image} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../components/ECText';
import {CartQuantityItem} from './CartQuantityItem';
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
            <ECText fontSize={16} textColor="black">
              {title.slice(0, 25)}...
            </ECText>
            <ECText fontSize={14} textColor="#ccc" bold>
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
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  contentWrapper: {
    marginVertical: 15,
    flexDirection: 'row',
  },
  imageWrapper: {
    width: '30%',
    height: 100,
    padding: 14,
    backgroundColor: '#f0f0f3',
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
});
