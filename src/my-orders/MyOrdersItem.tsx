/* eslint-disable radix */
import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../components/ECText';
import {format} from 'date-fns';
import {useAppTheme} from '../theme';

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
  const {
    colors: {cartImageBackgroundColor, primaryTextColor},
  } = useAppTheme();
  const orderItems = JSON.parse(items);

  const date = created.split(' ').join('T');
  const timestamp = format(Date.parse(date), 'dd.MM.yyyy HH:mm');

  return (
    <View
      style={[styles.container, {backgroundColor: cartImageBackgroundColor}]}>
      <ECText fontSize={17} textColor={primaryTextColor}>
        {timestamp}
      </ECText>
      <ECText fontSize={17} textColor={primaryTextColor}>
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
              <ECText
                fontSize={15}
                textColor={primaryTextColor}
                style={styles.title}>
                {item.title}
              </ECText>
              <View style={styles.quantity}>
                <ECText textColor={primaryTextColor} fontSize={15}>
                  Quantity: {item.cartQuantity}
                </ECText>
                <ECText textColor={primaryTextColor} fontSize={15}>
                  Price: {(parseInt(item.cartQuantity) * item.price).toString()}
                  $
                </ECText>
              </View>
            </View>
          );
        },
      )}
      <ECText fontSize={17} textColor={primaryTextColor} style={styles.price}>
        Total Price: {price}$
      </ECText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 340,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
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
