import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useAppTheme} from '../theme';
import {MyStatusBar} from '../components/ECStatusBar';
import {ECHeader} from '../components/Header/ECHeader';
import {FeedbackForm} from './FeedbackForm';
import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native-gesture-handler';

export const FeedbackScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  const {t} = useTranslation('account');
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <MyStatusBar />
      <View style={styles.content}>
        <ECHeader screenTitle={t('appFeedback')} />
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.formWrapper}>
          <FeedbackForm />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
  },
  formWrapper: {
    flexGrow: 1,
  },
});
