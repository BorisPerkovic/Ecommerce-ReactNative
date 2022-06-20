import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

import {OrderLabels, useCustomStyles} from '../../util/stepper';

interface OrderStepperProps {
  position: number;
}

export const OrderStepper: FunctionComponent<OrderStepperProps> = ({
  position,
}) => {
  const customStyles = useCustomStyles();
  return (
    <View style={styles.headerContainer}>
      <StepIndicator
        stepCount={3}
        customStyles={customStyles}
        currentPosition={position}
        labels={OrderLabels}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 20,
  },
});
