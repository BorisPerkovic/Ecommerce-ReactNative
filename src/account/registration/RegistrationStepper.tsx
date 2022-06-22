/* eslint-disable react-native/no-inline-styles */
import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

import {RegistrationLabels, useCustomStyles} from '../../../util/stepper';

interface RegistrationStepperProps {
  position: number;
}

export const RegistrationStepper: FunctionComponent<
  RegistrationStepperProps
> = ({position}) => {
  const customStyles = useCustomStyles();
  return (
    <View style={styles.headerContainer}>
      <StepIndicator
        stepCount={3}
        customStyles={{...customStyles, labelFontFamily: 'Montserrat-Regular'}}
        currentPosition={position}
        labels={RegistrationLabels}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 20,
  },
});
