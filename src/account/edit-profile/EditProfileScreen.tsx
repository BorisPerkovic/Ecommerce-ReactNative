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

export const EditProfileScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  const user = useSelector((state: RootState) => state.signIn.loggedUser);
  const theme = useSelector((state: RootState) => state.theme.appTheme);

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle="Edit Profile" />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.wrapper}>
        <EditProfileAvatar name={user.firstName} lastName={user.lastName} />
        <EditProfileItem
          label="Email"
          value={user.email}
          navigateTo="ChangeEmail"
          icon="ios-pencil-outline"
        />
        <EditProfileItem
          label="Password"
          value={'******************'}
          navigateTo="ChangePassword"
          icon="ios-pencil-outline"
        />
        <EditProfileItem
          label="Language"
          value={'English'}
          navigateTo="ChangeLanguage"
          icon="chevron-forward-outline"
        />
        <EditProfileItem
          label="Theme"
          value={theme === 'LIGHT' ? 'Light Theme' : 'Dark Theme'}
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
