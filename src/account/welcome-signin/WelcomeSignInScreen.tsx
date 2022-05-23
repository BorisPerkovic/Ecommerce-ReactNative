import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';
import {WelcomeSignInBanner} from './WelcomeSignInBanner';
import WelcomeSignInLogo from './WelcomeSignInLogo';
import {WelcomeSignInActions} from './WelcomSignInActions';
import {MyStatusBar} from '../../components/ECStatusBar';

const {white} = ECOMMERCE_THEME.colors;

export const WelcomeSignInScreen = () => {
  return (
    <>
      <MyStatusBar backColor={'#004666'} themeStyle={'light-content'} />
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <WelcomeSignInBanner />
        </View>
        <View style={styles.signInContainer}>
          <WelcomeSignInActions />
        </View>
        <WelcomeSignInLogo />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerContainer: {
    flex: 2,
  },
  signInContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 36,
    backgroundColor: white,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
