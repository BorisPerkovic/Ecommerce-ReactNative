import {Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {MyOrdersItem} from './MyOrdersItem';

export const MyOrdersItems = () => {
  const orders = useSelector((state: RootState) => state.myOrders.myOrders);
  const user = useSelector((state: RootState) => state.signIn.loggedUser);
  const myOrders = orders.filter(order => order.user.email === user.email);

  return (
    <View>
      {myOrders.length > 0 ? (
        myOrders.map(myOrder => {
          return (
            <MyOrdersItem
              key={myOrder.date}
              date={myOrder.date}
              items={myOrder.items}
              totalPrice={myOrder.totalPrice}
            />
          );
        })
      ) : (
        <Text>You have no orders yet.</Text>
      )}
    </View>
  );
};
