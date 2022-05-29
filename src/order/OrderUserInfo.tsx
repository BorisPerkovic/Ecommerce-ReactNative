import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {ECText} from '../components/ECText';
import {ECButton} from '../components/button/ECButton';
import {ecommerceButtonTheme} from '../theme/ecommerce/ecommerceButtonTheme';
import {addUserToOrder} from './ordersSlice';

interface OrderLocationprops {
  position: number;
  setPosition: (num: number) => void;
}

const {primaryButtonContained} = ecommerceButtonTheme;

export const OrderUserInfo: FunctionComponent<OrderLocationprops> = ({
  position,
  setPosition,
}) => {
  const user = useSelector((state: RootState) => state.signIn.loggedUser);
  const dispatch = useDispatch();

  return (
    <View>
      <ECText fontSize={16} textColor="#4C5356">
        Name
      </ECText>
      <ECText fontSize={19} textColor="#000000" style={styles.userInfo}>
        {user.firstName}
      </ECText>
      <ECText fontSize={16} textColor="#4C5356">
        Lastname
      </ECText>
      <ECText fontSize={19} textColor="#000000" style={styles.userInfo}>
        {user.lastName}
      </ECText>
      <ECText fontSize={16} textColor="#4C5356">
        E-mail
      </ECText>
      <ECText fontSize={19} textColor="#000000" style={styles.userInfo}>
        {user.email}
      </ECText>
      <View style={styles.button}>
        <ECButton
          mode="contained"
          variant={primaryButtonContained}
          onPress={() => {
            dispatch(
              addUserToOrder({
                name: user.firstName,
                lastName: user.lastName,
                email: user.email,
              }),
            );
            setPosition(position + 1);
          }}>
          Next
        </ECButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfo: {
    marginTop: 5,
    marginBottom: 15,
  },
  button: {
    paddingVertical: 20,
  },
});
