import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {ECButton} from '../../components/button/ECButton';
import {useNavigation} from '@react-navigation/core';
import {useAppTheme} from '../../theme';

export const WelcomeSignInActions: FunctionComponent<{}> = () => {
  const {
    buttons: {primaryButtonContained, primaryButtonOutlined},
  } = useAppTheme();
  const {navigate} = useNavigation();

  return (
    <>
      <View style={styles.buttonWrapper}>
        <ECButton
          mode="outlined"
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
