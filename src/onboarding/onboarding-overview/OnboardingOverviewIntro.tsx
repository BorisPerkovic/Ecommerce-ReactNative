/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';

const screenWidth = Dimensions.get('window').width;

export const OnboardingOverviewIntro = () => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.image}
      source={require('../../../assets/images/overview_intro.png')}>
      <View
        style={[
          styles.textBox,
          {backgroundColor: '#004666', maxWidth: screenWidth * 0.7},
        ]}>
        <Text style={{fontWeight: 'bold', fontSize: 26, color: '#ffffff'}}>
          This is some text
        </Text>
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
