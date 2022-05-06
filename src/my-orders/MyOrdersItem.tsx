/* eslint-disable radix */
import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../components/ECText';

interface ItemsProps {
  cartQuantity: string;
  title: string;
  description: string;
  id: number;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  price: number;
}

interface MyOrderItemProps {
  date: string;
  items: ItemsProps[];
  totalPrice: number;
}

export const MyOrdersItem: FunctionComponent<MyOrderItemProps> = ({
  date,
  items,
  totalPrice,
}) => {
  return (
    <View style={styles.container}>
      <ECText fontSize={17} textColor={'#004666'}>
        {date}
      </ECText>
      {items.map(item => {
        return (
          <View key={item.title}>
            <ECText fontSize={15} textColor={'#004666'} style={styles.title}>
              {item.title}
            </ECText>
            <View style={styles.quantity}>
              <ECText textColor={'#004666'} fontSize={15}>
                Quantity: {item.cartQuantity}
              </ECText>
              <ECText textColor={'#004666'} fontSize={15}>
                Price: {(parseInt(item.cartQuantity) * item.price).toString()}$
              </ECText>
            </View>
          </View>
        );
      })}
      <ECText fontSize={17} textColor={'#004666'} style={styles.price}>
        Total Price: {totalPrice}$
      </ECText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 7,
    borderWidth: 1,
    borderColor: '#f0f0f3',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f3',
  },
  title: {
    marginTop: 5,
  },
  quantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    marginTop: 10,
  },
});
