import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../../components/ECStatusBar';
import {EditProfileAvatar} from './EditProfileAvatar';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {EditProfileItem} from './EditProfiltem';
import {EditProfilePushNotification} from './EditProfilePushNotification';
import {DeleceAccountButton} from './DeleceAccountButton';
import {ECHeader} from '../../components/Header/ECHeader';
import {useAppTheme} from '../../theme';
import {useTranslation} from 'react-i18next';

export const EditProfileScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  const {t} = useTranslation('account');
  const user = useSelector((state: RootState) => state.signIn.loggedUser);
  const theme = useSelector((state: RootState) => state.theme.appTheme);
  const language = useSelector(
    (state: RootState) => state.language.languageName,
  );

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle={t('editProfile')} />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.wrapper}>
        <EditProfileAvatar name={user.firstName} lastName={user.lastName} />
        <EditProfileItem
          label={t('email')}
          value={user.email}
          navigateTo="ChangeEmail"
          icon="ios-pencil-outline"
        />
        <EditProfileItem
          label={t('password')}
          value={'******************'}
          navigateTo="ChangePassword"
          icon="ios-pencil-outline"
        />
        <EditProfileItem
          label={t('language')}
          value={t(language.toLowerCase())}
          navigateTo="ChangeLanguage"
          icon="chevron-forward-outline"
        />
        <EditProfileItem
          label={t('theme')}
          value={theme === 'LIGHT' ? t('lightTheme') : t('darkTheme')}
          navigateTo="ChangeTheme"
          icon="chevron-forward-outline"
        />
        <EditProfilePushNotification />
        <DeleceAccountButton />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
});
