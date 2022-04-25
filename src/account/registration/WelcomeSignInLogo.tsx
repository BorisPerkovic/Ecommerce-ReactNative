import {Image, StyleSheet, View, Animated} from 'react-native';
import React from 'react';
import {ECText} from '../../components/ECText';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';
import LottieView from 'lottie-react-native';
import WelcomeAnimation from './welcomeAnimation.json';

const imagePath = require('../../../assets/images/welcomeLogo.png');

const {primaryTextColor} = ECOMMERCE_THEME.colors;

const WelcomeSignInLogo = () => {
  return (
    <View style={styles.container}>
      {/* <ECText fontSize={30} textColor={primaryTextColor}>
        ECOMMERCE
      </ECText>
      <Image source={imagePath} style={styles.image} /> */}
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
