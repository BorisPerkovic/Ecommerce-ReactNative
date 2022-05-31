import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {ECButton} from '../../components/button/ECButton';
import {useNavigation} from '@react-navigation/core';
import {ecommerceButtonTheme} from '../../theme/ecommerce/ecommerceButtonTheme';

const {primaryButtonContained, primaryButtonOutlined} = ecommerceButtonTheme;

export const WelcomeSignInActions: FunctionComponent<{}> = () => {
  const {navigate} = useNavigation();

  return (
    <>
      <View style={styles.buttonWrapper}>
        <ECButton
          mode="contained"
          variant={primaryButtonContained}
          onPress={() => navigate('Registration')}>
          Create Account
        </ECButton>
      </View>
      <ECButton
        mode="outlined"
        variant={primaryButtonOutlined}
        onPress={() => navigate('SignIn')}>
        Sign In With Email
      </ECButton>
    </>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginBottom: 12,
  },
});