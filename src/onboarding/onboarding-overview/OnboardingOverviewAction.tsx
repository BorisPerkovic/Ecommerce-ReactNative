import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ECButton } from '../../components/ECButton';

export const OnboardingOverviewAction = () => {
  return (
    <ECButton buttonMode="conatined" onPress={() => {console.log("clicked")}} >
      Next
    </ECButton>
  );
};

const styles = StyleSheet.create({});
