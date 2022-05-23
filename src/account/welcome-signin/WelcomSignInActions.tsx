import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {ECButton} from '../../components/ECButton';
import {useNavigation} from '@react-navigation/core';
import {ecommerceButtonTheme} from '../../theme/ecommerce/ecommerceButtonTheme';

const {primaryButtonContained, primaryButtonOutlined} = ecommerceButtonTheme;

export const WelcomeSignInActions: FunctionComponent<{}> = () => {
  const {navigate} = useNavigation();

  return (
    <>
      <View style={styles.buttonWrapper}>
        <ECButton
          labelColor="#FFFFFF"
          labelText="Create Account"
          buttonMode={primaryButtonContained}
          onPress={() => navigate('Registration')}
        />
      </View>
      <ECButton
        labelColor="#004666"
        labelText="Sign In With Email"
        buttonMode={primaryButtonOutlined}
        onPress={() => {
          navigate('SignIn');
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginBottom: 12,
  },
});
