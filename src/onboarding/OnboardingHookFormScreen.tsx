import React from 'react';
import {StyleSheet, Dimensions, View, Image} from 'react-native';
import {ECText} from '../components/ECText';
import {MyStatusBar} from '../components/ECStatusBar';
import {useAppTheme} from '../theme';
import {useNavigation} from '@react-navigation/native';
import {ECButton} from '../components/button/ECButton';

export const OnboardingHookFormScreen = () => {
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
              source={require('../../assets/images/hook_form.png')}
              style={styles.image}
            />
          </View>
          <ECText bold fontSize={30} textAlign="center">
            React Hook Form
          </ECText>
          <ECText
            fontSize={Dimensions.get('window').height < 800 ? 16 : 18}
            textAlign="center"
            style={styles.description}>
            Intuitive, feature-complete API providing a seamless experience to
            developers when building forms. Since form state is inherently
            local, it can be easily adopted without other dependencies.
          </ECText>
        </View>
        <ECButton
          mode="outlined"
          variant={primaryButtonContained}
          onPress={() => {
            navigate('Onboardingi18Next');
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
    marginVertical: 10,
  },
});
