import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {ECButton} from '../../components/button/ECButton';
import {useNavigation} from '@react-navigation/core';
import {useAppTheme} from '../../theme';
import {useTranslation} from 'react-i18next';

export const WelcomeSignInActions: FunctionComponent<{}> = () => {
  const {
    buttons: {primaryButtonContained, primaryButtonOutlined},
  } = useAppTheme();
  const {navigate} = useNavigation();
  const {t} = useTranslation('account');
  return (
    <>
      <View style={styles.buttonWrapper}>
        <ECButton
          mode="outlined"
          variant={primaryButtonContained}
          onPress={() => navigate('Registration')}>
          {t('createAccount')}
        </ECButton>
      </View>
      <ECButton
        mode="outlined"
        variant={primaryButtonOutlined}
        onPress={() => navigate('SignIn')}>
        {t('signInWithEmail')}
      </ECButton>
    </>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginBottom: 12,
  },
});
