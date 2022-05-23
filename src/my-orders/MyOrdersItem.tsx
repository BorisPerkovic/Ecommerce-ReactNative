/* eslint-disable radix */
import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../components/ECText';
import {format} from 'date-fns';

interface MyOrderItemProps {
  orderNumber: number;
  created: string;
  items: string;
  price: number;
}

export const MyOrdersItem: FunctionComponent<MyOrderItemProps> = ({
  orderNumber,
  created,
  items,
  price,
}) => {
  const orderItems = JSON.parse(items);

  const date = created.split(' ').join('T');
  const timestamp = format(Date.parse(date), 'dd.MM.yyyy HH:mm');

  return (
    <View style={styles.container}>
      <ECText fontSize={17} textColor={'#004666'}>
        {timestamp}
      </ECText>
      <ECText fontSize={17} textColor={'#004666'}>
        Order number: #{orderNumber}
      </ECText>
      {orderItems.map(
        (item: {
          title: React.Key | null | undefined;
          cartQuantity: string;
          price: number;
        }) => {
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
                  Price: {(parseInt(item.cartQuantity) * item.price).toString()}
                  $
                </ECText>
              </View>
            </View>
          );
        },
      )}
      <ECText fontSize={17} textColor={'#004666'} style={styles.price}>
        Total Price: {price}$
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
