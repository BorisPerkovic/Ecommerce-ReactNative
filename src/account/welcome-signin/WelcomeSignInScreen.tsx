import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WelcomeSignInBanner} from './WelcomeSignInBanner';
import WelcomeSignInLogo from './WelcomeSignInLogo';
import {WelcomeSignInActions} from './WelcomSignInActions';
import {MyStatusBar} from '../../components/ECStatusBar';
import {useAppTheme} from '../../theme';

export const WelcomeSignInScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  return (
    <>
      <MyStatusBar />
      <View style={[styles.container, {backgroundColor}]}>
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
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
