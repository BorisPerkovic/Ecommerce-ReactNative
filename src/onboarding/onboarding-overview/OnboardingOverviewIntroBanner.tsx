import {StyleSheet, View, Dimensions, ImageBackground} from 'react-native';
import React from 'react';
import {ECText} from '../../components/ECText';
import {useAppTheme} from '../../theme';

export const OnboardingOverviewIntro = () => {
  const {
    colors: {welcomeBannerBackgroundColor, welcomeBannerTextColor},
  } = useAppTheme();
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.image}
      source={require('../../../assets/images/FE.png')}>
      <View
        style={[
          styles.textBox,
          {backgroundColor: welcomeBannerBackgroundColor},
        ]}>
        <ECText fontSize={26} bold textColor={welcomeBannerTextColor}>
          React Native App
        </ECText>
        <ECText fontSize={18} textColor={welcomeBannerTextColor}>
          Welcome! Here are some of main technologies used in this App.
        </ECText>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    paddingBottom: 16,
    justifyContent: 'flex-end',
    aspectRatio: Dimensions.get('window').height < 800 ? 1.7 : 1.45,
  },
  textBox: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    opacity: 0.8,
    alignSelf: 'flex-start',
  },
});
