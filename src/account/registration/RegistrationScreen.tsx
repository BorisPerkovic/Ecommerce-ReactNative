import {StyleSheet, View} from 'react-native';
import React from 'react';
import {RegistrationHeader} from './RegistrationHeader';
import {RegistrationItems} from './RegistrationItems';

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <RegistrationHeader />
      <RegistrationItems />
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
});
