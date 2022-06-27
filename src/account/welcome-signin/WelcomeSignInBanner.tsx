import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {ECText} from '../../components/ECText';
import {useNavigation} from '@react-navigation/core';
import {IconButton} from 'react-native-paper';
import {useAppTheme} from '../../theme';
import {useTranslation} from 'react-i18next';

const imagePath = require('../../../assets/images/overview_intro.png');

export const WelcomeSignInBanner = () => {
  const {
    colors: {welcomeBannerBackgroundColor, welcomeBannerTextColor},
  } = useAppTheme();
  const {goBack} = useNavigation();
  const {t} = useTranslation('account');

  return (
    <View style={styles.container}>
      <View style={styles.backIcon}>
        <IconButton
          icon="close"
          color={welcomeBannerBackgroundColor}
          onPress={() => goBack()}
          size={32}
        />
      </View>

      <ImageBackground
        source={imagePath}
        resizeMode="cover"
        style={styles.image}
      />
      <View
        style={[
          styles.bannerText,
          {backgroundColor: welcomeBannerBackgroundColor},
        ]}>
        <ECText
          textColor={welcomeBannerTextColor}
          style={styles.heading}
          fontSize={32}
          bold>
          {t('welcome')}
        </ECText>
        <ECText
          style={styles.bannerSmallText}
          textColor={welcomeBannerTextColor}
          fontSize={15}>
          {t('welcomeSubtitle')}
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
    opacity: 0.8,
  },
  bannerSmallText: {
    lineHeight: 20,
  },
});
