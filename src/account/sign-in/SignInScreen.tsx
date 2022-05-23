import {Platform, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';
import {SignInHeader} from './SignInHeader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SignInForm} from './SignInForm';

const {white} = ECOMMERCE_THEME.colors;

const height = Dimensions.get('window').height;

export const SignInScreen = () => {
  return (
    <>
      <SignInHeader />
      <KeyboardAwareScrollView
        bounces={false}
        enableOnAndroid
        showsVerticalScrollIndicator={false}
        extraHeight={Platform.OS === 'ios' ? 85 : 0}
        extraScrollHeight={height < 600 ? 16 : 32}
        keyboardOpeningTime={0}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}>
        <SignInForm />
      </KeyboardAwareScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: white,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 28,
    flexGrow: 1,
    backgroundColor: white,
  },
});
