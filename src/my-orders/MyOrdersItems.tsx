import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {MyOrdersItem} from './MyOrdersItem';
import {myOrdersThunk} from './myOrdersSlice';
import {MyOrderNoItem} from './MyOrderNoItem';
import {ScrollView} from 'react-native-gesture-handler';

export const MyOrdersItems = () => {
  const user = useSelector((state: RootState) => state.signIn.loggedUser);
  const myOrders = useSelector((state: RootState) => state.myOrders.myOrders);
  const isLoading = useSelector((state: RootState) => state.myOrders.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myOrdersThunk({id: +user.id}));
    return () => {};
  }, [dispatch, user.id]);

  if (isLoading === 'succeeded' && myOrders.length <= 0) {
    return <MyOrderNoItem />;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.wrapper}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        {isLoading === 'pending' ? (
          <View style={styles.loader}>
            <ActivityIndicator size={'large'} color="#004666" />
          </View>
        ) : null}
        {isLoading === 'succeeded'
          ? myOrders.map(myOrder => {
              return (
                <MyOrdersItem
                  key={myOrder.id}
                  created={myOrder.created}
                  price={myOrder.price}
                  items={myOrder.items.split('\\').join('')}
                  orderNumber={myOrder.id}
                />
              );
            })
          : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  wrapper: {
    flexGrow: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
