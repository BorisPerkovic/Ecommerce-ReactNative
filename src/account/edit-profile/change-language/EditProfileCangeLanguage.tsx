import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../../../components/ECStatusBar';
import {useAppTheme} from '../../../theme';
import {Language, languages} from './languages';
import {ChangeLanguageItem} from './ChangeLanguageItem';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {ECHeader} from '../../../components/Header/ECHeader';
import {useTranslation} from 'react-i18next';
import {changeLanguage} from './changeLanguageSlice';

export const EditProfileChangeLanguage = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  const {i18n, t} = useTranslation('account');
  const selectedLanguage = useSelector(
    (state: RootState) => state.language.applanguage,
  );
  const dispatch = useDispatch();

  const {goBack} = useNavigation();

  return (
    <>
      <MyStatusBar />
      <ECHeader screenTitle={t('changeLanguage')} />
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <ScrollView bounces={false}>
          {languages.map((supportedLanguage: Language) => {
            return (
              <View key={supportedLanguage.languageTag}>
                <ChangeLanguageItem
                  language={supportedLanguage}
                  selectedLanguage={selectedLanguage}
                  flag={supportedLanguage.flag}
                  onLanguageChange={() => {
                    dispatch(
                      changeLanguage({
                        languageTag: supportedLanguage.languageTag,
                        languageName: supportedLanguage.languageLabel,
                      }),
                    );
                    i18n.changeLanguage(supportedLanguage.languageTag);
                    goBack();
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 54,
    paddingBottom: 32,
  },
});
