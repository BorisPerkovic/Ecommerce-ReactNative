import React, {FunctionComponent} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

export const OnboardingOverviewItems: FunctionComponent = ({children}) => {
  return <View style={styles.root}>{children}</View>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginVertical: Dimensions.get('window').height < 800 ? 20 : 40,
  },
});
