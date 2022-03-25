import React, {FunctionComponent, useMemo} from 'react';
import {View, StyleSheet} from 'react-native';

interface DividerProps {
  color?: string;
}

export const Divider: FunctionComponent<DividerProps> = ({color}) => {
  const dividerColor = useMemo(() => (color ? color : '#d8d8d8'), [color]);
  return <View style={[styles.divider, {backgroundColor: dividerColor}]} />;
};

const styles = StyleSheet.create({
  divider: {width: '100%', height: 1, marginVertical: 4},
});
