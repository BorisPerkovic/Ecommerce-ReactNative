import React, {FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';
import {ECText} from '../components/ECText';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

interface GuestGreetingProps {}

const {sideMenuTextColor} = ECOMMERCE_THEME.colors;

export const GuestGreeting: FunctionComponent<GuestGreetingProps> = () => {
  return (
    <>
      <ECText
        fontSize={24}
        bold
        textColor={sideMenuTextColor}
        style={styles.title}>
        Hi There!
      </ECText>
      <ECText
        fontSize={15}
        textColor={sideMenuTextColor}
        style={styles.subTitle}>
        Sign in to start your shopping travel.
      </ECText>
    </>
  );
};

const styles = StyleSheet.create({
  title: {lineHeight: 27},
  subTitle: {lineHeight: 24},
});
