/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import WelcomeAnimation from '../welcome-signin/welcomeAnimation.json';

const WelcomeSignInLogo = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={WelcomeAnimation}
        autoPlay
        loop
        style={{width: 170, height: 170}}
      />
    </View>
  );
};

export default WelcomeSignInLogo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 30,
  },
});
