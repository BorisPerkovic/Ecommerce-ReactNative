import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

export const MyOrders = () => {
  const {navigate} = useNavigation();
  const orders = useSelector((state: RootState) => state.myOrders.myOrders);
  const user = useSelector((state: RootState) => state.signIn.loggedUser);
  const myOrders = orders.filter(order => order.user.email === user.email);
  console.log('orders', orders);

  console.log('myOrders', myOrders);

  return (
    <View style={styles.container}>
      {myOrders.map(item => {
        return <Text>{item.user.email}</Text>;
      })}

      <Button
        title="Home"
        onPress={() => {
          navigate('Home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
