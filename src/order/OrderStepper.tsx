import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

import {labels, customStyles} from '../../util/stepper';

interface OrderStepperProps {
  position: number;
}

export const OrderStepper: FunctionComponent<OrderStepperProps> = ({
  position,
}) => {
  return (
    <View style={styles.headerContainer}>
      <StepIndicator
        stepCount={3}
        customStyles={customStyles}
        currentPosition={position}
        labels={labels}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 20,
  },
});
