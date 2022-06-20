/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
/* import LottieView from 'lottie-react-native';
import WelcomeAnimation from '../welcome-signin/welcomeAnimation.json'; */
import {useAppTheme} from '../../theme';
import {ECText} from '../../components/ECText';

const WelcomeSignInLogo = () => {
  const {
    colors: {backgroundColor, primaryTextColor},
  } = useAppTheme();
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <ECText fontSize={30} textColor={primaryTextColor}>
        Ecommerce App
      </ECText>
      <Image
        style={{width: 100, height: 100, borderRadius: 50}}
        source={require('../../../assets/images/welcomeLogo.png')}
      />
      {/* <LottieView
        source={WelcomeAnimation}
        autoPlay
        loop
        style={{width: 170, height: 170, backgroundColor: backgroundColor}}
      /> */}
    </View>
  );
};

export default WelcomeSignInLogo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});
