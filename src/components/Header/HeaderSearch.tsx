import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

export const HeaderSearch = () => {
  return <TextInput placeholder="Search..." style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    width: '65%',
    height: '82%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#004666',
    paddingHorizontal: 10,
  },
});
