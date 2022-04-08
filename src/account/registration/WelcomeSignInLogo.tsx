import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {ECText} from '../../components/ECText';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';

const imagePath = require('../../../assets/images/welcomeLogo.png');

const {primaryTextColor} = ECOMMERCE_THEME.colors;

const WelcomeSignInLogo = () => {
  return (
    <View style={styles.container}>
      <ECText fontSize={30} textColor={primaryTextColor}>
        ECOMMERCE
      </ECText>
      <Image source={imagePath} style={styles.image} />
    </View>
  );
};

export default WelcomeSignInLogo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 80,
    marginLeft: 20,
  },
});
