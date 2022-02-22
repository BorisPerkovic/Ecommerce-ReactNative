import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {OnboardingOverviewAction} from './OnboardingOverviewAction';
import {OnboardingOverviewIntro} from './OnboardingOverviewIntro';
import {OnboardingOverviewItem} from './OnboardingOverviewItem';
import {OnboardingOverviewItems} from './OnboardingOverviewItems';
import {Divider} from '../../components/Divider';

export const OnboardingOverviewScreen = () => {
  return (
    <View style={styles.root}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <OnboardingOverviewIntro />
      <View style={styles.content}>
        <OnboardingOverviewItems>
          <OnboardingOverviewItem itemOverviewCount={18000}>
            Some New Text
          </OnboardingOverviewItem>
          <Divider />
          <OnboardingOverviewItem itemOverviewCount={5000}>
            Some New Text
          </OnboardingOverviewItem>
          <Divider />
          <OnboardingOverviewItem itemOverviewCount={2500}>
            Some New Text
          </OnboardingOverviewItem>
        </OnboardingOverviewItems>
        <OnboardingOverviewAction
          replaceTo="OnboardingShop"
          title="Products Overview"
        />
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
