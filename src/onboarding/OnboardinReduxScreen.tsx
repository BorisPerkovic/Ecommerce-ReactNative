import React from 'react';
import {StyleSheet, Dimensions, View, Image} from 'react-native';
import {ECText} from '../components/ECText';
import {useAppTheme} from '../theme';
import {MyStatusBar} from '../components/ECStatusBar';
import {ECButton} from '../components/button/ECButton';
import {useNavigation} from '@react-navigation/native';

export const OnboardingReduxScreen = () => {
  const {
    buttons: {primaryButtonContained},
  } = useAppTheme();
  const {navigate} = useNavigation();
  return (
    <View style={styles.root}>
      <MyStatusBar />
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../../assets/images/redux_logo.png')}
              style={styles.image}
            />
          </View>
          <ECText
            bold
            fontSize={Dimensions.get('window').height < 800 ? 30 : 40}
            textAlign="center">
            Redux Toolkit
          </ECText>
          <ECText
            fontSize={Dimensions.get('window').height < 800 ? 16 : 18}
            textAlign="center"
            style={styles.description}>
            The Redux Toolkit package is intended to be the standard way to
            write global state management logic. Also, it is a powerful tool for
            fetching and caching data. It is designed to simplify common cases
            for loading data in a web application, eliminating the need to
            hand-write data fetching and caching logic yourself.
          </ECText>
        </View>
        <ECButton
          mode="outlined"
          variant={primaryButtonContained}
          onPress={() => {
            navigate('OnboardingHookForm');
          }}>
          Next
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
    marginVertical: 20,
  },
});
