/* eslint-disable react-native/no-inline-styles */
import React, {FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

export interface ButtonProps {
  buttonMode: string;
  onPress: () => void;
}

export const ECButton: FunctionComponent<ButtonProps> = props => {
  const {children, buttonMode, onPress} = props;

  return (
    <Button
      mode={buttonMode}
      style={styles.container}
      uppercase={false}
      onPress={onPress}>
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    width: '100%',
    height: 56,
  },
  labelStyle: {
    marginVertical: 0,
    marginHorizontal: 0,
    letterSpacing: 0,
    fontSize: 15,
  },
});
