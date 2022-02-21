import React from 'react';
import {StyleSheet} from 'react-native';
import {ECButton} from '../../components/ECButton';

export const OnboardingOverviewAction = () => {
  return (
    <ECButton
      buttonMode="contained"
      onPress={() => {
        console.log('clicked');
      }}>
      Next
    </ECButton>
  );
};

const styles = StyleSheet.create({});
