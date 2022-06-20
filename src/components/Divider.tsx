import React, {FunctionComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import {useAppTheme} from '../theme';

interface DividerProps {
  color?: string;
}

export const Divider: FunctionComponent<DividerProps> = ({color}) => {
  const {
    colors: {divideColor},
  } = useAppTheme();
  return (
    <View
      style={[styles.divider, {backgroundColor: color ? color : divideColor}]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {width: '100%', height: 1, marginVertical: 4},
});
