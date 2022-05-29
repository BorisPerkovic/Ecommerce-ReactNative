import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

import {RegistrationLabels, customStyles} from '../../../util/stepper';

interface RegistrationStepperProps {
  position: number;
}

export const RegistrationStepper: FunctionComponent<
  RegistrationStepperProps
> = ({position}) => {
  return (
    <View style={styles.headerContainer}>
      <StepIndicator
        stepCount={3}
        customStyles={customStyles}
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
