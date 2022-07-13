import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useAppTheme} from '../theme';
import {MyStatusBar} from '../components/ECStatusBar';
import {ECHeader} from '../components/Header/ECHeader';
import {ECText} from '../components/ECText';
import {ScrollView} from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';

export const Terms = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  const {t} = useTranslation('account');
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle={t('terms')} />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <ECText fontSize={15} style={styles.text}>
          {t('respected')},
        </ECText>
        <ECText fontSize={15} style={styles.text}>
          {t('respectedDescription')},
        </ECText>
        <ECText fontSize={15} style={styles.text}>
          {t('nonComercial')}
        </ECText>
        <ECText fontSize={15} style={styles.text}>
          {t('atention')}
        </ECText>
        <ECText fontSize={15} style={styles.text}>
          {t('literature')}:
        </ECText>
        <ECText fontSize={15} style={styles.text}>
          * React native
        </ECText>
        <ECText fontSize={15} style={styles.text}>
          * TypeScript
        </ECText>
        <ECText fontSize={15} style={styles.text}>
          * Redux Toolkit
        </ECText>
        <ECText fontSize={15} style={styles.text}>
          * React Hook Form
        </ECText>
        <ECText fontSize={15} style={styles.text}>
          * i18Next
        </ECText>
        <ECText fontSize={15} style={styles.text}>
          * Google
        </ECText>
        <ECText fontSize={15} style={styles.text}>
          * Google Translate
        </ECText>
        <ECText fontSize={15} style={styles.text}>
          * YouTube
        </ECText>
        <ECText fontSize={15} style={styles.text}>
          * StackOverFlow
        </ECText>
        <ECText fontSize={15} style={styles.text}>
          {t('contact')}
        </ECText>
        <ECText fontSize={15} style={styles.text}>
          {t('bestRegards')},
        </ECText>
        <ECText fontSize={15} style={styles.text}>
          Boris Perkovic
        </ECText>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    padding: 20,
  },
  text: {
    marginBottom: 10,
    lineHeight: 24,
  },
});
