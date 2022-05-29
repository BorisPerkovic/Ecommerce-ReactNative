import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {RegistrationHeader} from './RegistrationHeader';
import {RegistrationItems} from './RegistrationItems';

const RegistrationScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <RegistrationHeader />
      <RegistrationItems />
    </ScrollView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
});
