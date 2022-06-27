/* eslint-disable react-native/no-inline-styles */
import React, {FunctionComponent} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

import {RegistrationLabels, useCustomStyles} from '../../../util/stepper';

interface RegistrationStepperProps {
  position: number;
}

export const RegistrationStepper: FunctionComponent<
  RegistrationStepperProps
> = ({position}) => {
  const {t} = useTranslation('account');
  const customStyles = useCustomStyles();
  return (
    <View style={styles.headerContainer}>
      <StepIndicator
        stepCount={3}
        customStyles={{...customStyles, labelFontFamily: 'Montserrat-Regular'}}
        currentPosition={position}
        labels={RegistrationLabels.map(label => t(label.toLowerCase()))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 20,
  },
});
