import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {ECText} from '../../components/ECText';
import {useNavigation} from '@react-navigation/core';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';
import {TouchableRipple} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const imagePath = require('../../../assets/images/overview_intro.png');

const {
  white,
  bannerImageBackgroundColor,
  iconRippleColor,
  singleProductBackIconColor,
} = ECOMMERCE_THEME.colors;

export const WelcomeSignInBanner = () => {
  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableRipple
        borderless
        style={styles.backIcon}
        rippleColor={iconRippleColor}
        accessibilityRole="button"
        onPress={() => goBack()}>
        <Ionicons name="close" size={35} color={singleProductBackIconColor} />
      </TouchableRipple>
      <ImageBackground
        source={imagePath}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.bannerText}>
        <ECText textColor={white} style={styles.heading} fontSize={32} bold>
          Welcome
        </ECText>
        <ECText style={styles.bannerSmallText} textColor={white} fontSize={15}>
          You are only a few steps away from your Ecommerce account.
        </ECText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  backIcon: {
    position: 'absolute',
    top: 2,
    left: 25,
    zIndex: 10,
    padding: 5,
    borderRadius: 50,
  },
  heading: {
    marginBottom: 8,
    lineHeight: 32,
  },
  bannerText: {
    paddingLeft: 16,
    paddingVertical: 16,
    position: 'absolute',
    bottom: 36,
    width: '80%',
    paddingRight: 30,
    backgroundColor: bannerImageBackgroundColor,
    opacity: 0.9,
  },
  bannerSmallText: {
    lineHeight: 20,
  },
});
