import React, {FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {ECText} from '../components/ECText';
import {RootState} from '../store';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

const {sideMenuTextColor} = ECOMMERCE_THEME.colors;

export const UserGreeting: FunctionComponent<{}> = () => {
  const user = useSelector((state: RootState) => state.signIn.loggedUser);
  return (
    <>
      <ECText
        fontSize={24}
        bold
        textColor={sideMenuTextColor}
        style={styles.title}>
        {user.firstName}
      </ECText>
      <ECText
        fontSize={24}
        bold
        textColor={sideMenuTextColor}
        style={styles.title}>
        {user.lastName}
      </ECText>
    </>
  );
};

const styles = StyleSheet.create({
  title: {lineHeight: 27},
  subTitle: {lineHeight: 24},
});
