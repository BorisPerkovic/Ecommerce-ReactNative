import React, {FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

export interface ButtonProps {
  buttonMode: 'text' | 'outlined' | 'contained';
  contentColor: string;
  onPress: () => void;
}

export const ECButton: FunctionComponent<ButtonProps> = props => {
  const {children, buttonMode, contentColor, onPress} = props;

  return (
    <Button
      mode={buttonMode}
      style={styles.container}
      uppercase={false}
      contentStyle={[styles.contentStyle, {backgroundColor: contentColor}]}
      labelStyle={styles.labelStyle}
      onPress={onPress}>
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    width: '100%',
  },
  contentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
  },
  labelStyle: {
    marginVertical: 0,
    marginHorizontal: 0,
    letterSpacing: 0,
    fontSize: 15,
  },
});
