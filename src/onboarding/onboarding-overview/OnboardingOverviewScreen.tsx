import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {OnboardingOverviewIntro} from './OnboardingOverviewIntro';
import {OnboardingOverviewItem} from './OnboardingOverviewItem';
import {OnboardingOverviewItems} from './OnboardingOverviewItems';

export const OnboardingOverviewScreen = () => {
  const {top: topInset} = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.root,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          paddingTop: topInset,
          backgroundColor: '#ffffff',
        },
      ]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <OnboardingOverviewIntro />
      <View style={styles.content}>
        <OnboardingOverviewItems>
          <OnboardingOverviewItem />
          {/* <Divider /> */}
          <OnboardingOverviewItem />
          {/* <Divider /> */}
          <OnboardingOverviewItem />
        </OnboardingOverviewItems>
        {/* <OnboardingOverviewAction /> */}
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
