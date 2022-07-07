import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {useAppTheme} from '../theme';
import {ECButton} from '../components/button/ECButton';
import {MyStatusBar} from '../components/ECStatusBar';
import {ECText} from '../components/ECText';
import {useDispatch} from 'react-redux';
import {setIsOnboardingSeen} from './onboardingSlice';

export const OnBoardingI18NextScreen = () => {
  const {
    buttons: {primaryButtonContained},
  } = useAppTheme();
  const dispatch = useDispatch();
  return (
    <View style={styles.root}>
      <MyStatusBar />
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../../assets/images/react_i18n.png')}
              style={styles.image}
            />
          </View>
          <ECText bold fontSize={30} textAlign="center">
            React i18next
          </ECText>
          <ECText
            fontSize={Dimensions.get('window').height < 800 ? 16 : 18}
            textAlign="center"
            style={styles.description}>
            The process of translating keys is the heart of i18next, and as such
            this package should serve processes by which i18next attempts to
            translate your keys into the appropriate content for a given
            location, be it on a specific page and/or for a user in a particular
            region of the world.
          </ECText>
        </View>
        <ECButton
          mode="outlined"
          variant={primaryButtonContained}
          onPress={() => {
            dispatch(setIsOnboardingSeen());
          }}>
          Done
        </ECButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingBottom: 32,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 16,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  description: {
    lineHeight: Dimensions.get('window').height < 800 ? 24 : 28,
    marginVertical: 10,
  },
});
