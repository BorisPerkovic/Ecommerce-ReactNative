import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useAppTheme} from '../theme';
import {MyStatusBar} from '../components/ECStatusBar';
import {ECHeader} from '../components/Header/ECHeader';
import {FeedbackForm} from './FeedbackForm';
import {useTranslation} from 'react-i18next';

export const FeedbackScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  const {t} = useTranslation('account');
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle={t('appFeedback')} />
      <View style={styles.wrapper}>
        <FeedbackForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  wrapper: {
    flexGrow: 1,
  },
});
