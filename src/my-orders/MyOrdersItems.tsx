import {View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {MyOrdersItem} from './MyOrdersItem';
import {myOrdersThunk} from './myOrdersSlice';
import {Loading} from '../components/Loading';
import {MyOrderNoItem} from './MyOrderNoItem';

export const MyOrdersItems = () => {
  const user = useSelector((state: RootState) => state.signIn.loggedUser);
  const myOrders = useSelector((state: RootState) => state.myOrders.myOrders);
  const isLoading = useSelector((state: RootState) => state.myOrders.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myOrdersThunk({id: +user.id}));
  }, [dispatch, user.id]);

  if (isLoading === 'succeeded' && myOrders.length <= 0) {
    return <MyOrderNoItem />;
  }

  return (
    <View>
      {isLoading === 'pending' ? <Loading /> : null}
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
    </View>
  );
};
