import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {OnboardingOverviewIntro} from './OnboardingOverviewIntroBanner';
import {OnboardingOverviewItem} from './OnboardingOverviewItem';
import {Divider} from '../../components/Divider';
import {ECButton} from '../../components/button/ECButton';
import {useAppTheme} from '../../theme';
import SplashScreen from 'react-native-splash-screen';
import {MyStatusBar} from '../../components/ECStatusBar';
import {useNavigation} from '@react-navigation/native';

export const OnboardingOverviewScreen = () => {
  const {
    buttons: {primaryButtonContained},
  } = useAppTheme();

  const {navigate} = useNavigation();

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.root}>
      <MyStatusBar />
      <OnboardingOverviewIntro />
      <View style={styles.content}>
        <OnboardingOverviewItem label="Redux Toolkit">
          state management and data fetching
        </OnboardingOverviewItem>
        <Divider />
        <OnboardingOverviewItem label="React Hook Form">
          complete form validation
        </OnboardingOverviewItem>
        <Divider />
        <OnboardingOverviewItem label="i18next">
          translations with JSON
        </OnboardingOverviewItem>
        <ECButton
          mode="outlined"
          variant={primaryButtonContained}
          onPress={() => {
            navigate('OnboardingRedux');
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
  content: {flex: 1, paddingHorizontal: 16},
});
