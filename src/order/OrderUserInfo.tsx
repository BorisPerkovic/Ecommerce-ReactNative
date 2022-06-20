import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {ECText} from '../components/ECText';
import {ECButton} from '../components/button/ECButton';
import {addUserToOrder} from './ordersSlice';
import {useAppTheme} from '../theme';

interface OrderLocationprops {
  position: number;
  setPosition: (num: number) => void;
}

export const OrderUserInfo: FunctionComponent<OrderLocationprops> = ({
  position,
  setPosition,
}) => {
  const {
    colors: {primaryTextColor},
    buttons: {primaryButtonContained},
  } = useAppTheme();
  const user = useSelector((state: RootState) => state.signIn.loggedUser);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ECText fontSize={16} textColor={primaryTextColor}>
        Name
      </ECText>
      <ECText
        fontSize={19}
        textColor={primaryTextColor}
        bold
        style={styles.userInfo}>
        {user.firstName}
      </ECText>
      <ECText fontSize={16} textColor={primaryTextColor}>
        Lastname
      </ECText>
      <ECText
        fontSize={19}
        textColor={primaryTextColor}
        bold
        style={styles.userInfo}>
        {user.lastName}
      </ECText>
      <ECText fontSize={16} textColor={primaryTextColor}>
        E-mail
      </ECText>
      <ECText
        fontSize={19}
        textColor={primaryTextColor}
        bold
        style={styles.userInfo}>
        {user.email}
      </ECText>
      <View style={styles.button}>
        <ECButton
          mode="outlined"
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
  container: {
    paddingHorizontal: 15,
  },
  userInfo: {
    marginTop: 5,
    marginBottom: 15,
  },
  button: {
    paddingVertical: 20,
  },
});
