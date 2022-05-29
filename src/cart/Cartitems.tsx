import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {CartItem} from './CartItem';
import {CartNoItems} from './CartNoItems';
import CartOrderInfo from './CartOrderInfo';
import {getTotals} from './cartSlice';

export const Cartitems = () => {
  const cartItem = useSelector((state: RootState) => state.cart.cartItems);
  const cartTotal = useSelector(
    (state: RootState) => state.cart.cartTotalAmmount,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cartItem]);

  return (
    <>
      {cartItem.length > 0 ? (
        <>
          {cartItem.map(item => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                image={item.image}
                price={item.price * item.cartQuantity}
                quantity={item.cartQuantity}
                title={item.title}
              />
            );
          })}
          <CartOrderInfo cartTotal={cartTotal} />
        </>
      ) : (
        <CartNoItems />
      )}
    </>
  );
};
