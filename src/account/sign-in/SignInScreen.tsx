import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';
import {SignInHeader} from './SignInHeader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SignInForm} from './SignInForm';

const {white} = ECOMMERCE_THEME.colors;

export const SignInScreen = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <SignInHeader />
      <KeyboardAwareScrollView
        bounces={false}
        enableOnAndroid
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}>
        <SignInForm />
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: white,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 28,
    flex: 1,
    backgroundColor: white,
  },
});
